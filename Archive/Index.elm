module Route.Index exposing ()

import DataSource exposing (DataSource)
import DataSource.Http
import Head
import Head.Seo as Seo
import Html as Html exposing (..)
import Html.Attributes as Attr exposing (..)
import Json.Decode as Decode
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import Path
import RouteBuilder exposing (StatelessRoute, StaticPayload)
import Shared
import Svg as Svg exposing (path, svg)
import Svg.Attributes as SvgAttr
import View exposing (View)


homePage : Html msg
homePage =
    div []
        [ hero
        , main_ []
            [ categorySection
            , teaserSection
            , collectionSection
            , fetauredSection
            ]
        ]


hero : Html msg
hero =
    div [ class "relative bg-gray-900" ]
        [ {- Decorative image and overlay -}
          div
            [ attribute "aria-hidden" "true"
            , class "absolute inset-0 overflow-hidden"
            ]
            [ img
                [ src "https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
                , alt ""
                , class "w-full h-full object-center object-cover"
                ]
                []
            ]
        , div
            [ attribute "aria-hidden" "true"
            , class "absolute inset-0 bg-gray-900 opacity-50"
            ]
            []
        , div [ class "relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0" ]
            [ h1 [ class "text-4xl font-extrabold tracking-tight text-white lg:text-6xl" ] [ text "New arrivals are here" ]
            , p [ class "mt-4 text-xl text-white" ] [ text "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock." ]
            , a
                [ href "#"
                , class "mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
                ]
                [ text "Shop New Arrivals" ]
            ]
        ]


categorySection : Html msg
categorySection =
    let
        categories =
            [ "New Arrivals"
            , "Productivity"
            , "Workspace"
            , "Accessories"
            , "Sale"
            ]

        card cardText =
            a
                [ href "#"
                , class "relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                ]
                [ span
                    [ attribute "aria-hidden" "true"
                    , class "absolute inset-0"
                    ]
                    [ img
                        [ src "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg"
                        , alt ""
                        , class "w-full h-full object-center object-cover"]
                        []
                    ]
                , span
                    [ attribute "aria-hidden" "true"
                    , class "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    ]
                    []
                , span [ class "relative mt-auto text-center text-xl font-bold text-white" ] [ text "New Arrivals" ]
                ]
    in
    {- Category section -}
    section
        [ attribute "aria-labelledby" "category-heading"
        , class "grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]"
        , class "pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8 grid grid-flow-row-dense max-w-full gap-y-4"
        ]
        [ h2
            [ id "category-heading"
            , class "text-2xl font-extrabold tracking-tight text-gray-900"
            ]
            [ text "Shop by Category" ]
        , div [ class "row-start-2 col-span-full overflow-x-auto max-w-full" ]
            [ ul
                [ class "px-4 flex space-x-8"
                , class "sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8"
                ]
                (List.map (card >> List.singleton >> li []) categories)
            ]
        , a
            [ href "#"
            , class "block text-sm font-semibold p-4 ml-auto col-end-[-1] text-indigo-600 hover:text-indigo-500"
            ]
            [ text "Browse all categories"
            , span [ attribute "aria-hidden" "true" ] [ text "→" ]
            ]
        ]


teaserSection : Html msg
teaserSection =
    {- Teaser section -}
    section
        [ attribute "aria-labelledby" "social-impact-heading"
        , class "max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8"
        ]
        [ div [ class "relative rounded-lg overflow-hidden" ]
            [ div [ class "absolute inset-0" ]
                [ img
                    [ src "https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                    , alt ""
                    , class "w-full h-full object-center object-cover"
                    ]
                    []
                ]
            , div [ class "relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16" ]
                [ div [ class "relative max-w-3xl mx-auto flex flex-col items-center text-center" ]
                    [ h2
                        [ id "social-impact-heading"
                        , class "text-3xl font-extrabold tracking-tight text-white sm:text-4xl"]
                        [ span [ class "block sm:inline" ] [ text "Level up" ]
                        , span [ class "block sm:inline" ] [ text "your desk" ]]
                    , p [ class "mt-3 text-xl text-white" ] [ text "Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup." ]
                    , a
                        [ href "#"
                        , class "mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"]
                        [ text "Shop Workspace" ]
                    ]
                ]
            ]
        ]


collectionSection : Html msg
collectionSection =
    {- Collection section -}
    section
        [ attribute "aria-labelledby" "collection-heading"
        , class "max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
        ]
        [ h2
            [ id "collection-heading"
            , class "text-2xl font-extrabold tracking-tight text-gray-900"
            ]
            [ text "Shop by Collection" ]
        , p [ class "mt-4 text-base text-gray-500" ] [ text "Each season, we collaborate with world-class designers to create a collection inspired by the natural world." ]
        , div [ class "mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8" ]
            [ a
                [ href "#"
                , class "group block"
                ]
                [ div
                    [ attribute "aria-hidden" "true"
                    , class "aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                    ]
                    [ img
                        [ src "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg"
                        , alt "Brown leather key ring with brass metal loops and rivets on wood table."
                        , class "w-full h-full object-center object-cover"]
                        []
                    ]
                , h3 [ class "mt-4 text-base font-semibold text-gray-900" ] [ text "Handcrafted Collection" ]
                , p [ class "mt-2 text-sm text-gray-500" ] [ text "Keep your phone, keys, and wallet together, so you can lose everything at once." ]
                ]
            , a
                [ href "#"
                , class "group block"
                ]
                [ div
                    [ attribute "aria-hidden" "true"
                    , class "aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                    ]
                    [ img
                        [ src "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg"
                        , alt "Natural leather mouse pad on white desk next to porcelain mug and keyboard."
                        , class "w-full h-full object-center object-cover"]
                        []
                    ]
                , h3 [ class "mt-4 text-base font-semibold text-gray-900" ] [ text "Organized Desk Collection" ]
                , p [ class "mt-2 text-sm text-gray-500" ] [ text "The rest of the house will still be a mess, but your desk will look great." ]
                ]
            , a
                [ href "#"
                , class "group block"
                ]
                [ div
                    [ attribute "aria-hidden" "true"
                    , class "aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                    ]
                    [ img
                        [ src "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg"
                        , alt "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad."
                        , class "w-full h-full object-center object-cover"]
                        []
                    ]
                , h3 [ class "mt-4 text-base font-semibold text-gray-900" ] [ text "Focus Collection" ]
                , p [ class "mt-2 text-sm text-gray-500" ] [ text "Be more productive than enterprise project managers with a single piece of paper." ]
                ]
            ]
        ]


fetauredSection : Html msg
fetauredSection =
    {- Featured section -}
    section
        [ attribute "aria-labelledby" "comfort-heading"
        , class "max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
        ]
        [ div [ class "relative rounded-lg overflow-hidden" ]
            [ div [ class "absolute inset-0" ]
                [ img
                    [ src "https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
                    , alt ""
                    , class "w-full h-full object-center object-cover"
                    ]
                    []
                ]
            , div [ class "relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16" ]
                [ div [ class "relative max-w-3xl mx-auto flex flex-col items-center text-center" ]
                    [ h2
                        [ id "comfort-heading"
                        , class "text-3xl font-extrabold tracking-tight text-white sm:text-4xl"]
                        [ text "Simple productivity" ]
                    , p [ class "mt-3 text-xl text-white" ] [ text "Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles." ]
                    , a
                        [ href "#"
                        , class "mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"]
                        [ text "Shop Focus" ]
                    ]
                ]
            ]
        ]
