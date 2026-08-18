import type { StructureBuilder } from "sanity/structure";

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      // ── Restaurants (hierarchical drill-down) ───────────
      S.listItem()
        .title("Restaurants")
        .child(
          S.documentTypeList("restaurant")
            .title("Restaurants")
            .defaultOrdering([{ field: "name", direction: "asc" }])
            .child((restaurantId) =>
              S.list()
                .title("Restaurant")
                .items([
                  S.listItem()
                    .title("Edit Restaurant")
                    .child(
                      S.document()
                        .schemaType("restaurant")
                        .documentId(restaurantId)
                    ),
                  S.listItem()
                    .title("Menus")
                    .child(
                      S.documentList()
                        .title("Menus")
                        .schemaType("menu")
                        .filter(
                          '_type == "menu" && restaurant._ref == $restaurantId'
                        )
                        .params({ restaurantId })
                        .defaultOrdering([
                          { field: "menuType", direction: "asc" },
                          { field: "title", direction: "asc" },
                        ])
                        .child((menuId) =>
                          S.list()
                            .title("Menu")
                            .items([
                              S.listItem()
                                .title("Edit Menu")
                                .child(
                                  S.document()
                                    .schemaType("menu")
                                    .documentId(menuId)
                                ),
                              S.listItem()
                                .title("Dishes on this Menu")
                                .child(
                                  S.documentList()
                                    .title("Dishes")
                                    .schemaType("dish")
                                    .filter(
                                      '_type == "dish" && $menuId in menu[]._ref'
                                    )
                                    .params({ menuId })
                                    .defaultOrdering([
                                      { field: "title", direction: "asc" },
                                    ])
                                ),
                            ])
                        )
                    ),
                  S.listItem()
                    .title("All Dishes at this Restaurant")
                    .child(
                      S.documentList()
                        .title("Dishes")
                        .schemaType("dish")
                        .filter(
                          '_type == "dish" && restaurant._ref == $restaurantId'
                        )
                        .params({ restaurantId })
                        .defaultOrdering([
                          { field: "title", direction: "asc" },
                        ])
                    ),
                ])
            )
        ),

      S.divider(),

      // ── Flat lists for cross-restaurant work ──────────
      S.listItem()
        .title("All Dishes")
        .schemaType("dish")
        .child(
          S.documentTypeList("dish")
            .title("All Dishes")
            .defaultOrdering([{ field: "title", direction: "asc" }])
        ),

      S.listItem()
        .title("All Menus")
        .schemaType("menu")
        .child(
          S.documentTypeList("menu")
            .title("All Menus")
            .defaultOrdering([{ field: "title", direction: "asc" }])
        ),
    ]);
