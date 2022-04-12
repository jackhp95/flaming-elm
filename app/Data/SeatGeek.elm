module Data.SeatGeek exposing (..)

import Dict exposing (Dict, map, toList)
import Iso8601
import Json.Decode as Jdec
import Json.Decode.Pipeline as Jpipe
import Json.Encode as Jenc
import List exposing (map)
import Time exposing (Posix)


type alias Events =
    { events : List Event
    , meta : Meta
    }


type alias Event =
    { eventType : NameEnum
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


type NameEnum
    = Baseball
    | BroadwayTicketsNational
    | Classical
    | Comedy
    | Concert
    | Concerts
    | PurpleNcaaBaseball
    | PurpleTheater
    | Sports


type alias Performer =
    { performerType : PerformerType
    , name : String
    , image : String
    , id : Int
    , images : PerformerImages
    , divisions : ()
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
    , colors : ()
    , imageLicense : Maybe String
    , genres : Maybe (List Genre)
    , popularity : Int
    , location : Maybe Location
    , imageRightsMessage : String
    , homeTeam : Maybe Bool
    , awayTeam : Maybe Bool
    }


type alias Genre =
    { id : Int
    , name : String
    , slug : String
    , primary : Bool
    , images : GenreImages
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


type alias GenreImages =
    { the1200X525 : String
    , the1200X627 : String
    , the136X136 : String
    , the500_700 : String
    , the800X320 : String
    , banner : String
    , block : String
    , criteo130_160 : String
    , criteo170_235 : String
    , criteo205_100 : String
    , criteo400_300 : String
    , fb100X72 : String
    , fb600_315 : String
    , huge : String
    , ipadEventModal : String
    , ipadHeader : String
    , ipadMiniExplore : String
    , mongo : String
    , squareMid : String
    , triggitFbAd : String
    }


type alias PerformerImages =
    { huge : String
    }


type alias Location =
    { lat : Float
    , lon : Float
    }


type PerformerType
    = Band
    | FluffyNcaaBaseball
    | FluffyTheater
    | TheaterBroadwayNationalTours
    | TheaterClassical
    | TheaterComedy


type alias PerformerStats =
    { eventCount : Int
    }


type alias Taxonomy =
    { id : Int
    , name : NameEnum
    , parentID : Maybe Int
    , documentSource : Maybe DocumentSource
    , rank : Int
    }


type alias EventStats =
    { listingCount : Maybe Int
    , averagePrice : Maybe Int
    , lowestPriceGoodDeals : ()
    , lowestPrice : Maybe Int
    , highestPrice : Maybe Int
    , visibleListingCount : Maybe Int
    , dqBucketCounts : Maybe (List Int)
    , medianPrice : Maybe Int
    , lowestSgBasePrice : Maybe Int
    , lowestSgBasePriceGoodDeals : ()
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
        |> Jpipe.required "type" nameEnum
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
        [ ( "type", encodeNameEnum x.eventType )
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


announcements : Jdec.Decoder Announcements
announcements =
    Jdec.succeed Announcements


encodeAnnouncements : Announcements -> Jenc.Value
encodeAnnouncements x =
    Jenc.object []


nameEnum : Jdec.Decoder NameEnum
nameEnum =
    Jdec.string
        |> Jdec.andThen
            (\str ->
                case str of
                    "baseball" ->
                        Jdec.succeed Baseball

                    "broadway_tickets_national" ->
                        Jdec.succeed BroadwayTicketsNational

                    "classical" ->
                        Jdec.succeed Classical

                    "comedy" ->
                        Jdec.succeed Comedy

                    "concert" ->
                        Jdec.succeed Concert

                    "concerts" ->
                        Jdec.succeed Concerts

                    "ncaa_baseball" ->
                        Jdec.succeed PurpleNcaaBaseball

                    "theater" ->
                        Jdec.succeed PurpleTheater

                    "sports" ->
                        Jdec.succeed Sports

                    somethingElse ->
                        Jdec.fail <| "Invalid NameEnum: " ++ somethingElse
            )


encodeNameEnum : NameEnum -> Jenc.Value
encodeNameEnum x =
    case x of
        Baseball ->
            Jenc.string "baseball"

        BroadwayTicketsNational ->
            Jenc.string "broadway_tickets_national"

        Classical ->
            Jenc.string "classical"

        Comedy ->
            Jenc.string "comedy"

        Concert ->
            Jenc.string "concert"

        Concerts ->
            Jenc.string "concerts"

        PurpleNcaaBaseball ->
            Jenc.string "ncaa_baseball"

        PurpleTheater ->
            Jenc.string "theater"

        Sports ->
            Jenc.string "sports"


nameEnumAsString : NameEnum -> String
nameEnumAsString x =
    case x of
        Baseball ->
            "Baseball"

        BroadwayTicketsNational ->
            "Broadway Tickets National"

        Classical ->
            "Classical"

        Comedy ->
            "Comedy"

        Concert ->
            "Concert"

        Concerts ->
            "Concerts"

        PurpleNcaaBaseball ->
            "NCAA Baseball"

        PurpleTheater ->
            "Theater"

        Sports ->
            "Sports"


performer : Jdec.Decoder Performer
performer =
    Jdec.succeed Performer
        |> Jpipe.required "type" performerType
        |> Jpipe.required "name" Jdec.string
        |> Jpipe.required "image" Jdec.string
        |> Jpipe.required "id" Jdec.int
        |> Jpipe.required "images" performerImages
        |> Jpipe.optional "divisions" (Jdec.null ()) ()
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
        |> Jpipe.optional "colors" (Jdec.null ()) ()
        |> Jpipe.optional "image_license" (Jdec.nullable Jdec.string) Nothing
        |> Jpipe.optional "genres" (Jdec.nullable (Jdec.list genre)) Nothing
        |> Jpipe.required "popularity" Jdec.int
        |> Jpipe.optional "location" (Jdec.nullable location) Nothing
        |> Jpipe.required "image_rights_message" Jdec.string
        |> Jpipe.optional "home_team" (Jdec.nullable Jdec.bool) Nothing
        |> Jpipe.optional "away_team" (Jdec.nullable Jdec.bool) Nothing


encodePerformer : Performer -> Jenc.Value
encodePerformer x =
    Jenc.object
        [ ( "type", encodePerformerType x.performerType )
        , ( "name", Jenc.string x.name )
        , ( "image", Jenc.string x.image )
        , ( "id", Jenc.int x.id )
        , ( "images", encodePerformerImages x.images )
        , ( "divisions", always Jenc.null x.divisions )
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
        , ( "genres", makeNullableEncoder (makeListEncoder encodeGenre) x.genres )
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
        |> Jpipe.required "images" genreImages
        |> Jpipe.required "image" Jdec.string
        |> Jpipe.required "document_source" documentSource


encodeGenre : Genre -> Jenc.Value
encodeGenre x =
    Jenc.object
        [ ( "id", Jenc.int x.id )
        , ( "name", Jenc.string x.name )
        , ( "slug", Jenc.string x.slug )
        , ( "primary", Jenc.bool x.primary )
        , ( "images", encodeGenreImages x.images )
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


genreImages : Jdec.Decoder GenreImages
genreImages =
    Jdec.succeed GenreImages
        |> Jpipe.required "1200x525" Jdec.string
        |> Jpipe.required "1200x627" Jdec.string
        |> Jpipe.required "136x136" Jdec.string
        |> Jpipe.required "500_700" Jdec.string
        |> Jpipe.required "800x320" Jdec.string
        |> Jpipe.required "banner" Jdec.string
        |> Jpipe.required "block" Jdec.string
        |> Jpipe.required "criteo_130_160" Jdec.string
        |> Jpipe.required "criteo_170_235" Jdec.string
        |> Jpipe.required "criteo_205_100" Jdec.string
        |> Jpipe.required "criteo_400_300" Jdec.string
        |> Jpipe.required "fb_100x72" Jdec.string
        |> Jpipe.required "fb_600_315" Jdec.string
        |> Jpipe.required "huge" Jdec.string
        |> Jpipe.required "ipad_event_modal" Jdec.string
        |> Jpipe.required "ipad_header" Jdec.string
        |> Jpipe.required "ipad_mini_explore" Jdec.string
        |> Jpipe.required "mongo" Jdec.string
        |> Jpipe.required "square_mid" Jdec.string
        |> Jpipe.required "triggit_fb_ad" Jdec.string


encodeGenreImages : GenreImages -> Jenc.Value
encodeGenreImages x =
    Jenc.object
        [ ( "1200x525", Jenc.string x.the1200X525 )
        , ( "1200x627", Jenc.string x.the1200X627 )
        , ( "136x136", Jenc.string x.the136X136 )
        , ( "500_700", Jenc.string x.the500_700 )
        , ( "800x320", Jenc.string x.the800X320 )
        , ( "banner", Jenc.string x.banner )
        , ( "block", Jenc.string x.block )
        , ( "criteo_130_160", Jenc.string x.criteo130_160 )
        , ( "criteo_170_235", Jenc.string x.criteo170_235 )
        , ( "criteo_205_100", Jenc.string x.criteo205_100 )
        , ( "criteo_400_300", Jenc.string x.criteo400_300 )
        , ( "fb_100x72", Jenc.string x.fb100X72 )
        , ( "fb_600_315", Jenc.string x.fb600_315 )
        , ( "huge", Jenc.string x.huge )
        , ( "ipad_event_modal", Jenc.string x.ipadEventModal )
        , ( "ipad_header", Jenc.string x.ipadHeader )
        , ( "ipad_mini_explore", Jenc.string x.ipadMiniExplore )
        , ( "mongo", Jenc.string x.mongo )
        , ( "square_mid", Jenc.string x.squareMid )
        , ( "triggit_fb_ad", Jenc.string x.triggitFbAd )
        ]


performerImages : Jdec.Decoder PerformerImages
performerImages =
    Jdec.succeed PerformerImages
        |> Jpipe.required "huge" Jdec.string


encodePerformerImages : PerformerImages -> Jenc.Value
encodePerformerImages x =
    Jenc.object
        [ ( "huge", Jenc.string x.huge )
        ]


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


performerType : Jdec.Decoder PerformerType
performerType =
    Jdec.string
        |> Jdec.andThen
            (\str ->
                case str of
                    "band" ->
                        Jdec.succeed Band

                    "ncaa_baseball" ->
                        Jdec.succeed FluffyNcaaBaseball

                    "theater" ->
                        Jdec.succeed FluffyTheater

                    "theater_broadway_national_tours" ->
                        Jdec.succeed TheaterBroadwayNationalTours

                    "theater_classical" ->
                        Jdec.succeed TheaterClassical

                    "theater_comedy" ->
                        Jdec.succeed TheaterComedy

                    somethingElse ->
                        Jdec.fail <| "Invalid PerformerType: " ++ somethingElse
            )


encodePerformerType : PerformerType -> Jenc.Value
encodePerformerType x =
    case x of
        Band ->
            Jenc.string "band"

        FluffyNcaaBaseball ->
            Jenc.string "ncaa_baseball"

        FluffyTheater ->
            Jenc.string "theater"

        TheaterBroadwayNationalTours ->
            Jenc.string "theater_broadway_national_tours"

        TheaterClassical ->
            Jenc.string "theater_classical"

        TheaterComedy ->
            Jenc.string "theater_comedy"


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
        |> Jpipe.required "name" nameEnum
        |> Jpipe.optional "parent_id" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "document_source" (Jdec.nullable documentSource) Nothing
        |> Jpipe.required "rank" Jdec.int


encodeTaxonomy : Taxonomy -> Jenc.Value
encodeTaxonomy x =
    Jenc.object
        [ ( "id", Jenc.int x.id )
        , ( "name", encodeNameEnum x.name )
        , ( "parent_id", makeNullableEncoder Jenc.int x.parentID )
        , ( "document_source", makeNullableEncoder encodeDocumentSource x.documentSource )
        , ( "rank", Jenc.int x.rank )
        ]


eventStats : Jdec.Decoder EventStats
eventStats =
    Jdec.succeed EventStats
        |> Jpipe.optional "listing_count" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "average_price" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "lowest_price_good_deals" (Jdec.null ()) ()
        |> Jpipe.optional "lowest_price" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "highest_price" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "visible_listing_count" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "dq_bucket_counts" (Jdec.nullable (Jdec.list Jdec.int)) Nothing
        |> Jpipe.optional "median_price" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "lowest_sg_base_price" (Jdec.nullable Jdec.int) Nothing
        |> Jpipe.optional "lowest_sg_base_price_good_deals" (Jdec.null ()) ()


encodeEventStats : EventStats -> Jenc.Value
encodeEventStats x =
    Jenc.object
        [ ( "listing_count", makeNullableEncoder Jenc.int x.listingCount )
        , ( "average_price", makeNullableEncoder Jenc.int x.averagePrice )
        , ( "lowest_price_good_deals", always Jenc.null x.lowestPriceGoodDeals )
        , ( "lowest_price", makeNullableEncoder Jenc.int x.lowestPrice )
        , ( "highest_price", makeNullableEncoder Jenc.int x.highestPrice )
        , ( "visible_listing_count", makeNullableEncoder Jenc.int x.visibleListingCount )
        , ( "dq_bucket_counts", makeNullableEncoder (makeListEncoder Jenc.int) x.dqBucketCounts )
        , ( "median_price", makeNullableEncoder Jenc.int x.medianPrice )
        , ( "lowest_sg_base_price", makeNullableEncoder Jenc.int x.lowestSgBasePrice )
        , ( "lowest_sg_base_price_good_deals", always Jenc.null x.lowestSgBasePriceGoodDeals )
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
    Jenc.object (toList (Dict.map (\k -> f) dict))


makeNullableEncoder : (a -> Jenc.Value) -> Maybe a -> Jenc.Value
makeNullableEncoder f m =
    case m of
        Just x ->
            f x

        Nothing ->
            Jenc.null
