module Component.Icon exposing (..)

import Html.Attributes exposing (attribute)
import Svg as Svg exposing (path, svg)
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
