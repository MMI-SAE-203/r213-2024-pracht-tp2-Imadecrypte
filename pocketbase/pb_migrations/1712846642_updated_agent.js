/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5wib9m8qjxdp8ui")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fazsq42z",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5wib9m8qjxdp8ui")

  // remove
  collection.schema.removeField("fazsq42z")

  return dao.saveCollection(collection)
})
