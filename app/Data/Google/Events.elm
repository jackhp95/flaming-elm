module Data.Google.Events exposing (Bottom, DetectedExtensions, Events, EventsResult, HeaderImage, Inline, KnowledgeGraph, LieuxDIntrt, Link, ListElement, LocalMap, OrganicResult, Pagination, RelatedResult, RelatedSearch, RichSnippet, SearchInformation, SearchMetadata, SearchParameters, Sitelinks, Title(..), events, eventsToString)

import Dict exposing (Dict, map, toList)
import Json.Decode as Jdec
import Json.Decode.Pipeline as Jpipe
import Json.Encode as Jenc
import List exposing (map)
import Url.Builder exposing (..)



-- https://serpapi.com/events-results
--
-- curl --get https://serpapi.com/search \
--   -d q="events+in+Austin" \
--   -d google_domain="google.com" \
--   -d gl="us" \
--   -d hl="en" \
--   -d api_key="secret_api_key"


createEventHref : Event -> Url
createEventHref event =
    crossOrigin "https://www.google.com"
        [ "calendar", "render" ]
        [ string "action" "TEMPLATE"
        , string "text" event.title
        , string "details" event.description
        , string "location" event.location
        , string "dates" (event.startDate ++ "/" ++ event.endDate)
        ]


type alias Events =
    { searchMetadata : SearchMetadata
    , searchParameters : SearchParameters
    , searchInformation : SearchInformation
    , eventsResults : List EventsResult
    , knowledgeGraph : KnowledgeGraph
    , organicResults : List OrganicResult
    , relatedSearches : List RelatedSearch
    , pagination : Pagination
    , serpapiPagination : Pagination
    }


type alias EventsResult =
    { title : String
    , date : String
    , venue : String
    , link : String
    , time : Maybe String
    }


type alias KnowledgeGraph =
    { title : Title
    , knowledgeGraphType : String
    , headerImages : List HeaderImage
    , placeID : String
    , description : String
    , localMap : LocalMap
    , superficie : String
    , superficieLinks : List Link
    , altitude : String
    , altitudeLinks : List Link
    , mto : String
    , mtoLinks : List Link
    , heureLocale : String
    , heureLocaleLinks : List Link
    , population : String
    , populationLinks : List Link
    , maire : String
    , maireLinks : List Link
    , quartiers : String
    , quartiersLinks : List Link
    , organiserUnVoyage : List LieuxDIntrt
    , lieuxDIntrt : List LieuxDIntrt
    , lieuxDIntrtLink : String
    , universits : List LieuxDIntrt
    , universitsLink : String
    , universitsStick : String
    , recherchesAssocies : List LieuxDIntrt
    , recherchesAssociesLink : String
    , recherchesAssociesStick : String
    }


type alias Link =
    { text : String
    , link : String
    }


type alias HeaderImage =
    { source : String
    }


type alias LieuxDIntrt =
    { name : String
    , link : String
    , serpapiLink : String
    , image : Maybe String
    }


type alias LocalMap =
    { image : String
    , link : String
    }


type Title
    = Paris
    | TitleVnements
    | Vnements


type alias OrganicResult =
    { position : Int
    , title : String
    , link : String
    , displayedLink : String
    , snippet : String
    , snippetHighlightedWords : List Title
    , sitelinks : Maybe Sitelinks
    , cachedPageLink : Maybe String
    , relatedPagesLink : Maybe String
    , relatedResults : Maybe (List RelatedResult)
    , richSnippet : Maybe RichSnippet
    }


type alias RelatedResult =
    { position : Int
    , title : String
    , link : String
    , displayedLink : String
    , snippet : String
    , snippetHighlightedWords : List Title
    , cachedPageLink : String
    }


type alias RichSnippet =
    { bottom : Bottom
    }


type alias Bottom =
    { detectedExtensions : DetectedExtensions
    , extensions : List String
    }


