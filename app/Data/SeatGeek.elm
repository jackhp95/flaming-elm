module Data.SeatGeek exposing (..)

import Dict exposing (Dict, toList)
import Iso8601
import Json.Decode as Jdec
import Json.Decode.Pipeline as Jpipe
import Json.Encode as Jenc
import String.Extra
import Time exposing (Posix)


type alias Events =
    { events : List Event
    , meta : Meta
    }


type alias Event =
    { eventType : UpperEnum
    , id : Int
    , datetimeUTC : Posix
    , venue : Venue
    , datetimeTbd : Bool
    , performers : List Performer
    , isOpen : Bool
    , links : List Jdec.Value
    , datetimeLocal : Posix
    , timeTbd : Bool
    , shortTitle : String
    , visibleUntilUTC : String
    , stats : EventStats
    , taxonomies : List Taxonomy
    , url : String
    , score : Float
    , announceDate : String
    , createdAt : String
    , dateTbd : Bool
    , title : String
    , popularity : Float
    , description : String
    , status : Status
    , accessMethod : ()
    , eventPromotion : ()
    , announcements : Announcements
    , conditional : Bool
    , enddatetimeUTC : ()
    , themes : List Jdec.Value
    , domainInformation : List Jdec.Value
    , generalAdmission : Maybe Bool
    }


type alias Announcements =
    {}


type alias Performer =
    { performerType : UpperEnum
    , name : String
    , image : String
    , id : Int
    , images : ImageGallery
    , divisions : List Division
    , hasUpcomingEvents : Bool
    , primary : Maybe Bool
    , stats : PerformerStats
    , taxonomies : List Taxonomy
    , imageAttribution : Maybe String
    , url : String
    , score : Float
    , slug : String
    , homeVenueID : Maybe Int
    , shortName : String
    , numUpcomingEvents : Int
    , colors : Maybe Colors
    , imageLicense : Maybe String
    , genres : List Genre
    , popularity : Int
    , location : Maybe Location
    , imageRightsMessage : String
    , homeTeam : Maybe Bool
    , awayTeam : Maybe Bool
    }


type alias Division =
    { taxonomyId : Int
    , shortName : Maybe String
    , displayName : String
    , displayType : String
    , divisionLevel : Int
    , slug : Maybe String
    }


type alias Genre =
    { id : Int
    , name : String
    , slug : String
    , primary : Bool
    , images : Dict String String
    , image : String
    , documentSource : DocumentSource
    }


type alias DocumentSource =
    { sourceType : SourceType
    , generationType : GenerationType
    }


type GenerationType
    = Full


type SourceType
    = Elastic


type alias ImageGallery =
    Dict String String


type alias Location =
    { lat : Float
    , lon : Float
    }


type alias Colors =
    { all : List String
    , iconic : String
    , primary : List String
    }


type alias PerformerStats =
    { eventCount : Int }


type alias Taxonomy =
    { id : Int
    , name : UpperEnum
    , parentID : Maybe Int
    , documentSource : Maybe DocumentSource
    , rank : Int
    }


type alias EventStats =
    { listingCount : Maybe Int
    , averagePrice : Maybe Int
    , lowestPriceGoodDeals : Maybe Int
    , lowestPrice : Maybe Int
    , highestPrice : Maybe Int
    , visibleListingCount : Maybe Int
    , dqBucketCounts : List Int
    , medianPrice : Maybe Int
    , lowestSgBasePrice : Maybe Int
    , lowestSgBasePriceGoodDeals : Maybe Int
    }


type Status
    = Normal


type alias Venue =
    { state : String
    , nameV2 : String
    , postalCode : String
    , name : String
    , links : List Jdec.Value
    , timezone : String
    , url : String
    , score : Float
    , location : Location
    , address : String
    , country : String
    , hasUpcomingEvents : Bool
    , numUpcomingEvents : Int
    , city : String
    , slug : String
    , extendedAddress : String
    , id : Int
    , popularity : Int
    , accessMethod : ()
    , metroCode : Int
    , capacity : Int
    , displayLocation : String
    }


type alias Meta =
    { total : Int
    , took : Int
    , page : Int
    , perPage : Int
    , geolocation : Geolocation
    }


type alias Geolocation =
    { lat : Float
    , lon : Float
    , city : String
    , state : String
    , country : String
    , postalCode : String
    , displayName : String
    , metroCode : String
    , range : String
    }


