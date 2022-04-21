 (e, t, n) =>{
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function l(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                l((r = r.apply(e, t || [])).next())
            }))
        },
        o = this && this.__generator || function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        },
        i = this && this.__spreadArrays || function() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
            var r = Array(e),
                o = 0;
            for (t = 0; t < n; t++)
                for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
            return r
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Approvals = void 0;
    var a = n( /*! react */ 0),
        s = n( /*! react */ 0),
        l = n( /*! office-ui-fabric-react/lib/Fabric */ 71),
        u = n( /*! office-ui-fabric-react/lib/TextField */ 97),
        c = n( /*! office-ui-fabric-react/lib/DetailsList */ 98),
        d = n( /*! office-ui-fabric-react/lib/ShimmeredDetailsList */ 96),
        p = n( /*! @fluentui/react/lib/Icon */ 95);
    t.Approvals = function(e) {
        var t, n = s.useState(""),
            f = n[0],
            h = n[1],
            m = s.useState(!0),
            g = m[0],
            v = m[1],
            b = s.useState([]),
            _ = b[0],
            y = b[1],
            C = s.useState([]),
            x = C[0],
            S = C[1],
            k = s.useState([{
                key: "col1",
                name: "Name",
                fieldName: "name",
                minWidth: 210,
                maxWidth: 350,
                isRowHeader: !0,
                isResizable: !0,
                isSorted: !1,
                isSortedDescending: !1,
                sortAscendingAriaLabel: "Sorted A to Z",
                sortDescendingAriaLabel: "Sorted Z to A",
                data: "string",
                isPadded: !0
            }, {
                key: "col2",
                name: "Status",
                fieldName: "status",
                minWidth: 100,
                maxWidth: 150,
                isRowHeader: !0,
                isResizable: !1,
                data: "string",
                isPadded: !0
            }, {
                key: "col3",
                name: "Comments",
                fieldName: "comments",
                minWidth: 210,
                maxWidth: 350,
                isMultiline: !0,
                isRowHeader: !0,
                isResizable: !0,
                isSorted: !1,
                isSortedDescending: !1,
                sortAscendingAriaLabel: "Sorted A to Z",
                sortDescendingAriaLabel: "Sorted Z to A",
                data: "string",
                isPadded: !0
            }]),
            w = k[0];
        k[1];
        s.useEffect((function() {
            P()
        }), []);
        var E = e.page.entityId,
            D = e.page.entityTypeName,
            I = null === (t = e.parameters.ApprovalId.attributes) || void 0 === t ? void 0 : t.LogicalName,
            O = 0 !== e.parameters.ViewerTitle.raw.length ? e.parameters.ViewerTitle.raw + " (" + f + ")" : "APPROVAL PROGRESS SUMMARY (" + f + ")",
            T = {
                boundLookupId: "",
                approvalLookupSchemaName: I,
                requests: [],
                responses: []
            },
            P = function() {
                return r(void 0, void 0, void 0, (function() {
                    return o(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, e.webAPI.retrieveRecord(D, E, "?$select=_" + T.approvalLookupSchemaName + "_value").then((function(e) {
                                    T.boundLookupId = e["_" + I + "_value"]
                                }), (function(e) {
                                    v(!1), console.error("Group Approval Viewer - Retrieve Bound Lookup Error", e)
                                }))];
                            case 1:
                                return t.sent(), T.boundLookupId ? [4, e.webAPI.retrieveMultipleRecords("msdyn_flow_approvalrequest", "?$filter=_msdyn_flow_approvalrequest_approval_value eq " + T.boundLookupId + " &$select=_ownerid_value,createdon&$expand=msdyn_flow_approvalrequest_approval($select=msdyn_flow_approval_result)").then((function(e) {
                                    if (T.requests = e.entities, 0 !== T.requests.length) {
                                        var t = T.requests[0].msdyn_flow_approvalrequest_approval.msdyn_flow_approval_result;
                                        h(t || "In Progress")
                                    }
                                }), (function(e) {
                                    v(!1), console.error("Group Approval Viewer - Retrieve Approval Requests Error", e)
                                }))] : (h("No Approval Assigned"), v(!1), [2]);
                            case 2:
                                return t.sent(), 0 === T.requests.length ? (v(!1), h("No Requests Found"), [2]) : [4, e.webAPI.retrieveMultipleRecords("msdyn_flow_approvalresponse", "?$filter=_msdyn_flow_approvalresponse_approval_value eq " + T.boundLookupId + " &$select=_ownerid_value,createdon,msdyn_flow_approvalresponse_response,msdyn_flow_approvalresponse_comments").then((function(e) {
                                    T.responses = e.entities
                                }), (function(e) {
                                    v(!1), console.error("Group Approval Viewer - Retrieve Approval Responses Error", e)
                                }))];
                            case 3:
                                return t.sent(), R(), [2]
                        }
                    }))
                }))
            },
            R = function() {
                var e = T.requests.map((function(e, t) {
                    return {
                        key: t.toString(),
                        name: e["_ownerid_value@OData.Community.Display.V1.FormattedValue"],
                        status: j(e._ownerid_value, T.responses),
                        comments: N(e._ownerid_value, T.responses)
                    }
                }));
                y(e), S(e), v(!1)
            },
            j = function(e, t) {
                try {
                    var n = t.find((function(t) {
                        return t._ownerid_value === e
                    }));
                    if (!n) return a.createElement(p.Icon, {
                        className: "icon",
                        iconName: "Clock"
                    });
                    switch (n.msdyn_flow_approvalresponse_response.toString().toLowerCase()) {
                        case "approve":
                            return a.createElement(p.Icon, {
                                className: "icon icon-approve",
                                iconName: "LikeSolid"
                            });
                        case "reject":
                            return a.createElement(p.Icon, {
                                className: "icon icon-reject",
                                iconName: "DislikeSolid"
                            })
                    }
                } catch (e) {
                    console.error("Group Approval Viewer - Retrieve Status Icon Error", e)
                }
            },
            N = function(e, t) {
                try {
                    var n = t.find((function(t) {
                        return t._ownerid_value === e
                    }));
                    return n ? n.msdyn_flow_approvalresponse_comments.toString() : "#N/A"
                } catch (e) {
                    console.error("Group Approval Viewer - Retrieve Approval Response Error", e)
                }
            },
            A = function(e, t, n) {
                var r = t;
                return e.slice(0).sort((function(e, t) {
                    return (n ? e[r] < t[r] : e[r] > t[r]) ? 1 : -1
                }))
            };
        return a.createElement(l.Fabric, null, a.createElement("div", {
            className: "approval-head"
        }, a.createElement("h2", null, O), a.createElement(u.TextField, {
            placeholder: "Search",
            className: "search-input",
            onChange: function(e) {
                var t = e.target.value,
                    n = _.filter((function(e) {
                        var n, r;
                        return (null === (n = e.name) || void 0 === n ? void 0 : n.toLowerCase().includes(t)) || (null === (r = e.comments) || void 0 === r ? void 0 : r.toLowerCase().includes(t))
                    }));
                y(t ? n : x)
            }
        })), a.createElement(d.ShimmeredDetailsList, {
            setKey: "items",
            items: _,
            columns: w,
            selectionMode: c.SelectionMode.none,
            enableShimmer: g,
            ariaLabelForShimmer: "Please Wait",
            ariaLabelForGrid: "Approval Response Data",
            isHeaderVisible: !0,
            onColumnHeaderClick: function(e, t) {
                if (t) {
                    var n = i(w),
                        r = n.filter((function(e) {
                            return t.key === e.key
                        }))[0];
                    n.forEach((function(e) {
                        e === r ? (r.isSortedDescending = !r.isSortedDescending, r.isSorted = !0) : (e.isSorted = !1, e.isSortedDescending = !0)
                    }));
                    var o = A(_, r.fieldName, r.isSortedDescending);
                    y(o)
                }
            }
        }))
    }
}