type alias DetectedExtensions =
    { merAvr : Maybe ()
    , juin : Maybe Int
    , juinJobsInParis : Maybe Int
    , avr : Maybe Int
    , marsBilletMagicAvr : Maybe Int
    , marsBilletMagicMaxAvr : Maybe Int
    , marsBilletMagicMax : Maybe Int
    }


type alias Sitelinks =
    { inline : Maybe (List Inline)
    , list : Maybe (List ListElement)
    }


type alias Inline =
    { title : String
    , link : String
    }


type alias ListElement =
    { date : String
    }


type alias Pagination =
    { current : Int
    , next : String
    , otherPages : Dict String String
    , nextLink : Maybe String
    }


type alias RelatedSearch =
    { query : String
    , link : String
    }


type alias SearchInformation =
    { organicResultsState : String
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
    , hl : String
    , gl : String
    , device : String
    }



-- decoders and encoders


eventsToString : Events -> String
eventsToString r =
    Jenc.encode 0 (encodeEvents r)


events : Jdec.Decoder Events
events =
    Jpipe.decode Events
        |> Jpipe.required "search_metadata" searchMetadata
        |> Jpipe.required "search_parameters" searchParameters
        |> Jpipe.required "search_information" searchInformation
        |> Jpipe.required "events_results" (Jdec.list eventsResult)
        |> Jpipe.required "knowledge_graph" knowledgeGraph
        |> Jpipe.required "organic_results" (Jdec.list organicResult)
        |> Jpipe.required "related_searches" (Jdec.list relatedSearch)
        |> Jpipe.required "pagination" pagination
        |> Jpipe.required "serpapi_pagination" pagination


encodeEvents : Events -> Jenc.Value
encodeEvents x =
    Jenc.object
        [ ( "search_metadata", encodeSearchMetadata x.searchMetadata )
        , ( "search_parameters", encodeSearchParameters x.searchParameters )
        , ( "search_information", encodeSearchInformation x.searchInformation )
        , ( "events_results", makeListEncoder encodeEventsResult x.eventsResults )
        , ( "knowledge_graph", encodeKnowledgeGraph x.knowledgeGraph )
        , ( "organic_results", makeListEncoder encodeOrganicResult x.organicResults )
        , ( "related_searches", makeListEncoder encodeRelatedSearch x.relatedSearches )
        , ( "pagination", encodePagination x.pagination )
        , ( "serpapi_pagination", encodePagination x.serpapiPagination )
        ]


eventsResult : Jdec.Decoder EventsResult
eventsResult =
    Jpipe.decode EventsResult
        |> Jpipe.required "title" Jdec.string
        |> Jpipe.required "date" Jdec.string
        |> Jpipe.required "venue" Jdec.string
        |> Jpipe.required "link" Jdec.string
        |> Jpipe.optional "time" (Jdec.nullable Jdec.string) Nothing


encodeEventsResult : EventsResult -> Jenc.Value
encodeEventsResult x =
    Jenc.object
        [ ( "title", Jenc.string x.title )
        , ( "date", Jenc.string x.date )
        , ( "venue", Jenc.string x.venue )
        , ( "link", Jenc.string x.link )
        , ( "time", makeNullableEncoder Jenc.string x.time )
        ]


