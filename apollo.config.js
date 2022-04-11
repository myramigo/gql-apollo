module.exports = { 
  client: { 
    service: { 
      name: "my-graphql-app", 
      url: "http://38.242.229.113:8080/v1/graphql", 
    }, 
    includes: [
      "./src/**/*.js",
      "./src/**/*.vue"
    ], 
  } 
};