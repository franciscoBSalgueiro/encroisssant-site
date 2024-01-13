import engines from "../../public/engines.json";

const uniqueEngines = engines.filter(
  (engine, index, self) =>
    index === self.findIndex((t) => t.name === engine.name)
);

const mappedEngines = uniqueEngines.map((engine) => {
  return {
    avatar: engine.image,
    name: engine.name,
    title: "v" + engine.version,
  };
});

export default {
  load() {
    return mappedEngines;
  },
};