knowledgeGraph : Jdec.Decoder KnowledgeGraph
knowledgeGraph =
    Jpipe.decode KnowledgeGraph
        |> Jpipe.required "title" title
        |> Jpipe.required "type" Jdec.string
        |> Jpipe.required "header_images" (Jdec.list headerImage)
        |> Jpipe.required "place_id" Jdec.string
        |> Jpipe.required "description" Jdec.string
        |> Jpipe.required "local_map" localMap
        |> Jpipe.required "superficie" Jdec.string
        |> Jpipe.required "superficie_links" (Jdec.list link)
        |> Jpipe.required "altitude" Jdec.string
        |> Jpipe.required "altitude_links" (Jdec.list link)
        |> Jpipe.required "météo" Jdec.string
        |> Jpipe.required "météo_links" (Jdec.list link)
        |> Jpipe.required "heure_locale" Jdec.string
        |> Jpipe.required "heure_locale_links" (Jdec.list link)
        |> Jpipe.required "population" Jdec.string
        |> Jpipe.required "population_links" (Jdec.list link)
        |> Jpipe.required "maire" Jdec.string
        |> Jpipe.required "maire_links" (Jdec.list link)
        |> Jpipe.required "quartiers" Jdec.string
        |> Jpipe.required "quartiers_links" (Jdec.list link)
        |> Jpipe.required "organiser_un_voyage" (Jdec.list lieuxDIntrt)
        |> Jpipe.required "lieux_d_intérêt" (Jdec.list lieuxDIntrt)
        |> Jpipe.required "lieux_d_intérêt_link" Jdec.string
        |> Jpipe.required "universités" (Jdec.list lieuxDIntrt)
        |> Jpipe.required "universités_link" Jdec.string
        |> Jpipe.required "universités_stick" Jdec.string
        |> Jpipe.required "recherches_associées" (Jdec.list lieuxDIntrt)
        |> Jpipe.required "recherches_associées_link" Jdec.string
        |> Jpipe.required "recherches_associées_stick" Jdec.string


encodeKnowledgeGraph : KnowledgeGraph -> Jenc.Value
encodeKnowledgeGraph x =
    Jenc.object
        [ ( "title", encodeTitle x.title )
        , ( "type", Jenc.string x.knowledgeGraphType )
        , ( "header_images", makeListEncoder encodeHeaderImage x.headerImages )
        , ( "place_id", Jenc.string x.placeID )
        , ( "description", Jenc.string x.description )
        , ( "local_map", encodeLocalMap x.localMap )
        , ( "superficie", Jenc.string x.superficie )
        , ( "superficie_links", makeListEncoder encodeLink x.superficieLinks )
        , ( "altitude", Jenc.string x.altitude )
        , ( "altitude_links", makeListEncoder encodeLink x.altitudeLinks )
        , ( "météo", Jenc.string x.mto )
        , ( "météo_links", makeListEncoder encodeLink x.mtoLinks )
        , ( "heure_locale", Jenc.string x.heureLocale )
        , ( "heure_locale_links", makeListEncoder encodeLink x.heureLocaleLinks )
        , ( "population", Jenc.string x.population )
        , ( "population_links", makeListEncoder encodeLink x.populationLinks )
        , ( "maire", Jenc.string x.maire )
        , ( "maire_links", makeListEncoder encodeLink x.maireLinks )
        , ( "quartiers", Jenc.string x.quartiers )
        , ( "quartiers_links", makeListEncoder encodeLink x.quartiersLinks )
        , ( "organiser_un_voyage", makeListEncoder encodeLieuxDIntrt x.organiserUnVoyage )
        , ( "lieux_d_intérêt", makeListEncoder encodeLieuxDIntrt x.lieuxDIntrt )
        , ( "lieux_d_intérêt_link", Jenc.string x.lieuxDIntrtLink )
        , ( "universités", makeListEncoder encodeLieuxDIntrt x.universits )
        , ( "universités_link", Jenc.string x.universitsLink )
        , ( "universités_stick", Jenc.string x.universitsStick )
        , ( "recherches_associées", makeListEncoder encodeLieuxDIntrt x.recherchesAssocies )
        , ( "recherches_associées_link", Jenc.string x.recherchesAssociesLink )
        , ( "recherches_associées_stick", Jenc.string x.recherchesAssociesStick )
        ]


link : Jdec.Decoder Link
link =
    Jpipe.decode Link
        |> Jpipe.required "text" Jdec.string
        |> Jpipe.required "link" Jdec.string


encodeLink : Link -> Jenc.Value
encodeLink x =
    Jenc.object
        [ ( "text", Jenc.string x.text )
        , ( "link", Jenc.string x.link )
        ]


