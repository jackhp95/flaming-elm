module Data.Supabase.Request exposing (..)

import Data.Supabase exposing (Supabase)
import DataSource exposing (DataSource)
import DataSource.Http exposing (Expect)
import Dict exposing (Dict)
import Json.Encode as Jenc exposing (Value)



-- User Management
-- Supabase makes it easy to manage your users.
-- Supabase assigns each user a unique ID. You can reference this ID anywhere in your database. For example, you might create a profiles table references the user using a user_id field.
-- Supabase already has built in the routes to sign up, login, and log out for managing users in your apps and websites.
--
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
--


type alias SupabaseRequest =
    { path : String
    , method : String
    , headers : List ( String, String )
    , body : List ( String, Value )
    }


type alias GeneralRequest =
    { path : String
    , method : String
    , headers : List ( String, String )
    , body : Value
    }


baseRequest : SupabaseRequest -> (Expect a -> DataSource a)
baseRequest { path, method, headers, body } =
    DataSource.Http.request
        { url = "https://raoodzmoztwwwcjydatg.supabase.co/auth/v1/" ++ path
        , method = method
        , headers =
            ( "apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQxNTMwMCwiZXhwIjoxOTU4OTkxMzAwfQ.7FNpzHXTJ0EHz2nVfodpdu4mw05Mik1BH8aEQpE6XAU" )
                :: headers
        , body =
            if List.isEmpty body then
                DataSource.Http.emptyBody

            else
                Jenc.object body
                    |> DataSource.Http.jsonBody
        }


typeJson : ( String, String )
typeJson =
    ( "Content-Type", "application/json" )


authBearer : String -> ( String, String )
authBearer token =
    ( "Authorization", "Bearer " ++ token )



-- Sign Up
-- Allow your users to sign up and create a new account.
-- After they have signed up, all interactions using the Supabase JS client will be performed as "that user".


userSignup : { email : String, password : String } -> (Expect a -> DataSource a)
userSignup { email, password } =
    baseRequest
        { method = "POST"
        , path = "signup"
        , headers = [ typeJson ]
        , body =
            [ ( "email", Jenc.string email )
            , ( "password", Jenc.string password )
            ]
        }



-- Log In With Email/Password
-- If an account is created, users can login to your app.
-- After they have logged in, all interactions using the Supabase JS client will be performed as "that user".


userLogin : { email : String, password : String } -> (Expect a -> DataSource a)
userLogin { email, password } =
    baseRequest
        { method = "POST"
        , path = "token?grant_type=password"
        , headers = [ typeJson ]
        , body =
            [ ( "email", Jenc.string email )
            , ( "password", Jenc.string password )
            ]
        }



-- Log In With Magic Link Via Email
-- Send a user a passwordless link which they can use to redeem an access_token.
-- After they have clicked the link, all interactions using the Supabase JS client will be performed as "that user".


magicLink : { email : String } -> (Expect a -> DataSource a)
magicLink { email } =
    baseRequest
        { method = "POST"
        , path = "magiclink"
        , headers = [ typeJson ]
        , body = [ ( "email", Jenc.string email ) ]
        }



-- Sign Up With Phone/Password
-- A phone number can be used instead of an email as a primary account confirmation mechanism.
-- The user will receive a mobile OTP via sms with which they can verify that they control the phone number.
-- You must enter your own twilio credentials on the auth settings page to enable sms confirmations.


phoneSignup : { phone : String, password : String } -> (Expect a -> DataSource a)
phoneSignup { phone, password } =
    baseRequest
        { method = "POST"
        , path = "signup"
        , headers = [ typeJson ]
        , body =
            [ ( "phone", Jenc.string phone )
            , ( "password", Jenc.string password )
            ]
        }



-- Login Via SMS OTP
-- SMS OTPs work like magic links, except you have to provide an interface for the user to verify the 6 digit number they receive.
-- You must enter your own twilio credentials on the auth settings page to enable SMS-based Logins.


phoneLogin : { phone : String } -> (Expect a -> DataSource a)
phoneLogin { phone } =
    baseRequest
        { method = "POST"
        , path = "otp"
        , headers = [ typeJson ]
        , body = [ ( "phone", Jenc.string phone ) ]
        }



-- Verify An SMS OTP
-- Once the user has received the OTP, have them enter it in a form and send it for verification
-- You must enter your own twilio credentials on the auth settings page to enable SMS-based OTP verification.


verifyPin : { type_ : String, phone : String, token : String } -> (Expect a -> DataSource a)
verifyPin { type_, phone, token } =
    baseRequest
        { method = "POST"
        , path = "verify"
        , headers = [ typeJson ]
        , body =
            [ ( "type", Jenc.string type_ )
            , ( "phone", Jenc.string phone )
            , ( "token", Jenc.string token )
            ]
        }



-- Log In With Third Party OAuth
-- Users can log in with Third Party OAuth like Google, Facebook, GitHub, and more. You must first enable each of these in the Auth Settings tab.
-- Vew all the available Third Part OAuth providers
-- After they have logged in, all interactions using the Supabase JS client will be performed as "that user".
-- Generate your Client ID and secret from: Google, GitHub, GitLab, Facebook, Bitbucket.
-- User
-- Get the JSON object for the logged in user.


getUser : String -> (Expect a -> DataSource a)
getUser userToken =
    baseRequest
        { method = "GET"
        , path = "user"
        , headers = [ authBearer userToken ]
        , body = []
        }



-- Forgotten Password Email
-- Sends the user a log in link via email. Once logged in you should direct the user to a new password form. And use "Update User" below to save the new password.


passwordRecovery : { email : String } -> (Expect a -> DataSource a)
passwordRecovery { email } =
    baseRequest
        { method = "POST"
        , path = "recover"
        , headers = [ typeJson ]
        , body = [ ( "email", Jenc.string email ) ]
        }



-- Update User
-- Update the user with a new email or password. Each key (email, password, and data) is optional


updateUser : { usersAccessToken : String, email : String, password : String, data : Dict String String } -> (Expect a -> DataSource a)
updateUser { usersAccessToken, email, password, data } =
    baseRequest
        { method = "PUT"
        , path = "user"
        , headers =
            [ authBearer usersAccessToken
            , typeJson
            ]
        , body =
            [ ( "email", Jenc.string email )
            , ( "password", Jenc.string password )
            , ( "data", Jenc.dict identity Jenc.string data )
            ]
        }



-- Log Out
-- After calling log out, all interactions using the Supabase JS client will be "anonymous".


userLogout : String -> (Expect a -> DataSource a)
userLogout userToken =
    baseRequest
        { method = "POST"
        , path = "logout"
        , headers =
            [ typeJson
            , authBearer userToken
            ]
        , body = []
        }



-- Send A User An Invite Over Email
-- Send a user a passwordless link which they can use to sign up and log in.
-- After they have clicked the link, all interactions using the Supabase JS client will be performed as "that user".
-- This endpoint requires you use the service_role_key when initializing the client, and should only be invoked from the server, never from the client.


inviteUser : { email : String, supabaseKey : String } -> (Expect a -> DataSource a)
inviteUser { email, supabaseKey } =
    baseRequest
        { method = "POST"
        , path = "invite"
        , headers =
            [ authBearer supabaseKey
            , typeJson
            ]
        , body = [ ( "email", Jenc.string email ) ]
        }
