module Component.Auth exposing (..)

import Component.Icon as Icon
import Dict exposing (Dict)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onBlur, onInput)
import Http
import Json.Encode
import Route
import Util
import Util.Native
import Util.Native.Entry
import Util.Native.Form


type alias UserInfo =
    { email : String
    , password : String
    , phone : String
    , usersAccessToken : String
    , data : Dict String String
    , supabaseKey : String
    }


type alias GuestInfo =
    Dict String String


type Auth
    = User UserInfo
    | Guest GuestInfo



-- userSignup
-- userLogin
-- magicLink
-- phoneSignup
-- verifyPin
-- getUser
-- passwordRecovery
-- updateUser
-- userLogout
-- inviteUser


signUpFormContents : List (Html msg)
signUpFormContents =
    [ Html.form
        [ class "space-y-6"
        , action "/api/form/sign-up"
        , method "POST"
        ]
        [ div []
            [ label
                [ for "email"
                , class "block text-sm font-medium text-neutral-300"
                ]
                [ text "Email address" ]
            , div
                [ class "mt-1"
                ]
                [ input
                    [ id "email"
                    , name "email"
                    , type_ "email"
                    , attribute "autocomplete" "email"
                    , required True
                    , class "block w-full appearance-none rounded-md border border-neutral-700 bg-transparent px-3 py-2 placeholder-neutral-600 shadow-sm focus:bg-neutral-900"
                    , class "focus:border-fuchsia-500 focus:outline-none focus:ring-fuchsia-500 sm:text-sm"
                    ]
                    []
                ]
            ]
        , div []
            [ label
                [ for "password"
                , class "block text-sm font-medium text-neutral-300"
                ]
                [ text "Password" ]
            , div
                [ class "mt-1"
                ]
                [ input
                    [ id "password"
                    , name "password"
                    , type_ "password"
                    , attribute "autocomplete" "current-password"
                    , required True
                    , class "block w-full appearance-none rounded-md border border-neutral-700 bg-transparent px-3 py-2 placeholder-neutral-600 shadow-sm focus:bg-neutral-900"
                    , class "focus:border-fuchsia-500 focus:outline-none focus:ring-fuchsia-500 sm:text-sm"
                    ]
                    []
                ]
            ]
        , div
            [ class "flex items-center justify-between"
            ]
            [ div
                [ class "flex items-center"
                ]
                [ input
                    [ id "remember-me"
                    , name "remember-me"
                    , type_ "checkbox"
                    , class "h-4 w-4 rounded border-neutral-700 bg-transparent text-fuchsia-600 focus:bg-neutral-900 focus:ring-fuchsia-500"
                    , class "focus:outline-none focus:ring-fuchsia-500 focus:ring-offset-black"
                    ]
                    []
                , label
                    [ for "remember-me"
                    , class "ml-2 block text-sm text-neutral-100"
                    ]
                    [ text "Remember me" ]
                ]
            , div
                [ class "text-sm"
                ]
                [ a
                    [ href <| Route.toString Route.Index
                    , class "font-medium text-fuchsia-600 hover:text-fuchsia-500"
                    , class "rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-black"
                    ]
                    [ text "Forgot your password?" ]
                ]
            ]
        , div [ class "rounded-md bg-gradient-to-tl from-rose-500 to-fuchsia-500 transition" ]
            [ button
                [ type_ "submit"
                , class "flex w-full justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition hover:bg-opacity-10 focus:bg-opacity-10"
                , class "focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-black"
                ]
                [ text "Sign in" ]
            ]
        ]
    , div
        [ class "mt-6 hidden"
        ]
        [ div
            [ class "relative"
            ]
            [ div
                [ class "absolute inset-0 flex items-center"
                ]
                [ div
                    [ class "w-full border-t border-neutral-700"
                    ]
                    []
                ]
            , div
                [ class "relative flex justify-center text-sm"
                ]
                [ span
                    [ class "bg-black px-2 text-neutral-500"
                    ]
                    [ text "Or continue with" ]
                ]
            ]
        , div
            [ class "mt-6 grid grid-cols-3 gap-3"
            ]
            [ div []
                [ a
                    [ href <| Route.toString Route.Index
                    , class "inline-flex w-full justify-center rounded-md border border-neutral-700 bg-black px-4 py-2 text-sm font-medium text-neutral-500 shadow-sm"
                    , class "hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-black"
                    ]
                    [ span
                        [ class "sr-only"
                        ]
                        [ text "Sign in with Facebook" ]
                    , Icon.facebook
                    ]
                ]
            , div []
                [ a
                    [ href <| Route.toString Route.Index
                    , class "inline-flex w-full justify-center rounded-md border border-neutral-700 bg-black px-4 py-2 text-sm font-medium text-neutral-500 shadow-sm"
                    , class "hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-black"
                    ]
                    [ span
                        [ class "sr-only"
                        ]
                        [ text "Sign in with Twitter" ]
                    , Icon.twitter
                    ]
                ]
            , div []
                [ a
                    [ href <| Route.toString Route.Index
                    , class "inline-flex w-full justify-center rounded-md border border-neutral-700 bg-black px-4 py-2 text-sm font-medium text-neutral-500 shadow-sm"
                    , class "hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-black"
                    ]
                    [ span
                        [ class "sr-only"
                        ]
                        [ text "Sign in with GitHub" ]
                    , Icon.gitHub
                    ]
                ]
            ]
        ]
    ]