type UpperEnum
    = Up String



-- decoders and encoders


eventsToString : Events -> String
eventsToString r =
    Jenc.encode 0 (encodeEvents r)


events : Jdec.Decoder Events
events =
    Jdec.succeed Events
        |> Jpipe.required "events" (Jdec.list event)
        |> Jpipe.required "meta" meta


encodeEvents : Events -> Jenc.Value
encodeEvents x =
    Jenc.object
        [ ( "events", makeListEncoder encodeEvent x.events )
        , ( "meta", encodeMeta x.meta )
        ]


event : Jdec.Decoder Event
event =
    Jdec.succeed Event
        |> Jpipe.required "type" upperEnum
        |> Jpipe.required "id" Jdec.int
        |> Jpipe.required "datetime_utc" Iso8601.decoder
        |> Jpipe.required "venue" venue
        |> Jpipe.required "datetime_tbd" Jdec.bool
        |> Jpipe.required "performers" (Jdec.list performer)
        |> Jpipe.required "is_open" Jdec.bool
        |> Jpipe.required "links" (Jdec.list Jdec.value)
        |> Jpipe.required "datetime_local" Iso8601.decoder
        |> Jpipe.required "time_tbd" Jdec.bool
        |> Jpipe.required "short_title" Jdec.string
        |> Jpipe.required "visible_until_utc" Jdec.string
        |> Jpipe.required "stats" eventStats
        |> Jpipe.required "taxonomies" (Jdec.list taxonomy)
        |> Jpipe.required "url" Jdec.string
        |> Jpipe.required "score" Jdec.float
        |> Jpipe.required "announce_date" Jdec.string
        |> Jpipe.required "created_at" Jdec.string
        |> Jpipe.required "date_tbd" Jdec.bool
        |> Jpipe.required "title" Jdec.string
        |> Jpipe.required "popularity" Jdec.float
        |> Jpipe.required "description" Jdec.string
        |> Jpipe.required "status" status
        |> Jpipe.optional "access_method" (Jdec.null ()) ()
        |> Jpipe.optional "event_promotion" (Jdec.null ()) ()
        |> Jpipe.required "announcements" announcements
        |> Jpipe.required "conditional" Jdec.bool
        |> Jpipe.optional "enddatetime_utc" (Jdec.null ()) ()
        |> Jpipe.required "themes" (Jdec.list Jdec.value)
        |> Jpipe.required "domain_information" (Jdec.list Jdec.value)
        |> Jpipe.optional "general_admission" (Jdec.nullable Jdec.bool) Nothing


encodeEvent : Event -> Jenc.Value
encodeEvent x =
    Jenc.object
        [ ( "type", encodeUpperEnum x.eventType )
        , ( "id", Jenc.int x.id )
        , ( "datetime_utc", Iso8601.encode x.datetimeUTC )
        , ( "venue", encodeVenue x.venue )
        , ( "datetime_tbd", Jenc.bool x.datetimeTbd )
        , ( "performers", makeListEncoder encodePerformer x.performers )
        , ( "is_open", Jenc.bool x.isOpen )
        , ( "links", makeListEncoder identity x.links )
        , ( "datetime_local", Iso8601.encode x.datetimeLocal )
        , ( "time_tbd", Jenc.bool x.timeTbd )
        , ( "short_title", Jenc.string x.shortTitle )
        , ( "visible_until_utc", Jenc.string x.visibleUntilUTC )
        , ( "stats", encodeEventStats x.stats )
        , ( "taxonomies", makeListEncoder encodeTaxonomy x.taxonomies )
        , ( "url", Jenc.string x.url )
        , ( "score", Jenc.float x.score )
        , ( "announce_date", Jenc.string x.announceDate )
        , ( "created_at", Jenc.string x.createdAt )
        , ( "date_tbd", Jenc.bool x.dateTbd )
        , ( "title", Jenc.string x.title )
        , ( "popularity", Jenc.float x.popularity )
        , ( "description", Jenc.string x.description )
        , ( "status", encodeStatus x.status )
        , ( "access_method", always Jenc.null x.accessMethod )
        , ( "event_promotion", always Jenc.null x.eventPromotion )
        , ( "announcements", encodeAnnouncements x.announcements )
        , ( "conditional", Jenc.bool x.conditional )
        , ( "enddatetime_utc", always Jenc.null x.enddatetimeUTC )
        , ( "themes", makeListEncoder identity x.themes )
        , ( "domain_information", makeListEncoder identity x.domainInformation )
        , ( "general_admission", makeNullableEncoder Jenc.bool x.generalAdmission )
        ]


