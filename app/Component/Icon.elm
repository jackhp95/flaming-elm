module Component.Icon exposing (..)

import Html.Attributes exposing (attribute)
import Svg exposing (path, svg)
import Svg.Attributes as SvgAttr


outlineX =
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


outlineBell =
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
            , SvgAttr.d "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ]
            []
        ]


gitHub =
    svg
        [ SvgAttr.class "w-5 h-5"
        , SvgAttr.fill "currentColor"
        , SvgAttr.viewBox "0 0 20 20"
        , attribute "aria-hidden" "true"
        ]
        [ path
            [ SvgAttr.fillRule "evenodd"
            , SvgAttr.d "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
            , SvgAttr.clipRule "evenodd"
            ]
            []
        ]


twitter =
    svg
        [ SvgAttr.class "w-5 h-5"
        , SvgAttr.fill "currentColor"
        , SvgAttr.viewBox "0 0 20 20"
        , attribute "aria-hidden" "true"
        ]
        [ path
            [ SvgAttr.d "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
            ]
            []
        ]


facebook =
    svg
        [ SvgAttr.class "w-5 h-5"
        , SvgAttr.fill "currentColor"
        , SvgAttr.viewBox "0 0 20 20"
        , attribute "aria-hidden" "true"
        ]
        [ path
            [ SvgAttr.fillRule "evenodd"
            , SvgAttr.d "M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
            , SvgAttr.clipRule "evenodd"
            ]
            []
        ]


outlineMenu =
    svg
        [ SvgAttr.class "block h-6 w-6"
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


outlineShieldCheck =
    svg
        [ SvgAttr.class "flex-shrink-0 mr-2 h-6 w-6 opacity-40 group-hover:opacity-50"
        , SvgAttr.fill "none"
        , SvgAttr.viewBox "0 0 24 24"
        , SvgAttr.stroke "currentColor"
        , attribute "aria-hidden" "true"
        ]
        [ path
            [ SvgAttr.strokeLinecap "round"
            , SvgAttr.strokeLinejoin "round"
            , SvgAttr.strokeWidth "2"
            , SvgAttr.d "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            ]
            []
        ]


solidSearch =
    svg
        [ SvgAttr.class "h-5 w-5 opacity-40"
        , SvgAttr.viewBox "0 0 20 20"
        , SvgAttr.fill "currentColor"
        , attribute "aria-hidden" "true"
        ]
        [ path
            [ SvgAttr.fillRule "evenodd"
            , SvgAttr.d "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            , SvgAttr.clipRule "evenodd"
            ]
            []
        ]


solidQuestionMarkCircle =
    svg
        [ SvgAttr.class "flex-shrink-0 ml-2 h-5 w-5 opacity-40 group-hover:opacity-50"
        , SvgAttr.viewBox "0 0 20 20"
        , SvgAttr.fill "currentColor"
        , attribute "aria-hidden" "true"
        ]
        [ path
            [ SvgAttr.fillRule "evenodd"
            , SvgAttr.d "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            , SvgAttr.clipRule "evenodd"
            ]
            []
        ]


solidCheck =
    svg
        [ SvgAttr.class "flex-shrink-0 w-5 h-5 text-green-500"
        , SvgAttr.viewBox "0 0 20 20"
        , SvgAttr.fill "currentColor"
        , attribute "aria-hidden" "true"
        ]
        [ path
            [ SvgAttr.fillRule "evenodd"
            , SvgAttr.d "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            , SvgAttr.clipRule "evenodd"
            ]
            []
        ]


breadcrumbSlash =
    svg
        [ SvgAttr.viewBox "0 0 20 20"
        , SvgAttr.fill "currentColor"
        , attribute "aria-hidden" "true"
        , SvgAttr.class "flex-shrink-0 h-5 w-5 opacity-30"
        ]
        [ path
            [ SvgAttr.d "M5.555 17.776l8-16 .894.448-8 16-.894-.448z"
            ]
            []
        ]
