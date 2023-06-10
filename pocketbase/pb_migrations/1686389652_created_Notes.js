migrate((db) => {
  const collection = new Collection({
    "id": "ai4wsfuuirrs1dy",
    "created": "2023-06-10 09:34:12.479Z",
    "updated": "2023-06-10 09:34:12.479Z",
    "name": "Notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "skazjf18",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ai4wsfuuirrs1dy");

  return dao.deleteCollection(collection);
})