division : Jdec.Decoder Division
division =
    Jdec.succeed Division
        |> Jpipe.required "taxonomy_id" Jdec.int
        |> Jpipe.required "short_name" (Jdec.maybe Jdec.string)
        |> Jpipe.required "display_name" Jdec.string
        |> Jpipe.required "display_type" Jdec.string
        |> Jpipe.required "division_level" Jdec.int
        |> Jpipe.required "slug" (Jdec.maybe Jdec.string)


encodeDivision : Division -> Jenc.Value
encodeDivision x =
    Jenc.object
        [ ( "taxonomy_id", Jenc.int x.taxonomyId )
        , ( "short_name", makeNullableEncoder Jenc.string x.shortName )
        , ( "display_name", Jenc.string x.displayName )
        , ( "display_type", Jenc.string x.displayType )
        , ( "division_level", Jenc.int x.divisionLevel )
        , ( "slug", makeNullableEncoder Jenc.string x.slug )
        ]


announcements : Jdec.Decoder Announcements
announcements =
    Jdec.succeed Announcements


encodeAnnouncements : Announcements -> Jenc.Value
encodeAnnouncements x =
    Jenc.object []


upperEnumFromString : String -> UpperEnum
upperEnumFromString =
    String.Extra.humanize >> String.toUpper >> Up


upperEnum : Jdec.Decoder UpperEnum
upperEnum =
    Jdec.string
        |> Jdec.map upperEnumFromString


upperEnumToString : UpperEnum -> String
upperEnumToString (Up enum) =
    String.toLower enum |> String.Extra.underscored


encodeUpperEnum : UpperEnum -> Jenc.Value
encodeUpperEnum =
    upperEnumToString >> Jenc.string


performer : Jdec.Decoder Performer
performer =
    Jdec.succeed Performer
        |> Jpipe.required "type" upperEnum
        |> Jpipe.required "name" Jdec.string
        |> Jpipe.required "image" Jdec.string
        |> Jpipe.required "id" Jdec.int
        |> Jpipe.required "images" imageGallery
        |> Jpipe.optional "divisions" (Jdec.list division) []
        |> Jpipe.required "has_upcoming_events" Jdec.bool
        |> Jpipe.optional "primary" (Jdec.nullable Jdec.bool) Nothing
        |> Jpipe.required "stats" performerStats
        |> Jpipe.required "taxonomies" (Jdec.list taxonomy)
        |> Jpipe.optional "image_attribution" (Jdec.nullable Jdec.string) Nothing
        |> Jpipe.required "url" Jdec.string
        |> Jpipe.required "score" Jdec.float
        |> Jpipe.required "slug" Jdec.string
        |> Jpipe.optional "home_venue_id" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.required "short_name" Jdec.string
        |> Jpipe.required "num_upcoming_events" Jdec.int
        |> Jpipe.optional "colors" (Jdec.nullable colors) Nothing
        |> Jpipe.optional "image_license" (Jdec.nullable Jdec.string) Nothing
        |> Jpipe.optional "genres" (Jdec.list genre) []
        |> Jpipe.required "popularity" Jdec.int
        |> Jpipe.optional "location" (Jdec.nullable location) Nothing
        |> Jpipe.required "image_rights_message" Jdec.string
        |> Jpipe.optional "home_team" (Jdec.nullable Jdec.bool) Nothing
        |> Jpipe.optional "away_team" (Jdec.nullable Jdec.bool) Nothing


