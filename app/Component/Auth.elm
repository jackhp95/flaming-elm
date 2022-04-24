module Component.Auth exposing (..)

import Component.Icon as Icon
import Dict exposing (Dict)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)
import Http
import Json.Encode
import Route
import Util


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
                    , class "appearance-none bg-transparent focus:bg-neutral-900 block w-full px-3 py-2 border border-neutral-700 rounded-md shadow-sm placeholder-neutral-600"
                    , class "focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
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
                    , class "appearance-none bg-transparent focus:bg-neutral-900 block w-full px-3 py-2 border border-neutral-700 rounded-md shadow-sm placeholder-neutral-600"
                    , class "focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"
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
                    , class "bg-transparent focus:bg-neutral-900 h-4 w-4 text-fuchsia-600 focus:ring-fuchsia-500 border-neutral-700 rounded"
                    , class "focus:outline-none focus:ring-offset-black focus:ring-fuchsia-500"
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
                    [ Util.asHref Route.Index
                    , class "font-medium text-fuchsia-600 hover:text-fuchsia-500"
                    , class "rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-fuchsia-500"
                    ]
                    [ text "Forgot your password?" ]
                ]
            ]
        , div [ class "bg-gradient-to-tl transition from-rose-500 to-fuchsia-500 rounded-md" ]
            [ button
                [ type_ "submit"
                , class "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white focus:bg-opacity-10 hover:bg-opacity-10 transition"
                , class "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-fuchsia-500"
                ]
                [ text "Sign in" ]
            ]
        ]
    , div
        [ class "hidden mt-6"
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
                    [ class "px-2 bg-black text-neutral-500"
                    ]
                    [ text "Or continue with" ]
                ]
            ]
        , div
            [ class "mt-6 grid grid-cols-3 gap-3"
            ]
            [ div []
                [ a
                    [ Util.asHref Route.Index
                    , class "w-full inline-flex justify-center py-2 px-4 border border-neutral-700 rounded-md shadow-sm bg-black text-sm font-medium text-neutral-500"
                    , class "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-fuchsia-500 hover:bg-neutral-900"
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
                    [ Util.asHref Route.Index
                    , class "w-full inline-flex justify-center py-2 px-4 border border-neutral-700 rounded-md shadow-sm bg-black text-sm font-medium text-neutral-500"
                    , class "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-fuchsia-500 hover:bg-neutral-900"
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
                    [ Util.asHref Route.Index
                    , class "w-full inline-flex justify-center py-2 px-4 border border-neutral-700 rounded-md shadow-sm bg-black text-sm font-medium text-neutral-500"
                    , class "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-fuchsia-500 hover:bg-neutral-900"
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
