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
        [ class "bg-black border-r border-white border-opacity-20"
        , class "min-h-screen w-full max-w-full flex flex-col sm:flex-row-reverse gap-x-px text-white"
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
        [ Util.asHref Route.Index
        , class "flex-shrink-0 group flex items-center gap-2 w-16 sm:w-auto justify-center text-neutral-300 hover:text-white focus:text-transparent"
        ]
        [ img
            [ src "/logo.svg"
            , alt ""
            , class "w-8 transform transition group-focus:scale-110 hover:scale-110"
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
                [ Util.asHref Route.Auth
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
                        [ Util.asHref Route.Index
                        , class "block px-4 py-2 text-sm opacity-70"
                        , attribute "role" "menuitem"
                        , tabindex -1
                        , id "user-menu-item-0"
                        ]
                        [ text "Your Profile" ]
                    , a
                        [ Util.asHref Route.Index
                        , class "block px-4 py-2 text-sm opacity-70"
                        , attribute "role" "menuitem"
                        , tabindex -1
                        , id "user-menu-item-1"
                        ]
                        [ text "Settings" ]
                    , a
                        [ Util.asHref Route.Index
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
                [ class "group-open:pointer-events-auto group-open:flex group-open:bg-opacity-90 group-open:backdrop-blur-md"
                , class "pointer-events-none bg-opacity-0 absolute top-0 right-0 h-screen w-full bg-black transition"
                ]
                []
            , div
                [ class "relative inline-flex items-center justify-center p-2 rounded-md opacity-40 hover:opacity-50 hover:bg-opacity-10 group-open:ring-2 group-open:ring-inset group-open:ring-fuchsia-500"
                , class "border border-opacity-30 border-white rounded-md"
                ]
                [ span [ class "sr-only" ] [ text "Toggle main menu" ]
                , div [ class "group-open:hidden flex" ] [ Icon.outlineMenu ]
                , div [ class "group-open:flex hidden relative" ] [ Icon.outlineX ]
                ]
            ]
        , div
            [ class "absolute z-20 top-full right-0 bg-neutral-900 rounded-lg mx-4" ]
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
                            [ Util.asHref Route.Auth
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
                            [ Util.asHref Route.Index
                            , class "block px-4 py-2 text-base font-medium opacity-50 hover:opacity-80 hover:bg-opacity-10"
                            ]
                            [ text "Your Profile" ]
                        , a
                            [ Util.asHref Route.Index
                            , class "block px-4 py-2 text-base font-medium opacity-50 hover:opacity-80 hover:bg-opacity-10"
                            ]
                            [ text "Settings" ]
                        , a
                            [ Util.asHref Route.Index
                            , class "block px-4 py-2 text-base font-medium opacity-50 hover:opacity-80 hover:bg-opacity-10"
                            ]
                            [ text "Sign out" ]
                        ]
                    ]
            ]
        ]


sidebar : Html msg
sidebar =
    footer
        [ class "sm:max-w-[4rem] sm:h-screen sm:w-auto sm:flex-col lg:max-w-sm min-w-max lg:min-w-auto"
        , class "sticky inset-0 w-full flex justify-between overflow-x-auto overflow-y-hidden sm:overflow-hidden"
        , class "bg-neutral-900 bg-opacity-75 backdrop-blur ring-1 ring-neutral-800"
        , class "hover:text-opacity-100 text-opacity-70"
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
                        , class "p-5 lg:py-3 flex h-16 gap-x-4 items-center text-sm font-medium"
                        , class "group focus:bg-opacity-5 hover:scale-105 active:scale-95 bg-white bg-opacity-0 transition"
                        ]
                        [ span
                            [ class "text-2xl transition ease-out opacity-40 flex-grow flex-shrink-0 flex justify-center"
                            , class "group-hover:opacity-100 group-hover:text-rose-500 group-active:text-white"
                            ]
                            [ icon ]
                        , span
                            [ class "w-28 transition ease-out opacity-60 grow-[99999] hidden lg:inline"
                            , class "group-hover:opacity-100 group-hover:text-fuchsia-500 group-active:text-white"
                            ]
                            [ text txt ]
                        ]
                )
            |> (::)
                (a
                    [ Util.asHref Route.Index
                    , class "group"
                    , class "p-3 flex overflow-hidden h-16 sm:h-32 sm:aspect-video items-center hover:scale-105 active:scale-95 transition ease-out"
                    ]
                    [ span
                        [ class "h-[1.5em] flex items-center flex-wrap gap-y-64 text-2xl sm:text-3xl font-bold lg:mr-6 transition ease-out"
                        , class "text-neutral-300 group-focus:text-white group-hover:text-transparent group-focus:text-transparent group-active:bg-gradient-to-t"
                        , class "bg-clip-text bg-gradient-to-tl transition from-rose-500 to-fuchsia-500"
                        ]
                        [ img
                            [ src "/logo.svg"
                            , alt ""
                            , class "ml-4 sm:m-2 transform transition scale-125"
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
                [ class "sticky top-0 flex sm:flex-col flex-none"
                , attribute "aria-label" "Sidebar"
                ]
        , a
            [ href "#"
            , class "flex-shrink-0 flex sm:w-full group sticky bottom-0 right-0"
            , class "sm:border-t border-neutral-900 p-5 bg-gradient-to-l from-black to-transparent bg-opacity-50 backdrop-blur"
            ]
            [ div
                [ class "flex justify-around items-center text-2xl"
                ]
                [ img
                    [ class "icon rounded-full"
                    , src "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                    , alt ""
                    ]
                    []
                , div [ class "ml-3 hidden lg:flex flex-col" ]
                    [ p [ class "text-sm font-medium opacity-80 h-[1.5em] overflow-hidden" ] [ text "Whitney Francis" ]
                    , p [ class "text-xs font-medium opacity-60" ] [ text "View profile" ]
                    ]
                ]
            ]
        ]