encodePerformer : Performer -> Jenc.Value
encodePerformer x =
    Jenc.object
        [ ( "type", encodeUpperEnum x.performerType )
        , ( "name", Jenc.string x.name )
        , ( "image", Jenc.string x.image )
        , ( "id", Jenc.int x.id )
        , ( "images", encodeImageGallery x.images )
        , ( "divisions", Jenc.list encodeDivision x.divisions )
        , ( "has_upcoming_events", Jenc.bool x.hasUpcomingEvents )
        , ( "primary", makeNullableEncoder Jenc.bool x.primary )
        , ( "stats", encodePerformerStats x.stats )
        , ( "taxonomies", makeListEncoder encodeTaxonomy x.taxonomies )
        , ( "image_attribution", makeNullableEncoder Jenc.string x.imageAttribution )
        , ( "url", Jenc.string x.url )
        , ( "score", Jenc.float x.score )
        , ( "slug", Jenc.string x.slug )
        , ( "home_venue_id", makeNullableEncoder Jenc.int x.homeVenueID )
        , ( "short_name", Jenc.string x.shortName )
        , ( "num_upcoming_events", Jenc.int x.numUpcomingEvents )
        , ( "colors", always Jenc.null x.colors )
        , ( "image_license", makeNullableEncoder Jenc.string x.imageLicense )
        , ( "genres", makeListEncoder encodeGenre x.genres )
        , ( "popularity", Jenc.int x.popularity )
        , ( "location", makeNullableEncoder encodeLocation x.location )
        , ( "image_rights_message", Jenc.string x.imageRightsMessage )
        , ( "home_team", makeNullableEncoder Jenc.bool x.homeTeam )
        , ( "away_team", makeNullableEncoder Jenc.bool x.awayTeam )
        ]


genre : Jdec.Decoder Genre
genre =
    Jdec.succeed Genre
        |> Jpipe.required "id" Jdec.int
        |> Jpipe.required "name" Jdec.string
        |> Jpipe.required "slug" Jdec.string
        |> Jpipe.required "primary" Jdec.bool
        |> Jpipe.required "images" imageGallery
        |> Jpipe.required "image" Jdec.string
        |> Jpipe.required "document_source" documentSource


encodeGenre : Genre -> Jenc.Value
encodeGenre x =
    Jenc.object
        [ ( "id", Jenc.int x.id )
        , ( "name", Jenc.string x.name )
        , ( "slug", Jenc.string x.slug )
        , ( "primary", Jenc.bool x.primary )
        , ( "images", encodeImageGallery x.images )
        , ( "image", Jenc.string x.image )
        , ( "document_source", encodeDocumentSource x.documentSource )
        ]


documentSource : Jdec.Decoder DocumentSource
documentSource =
    Jdec.succeed DocumentSource
        |> Jpipe.required "source_type" sourceType
        |> Jpipe.required "generation_type" generationType


encodeDocumentSource : DocumentSource -> Jenc.Value
encodeDocumentSource x =
    Jenc.object
        [ ( "source_type", encodeSourceType x.sourceType )
        , ( "generation_type", encodeGenerationType x.generationType )
        ]


generationType : Jdec.Decoder GenerationType
generationType =
    Jdec.string
        |> Jdec.andThen
            (\str ->
                case str of
                    "FULL" ->
                        Jdec.succeed Full

                    somethingElse ->
                        Jdec.fail <| "Invalid GenerationType: " ++ somethingElse
            )


encodeGenerationType : GenerationType -> Jenc.Value
encodeGenerationType x =
    case x of
        Full ->
            Jenc.string "FULL"


sourceType : Jdec.Decoder SourceType
sourceType =
    Jdec.string
        |> Jdec.andThen
            (\str ->
                case str of
                    "ELASTIC" ->
                        Jdec.succeed Elastic

                    somethingElse ->
                        Jdec.fail <| "Invalid SourceType: " ++ somethingElse
            )


encodeSourceType : SourceType -> Jenc.Value
encodeSourceType x =
    case x of
        Elastic ->
            Jenc.string "ELASTIC"


encodeImageGallery : ImageGallery -> Jenc.Value
encodeImageGallery =
    Jenc.dict identity Jenc.string


imageGallery : Jdec.Decoder ImageGallery
imageGallery =
    Jdec.dict Jdec.string


location : Jdec.Decoder Location
location =
    Jdec.succeed Location
        |> Jpipe.required "lat" Jdec.float
        |> Jpipe.required "lon" Jdec.float


encodeLocation : Location -> Jenc.Value
encodeLocation x =
    Jenc.object
        [ ( "lat", Jenc.float x.lat )
        , ( "lon", Jenc.float x.lon )
        ]


colors : Jdec.Decoder Colors
colors =
    Jdec.succeed Colors
        |> Jpipe.required "all" (Jdec.list Jdec.string)
        |> Jpipe.required "iconic" Jdec.string
        |> Jpipe.required "primary" (Jdec.list Jdec.string)


