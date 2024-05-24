/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("etv8qoummvhury4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zt9hbsf5",
    "name": "idagent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "5wib9m8qjxdp8ui",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("etv8qoummvhury4")

  // remove
  collection.schema.removeField("zt9hbsf5")

  return dao.saveCollection(collection)
})