headerImage : Jdec.Decoder HeaderImage
headerImage =
    Jpipe.decode HeaderImage
        |> Jpipe.required "source" Jdec.string


encodeHeaderImage : HeaderImage -> Jenc.Value
encodeHeaderImage x =
    Jenc.object
        [ ( "source", Jenc.string x.source )
        ]


lieuxDIntrt : Jdec.Decoder LieuxDIntrt
lieuxDIntrt =
    Jpipe.decode LieuxDIntrt
        |> Jpipe.required "name" Jdec.string
        |> Jpipe.required "link" Jdec.string
        |> Jpipe.required "serpapi_link" Jdec.string
        |> Jpipe.optional "image" (Jdec.nullable Jdec.string) Nothing


encodeLieuxDIntrt : LieuxDIntrt -> Jenc.Value
encodeLieuxDIntrt x =
    Jenc.object
        [ ( "name", Jenc.string x.name )
        , ( "link", Jenc.string x.link )
        , ( "serpapi_link", Jenc.string x.serpapiLink )
        , ( "image", makeNullableEncoder Jenc.string x.image )
        ]


localMap : Jdec.Decoder LocalMap
localMap =
    Jpipe.decode LocalMap
        |> Jpipe.required "image" Jdec.string
        |> Jpipe.required "link" Jdec.string


encodeLocalMap : LocalMap -> Jenc.Value
encodeLocalMap x =
    Jenc.object
        [ ( "image", Jenc.string x.image )
        , ( "link", Jenc.string x.link )
        ]


title : Jdec.Decoder Title
title =
    Jdec.string
        |> Jdec.andThen
            (\str ->
                case str of
                    "Paris" ->
                        Jdec.succeed Paris

                    "Événements" ->
                        Jdec.succeed TitleVnements

                    "événements" ->
                        Jdec.succeed Vnements

                    somethingElse ->
                        Jdec.fail <| "Invalid Title: " ++ somethingElse
            )


encodeTitle : Title -> Jenc.Value
encodeTitle x =
    case x of
        Paris ->
            Jenc.string "Paris"

        TitleVnements ->
            Jenc.string "Événements"

        Vnements ->
            Jenc.string "événements"


organicResult : Jdec.Decoder OrganicResult
organicResult =
    Jpipe.decode OrganicResult
        |> Jpipe.required "position" Jdec.int
        |> Jpipe.required "title" Jdec.string
        |> Jpipe.required "link" Jdec.string
        |> Jpipe.required "displayed_link" Jdec.string
        |> Jpipe.required "snippet" Jdec.string
        |> Jpipe.required "snippet_highlighted_words" (Jdec.list title)
        |> Jpipe.optional "sitelinks" (Jdec.nullable sitelinks) Nothing
        |> Jpipe.optional "cached_page_link" (Jdec.nullable Jdec.string) Nothing
        |> Jpipe.optional "related_pages_link" (Jdec.nullable Jdec.string) Nothing
        |> Jpipe.optional "related_results" (Jdec.nullable (Jdec.list relatedResult)) Nothing
        |> Jpipe.optional "rich_snippet" (Jdec.nullable richSnippet) Nothing


encodeOrganicResult : OrganicResult -> Jenc.Value
encodeOrganicResult x =
    Jenc.object
        [ ( "position", Jenc.int x.position )
        , ( "title", Jenc.string x.title )
        , ( "link", Jenc.string x.link )
        , ( "displayed_link", Jenc.string x.displayedLink )
        , ( "snippet", Jenc.string x.snippet )
        , ( "snippet_highlighted_words", makeListEncoder encodeTitle x.snippetHighlightedWords )
        , ( "sitelinks", makeNullableEncoder encodeSitelinks x.sitelinks )
        , ( "cached_page_link", makeNullableEncoder Jenc.string x.cachedPageLink )
        , ( "related_pages_link", makeNullableEncoder Jenc.string x.relatedPagesLink )
        , ( "related_results", makeNullableEncoder (makeListEncoder encodeRelatedResult) x.relatedResults )
        , ( "rich_snippet", makeNullableEncoder encodeRichSnippet x.richSnippet )
        ]