encodeColors : Colors -> Jenc.Value
encodeColors x =
    Jenc.object
        [ ( "all", Jenc.list Jenc.string x.all )
        , ( "iconic", Jenc.string x.iconic )
        , ( "primary", Jenc.list Jenc.string x.primary )
        ]


performerStats : Jdec.Decoder PerformerStats
performerStats =
    Jdec.succeed PerformerStats
        |> Jpipe.required "event_count" Jdec.int


encodePerformerStats : PerformerStats -> Jenc.Value
encodePerformerStats x =
    Jenc.object
        [ ( "event_count", Jenc.int x.eventCount )
        ]


taxonomy : Jdec.Decoder Taxonomy
taxonomy =
    Jdec.succeed Taxonomy
        |> Jpipe.required "id" Jdec.int
        |> Jpipe.required "name" upperEnum
        |> Jpipe.optional "parent_id" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "document_source" (Jdec.nullable documentSource) Nothing
        |> Jpipe.required "rank" Jdec.int


encodeTaxonomy : Taxonomy -> Jenc.Value
encodeTaxonomy x =
    Jenc.object
        [ ( "id", Jenc.int x.id )
        , ( "name", encodeUpperEnum x.name )
        , ( "parent_id", makeNullableEncoder Jenc.int x.parentID )
        , ( "document_source", makeNullableEncoder encodeDocumentSource x.documentSource )
        , ( "rank", Jenc.int x.rank )
        ]


eventStats : Jdec.Decoder EventStats
eventStats =
    Jdec.succeed EventStats
        |> Jpipe.optional "listing_count" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "average_price" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "lowest_price_good_deals" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "lowest_price" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "highest_price" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "visible_listing_count" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "dq_bucket_counts" (Jdec.list Jdec.int) []
        |> Jpipe.optional "median_price" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "lowest_sg_base_price" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "lowest_sg_base_price_good_deals" (Jdec.nullable Jdec.int) Nothing


encodeEventStats : EventStats -> Jenc.Value
encodeEventStats x =
    Jenc.object
        [ ( "listing_count", makeNullableEncoder Jenc.int x.listingCount )
        , ( "average_price", makeNullableEncoder Jenc.int x.averagePrice )
        , ( "lowest_price_good_deals", makeNullableEncoder Jenc.int x.lowestPriceGoodDeals )
        , ( "lowest_price", makeNullableEncoder Jenc.int x.lowestPrice )
        , ( "highest_price", makeNullableEncoder Jenc.int x.highestPrice )
        , ( "visible_listing_count", makeNullableEncoder Jenc.int x.visibleListingCount )
        , ( "dq_bucket_counts", makeListEncoder Jenc.int x.dqBucketCounts )
        , ( "median_price", makeNullableEncoder Jenc.int x.medianPrice )
        , ( "lowest_sg_base_price", makeNullableEncoder Jenc.int x.lowestSgBasePrice )
        , ( "lowest_sg_base_price_good_deals", makeNullableEncoder Jenc.int x.lowestSgBasePriceGoodDeals )
        ]


status : Jdec.Decoder Status
status =
    Jdec.string
        |> Jdec.andThen
            (\str ->
                case str of
                    "normal" ->
                        Jdec.succeed Normal

                    somethingElse ->
                        Jdec.fail <| "Invalid Status: " ++ somethingElse
            )


encodeStatus : Status -> Jenc.Value
encodeStatus x =
    case x of
        Normal ->
            Jenc.string "normal"


venue : Jdec.Decoder Venue
venue =
    Jdec.succeed Venue
        |> Jpipe.required "state" Jdec.string
        |> Jpipe.required "name_v2" Jdec.string
        |> Jpipe.required "postal_code" Jdec.string
        |> Jpipe.required "name" Jdec.string
        |> Jpipe.required "links" (Jdec.list Jdec.value)
        |> Jpipe.required "timezone" Jdec.string
        |> Jpipe.required "url" Jdec.string
        |> Jpipe.required "score" Jdec.float
        |> Jpipe.required "location" location
        |> Jpipe.required "address" Jdec.string
        |> Jpipe.required "country" Jdec.string
        |> Jpipe.required "has_upcoming_events" Jdec.bool
        |> Jpipe.required "num_upcoming_events" Jdec.int
        |> Jpipe.required "city" Jdec.string
        |> Jpipe.required "slug" Jdec.string
        |> Jpipe.required "extended_address" Jdec.string
        |> Jpipe.required "id" Jdec.int
        |> Jpipe.required "popularity" Jdec.int
        |> Jpipe.optional "access_method" (Jdec.null ()) ()
        |> Jpipe.required "metro_code" Jdec.int
        |> Jpipe.required "capacity" Jdec.int
        |> Jpipe.required "display_location" Jdec.string


