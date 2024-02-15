import engines from "../../public/engines.json";

const uniqueEngines = engines.filter(
  (engine, index, self) =>
    index === self.findIndex((t) => t.name === engine.name)
);

const mappedEngines = uniqueEngines.map((engine) => {
  return {
    image: engine.image,
    name: engine.name,
    elo: engine.elo,
    title: "v" + engine.version,
    url: engine.downloadLink,
  };
});

export default {
  load() {
    return mappedEngines;
  },
};
