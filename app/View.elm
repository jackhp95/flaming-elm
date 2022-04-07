module View exposing (..)

import Html as Html exposing (..)
import Html.Attributes as Attr exposing (..)
import Svg as Svg exposing (path, svg)
import Svg.Attributes as SvgAttr


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
    div [ class "bg-white" ]
        [ navbar
        , pageContent
        , foot
        ]


mobileMenu : Html msg
mobileMenu =
    {-
       Mobile menu

       Off-canvas menu for mobile, show/hide based on off-canvas menu state.
    -}
    div
        [ class "fixed inset-0 flex z-40 lg:hidden"
        , attribute "role" "dialog"
        , attribute "aria-modal" "true"
        ]
        [ {-
             Off-canvas menu overlay, show/hide based on off-canvas menu state.

             Entering: "transition-opacity ease-linear duration-300"
               From: "opacity-0"
               To: "opacity-100"
             Leaving: "transition-opacity ease-linear duration-300"
               From: "opacity-100"
               To: "opacity-0"
          -}
          div
            [ class "fixed inset-0 bg-black bg-opacity-25"
            , attribute "aria-hidden" "true"
            ]
            []
        , {-
             Off-canvas menu, show/hide based on off-canvas menu state.

             Entering: "transition ease-in-out duration-300 transform"
               From: "-translate-x-full"
               To: "translate-x-0"
             Leaving: "transition ease-in-out duration-300 transform"
               From: "translate-x-0"
               To: "-translate-x-full"
          -}
          div [ class "relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto" ]
            [ div [ class "px-4 pt-5 pb-2 flex" ]
                [ button
                    [ type_ "button"
                    , class "-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    ]
                    [ span [ class "sr-only" ] [ text "Close menu" ]
                    , {- Heroicon name: outline/x -}
                      svg
                        [ SvgAttr.class "h-6 w-6"
                        , SvgAttr.fill "none"
                        , SvgAttr.viewBox "0 0 24 24"
                        , SvgAttr.stroke "currentColor"
                        , attribute "aria-hidden" "true"
                        ]
                        [ path
                            [ SvgAttr.strokeLinecap "round"
                            , SvgAttr.strokeLinejoin "round"
                            , SvgAttr.strokeWidth "2"
                            , SvgAttr.d "M6 18L18 6M6 6l12 12"
                            ]
                            []
                        ]
                    ]
                ]
            , {- Links -}
              div [ class "mt-2" ]
                [ div [ class "border-b border-gray-200" ]
                    [ div
                        [ class "-mb-px flex px-4 space-x-8"
                        , attribute "aria-orientation" "horizontal"
                        , attribute "role" "tablist"
                        ]
                        [ {- Selected: "text-indigo-600 border-indigo-600", Not Selected: "text-gray-900 border-transparent" -}
                          button
                            [ id "tabs-1-tab-1"
                            , class "text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                            , attribute "aria-controls" "tabs-1-panel-1"
                            , attribute "role" "tab"
                            , type_ "button"
                            ]
                            [ text "Women" ]
                        , {- Selected: "text-indigo-600 border-indigo-600", Not Selected: "text-gray-900 border-transparent" -}
                          button
                            [ id "tabs-1-tab-2"
                            , class "text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                            , attribute "aria-controls" "tabs-1-panel-2"
                            , attribute "role" "tab"
                            , type_ "button"
                            ]
                            [ text "Men" ]
                        ]
                    ]
                , {- 'Women' tab panel, show/hide based on tab state. -}
                  div
                    [ id "tabs-1-panel-1"
                    , class "px-4 py-6 space-y-12"
                    , attribute "aria-labelledby" "tabs-1-tab-1"
                    , attribute "role" "tabpanel"
                    , tabindex 0
                    ]
                    [ div [ class "grid grid-cols-2 gap-x-4 gap-y-10" ]
                        [ div [ class "group relative" ]
                            [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                [ img
                                    [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                                    , alt "Models sitting back to back, wearing Basic Tee in black and bone."
                                    , class "object-center object-cover"
                                    ]
                                    []
                                ]
                            , a
                                [ href "#"
                                , class "mt-6 block text-sm font-medium text-gray-900"
                                ]
                                [ span
                                    [ class "absolute z-10 inset-0"
                                    , attribute "aria-hidden" "true"
                                    ]
                                    []
                                , text "New Arrivals"
                                ]
                            , p
                                [ attribute "aria-hidden" "true"
                                , class "mt-1 text-sm text-gray-500"
                                ]
                                [ text "Shop now" ]
                            ]
                        , div [ class "group relative" ]
                            [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                [ img
                                    [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
                                    , alt "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                                    , class "object-center object-cover"
                                    ]
                                    []
                                ]
                            , a
                                [ href "#"
                                , class "mt-6 block text-sm font-medium text-gray-900"
                                ]
                                [ span
                                    [ class "absolute z-10 inset-0"
                                    , attribute "aria-hidden" "true"
                                    ]
                                    []
                                , text "Basic Tees"
                                ]
                            , p
                                [ attribute "aria-hidden" "true"
                                , class "mt-1 text-sm text-gray-500"
                                ]
                                [ text "Shop now" ]
                            ]
                        , div [ class "group relative" ]
                            [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                [ img
                                    [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg"
                                    , alt "Model wearing minimalist watch with black wristband and white watch face."
                                    , class "object-center object-cover"
                                    ]
                                    []
                                ]
                            , a
                                [ href "#"
                                , class "mt-6 block text-sm font-medium text-gray-900"
                                ]
                                [ span
                                    [ class "absolute z-10 inset-0"
                                    , attribute "aria-hidden" "true"
                                    ]
                                    []
                                , text "Accessories"
                                ]
                            , p
                                [ attribute "aria-hidden" "true"
                                , class "mt-1 text-sm text-gray-500"
                                ]
                                [ text "Shop now" ]
                            ]
                        , div [ class "group relative" ]
                            [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                [ img
                                    [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg"
                                    , alt "Model opening tan leather long wallet with credit card pockets and cash pouch."
                                    , class "object-center object-cover"
                                    ]
                                    []
                                ]
                            , a
                                [ href "#"
                                , class "mt-6 block text-sm font-medium text-gray-900"
                                ]
                                [ span
                                    [ class "absolute z-10 inset-0"
                                    , attribute "aria-hidden" "true"
                                    ]
                                    []
                                , text "Carry"
                                ]
                            , p
                                [ attribute "aria-hidden" "true"
                                , class "mt-1 text-sm text-gray-500"
                                ]
                                [ text "Shop now" ]
                            ]
                        ]
                    ]
                , {- 'Men' tab panel, show/hide based on tab state. -}
                  div
                    [ id "tabs-1-panel-2"
                    , class "px-4 py-6 space-y-12"
                    , attribute "aria-labelledby" "tabs-1-tab-2"
                    , attribute "role" "tabpanel"
                    , tabindex 0
                    ]
                    [ div [ class "grid grid-cols-2 gap-x-4 gap-y-10" ]
                        [ div [ class "group relative" ]
                            [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                [ img
                                    [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg"
                                    , alt "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers."
                                    , class "object-center object-cover"
                                    ]
                                    []
                                ]
                            , a
                                [ href "#"
                                , class "mt-6 block text-sm font-medium text-gray-900"
                                ]
                                [ span
                                    [ class "absolute z-10 inset-0"
                                    , attribute "aria-hidden" "true"
                                    ]
                                    []
                                , text "New Arrivals"
                                ]
                            , p
                                [ attribute "aria-hidden" "true"
                                , class "mt-1 text-sm text-gray-500"
                                ]
                                [ text "Shop now" ]
                            ]
                        , div [ class "group relative" ]
                            [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                [ img
                                    [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg"
                                    , alt "Model wearing light heather gray t-shirt."
                                    , class "object-center object-cover"
                                    ]
                                    []
                                ]
                            , a
                                [ href "#"
                                , class "mt-6 block text-sm font-medium text-gray-900"
                                ]
                                [ span
                                    [ class "absolute z-10 inset-0"
                                    , attribute "aria-hidden" "true"
                                    ]
                                    []
                                , text "Basic Tees"
                                ]
                            , p
                                [ attribute "aria-hidden" "true"
                                , class "mt-1 text-sm text-gray-500"
                                ]
                                [ text "Shop now" ]
                            ]
                        , div [ class "group relative" ]
                            [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                [ img
                                    [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg"
                                    , alt "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body."
                                    , class "object-center object-cover"
                                    ]
                                    []
                                ]
                            , a
                                [ href "#"
                                , class "mt-6 block text-sm font-medium text-gray-900"
                                ]
                                [ span
                                    [ class "absolute z-10 inset-0"
                                    , attribute "aria-hidden" "true"
                                    ]
                                    []
                                , text "Accessories"
                                ]
                            , p
                                [ attribute "aria-hidden" "true"
                                , class "mt-1 text-sm text-gray-500"
                                ]
                                [ text "Shop now" ]
                            ]
                        , div [ class "group relative" ]
                            [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                [ img
                                    [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg"
                                    , alt "Model putting folded cash into slim card holder olive leather wallet with hand stitching."
                                    , class "object-center object-cover"
                                    ]
                                    []
                                ]
                            , a
                                [ href "#"
                                , class "mt-6 block text-sm font-medium text-gray-900"
                                ]
                                [ span
                                    [ class "absolute z-10 inset-0"
                                    , attribute "aria-hidden" "true"
                                    ]
                                    []
                                , text "Carry"
                                ]
                            , p
                                [ attribute "aria-hidden" "true"
                                , class "mt-1 text-sm text-gray-500"
                                ]
                                [ text "Shop now" ]
                            ]
                        ]
                    ]
                ]
            , div [ class "border-t border-gray-200 py-6 px-4 space-y-6" ]
                [ div [ class "flow-root" ]
                    [ a
                        [ href "#"
                        , class "-m-2 p-2 block font-medium text-gray-900"
                        ]
                        [ text "Company" ]
                    ]
                , div [ class "flow-root" ]
                    [ a
                        [ href "#"
                        , class "-m-2 p-2 block font-medium text-gray-900"
                        ]
                        [ text "Stores" ]
                    ]
                ]
            , div [ class "border-t border-gray-200 py-6 px-4 space-y-6" ]
                [ div [ class "flow-root" ]
                    [ a
                        [ href "#"
                        , class "-m-2 p-2 block font-medium text-gray-900"
                        ]
                        [ text "Create an account" ]
                    ]
                , div [ class "flow-root" ]
                    [ a
                        [ href "#"
                        , class "-m-2 p-2 block font-medium text-gray-900"
                        ]
                        [ text "Sign in" ]
                    ]
                ]
            , div [ class "border-t border-gray-200 py-6 px-4 space-y-6" ]
                [ {- Currency selector -}
                  Html.form []
                    [ div [ class "inline-block" ]
                        [ label
                            [ for "mobile-currency"
                            , class "sr-only"
                            ]
                            [ text "Currency" ]
                        , div [ class "-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white" ]
                            [ select
                                [ id "mobile-currency"
                                , name "currency"
                                , class "bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
                                ]
                                [ option [] [ text "CAD" ]
                                , option [] [ text "USD" ]
                                , option [] [ text "AUD" ]
                                , option [] [ text "EUR" ]
                                , option [] [ text "GBP" ]
                                ]
                            , div [ class "absolute right-0 inset-y-0 flex items-center pointer-events-none" ]
                                [ svg
                                    [ attribute "aria-hidden" "true"
                                    , SvgAttr.fill "none"
                                    , SvgAttr.viewBox "0 0 20 20"
                                    , SvgAttr.class "w-5 h-5 text-gray-500"
                                    ]
                                    [ path
                                        [ SvgAttr.stroke "currentColor"
                                        , SvgAttr.strokeLinecap "round"
                                        , SvgAttr.strokeLinejoin "round"
                                        , SvgAttr.strokeWidth "1.5"
                                        , SvgAttr.d "M6 8l4 4 4-4"
                                        ]
                                        []
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]


navbar : Html msg
navbar =
    header [ class "contents" ]
        [ nav
            [ attribute "aria-label" "Top"
            , class "contents"
            ]
            [ topNav
            , mainNav
            ]
        ]


topNav : Html msg
topNav =
    {- Top navigation -}
    div [ class "bg-gray-900" ]
        [ div [ class "max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8" ]
            [ {- Currency selector -}
              Html.form []
                [ div []
                    [ label
                        [ for "desktop-currency"
                        , class "sr-only"
                        ]
                        [ text "Currency" ]
                    , div [ class "-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white" ]
                        [ select
                            [ id "desktop-currency"
                            , name "currency"
                            , class "bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
                            ]
                            [ option [] [ text "CAD" ]
                            , option [] [ text "USD" ]
                            , option [] [ text "AUD" ]
                            , option [] [ text "EUR" ]
                            , option [] [ text "GBP" ]
                            ]
                        , div [ class "absolute right-0 inset-y-0 flex items-center pointer-events-none" ]
                            [ svg
                                [ attribute "aria-hidden" "true"
                                , SvgAttr.fill "none"
                                , SvgAttr.viewBox "0 0 20 20"
                                , SvgAttr.class "w-5 h-5 text-gray-300"
                                ]
                                [ path
                                    [ SvgAttr.stroke "currentColor"
                                    , SvgAttr.strokeLinecap "round"
                                    , SvgAttr.strokeLinejoin "round"
                                    , SvgAttr.strokeWidth "1.5"
                                    , SvgAttr.d "M6 8l4 4 4-4"
                                    ]
                                    []
                                ]
                            ]
                        ]
                    ]
                ]
            , div [ class "flex items-center space-x-6" ]
                [ a
                    [ href "#"
                    , class "text-sm font-medium text-white hover:text-gray-100"
                    ]
                    [ text "Sign in" ]
                , a
                    [ href "#"
                    , class "text-sm font-medium text-white hover:text-gray-100"
                    ]
                    [ text "Create an account" ]
                ]
            ]
        ]


mainNav : Html msg
mainNav =
    div [ class "backdrop-blur-md backdrop-filter bg-opacity-10 bg-white -mb-16 sticky top-0 z-10" ]
        [ div [ class "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mix-blend-difference" ]
            [ div [ class "h-16 flex items-center justify-between" ]
                [ {- Logo (lg+) -}
                  div [ class "hidden lg:flex-1 lg:flex lg:items-center" ]
                    [ a [ href "#" ]
                        [ span [ class "sr-only" ] [ text "Workflow" ]
                        , img
                            [ class "h-8 w-auto"
                            , src "https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                            , alt ""
                            ]
                            []
                        ]
                    ]

                -- , flyoutMenus
                , {- Mobile menu and search (lg-) -}
                  div [ class "flex-1 flex items-center lg:hidden" ]
                    [ {- Mobile menu toggle, controls the 'mobileMenuOpen' state. -}
                      button
                        [ type_ "button"
                        , class "-ml-2 p-2 text-white"
                        ]
                        [ span [ class "sr-only" ] [ text "Open menu" ]
                        , {- Heroicon name: outline/menu -}
                          svg
                            [ SvgAttr.class "h-6 w-6"
                            , SvgAttr.fill "none"
                            , SvgAttr.viewBox "0 0 24 24"
                            , SvgAttr.stroke "currentColor"
                            , attribute "aria-hidden" "true"
                            ]
                            [ path
                                [ SvgAttr.strokeLinecap "round"
                                , SvgAttr.strokeLinejoin "round"
                                , SvgAttr.strokeWidth "2"
                                , SvgAttr.d "M4 6h16M4 12h16M4 18h16"
                                ]
                                []
                            ]
                        ]
                    , {- Search -}
                      a
                        [ href "#"
                        , class "ml-2 p-2 text-white"
                        ]
                        [ span [ class "sr-only" ] [ text "Search" ]
                        , {- Heroicon name: outline/search -}
                          svg
                            [ SvgAttr.class "w-6 h-6"
                            , SvgAttr.fill "none"
                            , SvgAttr.viewBox "0 0 24 24"
                            , SvgAttr.stroke "currentColor"
                            , attribute "aria-hidden" "true"
                            ]
                            [ path
                                [ SvgAttr.strokeLinecap "round"
                                , SvgAttr.strokeLinejoin "round"
                                , SvgAttr.strokeWidth "2"
                                , SvgAttr.d "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ]
                                []
                            ]
                        ]
                    ]
                , {- Logo (lg-) -}
                  a
                    [ href "#"
                    , class "lg:hidden"
                    ]
                    [ span [ class "sr-only" ] [ text "Workflow" ]
                    , img
                        [ src "https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                        , alt ""
                        , class "h-8 w-auto"
                        ]
                        []
                    ]
                , div [ class "flex-1 flex items-center justify-end" ]
                    [ a
                        [ href "#"
                        , class "hidden text-sm font-medium text-white lg:block"
                        ]
                        [ text "Search" ]
                    , div [ class "flex items-center lg:ml-8" ]
                        [ {- Help -}
                          a
                            [ href "#"
                            , class "p-2 text-white lg:hidden"
                            ]
                            [ span [ class "sr-only" ] [ text "Help" ]
                            , {- Heroicon name: outline/question-mark-circle -}
                              svg
                                [ SvgAttr.class "w-6 h-6"
                                , SvgAttr.fill "none"
                                , SvgAttr.viewBox "0 0 24 24"
                                , SvgAttr.stroke "currentColor"
                                , attribute "aria-hidden" "true"
                                ]
                                [ path
                                    [ SvgAttr.strokeLinecap "round"
                                    , SvgAttr.strokeLinejoin "round"
                                    , SvgAttr.strokeWidth "2"
                                    , SvgAttr.d "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ]
                                    []
                                ]
                            ]
                        , a
                            [ href "#"
                            , class "hidden text-sm font-medium text-white lg:block"
                            ]
                            [ text "Help" ]
                        , {- Cart -}
                          div [ class "ml-4 flow-root lg:ml-8" ]
                            [ a
                                [ href "#"
                                , class "group -m-2 p-2 flex items-center"
                                ]
                                [ {- Heroicon name: outline/shopping-bag -}
                                  svg
                                    [ SvgAttr.class "flex-shrink-0 h-6 w-6 text-white"
                                    , SvgAttr.fill "none"
                                    , SvgAttr.viewBox "0 0 24 24"
                                    , SvgAttr.stroke "currentColor"
                                    , attribute "aria-hidden" "true"
                                    ]
                                    [ path
                                        [ SvgAttr.strokeLinecap "round"
                                        , SvgAttr.strokeLinejoin "round"
                                        , SvgAttr.strokeWidth "2"
                                        , SvgAttr.d "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        ]
                                        []
                                    ]
                                , span [ class "ml-2 text-sm font-medium text-white" ] [ text "0" ]
                                , span [ class "sr-only" ] [ text "items in cart, view bag" ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]


flyoutMenus : Html msg
flyoutMenus =
    div [ class "hidden h-full lg:flex" ]
        [ {- Flyout menus -}
          div [ class "px-4 bottom-0 inset-x-0" ]
            [ div [ class "h-full flex justify-center space-x-8" ]
                [ div [ class "flex" ]
                    [ div [ class "relative flex" ]
                        [ button
                            [ type_ "button"
                            , class "relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-white"
                            , attribute "aria-expanded" "false"
                            ]
                            [ text "Women"
                            , {- Open: "bg-white", Closed: "" -}
                              span
                                [ class "absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200"
                                , attribute "aria-hidden" "true"
                                ]
                                []
                            ]
                        ]
                    , {-
                         'Women' flyout menu, show/hide based on flyout menu state.

                         Entering: "transition ease-out duration-200"
                           From: "opacity-0"
                           To: "opacity-100"
                         Leaving: "transition ease-in duration-150"
                           From: "opacity-100"
                           To: "opacity-0"
                      -}
                      div [ class "absolute top-full inset-x-0 text-sm text-gray-500" ]
                        [ {- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -}
                          div
                            [ class "absolute inset-0 top-1/2 bg-white shadow"
                            , attribute "aria-hidden" "true"
                            ]
                            []
                        , div [ class "relative bg-white" ]
                            [ div [ class "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ]
                                [ div [ class "grid grid-cols-4 gap-y-10 gap-x-8 py-16" ]
                                    [ div [ class "group relative" ]
                                        [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                            [ img
                                                [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                                                , alt "Models sitting back to back, wearing Basic Tee in black and bone."
                                                , class "object-center object-cover"
                                                ]
                                                []
                                            ]
                                        , a
                                            [ href "#"
                                            , class "mt-4 block font-medium text-gray-900"
                                            ]
                                            [ span
                                                [ class "absolute z-10 inset-0"
                                                , attribute "aria-hidden" "true"
                                                ]
                                                []
                                            , text "New Arrivals"
                                            ]
                                        , p
                                            [ attribute "aria-hidden" "true"
                                            , class "mt-1"
                                            ]
                                            [ text "Shop now" ]
                                        ]
                                    , div [ class "group relative" ]
                                        [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                            [ img
                                                [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
                                                , alt "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                                                , class "object-center object-cover"
                                                ]
                                                []
                                            ]
                                        , a
                                            [ href "#"
                                            , class "mt-4 block font-medium text-gray-900"
                                            ]
                                            [ span
                                                [ class "absolute z-10 inset-0"
                                                , attribute "aria-hidden" "true"
                                                ]
                                                []
                                            , text "Basic Tees"
                                            ]
                                        , p
                                            [ attribute "aria-hidden" "true"
                                            , class "mt-1"
                                            ]
                                            [ text "Shop now" ]
                                        ]
                                    , div [ class "group relative" ]
                                        [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                            [ img
                                                [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg"
                                                , alt "Model wearing minimalist watch with black wristband and white watch face."
                                                , class "object-center object-cover"
                                                ]
                                                []
                                            ]
                                        , a
                                            [ href "#"
                                            , class "mt-4 block font-medium text-gray-900"
                                            ]
                                            [ span
                                                [ class "absolute z-10 inset-0"
                                                , attribute "aria-hidden" "true"
                                                ]
                                                []
                                            , text "Accessories"
                                            ]
                                        , p
                                            [ attribute "aria-hidden" "true"
                                            , class "mt-1"
                                            ]
                                            [ text "Shop now" ]
                                        ]
                                    , div [ class "group relative" ]
                                        [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                            [ img
                                                [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg"
                                                , alt "Model opening tan leather long wallet with credit card pockets and cash pouch."
                                                , class "object-center object-cover"
                                                ]
                                                []
                                            ]
                                        , a
                                            [ href "#"
                                            , class "mt-4 block font-medium text-gray-900"
                                            ]
                                            [ span
                                                [ class "absolute z-10 inset-0"
                                                , attribute "aria-hidden" "true"
                                                ]
                                                []
                                            , text "Carry"
                                            ]
                                        , p
                                            [ attribute "aria-hidden" "true"
                                            , class "mt-1"
                                            ]
                                            [ text "Shop now" ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                , div [ class "flex" ]
                    [ div [ class "relative flex" ]
                        [ button
                            [ type_ "button"
                            , class "relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-white"
                            , attribute "aria-expanded" "false"
                            ]
                            [ text "Men"
                            , {- Open: "bg-white", Closed: "" -}
                              span
                                [ class "absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200"
                                , attribute "aria-hidden" "true"
                                ]
                                []
                            ]
                        ]
                    , {-
                         'Women' flyout menu, show/hide based on flyout menu state.

                         Entering: "transition ease-out duration-200"
                           From: "opacity-0"
                           To: "opacity-100"
                         Leaving: "transition ease-in duration-150"
                           From: "opacity-100"
                           To: "opacity-0"
                      -}
                      div [ class "absolute top-full inset-x-0 text-sm text-gray-500" ]
                        [ {- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -}
                          div
                            [ class "absolute inset-0 top-1/2 bg-white shadow"
                            , attribute "aria-hidden" "true"
                            ]
                            []
                        , div [ class "relative bg-white" ]
                            [ div [ class "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ]
                                [ div [ class "grid grid-cols-4 gap-y-10 gap-x-8 py-16" ]
                                    [ div [ class "group relative" ]
                                        [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                            [ img
                                                [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg"
                                                , alt "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers."
                                                , class "object-center object-cover"
                                                ]
                                                []
                                            ]
                                        , a
                                            [ href "#"
                                            , class "mt-4 block font-medium text-gray-900"
                                            ]
                                            [ span
                                                [ class "absolute z-10 inset-0"
                                                , attribute "aria-hidden" "true"
                                                ]
                                                []
                                            , text "New Arrivals"
                                            ]
                                        , p
                                            [ attribute "aria-hidden" "true"
                                            , class "mt-1"
                                            ]
                                            [ text "Shop now" ]
                                        ]
                                    , div [ class "group relative" ]
                                        [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                            [ img
                                                [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg"
                                                , alt "Model wearing light heather gray t-shirt."
                                                , class "object-center object-cover"
                                                ]
                                                []
                                            ]
                                        , a
                                            [ href "#"
                                            , class "mt-4 block font-medium text-gray-900"
                                            ]
                                            [ span
                                                [ class "absolute z-10 inset-0"
                                                , attribute "aria-hidden" "true"
                                                ]
                                                []
                                            , text "Basic Tees"
                                            ]
                                        , p
                                            [ attribute "aria-hidden" "true"
                                            , class "mt-1"
                                            ]
                                            [ text "Shop now" ]
                                        ]
                                    , div [ class "group relative" ]
                                        [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                            [ img
                                                [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg"
                                                , alt "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body."
                                                , class "object-center object-cover"
                                                ]
                                                []
                                            ]
                                        , a
                                            [ href "#"
                                            , class "mt-4 block font-medium text-gray-900"
                                            ]
                                            [ span
                                                [ class "absolute z-10 inset-0"
                                                , attribute "aria-hidden" "true"
                                                ]
                                                []
                                            , text "Accessories"
                                            ]
                                        , p
                                            [ attribute "aria-hidden" "true"
                                            , class "mt-1"
                                            ]
                                            [ text "Shop now" ]
                                        ]
                                    , div [ class "group relative" ]
                                        [ div [ class "aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75" ]
                                            [ img
                                                [ src "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg"
                                                , alt "Model putting folded cash into slim card holder olive leather wallet with hand stitching."
                                                , class "object-center object-cover"
                                                ]
                                                []
                                            ]
                                        , a
                                            [ href "#"
                                            , class "mt-4 block font-medium text-gray-900"
                                            ]
                                            [ span
                                                [ class "absolute z-10 inset-0"
                                                , attribute "aria-hidden" "true"
                                                ]
                                                []
                                            , text "Carry"
                                            ]
                                        , p
                                            [ attribute "aria-hidden" "true"
                                            , class "mt-1"
                                            ]
                                            [ text "Shop now" ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                , a
                    [ href "#"
                    , class "flex items-center text-sm font-medium text-white"
                    ]
                    [ text "Company" ]
                , a
                    [ href "#"
                    , class "flex items-center text-sm font-medium text-white"
                    ]
                    [ text "Stores" ]
                ]
            ]
        ]


foot : Html msg
foot =
    footer
        [ attribute "aria-labelledby" "footer-heading"
        , class "bg-gray-900"
        ]
        [ h2
            [ id "footer-heading"
            , class "sr-only"
            ]
            [ text "Footer" ]
        , div [ class "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ]
            [ div [ class "py-20 xl:grid xl:grid-cols-3 xl:gap-8" ]
                [ div [ class "grid grid-cols-2 gap-8 xl:col-span-2" ]
                    [ div [ class "space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8" ]
                        [ div []
                            [ h3 [ class "text-sm font-medium text-white" ] [ text "Shop" ]
                            , ul
                                [ attribute "role" "list"
                                , class "mt-6 space-y-6"
                                ]
                                [ li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Bags" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Tees" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Objects" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Home Goods" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Accessories" ]
                                    ]
                                ]
                            ]
                        , div []
                            [ h3 [ class "text-sm font-medium text-white" ] [ text "Company" ]
                            , ul
                                [ attribute "role" "list"
                                , class "mt-6 space-y-6"
                                ]
                                [ li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Who we are" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Sustainability" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Press" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Careers" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Terms & Conditions" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Privacy" ]
                                    ]
                                ]
                            ]
                        ]
                    , div [ class "space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8" ]
                        [ div []
                            [ h3 [ class "text-sm font-medium text-white" ] [ text "Account" ]
                            , ul
                                [ attribute "role" "list"
                                , class "mt-6 space-y-6"
                                ]
                                [ li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Manage Account" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Returns & Exchanges" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Redeem a Gift Card" ]
                                    ]
                                ]
                            ]
                        , div []
                            [ h3 [ class "text-sm font-medium text-white" ] [ text "Connect" ]
                            , ul
                                [ attribute "role" "list"
                                , class "mt-6 space-y-6"
                                ]
                                [ li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Contact Us" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Twitter" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Instagram" ]
                                    ]
                                , li [ class "text-sm" ]
                                    [ a
                                        [ href "#"
                                        , class "text-gray-300 hover:text-white"
                                        ]
                                        [ text "Pinterest" ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                , div [ class "mt-12 md:mt-16 xl:mt-0" ]
                    [ h3 [ class "text-sm font-medium text-white" ] [ text "Sign up for our newsletter" ]
                    , p [ class "mt-6 text-sm text-gray-300" ] [ text "The latest deals and savings, sent to your inbox weekly." ]
                    , Html.form [ class "mt-2 flex sm:max-w-md" ]
                        [ label
                            [ for "email-address"
                            , class "sr-only"
                            ]
                            [ text "Email address" ]
                        , input
                            [ id "email-address"
                            , type_ "text"
                            , attribute "autocomplete" "email"
                            , required True
                            , class "appearance-none min-w-0 w-full bg-white border border-white rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                            ]
                            []
                        , div [ class "ml-4 flex-shrink-0" ]
                            [ button
                                [ type_ "submit"
                                , class "w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
                                ]
                                [ text "Sign up" ]
                            ]
                        ]
                    ]
                ]
            , div [ class "border-t border-gray-800 py-10" ]
                [ p [ class "text-sm text-gray-400" ] [ text "Copyright © 2021 Clothing Company Inc." ]
                ]
            ]
        ]
