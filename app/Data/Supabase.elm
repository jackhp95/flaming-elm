module Data.Supabase exposing (AppMetadata, Identity, IdentityData, Supabase, UserMetadata, supabase, supabaseToString)

import Dict exposing (Dict, map, toList)
import Json.Decode as Jdec
import Json.Decode.Pipeline as Jpipe
import Json.Encode as Jenc
import List exposing (map)


type alias Supabase =
    { id : String
    , aud : String
    , role : String
    , email : String
    , phone : String
    , confirmationSentAt : String
    , appMetadata : AppMetadata
    , userMetadata : UserMetadata
    , identities : List Identity
    , createdAt : String
    , updatedAt : String
    }


type alias AppMetadata =
    { provider : String
    , providers : List String
    }


type alias Identity =
    { id : String
    , userID : String
    , identityData : IdentityData
    , provider : String
    , lastSignInAt : String
    , createdAt : String
    , updatedAt : String
    }


type alias IdentityData =
    { sub : String
    }


type alias UserMetadata =
    {}



-- decoders and encoders


supabaseToString : Supabase -> String
supabaseToString r =
    Jenc.encode 0 (encodeSupabase r)


supabase : Jdec.Decoder Supabase
supabase =
    Jpipe.decode Supabase
        |> Jpipe.required "id" Jdec.string
        |> Jpipe.required "aud" Jdec.string
        |> Jpipe.required "role" Jdec.string
        |> Jpipe.required "email" Jdec.string
        |> Jpipe.required "phone" Jdec.string
        |> Jpipe.required "confirmation_sent_at" Jdec.string
        |> Jpipe.required "app_metadata" appMetadata
        |> Jpipe.required "user_metadata" userMetadata
        |> Jpipe.required "identities" (Jdec.list purpleIdentity)
        |> Jpipe.required "created_at" Jdec.string
        |> Jpipe.required "updated_at" Jdec.string


encodeSupabase : Supabase -> Jenc.Value
encodeSupabase x =
    Jenc.object
        [ ( "id", Jenc.string x.id )
        , ( "aud", Jenc.string x.aud )
        , ( "role", Jenc.string x.role )
        , ( "email", Jenc.string x.email )
        , ( "phone", Jenc.string x.phone )
        , ( "confirmation_sent_at", Jenc.string x.confirmationSentAt )
        , ( "app_metadata", encodeAppMetadata x.appMetadata )
        , ( "user_metadata", encodeUserMetadata x.userMetadata )
        , ( "identities", makeListEncoder encodeIdentity x.identities )
        , ( "created_at", Jenc.string x.createdAt )
        , ( "updated_at", Jenc.string x.updatedAt )
        ]


appMetadata : Jdec.Decoder AppMetadata
appMetadata =
    Jpipe.decode AppMetadata
        |> Jpipe.required "provider" Jdec.string
        |> Jpipe.required "providers" (Jdec.list Jdec.string)


encodeAppMetadata : AppMetadata -> Jenc.Value
encodeAppMetadata x =
    Jenc.object
        [ ( "provider", Jenc.string x.provider )
        , ( "providers", makeListEncoder Jenc.string x.providers )
        ]


purpleIdentity : Jdec.Decoder Identity
purpleIdentity =
    Jpipe.decode Identity
        |> Jpipe.required "id" Jdec.string
        |> Jpipe.required "user_id" Jdec.string
        |> Jpipe.required "identity_data" identityData
        |> Jpipe.required "provider" Jdec.string
        |> Jpipe.required "last_sign_in_at" Jdec.string
        |> Jpipe.required "created_at" Jdec.string
        |> Jpipe.required "updated_at" Jdec.string


encodeIdentity : Identity -> Jenc.Value
encodeIdentity x =
    Jenc.object
        [ ( "id", Jenc.string x.id )
        , ( "user_id", Jenc.string x.userID )
        , ( "identity_data", encodeIdentityData x.identityData )
        , ( "provider", Jenc.string x.provider )
        , ( "last_sign_in_at", Jenc.string x.lastSignInAt )
        , ( "created_at", Jenc.string x.createdAt )
        , ( "updated_at", Jenc.string x.updatedAt )
        ]


identityData : Jdec.Decoder IdentityData
identityData =
    Jpipe.decode IdentityData
        |> Jpipe.required "sub" Jdec.string


encodeIdentityData : IdentityData -> Jenc.Value
encodeIdentityData x =
    Jenc.object
        [ ( "sub", Jenc.string x.sub )
        ]


userMetadata : Jdec.Decoder UserMetadata
userMetadata =
    Jpipe.decode UserMetadata


encodeUserMetadata : UserMetadata -> Jenc.Value
encodeUserMetadata x =
    Jenc.object
        []