relatedResult : Jdec.Decoder RelatedResult
relatedResult =
    Jpipe.decode RelatedResult
        |> Jpipe.required "position" Jdec.int
        |> Jpipe.required "title" Jdec.string
        |> Jpipe.required "link" Jdec.string
        |> Jpipe.required "displayed_link" Jdec.string
        |> Jpipe.required "snippet" Jdec.string
        |> Jpipe.required "snippet_highlighted_words" (Jdec.list title)
        |> Jpipe.required "cached_page_link" Jdec.string


encodeRelatedResult : RelatedResult -> Jenc.Value
encodeRelatedResult x =
    Jenc.object
        [ ( "position", Jenc.int x.position )
        , ( "title", Jenc.string x.title )
        , ( "link", Jenc.string x.link )
        , ( "displayed_link", Jenc.string x.displayedLink )
        , ( "snippet", Jenc.string x.snippet )
        , ( "snippet_highlighted_words", makeListEncoder encodeTitle x.snippetHighlightedWords )
        , ( "cached_page_link", Jenc.string x.cachedPageLink )
        ]


richSnippet : Jdec.Decoder RichSnippet
richSnippet =
    Jpipe.decode RichSnippet
        |> Jpipe.required "bottom" bottom


encodeRichSnippet : RichSnippet -> Jenc.Value
encodeRichSnippet x =
    Jenc.object
        [ ( "bottom", encodeBottom x.bottom )
        ]


bottom : Jdec.Decoder Bottom
bottom =
    Jpipe.decode Bottom
        |> Jpipe.required "detected_extensions" detectedExtensions
        |> Jpipe.required "extensions" (Jdec.list Jdec.string)


encodeBottom : Bottom -> Jenc.Value
encodeBottom x =
    Jenc.object
        [ ( "detected_extensions", encodeDetectedExtensions x.detectedExtensions )
        , ( "extensions", makeListEncoder Jenc.string x.extensions )
        ]


detectedExtensions : Jdec.Decoder DetectedExtensions
detectedExtensions =
    Jpipe.decode DetectedExtensions
        |> Jpipe.optional "mer_avr" (Jdec.nullable (Jdec.null ())) Nothing
        |> Jpipe.optional "juin" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "juin_jobs_in_paris" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "avr" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "mars_billet_magic_avr" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "mars_billet_magic_max_avr" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "mars_billet_magic_max" (Jdec.nullable Jdec.int) Nothing


encodeDetectedExtensions : DetectedExtensions -> Jenc.Value
encodeDetectedExtensions x =
    Jenc.object
        [ ( "mer_avr", makeNullableEncoder (always Jenc.null) x.merAvr )
        , ( "juin", makeNullableEncoder Jenc.int x.juin )
        , ( "juin_jobs_in_paris", makeNullableEncoder Jenc.int x.juinJobsInParis )
        , ( "avr", makeNullableEncoder Jenc.int x.avr )
        , ( "mars_billet_magic_avr", makeNullableEncoder Jenc.int x.marsBilletMagicAvr )
        , ( "mars_billet_magic_max_avr", makeNullableEncoder Jenc.int x.marsBilletMagicMaxAvr )
        , ( "mars_billet_magic_max", makeNullableEncoder Jenc.int x.marsBilletMagicMax )
        ]


sitelinks : Jdec.Decoder Sitelinks
sitelinks =
    Jpipe.decode Sitelinks
        |> Jpipe.optional "inline" (Jdec.nullable (Jdec.list inline)) Nothing
        |> Jpipe.optional "list" (Jdec.nullable (Jdec.list listElement)) Nothing


encodeSitelinks : Sitelinks -> Jenc.Value
encodeSitelinks x =
    Jenc.object
        [ ( "inline", makeNullableEncoder (makeListEncoder encodeInline) x.inline )
        , ( "list", makeNullableEncoder (makeListEncoder encodeListElement) x.list )
        ]


