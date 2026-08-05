module View exposing (..)

import Component.Icon as Icon
import Html exposing (..)
import Html.Attributes as Attr exposing (..)
import Route
import Util


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
        [ class "border-r border-white border-opacity-20 bg-black"
        , class "flex min-h-screen w-full max-w-full flex-col gap-x-px text-white sm:flex-row-reverse"
        ]
        [ div [ class "flex-grow-[99999]" ] [ pageContent ]

        -- , navbar
        , sidebar
        ]


navbar : Html msg
navbar =
    let
        routes =
            [ "events", "chats", "activities", "calendar" ]
    in
    nav [ class "sticky top-0 z-10 flex max-h-full w-full flex-col" ]
        [ div [ class "flex-none border-b border-white border-opacity-20 bg-black bg-opacity-70 backdrop-blur-lg" ]
            [ div [ class "mx-auto max-w-7xl sm:px-4 lg:px-8" ]
                [ div [ class "flex h-16 justify-between" ]
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
        [ href <| Route.toString Route.Index
        , class "group flex w-16 flex-shrink-0 items-center justify-center gap-2 text-neutral-300 hover:text-white focus:text-transparent sm:w-auto"
        ]
        [ img
            [ src "/logo.svg"
            , alt ""
            , class "w-8 transform transition hover:scale-110 group-focus:scale-110"
            ]
            []
        , span [ class "hidden bg-gradient-to-tl from-rose-500 to-fuchsia-500 bg-clip-text text-base font-bold transition hover:text-transparent focus:text-transparent md:inline" ]
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
                , class "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium capitalize opacity-50 target:border-fuchsia-500 target:opacity-90 hover:border-neutral-300 hover:opacity-70 focus:border-current focus:text-fuchsia-500 focus:opacity-90"
                ]
                [ text r ]
        )
        >> div [ class "relative z-10 hidden lg:ml-6 lg:flex lg:space-x-8" ]


searchBar : Html msg
searchBar =
    Html.form
        [ action "/events/"
        , class "relative z-10 flex flex-1 items-center justify-center sm:px-2 lg:ml-6 lg:justify-end"
        ]
        [ div
            [ class "w-full max-w-lg lg:max-w-xs"
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
                    [ class "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    ]
                    [ Icon.solidSearch
                    ]
                , input
                    [ id "search"
                    , name "search"
                    , class "block w-full rounded-md border border-white border-opacity-30 bg-neutral-900 bg-opacity-10 py-2 pl-10 pr-3 leading-5"
                    , class "placeholder-neutral-500 focus:border-fuchsia-500 focus:bg-opacity-100 focus:placeholder-neutral-400 focus:ring-1 focus:ring-fuchsia-500 sm:text-sm"
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
                [ href <| Route.toString Route.Auth
                , class "relative inline-flex flex-shrink-0 items-center self-center rounded-md border border-white border-opacity-50 from-rose-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white opacity-60 transition"
                , class "hover:border-fuchsia-500 hover:bg-gradient-to-tl hover:text-opacity-100 hover:opacity-100"
                , class "focus:border-fuchsia-500 focus:bg-gradient-to-l focus:text-opacity-100 focus:opacity-100 focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-black"
                ]
                [ text "Account" ]
            ]

        else
            [ button
                [ type_ "button"
                , class "flex-shrink-0 rounded-full bg-neutral-900 p-1 opacity-40 ring-fuchsia-500 ring-offset-neutral-900 hover:opacity-50 focus:ring-2 focus:ring-offset-2"
                ]
                [ span
                    [ class "sr-only"
                    ]
                    [ text "View notifications" ]
                , Icon.outlineBell
                ]
            , {- Profile dropdown -}
              details
                [ class "relative ml-4 flex-shrink-0 cursor-pointer"
                ]
                [ summary
                    [ class "flex rounded-full bg-neutral-900 text-sm ring-fuchsia-500 ring-offset-neutral-900 focus:ring-2 focus:ring-offset-2"
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
                    [ class "absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-neutral-900 py-1 shadow-lg ring-1 ring-white ring-opacity-5"
                    , attribute "role" "menu"
                    , attribute "aria-orientation" "vertical"
                    , attribute "aria-labelledby" "user-menu-button"
                    , tabindex -1
                    ]
                    [ {- Active: "bg-opacity-10", Not Active: "" -}
                      a
                        [ href <| Route.toString Route.Index
                        , class "block px-4 py-2 text-sm opacity-70"
                        , attribute "role" "menuitem"
                        , tabindex -1
                        , id "user-menu-item-0"
                        ]
                        [ text "Your Profile" ]
                    , a
                        [ href <| Route.toString Route.Index
                        , class "block px-4 py-2 text-sm opacity-70"
                        , attribute "role" "menuitem"
                        , tabindex -1
                        , id "user-menu-item-1"
                        ]
                        [ text "Settings" ]
                    , a
                        [ href <| Route.toString Route.Index
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
    details [ class "group contents lg:hidden" ]
        [ summary [ class "flex w-16 flex-none items-center justify-center" ]
            [ div
                [ class "group-open:pointer-events-auto group-open:flex group-open:bg-opacity-90 group-open:backdrop-blur-md"
                , class "pointer-events-none absolute right-0 top-0 h-screen w-full bg-black bg-opacity-0 transition"
                ]
                []
            , div
                [ class "relative inline-flex items-center justify-center rounded-md p-2 opacity-40 hover:bg-opacity-10 hover:opacity-50 group-open:ring-2 group-open:ring-inset group-open:ring-fuchsia-500"
                , class "rounded-md border border-white border-opacity-30"
                ]
                [ span [ class "sr-only" ] [ text "Toggle main menu" ]
                , div [ class "flex group-open:hidden" ] [ Icon.outlineMenu ]
                , div [ class "relative hidden group-open:flex" ] [ Icon.outlineX ]
                ]
            ]
        , div
            [ class "absolute right-0 top-full z-20 mx-4 rounded-lg bg-neutral-900" ]
            [ List.map
                (\path ->
                    a
                        [ href ("/" ++ path ++ "#" ++ path)
                        , class "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium capitalize opacity-60 hover:border-neutral-300 hover:bg-neutral-50 hover:opacity-80"
                        ]
                        [ text path ]
                )
                routes
                |> div [ class "relative space-y-1 pb-3 pt-2" ]
            , div
                [ class "border-t border-neutral-800 pb-3 pt-4"
                ]
              <|
                if True then
                    [ div [ class "mx-4 flex justify-center" ]
                        [ a
                            [ href <| Route.toString Route.Auth
                            , class "relative inline-flex flex-shrink-0 items-center self-center rounded-md border border-white border-opacity-50 from-rose-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white opacity-60 transition"
                            , class "hover:border-fuchsia-500 hover:bg-gradient-to-tl hover:text-opacity-100 hover:opacity-100"
                            , class "focus:border-fuchsia-500 focus:bg-gradient-to-l focus:text-opacity-100 focus:opacity-100 focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-black"
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
                            , class "ml-auto flex-shrink-0 rounded-full bg-neutral-900 p-1 opacity-40 hover:opacity-50 focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2"
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
                            [ href <| Route.toString Route.Index
                            , class "block px-4 py-2 text-base font-medium opacity-50 hover:bg-opacity-10 hover:opacity-80"
                            ]
                            [ text "Your Profile" ]
                        , a
                            [ href <| Route.toString Route.Index
                            , class "block px-4 py-2 text-base font-medium opacity-50 hover:bg-opacity-10 hover:opacity-80"
                            ]
                            [ text "Settings" ]
                        , a
                            [ href <| Route.toString Route.Index
                            , class "block px-4 py-2 text-base font-medium opacity-50 hover:bg-opacity-10 hover:opacity-80"
                            ]
                            [ text "Sign out" ]
                        ]
                    ]
            ]
        ]


sidebar : Html msg
sidebar =
    footer
        [ class "min-w-max sm:h-screen sm:w-auto sm:max-w-[4rem] sm:flex-col lg:min-w-[auto] lg:max-w-sm"
        , class "sticky inset-0 flex w-full justify-between overflow-x-auto overflow-y-hidden sm:overflow-hidden"
        , class "bg-neutral-900 bg-opacity-75 ring-1 ring-neutral-800 backdrop-blur"
        , class "text-opacity-70 hover:text-opacity-100"
        ]
        [ [ ( Icon.outlineHome, "Dashboard", "/events/" )
          , ( Icon.outlineUserGroup, "Chats", "/chats/" )
          , ( Icon.outlineCalendar, "Calendar", "#" )
          , ( Icon.outlineSearchCircle, "Directory", "#" )
          , ( Icon.outlineSpeakerphone, "Notifications", "#" )
          , ( Icon.outlineMap, "Office Map", "#" )
          ]
            |> List.map
                (\( icon, txt, url ) ->
                    a
                        [ href url
                        , class "flex h-16 items-center gap-x-4 p-5 text-sm font-medium lg:py-3"
                        , class "group bg-white bg-opacity-0 transition hover:scale-105 focus:bg-opacity-5 active:scale-95"
                        ]
                        [ span
                            [ class "flex flex-shrink-0 flex-grow justify-center text-2xl opacity-40 transition ease-out"
                            , class "group-hover:text-rose-500 group-hover:opacity-100 group-active:text-white"
                            ]
                            [ icon ]
                        , span
                            [ class "hidden w-28 grow-[99999] opacity-60 transition ease-out lg:inline"
                            , class "group-hover:text-fuchsia-500 group-hover:opacity-100 group-active:text-white"
                            ]
                            [ text txt ]
                        ]
                )
            |> (::)
                (a
                    [ href <| Route.toString Route.Index
                    , class "group"
                    , class "flex h-16 items-center overflow-hidden p-3 transition ease-out hover:scale-105 active:scale-95 sm:h-32"
                    ]
                    [ span
                        [ class "flex h-[1.5em] flex-wrap items-center gap-y-64 text-2xl font-bold transition ease-out sm:text-3xl lg:mr-6"
                        , class "text-neutral-300 group-hover:text-transparent group-focus:text-transparent group-focus:text-white group-active:bg-gradient-to-t"
                        , class "bg-gradient-to-tl from-rose-500 to-fuchsia-500 bg-clip-text transition"
                        ]
                        [ img
                            [ src "/logo.svg"
                            , alt ""
                            , class "ml-4 scale-125 transition sm:m-2"
                            , class "icon"
                            ]
                            []
                        , span [ class "text-[0] lg:text-base" ] [ text "Flamingle" ]
                        , span [ class "text-[0] lg:text-base" ] [ text "Social" ]
                        , span [ class "text-[0] lg:text-base" ] [ text ".com" ]
                        ]
                    ]
                )
            |> nav
                [ class "sticky top-0 flex flex-none sm:flex-col"
                , attribute "aria-label" "Sidebar"
                ]
        , a
            [ href <| Route.toString Route.Auth
            , class "group sticky bottom-0 right-0 flex flex-shrink-0 sm:w-full"
            , class "border-neutral-900 bg-opacity-50 bg-gradient-to-l from-black to-transparent p-5 backdrop-blur sm:border-t"
            ]
            [ div
                [ class "flex items-center justify-around text-2xl"
                ]
                [ img
                    [ class "icon rounded-full"
                    , src "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                    , alt ""
                    ]
                    []
                , div [ class "ml-3 hidden flex-col lg:flex" ]
                    [ p [ class "h-[1.5em] overflow-hidden text-sm font-medium opacity-80" ] [ text "Whitney Francis" ]
                    , p [ class "text-xs font-medium opacity-60" ] [ text "View profile" ]
                    ]
                ]
            ]
        ]
