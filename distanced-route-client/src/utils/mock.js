export const mockDirections = {
    geocoded_waypoints: [
        {
            geocoder_status: 'OK',
            place_id: 'ChIJmQJIxlVYwokRLgeuocVOGVU',
            types: ['establishment', 'point_of_interest', 'tourist_attraction']
        },
        {
            geocoder_status: 'OK',
            place_id: 'ChIJR0lA1VBmwokR8BGfSBOyT-w',
            types: ['airport', 'establishment', 'point_of_interest']
        }
    ],
    routes: [
        {
            bounds: {
                northeast: { lat: 40.7673531, lng: -73.7890953 },
                southwest: { lat: 40.6433188, lng: -73.9845378 }
            },
            copyrights: 'Map data ©2020',
            legs: [
                {
                    arrival_time: {
                        text: '7:59pm',
                        time_zone: 'America/New_York',
                        value: 1585439984
                    },
                    departure_time: {
                        text: '6:53pm',
                        time_zone: 'America/New_York',
                        value: 1585435983
                    },
                    distance: { text: '16.3 mi', value: 26282 },
                    duration: { text: '1 hour 7 mins', value: 4001 },
                    end_address:
                        'John F. Kennedy International Airport (JFK), Queens, NY 11430, USA',
                    end_location: { lat: 40.6433188, lng: -73.7890953 },
                    start_address: 'Manhattan, NY 10036, USA',
                    start_location: { lat: 40.7592484, lng: -73.9845378 },
                    steps: [
                        {
                            distance: { text: '0.2 mi', value: 348 },
                            duration: { text: '4 mins', value: 265 },
                            end_location: {
                                lat: 40.75866300000001,
                                lng: -73.981331
                            },
                            html_instructions:
                                'Walk to 47-50 Streets Rockefeller Center Subway Station',
                            polyline: {
                                points:
                                    'ixwwFjbqbMq@a@y@g@n@oBd@{Al@iBBG`@sAX_APm@LFA_A'
                            },
                            start_location: {
                                lat: 40.7592484,
                                lng: -73.9845378
                            },
                            steps: [
                                {
                                    distance: { text: '236 ft', value: 72 },
                                    duration: { text: '1 min', value: 53 },
                                    end_location: {
                                        lat: 40.7597888,
                                        lng: -73.9841655
                                    },
                                    html_instructions:
                                        'Head <b>northeast</b> on <b>7th Ave</b>/<wbr/><b>Times Square</b> toward <b>W 48th St</b>',
                                    polyline: { points: 'ixwwFjbqbMq@a@y@g@' },
                                    start_location: {
                                        lat: 40.7592484,
                                        lng: -73.9845378
                                    },
                                    travel_mode: 'WALKING'
                                },
                                {
                                    distance: { text: '0.2 mi', value: 250 },
                                    duration: { text: '3 mins', value: 185 },
                                    end_location: {
                                        lat: 40.7587165,
                                        lng: -73.98160539999999
                                    },
                                    html_instructions:
                                        'Turn <b>right</b> onto <b>W 48th St</b><div style="font-size:0.9em">Destination will be on the right</div>',
                                    maneuver: 'turn-right',
                                    polyline: {
                                        points:
                                            'u{wwF``qbMn@oBd@{Al@iBBG`@sAX_APm@'
                                    },
                                    start_location: {
                                        lat: 40.7597888,
                                        lng: -73.9841655
                                    },
                                    travel_mode: 'WALKING'
                                },
                                {
                                    distance: { text: '85 ft', value: 26 },
                                    duration: { text: '1 min', value: 27 },
                                    end_location: {
                                        lat: 40.75866300000001,
                                        lng: -73.981331
                                    },
                                    html_instructions:
                                        'Take entrance <span class="location">6th Ave & 48th St at SW corner</span>',
                                    polyline: { points: 'qtwwFhppbMA_A' },
                                    start_location: {
                                        lat: 40.7586535,
                                        lng: -73.9816507
                                    },
                                    travel_mode: 'WALKING'
                                }
                            ],
                            travel_mode: 'WALKING'
                        },
                        {
                            distance: { text: '11.2 mi', value: 18086 },
                            duration: { text: '32 mins', value: 1920 },
                            end_location: { lat: 40.700485, lng: -73.807968 },
                            html_instructions:
                                'Subway towards Jamaica Center - Parsons/Archer',
                            polyline: {
                                points:
                                    'stwwFhnpbM}LeIgRaMqNiJg@i@a@k@_@m@Uo@Uq@Mu@Iu@Cy@?{@B}@HaAN_AReAXeAZiAvLs_@bCuH~Pyi@BIBEBG@I@GDE@G@EBGBG@EBG@EBG@ErIiWdNga@BGBIBG@IDGBIBIBGDIDG@GDIBGBIDGtLwYfBgEDMDIBIDKDKDIDKDIFKBKFIBKFIBKDIfM{YP[J]H[F[D]@[?]AYE]G[G]M[M]Q[Q]Yg@Yi@Ui@Sk@Qo@Oo@Ko@Kq@Gu@Eu@Eu@Aw@IyPE{LAU?UAUAUAUAUASCUCUASCSCUCSESCUoG}e@Gk@Gk@Im@Ck@Ck@Cm@Am@?m@?m@?m@Bm@Bm@Dm@Do@Dm@~BqV@WBW?U@W@U@W?U@U?U?WAS?WAUAS?Ua@}HAa@A_@?_@@_@?]@_@B_@B[D]D]F[D[H[H[JY`Sgn@|Qok@nOse@@IDG@GDIBG@GBIBGBG@GDG@GBGBGBG|C_IDODMFKFMDKDMFKDKDKDKDIDKBIFIDGDOHMDKHODMHMFMFMFKHMFMHMFMFMHMdFuHHKJKHMLKHIJKNIJKLILILKPGLKNGPInOsGz@a@d@Sd@Wb@Y`@[^_@^_@\\e@Ze@Zi@Vk@Vo@To@Rs@Rw@Py@zD}RFYFUBWFWFUDWFUDUFUFWFUDUFSDUHUJa@L_@J_@L_@L_@L]J[L]N[JYLYLYLYNWLYNYNYLYL]N[N]L]L_@L_@Na@La@Ja@Lc@Lc@Le@`FmRnOcl@DSFQFSFUFSFSFUHWJUDWJUHWHWJYJWNc@Nc@Na@Rc@P_@Ra@P]R]R]R]T[TYT[VWTY\\a@\\a@\\a@\\a@Zc@\\e@Ze@Xe@Xe@Xi@Xe@Vi@Vi@Tk@Tk@jG{QrGkRDQHQDQHQFQFSFOFQHQFQHQFOFQHQFOlGgP~C{HN[N]N[N]NYP]NYP[N[RYN[PYRYNYRYd@q@V]T]T_@T_@T]V_@R_@Ta@R_@T_@Ta@Ra@Ra@Ra@Ra@dGsODOFOFOFODODODOFOFQBQFODSFODQDS`Jy[J]J]L]L[LYNWLUPUPUNQRQPORORMPKxAs@vJyEzI{ERMRMPKPIPILILGNIJGJEHEJCDEHAFCfKsD`GgCVITMRMRORORQPOPSLSNULUJWLWHWJ[nBaLBSBUBU?SBU?S?U?S?SCS?UCSCSCSCSkAoGCMEKAKCKCKAKEKCKEKCKCKEKCKEKCIEKCKCIEICKCKEKCICKCKAKEKAKCKCK@?'
                            },
                            start_location: {
                                lat: 40.75866300000001,
                                lng: -73.981331
                            },
                            transit_details: {
                                arrival_stop: {
                                    location: {
                                        lat: 40.700485,
                                        lng: -73.807968
                                    },
                                    name:
                                        'Sutphin Blvd - Archer Av - JFK Station'
                                },
                                arrival_time: {
                                    text: '7:29pm',
                                    time_zone: 'America/New_York',
                                    value: 1585438169
                                },
                                departure_stop: {
                                    location: {
                                        lat: 40.75866300000001,
                                        lng: -73.981331
                                    },
                                    name:
                                        '47-50 Streets Rockefeller Center Subway Station'
                                },
                                departure_time: {
                                    text: '6:57pm',
                                    time_zone: 'America/New_York',
                                    value: 1585436249
                                },
                                headsign: 'Jamaica Center - Parsons/Archer',
                                line: {
                                    agencies: [
                                        {
                                            name: 'MTA New York City Transit',
                                            phone: '1 (718) 330-1234',
                                            url: 'http://www.mta.info/'
                                        }
                                    ],
                                    color: '#0039a6',
                                    icon:
                                        '//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/E.png',
                                    name: 'E Line',
                                    short_name: 'E',
                                    text_color: '#ffffff',
                                    url:
                                        'http://web.mta.info/nyct/service/pdf/tecur.pdf',
                                    vehicle: {
                                        icon:
                                            '//maps.gstatic.com/mapfiles/transit/iw2/6/subway2.png',
                                        name: 'Subway',
                                        type: 'SUBWAY'
                                    }
                                },
                                num_stops: 11
                            },
                            travel_mode: 'TRANSIT'
                        },
                        {
                            distance: { text: '0.1 mi', value: 183 },
                            duration: { text: '2 mins', value: 135 },
                            end_location: { lat: 40.6992838, lng: -73.8071575 },
                            html_instructions:
                                'Walk to Jamaica Station (AirTrain)',
                            polyline: { points: '_ilwFxrnaMJKMDIc@bA]zCmAZK' },
                            start_location: { lat: 40.700485, lng: -73.807968 },
                            steps: [
                                {
                                    distance: { text: '30 ft', value: 9 },
                                    duration: { text: '1 min', value: 10 },
                                    end_location: {
                                        lat: 40.700416,
                                        lng: -73.8079084
                                    },
                                    html_instructions:
                                        'Take exit <span class="location">Sutphin Blvd & Archer Ave at SW corner</span>',
                                    polyline: { points: '_ilwFxrnaMJK' },
                                    start_location: {
                                        lat: 40.700485,
                                        lng: -73.807968
                                    },
                                    travel_mode: 'WALKING'
                                },
                                {
                                    distance: { text: '69 ft', value: 21 },
                                    duration: { text: '1 min', value: 15 },
                                    end_location: {
                                        lat: 40.7005411,
                                        lng: -73.80776279999999
                                    },
                                    html_instructions:
                                        'Head <b>east</b> on <b>Archer Ave</b> toward <b>Sutphin Blvd</b>',
                                    polyline: { points: 'ailwFrrnaMIc@' },
                                    start_location: {
                                        lat: 40.700489,
                                        lng: -73.8079448
                                    },
                                    travel_mode: 'WALKING'
                                },
                                {
                                    distance: { text: '0.1 mi', value: 153 },
                                    duration: { text: '2 mins', value: 110 },
                                    end_location: {
                                        lat: 40.6992838,
                                        lng: -73.8071575
                                    },
                                    html_instructions:
                                        'Turn <b>right</b> onto <b>Sutphin Blvd</b>',
                                    maneuver: 'turn-right',
                                    polyline: { points: 'kilwFnqnaMbA]zCmAZK' },
                                    start_location: {
                                        lat: 40.7005411,
                                        lng: -73.80776279999999
                                    },
                                    travel_mode: 'WALKING'
                                }
                            ],
                            travel_mode: 'WALKING'
                        },
                        {
                            distance: { text: '4.8 mi', value: 7665 },
                            duration: { text: '9 mins', value: 560 },
                            end_location: { lat: 40.6433188, lng: -73.7890953 },
                            html_instructions:
                                'Light rail towards Jamaica - Airport',
                            polyline: {
                                points:
                                    'g~kwFhxnaMFEn@zBTrATvA`AfDRr@VlABLXhAFTLZTd@@@V^HLPLNJFBF@ZDF@D@dA?d@K`@U`@SDC`Ai@zBcAjIwDbBw@bD}AdEqBbBw@bCkAxGaDnAk@dD}AhAi@zAo@hF{BdBo@fDsAdCaA`@OdBq@bAa@fFoBfC_AdBq@jAc@bFmBhE_BlFoBdCaAx@YrAg@PGTGLCh@QXGdAWb@KB?nAO~BOpCIx@Cp@?nA?`BBfA@jBDb@BL?TBb@DR@`APRF`@L`@J@?^P^P`@Pn@V?@^R^RZPPJ`@Rj@XRHd@P\\NVH`@Lb@LZH`@Lb@LHBVH`@LHBF@b@H`@FNBR@b@Db@Bd@Db@Bl@DJ?b@?b@?D?\\?b@Ab@?b@@b@?@?`@@b@?f@@^?b@?V?X@r@?b@?r@@~@?r@BF@d@LB@THTRJHNXR^f@lB^tADNN\\NXBBNTJFRTFDPNJHb@Z\\VHFp@j@VT\\N\\PXLZLXHD@b@HZFb@B^@\\?d@A\\CLCPAj@Kd@I^Id@M`@M^Mf@Q@A\\Md@UZO|CgBfCyANIb@Y^Wj@_@nCmBHEVQd@_@j@a@pAeAd@_@POPQnAgAhAiApAuA^a@h@k@d@i@^c@V[\\c@T]@CNUNUP]P[@ELUTi@L]Ri@Ng@HWDMJa@Je@ZyAV{AFc@L_B?IHgH?]C_AC_BE}AEy@A]AEAi@EcAAe@EgA?UCo@E}A?M?W@W@W?EBQBU?EBKDSFUDQDMBEFQHM@AJSHK@?HKHIFEBCTQDA^Sf@o@\\_@r@e@|@o@RO'
                            },
                            start_location: {
                                lat: 40.698758,
                                lng: -73.8088464
                            },
                            transit_details: {
                                arrival_stop: {
                                    location: {
                                        lat: 40.6433188,
                                        lng: -73.7890953
                                    },
                                    name: 'Terminal 1'
                                },
                                arrival_time: {
                                    text: '7:59pm',
                                    time_zone: 'America/New_York',
                                    value: 1585439984
                                },
                                departure_stop: {
                                    location: {
                                        lat: 40.698758,
                                        lng: -73.8088464
                                    },
                                    name: 'Jamaica Station (AirTrain)'
                                },
                                departure_time: {
                                    text: '7:50pm',
                                    time_zone: 'America/New_York',
                                    value: 1585439424
                                },
                                headsign: 'Jamaica - Airport',
                                headway: 960,
                                line: {
                                    agencies: [
                                        {
                                            name: 'Port Authority of NY & NJ',
                                            url: 'http://www.panynj.gov/'
                                        }
                                    ],
                                    color: '#ee3f34',
                                    name: 'AirTrain JFK',
                                    short_name: 'AirTrain JFK Red',
                                    text_color: '#ffffff',
                                    url:
                                        'http://www.panynj.gov/airports/jfk-airtrain.html',
                                    vehicle: {
                                        icon:
                                            '//maps.gstatic.com/mapfiles/transit/iw2/6/tram2.png',
                                        name: 'Light rail',
                                        type: 'TRAM'
                                    }
                                },
                                num_stops: 2
                            },
                            travel_mode: 'TRANSIT'
                        }
                    ],
                    traffic_speed_entry: [],
                    via_waypoint: []
                }
            ],
            overview_polyline: {
                points:
                    'ixwwFjbqbMkBiAtAkElBeGPm@LFA_Ae`@gWqNiJg@i@aAyAk@aBWkBCuBL_Cb@eCt@oCzPii@jQqj@J_@Vw@lY}z@b@gAfPq`@Tm@n@yAxM{Z\\y@Pw@Fy@Aw@My@Uy@_@y@k@eAo@sAe@{A[_BSgBKkBKqRI}NGuAMsAQsAwGig@QyAMsDBwDTyD`CiWBm@D{A?wACwAc@_JA_A@}@D_AVsBd@mBpv@uaCPa@ZaAfEsKn@}A\\o@^w@bAmBdG{Il@o@v@i@|@g@bSsIhAq@`A{@|@eAv@oAn@{Ah@cBd@qBbEwSZ{Ax@qDh@mBt@}Bt@oBx@eBz@gBz@uBx@cCt@oC~Vw`A^qAb@{Aj@_Bz@aCjAcCpAuBxAgBvBgCnBuCdB_Dl@uA`HgSbHoS^iAdAkCtGwPnDwI~@qBbAoBhAiBxD_GtAaCrAeCf@cAjGcP\\_At@gCxJ}]t@qB\\m@b@k@b@c@d@_@vNgHtKcGpBcAb@OfKsD`GgCl@Wf@]f@a@b@c@\\i@Xm@Vo@zB}LFi@FsACqAKqAyA}HKo@So@e@{Aa@{AOo@LKMDIc@~EkBZKfBpIFEn@zBj@jDtAzEZzA`@~Ab@`AX`@ZZVNb@FLBdA?d@KbAi@fAm@nUqKfUwKtFiCdDyAnIkDlHuCrLsE|OcGvRkHhC{@lD}@rAO~BOpCIjBCpDBdFJx@HtARxA`@pClAzAz@rBbAzAj@jF|AvAVjBNvBNxA?hC?jB@bC@dDBrBBl@NXJ`@\\b@x@fAbETl@R\\v@x@~AlAz@r@VT\\Nv@^t@Vh@J~@J|@@bAEpB[dAW`A[lBw@pI{E~F_ErByAzCgCxCqCpBwBfCuCdA{At@uAb@_A`@gAj@oBf@_C^_CLiBHeIG_DKwCKqCKsDEkB@o@HeAP{@Vw@`@o@\\[~@k@dAoApBuARO'
            },
            summary: '',
            warnings: [
                'Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths.'
            ],
            waypoint_order: []
        }
    ],
    status: 'OK'
};
