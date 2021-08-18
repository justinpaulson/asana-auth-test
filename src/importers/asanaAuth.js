const importer = aha.getImporter("aha-develop.asana-auth-test.asanaAuth");

/**
   * @param useCache force a full re-auth even if the token is already cached
   */
async function authenticate(useCache = true) {
  const authData = await aha.auth("asana", {});
  console.log("We got a token!", authData.token);
}

importer.on({ action: "listCandidates" }, async ({ filters, nextPage }, {identifier, settings}) => {
  await authenticate();
  return { records: [], nextPage: 2 };
});

//Optional
//importer.on({ action: "listFilters" }, ({}, {identifier, settings}) => {
//  return {
//    filterName: {
//      title: "Filter Name",
//      required: true,
//      type: "text",
//    },
//  };
//});

//Optional
//importer.on({ action: "filterValues" }, async ({ filterName, filters }, {identifier, settings}) => {
//  return [{ text: "Filter Text", value: "Filter Value" }];
//});

//Optional
//importer.on({ action: "renderRecord" }, ({ record, onUnmounted }, { identifier, settings }) => {
//  onUnmounted(() => {
//    console.log("Un-mounting component for", record.identifier);
//  });
//
//  return `${record.identifier} ${record.name}`;
//});

//Optional
//importer.on({ action: "importRecord" }, async ({ importRecord, ahaRecord }, {identifier, settings}) => {
//  //Import record code goes here
//});
