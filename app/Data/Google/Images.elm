module Data.Google.Images exposing (Images, ImagesResult, SearchInformation, SearchMetadata, SearchParameters, images, imagesToString)

import Dict exposing (Dict, map, toList)
import Json.Decode as Jdec
import Json.Decode.Pipeline as Jpipe
import Json.Encode as Jenc
import List exposing (map)


type alias Images =
    { searchMetadata : SearchMetadata
    , searchParameters : SearchParameters
    , searchInformation : SearchInformation
    , imagesResults : List ImagesResult
    }


type alias ImagesResult =
    { position : Int
    , thumbnail : String
    , source : String
    , title : String
    , link : String
    , original : String
    , isProduct : Bool
    }


type alias SearchInformation =
    { imageResultsState : String
    , queryDisplayed : String
    }


type alias SearchMetadata =
    { id : String
    , status : String
    , jsonEndpoint : String
    , createdAt : String
    , processedAt : String
    , googleURL : String
    , rawHTMLFile : String
    , totalTimeTaken : Float
    }


type alias SearchParameters =
    { engine : String
    , q : String
    , googleDomain : String
    , ijn : String
    , device : String
    , tbm : String
    }



-- decoders and encoders


imagesToString : Images -> String
imagesToString r =
    Jenc.encode 0 (encodeImages r)


images : Jdec.Decoder Images
images =
    Jdec.succeed Images
        |> Jpipe.required "search_metadata" searchMetadata
        |> Jpipe.required "search_parameters" searchParameters
        |> Jpipe.required "search_information" searchInformation
        |> Jpipe.required "images_results" (Jdec.list imagesResult)


encodeImages : Images -> Jenc.Value
encodeImages x =
    Jenc.object
        [ ( "search_metadata", encodeSearchMetadata x.searchMetadata )
        , ( "search_parameters", encodeSearchParameters x.searchParameters )
        , ( "search_information", encodeSearchInformation x.searchInformation )
        , ( "images_results", (Jenc.list encodeImagesResult) x.imagesResults )
        ]


imagesResult : Jdec.Decoder ImagesResult
imagesResult =
    Jdec.succeed ImagesResult
        |> Jpipe.required "position" Jdec.int
        |> Jpipe.required "thumbnail" Jdec.string
        |> Jpipe.required "source" Jdec.string
        |> Jpipe.required "title" Jdec.string
        |> Jpipe.required "link" Jdec.string
        |> Jpipe.required "original" Jdec.string
        |> Jpipe.required "is_product" Jdec.bool


encodeImagesResult : ImagesResult -> Jenc.Value
encodeImagesResult x =
    Jenc.object
        [ ( "position", Jenc.int x.position )
        , ( "thumbnail", Jenc.string x.thumbnail )
        , ( "source", Jenc.string x.source )
        , ( "title", Jenc.string x.title )
        , ( "link", Jenc.string x.link )
        , ( "original", Jenc.string x.original )
        , ( "is_product", Jenc.bool x.isProduct )
        ]


searchInformation : Jdec.Decoder SearchInformation
searchInformation =
    Jdec.succeed SearchInformation
        |> Jpipe.required "image_results_state" Jdec.string
        |> Jpipe.required "query_displayed" Jdec.string


encodeSearchInformation : SearchInformation -> Jenc.Value
encodeSearchInformation x =
    Jenc.object
        [ ( "image_results_state", Jenc.string x.imageResultsState )
        , ( "query_displayed", Jenc.string x.queryDisplayed )
        ]


searchMetadata : Jdec.Decoder SearchMetadata
searchMetadata =
    Jdec.succeed SearchMetadata
        |> Jpipe.required "id" Jdec.string
        |> Jpipe.required "status" Jdec.string
        |> Jpipe.required "json_endpoint" Jdec.string
        |> Jpipe.required "created_at" Jdec.string
        |> Jpipe.required "processed_at" Jdec.string
        |> Jpipe.required "google_url" Jdec.string
        |> Jpipe.required "raw_html_file" Jdec.string
        |> Jpipe.required "total_time_taken" Jdec.float


encodeSearchMetadata : SearchMetadata -> Jenc.Value
encodeSearchMetadata x =
    Jenc.object
        [ ( "id", Jenc.string x.id )
        , ( "status", Jenc.string x.status )
        , ( "json_endpoint", Jenc.string x.jsonEndpoint )
        , ( "created_at", Jenc.string x.createdAt )
        , ( "processed_at", Jenc.string x.processedAt )
        , ( "google_url", Jenc.string x.googleURL )
        , ( "raw_html_file", Jenc.string x.rawHTMLFile )
        , ( "total_time_taken", Jenc.float x.totalTimeTaken )
        ]


searchParameters : Jdec.Decoder SearchParameters
searchParameters =
    Jdec.succeed SearchParameters
        |> Jpipe.required "engine" Jdec.string
        |> Jpipe.required "q" Jdec.string
        |> Jpipe.required "google_domain" Jdec.string
        |> Jpipe.required "ijn" Jdec.string
        |> Jpipe.required "device" Jdec.string
        |> Jpipe.required "tbm" Jdec.string


encodeSearchParameters : SearchParameters -> Jenc.Value
encodeSearchParameters x =
    Jenc.object
        [ ( "engine", Jenc.string x.engine )
        , ( "q", Jenc.string x.q )
        , ( "google_domain", Jenc.string x.googleDomain )
        , ( "ijn", Jenc.string x.ijn )
        , ( "device", Jenc.string x.device )
        , ( "tbm", Jenc.string x.tbm )
        ]
