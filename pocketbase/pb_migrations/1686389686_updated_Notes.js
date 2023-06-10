migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ai4wsfuuirrs1dy")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ai4wsfuuirrs1dy")

  collection.name = "Notes"

  return dao.saveCollection(collection)
})