encodeVenue : Venue -> Jenc.Value
encodeVenue x =
    Jenc.object
        [ ( "state", Jenc.string x.state )
        , ( "name_v2", Jenc.string x.nameV2 )
        , ( "postal_code", Jenc.string x.postalCode )
        , ( "name", Jenc.string x.name )
        , ( "links", makeListEncoder identity x.links )
        , ( "timezone", Jenc.string x.timezone )
        , ( "url", Jenc.string x.url )
        , ( "score", Jenc.float x.score )
        , ( "location", encodeLocation x.location )
        , ( "address", Jenc.string x.address )
        , ( "country", Jenc.string x.country )
        , ( "has_upcoming_events", Jenc.bool x.hasUpcomingEvents )
        , ( "num_upcoming_events", Jenc.int x.numUpcomingEvents )
        , ( "city", Jenc.string x.city )
        , ( "slug", Jenc.string x.slug )
        , ( "extended_address", Jenc.string x.extendedAddress )
        , ( "id", Jenc.int x.id )
        , ( "popularity", Jenc.int x.popularity )
        , ( "access_method", always Jenc.null x.accessMethod )
        , ( "metro_code", Jenc.int x.metroCode )
        , ( "capacity", Jenc.int x.capacity )
        , ( "display_location", Jenc.string x.displayLocation )
        ]


meta : Jdec.Decoder Meta
meta =
    Jdec.succeed Meta
        |> Jpipe.required "total" Jdec.int
        |> Jpipe.required "took" Jdec.int
        |> Jpipe.required "page" Jdec.int
        |> Jpipe.required "per_page" Jdec.int
        |> Jpipe.required "geolocation" geolocation


encodeMeta : Meta -> Jenc.Value
encodeMeta x =
    Jenc.object
        [ ( "total", Jenc.int x.total )
        , ( "took", Jenc.int x.took )
        , ( "page", Jenc.int x.page )
        , ( "per_page", Jenc.int x.perPage )
        , ( "geolocation", encodeGeolocation x.geolocation )
        ]


geolocation : Jdec.Decoder Geolocation
geolocation =
    Jdec.succeed Geolocation
        |> Jpipe.required "lat" Jdec.float
        |> Jpipe.required "lon" Jdec.float
        |> Jpipe.required "city" Jdec.string
        |> Jpipe.required "state" Jdec.string
        |> Jpipe.required "country" Jdec.string
        |> Jpipe.required "postal_code" Jdec.string
        |> Jpipe.required "display_name" Jdec.string
        |> Jpipe.required "metro_code" Jdec.string
        |> Jpipe.required "range" Jdec.string


encodeGeolocation : Geolocation -> Jenc.Value
encodeGeolocation x =
    Jenc.object
        [ ( "lat", Jenc.float x.lat )
        , ( "lon", Jenc.float x.lon )
        , ( "city", Jenc.string x.city )
        , ( "state", Jenc.string x.state )
        , ( "country", Jenc.string x.country )
        , ( "postal_code", Jenc.string x.postalCode )
        , ( "display_name", Jenc.string x.displayName )
        , ( "metro_code", Jenc.string x.metroCode )
        , ( "range", Jenc.string x.range )
        ]



--- encoder helpers


makeListEncoder : (a -> Jenc.Value) -> List a -> Jenc.Value
makeListEncoder =
    Jenc.list


makeDictEncoder : (a -> Jenc.Value) -> Dict String a -> Jenc.Value
makeDictEncoder f dict =
    Jenc.object (toList (Dict.map (\_ -> f) dict))


makeNullableEncoder : (a -> Jenc.Value) -> Maybe a -> Jenc.Value
makeNullableEncoder f m =
    case m of
        Just x ->
            f x

        Nothing ->
            Jenc.null