inline : Jdec.Decoder Inline
inline =
    Jpipe.decode Inline
        |> Jpipe.required "title" Jdec.string
        |> Jpipe.required "link" Jdec.string


encodeInline : Inline -> Jenc.Value
encodeInline x =
    Jenc.object
        [ ( "title", Jenc.string x.title )
        , ( "link", Jenc.string x.link )
        ]


listElement : Jdec.Decoder ListElement
listElement =
    Jpipe.decode ListElement
        |> Jpipe.required "date" Jdec.string


encodeListElement : ListElement -> Jenc.Value
encodeListElement x =
    Jenc.object
        [ ( "date", Jenc.string x.date )
        ]


pagination : Jdec.Decoder Pagination
pagination =
    Jpipe.decode Pagination
        |> Jpipe.required "current" Jdec.int
        |> Jpipe.required "next" Jdec.string
        |> Jpipe.required "other_pages" (Jdec.dict Jdec.string)
        |> Jpipe.optional "next_link" (Jdec.nullable Jdec.string) Nothing


encodePagination : Pagination -> Jenc.Value
encodePagination x =
    Jenc.object
        [ ( "current", Jenc.int x.current )
        , ( "next", Jenc.string x.next )
        , ( "other_pages", makeDictEncoder Jenc.string x.otherPages )
        , ( "next_link", makeNullableEncoder Jenc.string x.nextLink )
        ]


relatedSearch : Jdec.Decoder RelatedSearch
relatedSearch =
    Jpipe.decode RelatedSearch
        |> Jpipe.required "query" Jdec.string
        |> Jpipe.required "link" Jdec.string


encodeRelatedSearch : RelatedSearch -> Jenc.Value
encodeRelatedSearch x =
    Jenc.object
        [ ( "query", Jenc.string x.query )
        , ( "link", Jenc.string x.link )
        ]


searchInformation : Jdec.Decoder SearchInformation
searchInformation =
    Jpipe.decode SearchInformation
        |> Jpipe.required "organic_results_state" Jdec.string
        |> Jpipe.required "query_displayed" Jdec.string


encodeSearchInformation : SearchInformation -> Jenc.Value
encodeSearchInformation x =
    Jenc.object
        [ ( "organic_results_state", Jenc.string x.organicResultsState )
        , ( "query_displayed", Jenc.string x.queryDisplayed )
        ]


searchMetadata : Jdec.Decoder SearchMetadata
searchMetadata =
    Jpipe.decode SearchMetadata
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
    Jpipe.decode SearchParameters
        |> Jpipe.required "engine" Jdec.string
        |> Jpipe.required "q" Jdec.string
        |> Jpipe.required "google_domain" Jdec.string
        |> Jpipe.required "hl" Jdec.string
        |> Jpipe.required "gl" Jdec.string
        |> Jpipe.required "device" Jdec.string


encodeSearchParameters : SearchParameters -> Jenc.Value
encodeSearchParameters x =
    Jenc.object
        [ ( "engine", Jenc.string x.engine )
        , ( "q", Jenc.string x.q )
        , ( "google_domain", Jenc.string x.googleDomain )
        , ( "hl", Jenc.string x.hl )
        , ( "gl", Jenc.string x.gl )
        , ( "device", Jenc.string x.device )
        ]



--- encoder helpers


makeListEncoder : (a -> Jenc.Value) -> List a -> Jenc.Value
makeListEncoder f arr =
    Jenc.list (List.map f arr)


makeDictEncoder : (a -> Jenc.Value) -> Dict String a -> Jenc.Value
makeDictEncoder f dict =
    Jenc.object (toList (Dict.map (\k -> f) dict))


makeNullableEncoder : (a -> Jenc.Value) -> Maybe a -> Jenc.Value
makeNullableEncoder f m =
    case m of
        Just x ->
            f x

        Nothing ->
            Jenc.null
