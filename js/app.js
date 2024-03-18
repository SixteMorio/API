import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import PiratesCorsaires from "./piratesCorsaires.js";
import Detail from "./detail.js";

const URL_PIRATE = "https://api.atontour.org/v3/sujets/pirates/?key=VH5VA";

window.addEventListener("load", async () => {
  const parseURL = new URL(window.location.href);
  const id = parseURL.searchParams.get("id");

  if (parseURL.pathname === "/index.html" || parseURL.pathname === "/") {
    createApp({
      components: {
        PiratesCorsaires,
      },
      data() {
        return {
          url: URL_PIRATE,
        };
      },
      template: `
        <div>
          <PiratesCorsaires :url="url"></PiratesCorsaires>
        </div>
      `,
    }).mount("#app");
  } else if (parseURL.pathname === "/details.html" && id) {
    try {
      const pirate = await loadDataDetail(id);
      createApp({
        components: {
          Detail,
        },
        data() {
          return {
            pirate,
            url: URL_PIRATE,
          };
        },
        template: `
          <div>
            <Detail :url="url" :pirate="pirate"></Detail>
          </div>
        `,
      }).mount("#detail");
    } catch (error) {
      console.error(error.message);
      //window.location.href = "index.html";
    }
  } else {
    window.location.href = "index.html";
  }
});

async function loadDataDetail(id) {
  let resp = await fetch(URL_PIRATE);
  let data = await resp.json();

  let pirate = data.records.find((pirate) => pirate.id.toString() === id);
  if (!pirate) {
    throw new Error("No matching Pirate found");
  }

  return pirate;
}
