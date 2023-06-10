migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ai4wsfuuirrs1dy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qfcgbd71",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ai4wsfuuirrs1dy")

  // remove
  collection.schema.removeField("qfcgbd71")

  return dao.saveCollection(collection)
})
