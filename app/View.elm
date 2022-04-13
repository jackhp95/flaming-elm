module View exposing (..)

import Component.Icon as Icon
import Html as Html exposing (..)
import Html.Attributes as Attr exposing (..)


type alias View msg =
    { title : String
    , body : Html msg
    }


map : (msg1 -> msg2) -> View msg1 -> View msg2
map fn doc =
    { title = doc.title
    , body = Html.map fn doc.body
    }


placeholder : String -> View msg
placeholder moduleName =
    { title = "Placeholder - " ++ moduleName
    , body = Html.text moduleName
    }


pageLayout : Html msg -> Html msg
pageLayout pageContent =
    div
        [ class "bg-white min-h-screen w-full flex flex-col"
        , class "bg-black border-r border-white border-opacity-20"
        , class "min-h-screen w-full flex flex-col text-white"
        ]
        [ navbar
        , div [ class "bg-neutral-900 bg-opacity-50 flex-auto" ] [ pageContent ]
        ]


navbar : Html msg
navbar =
    let
        routes =
            [ "events", "chats", "activities", "calendar" ]
    in
    nav [ class "sticky top-0 w-full flex flex-col z-10 max-h-full" ]
        [ div [ class "border-b border-white border-opacity-20 bg-black bg-opacity-70 backdrop-blur-lg flex-none" ]
            [ div [ class "max-w-7xl mx-auto sm:px-4 lg:px-8" ]
                [ div [ class "flex justify-between h-16" ]
                    [ div [ class "relative z-10 flex sm:px-2 lg:px-0" ]
                        [ logoSection
                        , routesSection routes
                        ]
                    , searchBar
                    , mobileMenu routes
                    , accountSection
                    ]
                ]
            ]
        ]


logoSection : Html msg
logoSection =
    a
        [ href "/"
        , class "flex-shrink-0 flex items-center gap-2 w-16 sm:w-auto justify-center text-neutral-300 hover:text-white focus:text-transparent"
        ]
        [ img
            [ src "/logo.svg"
            , alt ""
            , class "w-8"
            ]
            []
        , span [ class "hidden md:inline hover:text-transparent focus:text-transparent text-base font-bold bg-clip-text bg-gradient-to-tl transition from-rose-500 to-fuchsia-500" ]
            [ text "FlamingleSocial.com" ]
        ]


routesSection : List String -> Html msg
routesSection =
    List.map
        (\r ->
            a
                [ id r
                , href <| "/" ++ r ++ "/#" ++ r

                {- Current: "border-fuchsia-500 opacity-90", Default: "border-transparent opacity-50 hover:border-neutral-300 hover:opacity-70" -}
                , class "target:border-fuchsia-500 border-transparent capitalize target:opacity-90 focus:border-current focus:text-fuchsia-500 focus:opacity-90 opacity-50 hover:border-neutral-300 hover:opacity-70 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                ]
                [ text r ]
        )
        >> div [ class "relative z-10 hidden lg:ml-6 lg:flex lg:space-x-8" ]


searchBar : Html msg
searchBar =
    Html.form
        [ action "/events/"
        , class "relative z-10 flex-1 flex items-center justify-center sm:px-2 lg:ml-6 lg:justify-end"
        ]
        [ div
            [ class "max-w-lg w-full lg:max-w-xs"
            ]
            [ label
                [ for "search"
                , class "sr-only"
                ]
                [ text "Search" ]
            , div
                [ class "relative"
                ]
                [ div
                    [ class "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    ]
                    [ Icon.solidSearch
                    ]
                , input
                    [ id "search"
                    , name "search"
                    , class "block w-full pl-10 pr-3 py-2 border border-opacity-30 border-white rounded-md leading-5 bg-neutral-900 bg-opacity-10"
                    , class "focus:bg-opacity-100 placeholder-neutral-500 focus:placeholder-neutral-400 focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
                    , Attr.placeholder "Search"
                    , type_ "search"
                    ]
                    []
                ]
            ]
        ]


accountSection : Html msg
accountSection =
    div [ class "relative z-10 hidden lg:ml-4 lg:flex lg:items-center" ] <|
        if True then
            [ a
                [ href "#"
                , class "flex-shrink-0 relative self-center inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white opacity-60 border border-white border-opacity-50 transition from-rose-500 to-fuchsia-500"
                , class "hover:opacity-100 hover:text-opacity-100 hover:border-fuchsia-500 hover:bg-gradient-to-tl"
                , class "focus:opacity-100 focus:text-opacity-100 focus:border-fuchsia-500 focus:bg-gradient-to-l focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-fuchsia-500"
                ]
                [ text "Account" ]
            ]

        else
            [ button
                [ type_ "button"
                , class "flex-shrink-0 bg-neutral-900 p-1 opacity-40 rounded-full hover:opacity-50 focus:ring-2 focus:ring-offset-2 ring-offset-neutral-900 ring-fuchsia-500"
                ]
                [ span
                    [ class "sr-only"
                    ]
                    [ text "View notifications" ]
                , Icon.outlineBell
                ]
            , {- Profile dropdown -}
              details
                [ class "ml-4 relative flex-shrink-0 cursor-pointer"
                ]
                [ summary
                    [ class "bg-neutral-900 rounded-full flex text-sm focus:ring-2 focus:ring-offset-2 ring-offset-neutral-900 ring-fuchsia-500"
                    , id "user-menu-button"
                    , attribute "aria-expanded" "false"
                    , attribute "aria-haspopup" "true"
                    ]
                    [ span [ class "sr-only" ]
                        [ text "Open user menu" ]
                    , img
                        [ class "h-8 w-8 rounded-full"
                        , src "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        , alt ""
                        ]
                        []
                    ]
                , {- Dropdown menu, show/hide based on menu state. Entering: "transition ease-out duration-100" From: "transform opacity-0 scale-95" To: "transform opacity-100 scale-100" Leaving: "transition ease-in duration-75" From: "transform opacity-100 scale-100" To: "transform opacity-0 scale-95" -}
                  div
                    [ class "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-neutral-900 ring-1 ring-white ring-opacity-5"
                    , attribute "role" "menu"
                    , attribute "aria-orientation" "vertical"
                    , attribute "aria-labelledby" "user-menu-button"
                    , tabindex -1
                    ]
                    [ {- Active: "bg-opacity-10", Not Active: "" -}
                      a
                        [ href "#"
                        , class "block px-4 py-2 text-sm opacity-70"
                        , attribute "role" "menuitem"
                        , tabindex -1
                        , id "user-menu-item-0"
                        ]
                        [ text "Your Profile" ]
                    , a
                        [ href "#"
                        , class "block px-4 py-2 text-sm opacity-70"
                        , attribute "role" "menuitem"
                        , tabindex -1
                        , id "user-menu-item-1"
                        ]
                        [ text "Settings" ]
                    , a
                        [ href "#"
                        , class "block px-4 py-2 text-sm opacity-70"
                        , attribute "role" "menuitem"
                        , tabindex -1
                        , id "user-menu-item-2"
                        ]
                        [ text "Sign out" ]
                    ]
                ]
            ]


mobileMenu : List String -> Html msg
mobileMenu routes =
    details [ class "lg:hidden contents group" ]
        [ summary [ class "flex-none w-16 justify-center flex items-center" ]
            [ div
                [ class "group-open:flex group-open:bg-opacity-90  group-open:pointer-events-auto"
                , class "pointer-events-none bg-opacity-0 absolute top-0 right-0 h-screen w-full backdrop-blur-md bg-black transition"
                ]
                []
            , div [ class "relative inline-flex items-center justify-center p-2 rounded-md opacity-40 hover:opacity-50 hover:bg-opacity-10 group-open:ring-2 group-open:ring-inset group-open:ring-fuchsia-500" ]
                [ span [ class "sr-only" ] [ text "Toggle main menu" ]
                , div [ class "group-open:hidden flex" ] [ Icon.outlineMenu ]
                , div [ class "group-open:flex hidden relative" ] [ Icon.outlineX ]
                ]
            ]
        , div
            [ class "absolute z-10 top-full right-0 bg-neutral-900 rounded-lg mx-4" ]
            [ List.map
                (\path ->
                    a
                        [ href ("/" ++ path ++ "#" ++ path)
                        , class "border-transparent opacity-60 capitalize hover:bg-neutral-50 hover:border-neutral-300 hover:opacity-80 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                        ]
                        [ text path ]
                )
                routes
                |> div [ class "relative pt-2 pb-3 space-y-1" ]
            , div
                [ class "pt-4 pb-3 border-t border-neutral-800"
                ]
              <|
                if True then
                    [ div [ class "flex justify-center mx-4" ]
                        [ a
                            [ href "#"
                            , class "flex-shrink-0 relative self-center inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white opacity-60 border border-white border-opacity-50 transition from-rose-500 to-fuchsia-500"
                            , class "hover:opacity-100 hover:text-opacity-100 hover:border-fuchsia-500 hover:bg-gradient-to-tl"
                            , class "focus:opacity-100 focus:text-opacity-100 focus:border-fuchsia-500 focus:bg-gradient-to-l focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-fuchsia-500"
                            ]
                            [ text "Account" ]
                        ]
                    ]

                else
                    [ div
                        [ class "flex items-center px-4"
                        ]
                        [ div
                            [ class "flex-shrink-0"
                            ]
                            [ img
                                [ class "h-10 w-10 rounded-full"
                                , src "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                , alt ""
                                ]
                                []
                            ]
                        , div
                            [ class "ml-3"
                            ]
                            [ div
                                [ class "text-base font-medium opacity-80"
                                ]
                                [ text "Tom Cook" ]
                            , div
                                [ class "text-sm font-medium opacity-50"
                                ]
                                [ text "tom@example.com" ]
                            ]
                        , button
                            [ type_ "button"
                            , class "ml-auto flex-shrink-0 bg-neutral-900 p-1 opacity-40 rounded-full hover:opacity-50 focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
                            ]
                            [ span
                                [ class "sr-only"
                                ]
                                [ text "View notifications" ]
                            , Icon.outlineBell
                            ]
                        ]
                    , div
                        [ class "mt-3 space-y-1"
                        ]
                        [ a
                            [ href "#"
                            , class "block px-4 py-2 text-base font-medium opacity-50 hover:opacity-80 hover:bg-opacity-10"
                            ]
                            [ text "Your Profile" ]
                        , a
                            [ href "#"
                            , class "block px-4 py-2 text-base font-medium opacity-50 hover:opacity-80 hover:bg-opacity-10"
                            ]
                            [ text "Settings" ]
                        , a
                            [ href "#"
                            , class "block px-4 py-2 text-base font-medium opacity-50 hover:opacity-80 hover:bg-opacity-10"
                            ]
                            [ text "Sign out" ]
                        ]
                    ]
            ]
        ]
