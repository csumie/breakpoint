var PerfUtils = (function () {
    function PerfUtils() {
    }
    PerfUtils.BrowserSupportsPerformanceMarkAndMeasure = function () {
        return !!window && !!window.performance &&
            !!window.performance.mark && !!window.performance.measure;
    };
    PerfUtils.AddMark = function (markName) {
        if (PerfUtils.BrowserSupportsPerformanceMarkAndMeasure()) {
            window.performance.mark(markName);
        }
    };
    PerfUtils.MeasureMarks = function (measureName, startMarkName, endMarkName) {
        if (PerfUtils.BrowserSupportsPerformanceMarkAndMeasure()) {
            try {
                window.performance.measure(measureName, startMarkName, endMarkName);
            }
            catch (e) {
            }
        }
    };
    PerfUtils.measureNetworkType = function () {
        if (!!window && !!window.navigator) {
            var connection = window.navigator.connection ||
                window.navigator.mozConnection ||
                window.navigator.webkitConnection;
            if (connection) {
                return connection.effectiveType;
            }
        }
        return undefined;
    };
    return PerfUtils;
}());
var g_initialRequestMade = false;
var g_initialRequestCompleted = false;
var g_initialRequestResponseObject;
var g_acquireLockStartTime;
var g_acquireLockEndTime;
var g_getDocumentStartTime;
var g_getDocumentEndTime;
var g_getCellsStartTime;
var g_getCellsEndTime;
var g_getInitializeLocalCobaltStartTime;
var g_getInitializeLocalCobaltEndTime;
var g_initialResponseTime;
var g_initialResponseReadyTime;
var g_fastViewOpenTime;
var g_initialRequestInvokedTime;
var g_onInitialResponseReady;
var g_isUserCreatingPersonalNotebookFirstTime = false;
var g_networkType;
var FastViewSettings;
(function (FastViewSettings) {
    FastViewSettings.initialParaId = 0;
})(FastViewSettings || (FastViewSettings = {}));
var WacBootOptionsFactory = (function () {
    function WacBootOptionsFactory() {
    }
    WacBootOptionsFactory.createRequestOptions = function (appSettings, requestHeadMode, wopiDetails) {
        return {
            accessToken: wopiDetails ? wopiDetails.AccessToken : appSettings["AccessToken"],
            accessTokenTtl: wopiDetails ? wopiDetails.AccessTokenTtl : "",
            applicationModeExtended: (appSettings["SessionStartInfoJson"] ? JSON.parse(appSettings["SessionStartInfoJson"])["ApplicationModeExtended"] : "UNKNOWN"),
            buildVersion: appSettings["BuildVersion"],
            canary: appSettings["Canary"],
            feMachineId: appSettings["FEMachineId"],
            logHostRequests: (appSettings["LogHostRequests"] === "true") ? 1 : 0,
            onenoteSyncEndpoint: appSettings["ONOnlineSyncEndpoint"],
            pageTarget: appSettings["PageTarget"],
            renderingMode: appSettings["AddServerSideRenderingHeader"],
            requestHeadMode: requestHeadMode,
            rootQuerySignature: appSettings["RootQuerySignature"],
            sessionOrigin: (appSettings["SessionOrigin"] ? appSettings["SessionOrigin"] : "UNKNOWN"),
            url: appSettings["WebServiceBase"],
            userSessionId: appSettings["SessionId"],
            userType: appSettings["UserType"],
            wacCluster: appSettings["WacCluster"],
            wacUserAgent: appSettings["WacUserAgent"]
        };
    };
    WacBootOptionsFactory.createWacBootOptions = function (appSettings, requestHeadMode, optimizedForNewFile, wopiDetails) {
        return {
            baseDocId: appSettings["BaseDocId"],
            fastBootEnabled: (appSettings["FastBoot"] === "true"),
            getCachedSSR: appSettings["GetCachedSSR"] === "true",
            indexedDBPageTargetKey: "",
            initParagraphId: parseInt(appSettings["InitialParaId"], 16),
            isIndexedDBEnabled: appSettings["OneNoteIndexedDbCacheIsEnabled"] === "true",
            isIndexedDBDefaultPageEnabled: appSettings["OneNoteIndexedDBCacheDefaultPageIsEnabled"] === "true",
            isNewFile: (appSettings["CreateNew"] === "true"),
            isOneNoteHierarchySyncOnBootEnabled: (appSettings["OneNoteHierarchySyncIsEnabled"] === "true"),
            isOneNoteSyncConnectOnBootEnabled: appSettings["OneNoteSyncConnectOnBootEnabled"] === "true",
            isOneNoteSyncUseGuidAsChannelId: appSettings["OneNoteSyncUseGuidAsChannelId"] === "true",
            isOneNoteSyncHeartBeatEnabled: appSettings["OneNoteSyncHeartBeatIsEnabled"] === "true",
            isUserCreatingPersonalNotebookFirstTime: appSettings["IsUserCreatingPersonalNotebookFirstTime"] === "true",
            optimizedForNewFile: optimizedForNewFile,
            pageTarget: appSettings["PageTarget"],
            pageTargetHtml: appSettings["PageTargetHtml"],
            requestOptions: this.createRequestOptions(appSettings, requestHeadMode, wopiDetails),
            skipPageHtmlInGetCellsResponse: appSettings["SkipPageHtmlInGetCellsResponse"] === "true",
            slice0Name: appSettings["Slice0Name"],
            syncHeartBeatSendInterval: parseInt(appSettings["OneNoteSyncHeartBeatSendIntervalMs"], 10),
            syncHeartBeatWaitInterval: parseInt(appSettings["OneNoteSyncHeartBeatWaitIntervalMs"], 10),
            userId: appSettings["UserId"]
        };
    };
    return WacBootOptionsFactory;
}());
var SSRData = (function () {
    function SSRData(pageHtml, editable) {
        this.pageHtml = pageHtml;
        this.editable = editable;
    }
    return SSRData;
}());
var SSRDataUtils = (function () {
    function SSRDataUtils() {
    }
    SSRDataUtils.getPageHtmlInfoFromGetCellsResponse = function (response) {
        if (response && response.Responses[0] && response.Responses[0][1] && response.Responses[0][1].Cells) {
            var cells = response.Responses[0][1].Cells;
            for (var i = 0; i < cells.length; i++) {
                var cell = cells[i];
                if (cell && cell.PageHtml) {
                    return new SSRData(cell.PageHtml, !!cell.IsPageHtmlEditable);
                }
            }
        }
        return undefined;
    };
    return SSRDataUtils;
}());
var FastViewUtils = (function () {
    function FastViewUtils() {
    }
    FastViewUtils.ensureCookieCompliance = function (enabled, cookies) {
        if (enabled) {
            var essentialCookies = [];
            if (!!cookies) {
                essentialCookies = JSON.parse(cookies);
            }
            WacCookieCompliance.requestConsentWithSettings(new CookieComplianceSettings(essentialCookies));
        }
    };
    FastViewUtils.getCookie = function (cookieName) {
        if (!cookieName) {
            return '';
        }
        if (cookieName.indexOf('=') >= 0) {
            throw new RangeError(" = is not found in the cookie");
        }
        var theCookie = '' + document.cookie;
        var cookieRegex = new RegExp('(?:^|; )' + cookieName + '=([^;]*)');
        var matches = theCookie.match(cookieRegex);
        if (!matches || matches.length < 2) {
            return '';
        }
        return matches[1];
    };
    FastViewUtils.isDocumentEmpty = function (container) {
        function notContainsClassName(element, className) {
            return (' ' + element.className + ' ').indexOf(' ' + className + ' ') === -1;
        }
        var paragraphNodes = container.querySelectorAll(".Paragraph");
        if (!paragraphNodes || paragraphNodes.length != 1) {
            return false;
        }
        if (paragraphNodes[0].childElementCount !== 2 ||
            notContainsClassName(paragraphNodes[0].children[0], "TextRun") ||
            notContainsClassName(paragraphNodes[0].children[1], "EOP")) {
            return false;
        }
        if ((paragraphNodes[0].children[0]).innerText !== "") {
            return false;
        }
        return true;
    };
    return FastViewUtils;
}());
var FastViewAppearance = (function () {
    function FastViewAppearance() {
        this.positionAbsolute = false;
        this.showRibbon = false;
        this.showRibbonHeader = true;
        this.showRibbonImage = false;
        this.showNavPane = false;
        this.showNavSections = true;
        this.ribbonExpandedByDefault = false;
        this.ribbonPreferenceCookieName = "";
        this.ribbonImageBase = "";
        this.appBrandedName = "";
        this.shouldStretchPageToBottom = false;
        this.editable = false;
        this.pasteLoadingUI = false;
        this.loadingUIGif = "";
        this.transistionalHeaderUIIsEnabled = false;
        this.simplifiedReactRibbonUxIsEnabled = false;
        this.simplifiedReactRibbonAnimationIsEnabled = false;
        this.skeletalBootUXIsEnabled = false;
        this.ribbonVisualRefreshIsEnabled = false;
        this.ribbonTabHeaderRefreshIsEnabled = false;
        this.snackbarNavPaneIsEnabled = false;
        this.twoPaneNavIsEnabled = false;
        this.reactSharedHeaderIsEnabled = false;
    }
    return FastViewAppearance;
}());
var FastViewLogEntry = (function () {
    function FastViewLogEntry(evName, startTime) {
        this.eventName = evName;
        this.timeStamp = new Date().getTime() - startTime;
    }
    return FastViewLogEntry;
}());
var FastView = (function () {
    function FastView(getTopbarContainerFunc, getRibbonContainerFunc, getDocumentContainerFunc, appearance, entry, getCookieFunc) {
        if (entry === void 0) { entry = "Default"; }
        if (getCookieFunc === void 0) { getCookieFunc = FastViewUtils.getCookie; }
        this.getTopbarContainerFunc = getTopbarContainerFunc;
        this.getRibbonContainerFunc = getRibbonContainerFunc;
        this.getDocumentContainerFunc = getDocumentContainerFunc;
        this.appearance = appearance;
        this.entry = entry;
        this.getCookieFunc = getCookieFunc;
        this.touchSupport = this.isTouchSupport();
        this.eventLogs = [];
        this.openTime = 0;
    }
    FastView.prototype.handleKeyboardEvent = function (ev) {
        if (ev.key === "Shift" || ev.key === "Control" || ev.key === "Alt") {
            return;
        }
        this.logEventData(ev.type);
    };
    FastView.prototype.handleEditableKeyboardEvent = function (ev) {
        if (ev.keyCode === 13
            || (ev.ctrlKey
                && (ev.keyCode === 66
                    || ev.keyCode === 73
                    || ev.keyCode === 85))) {
            ev.preventDefault();
            this.logEventData(ev.key);
        }
    };
    FastView.prototype.handlePasteEvent = function (event) {
        function createOverlay() {
            var overlay = document.createElement("div");
            overlay.className = "WACFastLoadingOverlay WACDialogOverlay";
            return overlay;
        }
        function createLoadingPasteUI(loadingUIUrl) {
            var loadingPasteUi = document.createElement("div");
            loadingPasteUi.id = "WACLoadingPasteUI";
            var loadingBox = document.createElement("div");
            loadingBox.className = "WACFastLoadingBoxUI";
            var loadingSpinner = document.createElement("img");
            loadingSpinner.src = loadingUIUrl;
            loadingSpinner.className = "WACProgressIcon";
            loadingBox.appendChild(loadingSpinner);
            loadingPasteUi.appendChild(loadingBox);
            loadingPasteUi.appendChild(createOverlay());
            loadingPasteUi.setAttribute("aria-busy", "true");
            loadingPasteUi.setAttribute("role", "progressbar");
            return loadingPasteUi;
        }
        function clipboardDataHandler(clipboardData) {
            var data = {};
            if (clipboardData != null && clipboardData.types != null) {
                var type = clipboardData.types[0];
                data["type"] = type;
                data["data"] = clipboardData.getData(type);
            }
            else {
                clipboardData = window.clipboardData;
                var copiedText = clipboardData.getData("text");
                if (copiedText != null) {
                    data["type"] = "text/plain";
                    data["data"] = copiedText;
                }
                else {
                    if (clipboardData.files.length > 0) {
                        data["type"] = "image/png";
                        data["data"] = clipboardData.files[0];
                    }
                }
            }
            return data;
        }
        if (this.isEditable && this.appearance.pasteLoadingUI && !this.isPasteLoading && this.htmlElement.parentElement) {
            this.isPasteLoading = true;
            var pasteUI = createLoadingPasteUI(this.appearance.loadingUIGif);
            this.htmlElement.parentElement.appendChild(pasteUI);
            this.pasteData = clipboardDataHandler(event.clipboardData);
            this.editableSpan.removeAttribute("contentEditable");
            event.preventDefault();
        }
        else {
            this.blockEvent(event);
        }
    };
    FastView.prototype.blockEvent = function (ev) {
        this.logEventData(ev.type);
        ev.preventDefault();
    };
    FastView.prototype.logEventData = function (evName) {
        if (!this.eventLogs || !this.openTime)
            return;
        this.eventLogs.push(new FastViewLogEntry(evName, this.openTime));
    };
    FastView.prototype.logEvent = function (ev) {
        this.logEventData(ev.type);
    };
    FastView.prototype.handleEditableMousedownEvent = function (ev) {
        this.logEventData(ev.type);
        if (this.editableSpan && ev.target != this.editableSpan) {
            this.editableSpan.focus();
            if (window.getSelection) {
                var selection = window.getSelection();
                selection.collapseToEnd();
            }
            ev.preventDefault();
        }
    };
    FastView.prototype.removeKeypressEventListener = function () {
        if (this.keyboardEventHandler) {
            document.removeEventListener("keydown", this.keyboardEventHandler);
        }
    };
    FastView.prototype.isTouchSupport = function () {
        function isAndroid() {
            return navigator.userAgent.indexOf("Android") >= 0;
        }
        function isIPad() {
            return navigator.userAgent.indexOf("iPad") >= 0;
        }
        function isMobile() {
            return isAndroid() || isIPad();
        }
        function hasTouchPoints() {
            return navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        }
        return isMobile() || hasTouchPoints();
    };
    FastView.prototype.showRibbonPlaceholder = function () {
        var _this = this;
        function getRibbonLeftFileFullPath(touchSupport, ribbonImageBase) {
            if (touchSupport) {
                var ribbonFileName = "bgapp_word_topleft";
                var ribbonFileNameTouch = "bgapp_word_topleft_touch";
                ribbonImageBase = ribbonImageBase.replace(ribbonFileName, ribbonFileNameTouch);
            }
            return ribbonImageBase;
        }
        function createRibbonBar(ribbonUpper, ribbonLower) {
            var ribbonBar = document.createElement("div");
            ribbonBar.className = "ribbonBar";
            ribbonBar.setAttribute("unselectable", "on");
            ribbonBar.appendChild(ribbonUpper);
            ribbonBar.appendChild(ribbonLower);
            return ribbonBar;
        }
        function createFalseOneLineRibbon(isAnimationEnabled, isRibbonTabHeaderRefreshEnabled) {
            var ribbonUpper = document.createElement("div");
            ribbonUpper.className = isAnimationEnabled ? "oneLineRibbonUpperWithAnimation" : "oneLineRibbonUpper";
            if (isRibbonTabHeaderRefreshEnabled) {
                ribbonUpper.className += ' oneLineRibbonUpperWithTabHeaderRefresh';
            }
            var ribbonLower = document.createElement("div");
            ribbonLower.className = isAnimationEnabled ? "oneLineRibbonLowerWithAnimation" : "oneLineRibbonLower";
            return createRibbonBar(ribbonUpper, ribbonLower);
        }
        function createRibbonImage(touchSupport, ribbonImageBase) {
            var ribbonUpper = document.createElement("div");
            ribbonUpper.className = "ribbonUpper";
            var ribbonLower = document.createElement("div");
            ribbonLower.className = "ribbonLower";
            var ribbonLeft = document.createElement("div");
            ribbonLeft.className = "ribbonLeft";
            var ribbonImageFullPath = getRibbonLeftFileFullPath(touchSupport, ribbonImageBase);
            ribbonLeft.style.backgroundImage = "url('" + ribbonImageFullPath + "')";
            if (touchSupport) {
                ribbonLower.className += " ribbonTouch";
                ribbonLeft.className += " ribbonTouch";
            }
            ribbonUpper.appendChild(ribbonLeft);
            return createRibbonBar(ribbonUpper, ribbonLower);
        }
        if (document.getElementById("ExternalHeaderFullTopBars")) {
            return;
        }
        var topbarContainer = this.getTopbarContainerFunc();
        if (topbarContainer && this.appearance.showRibbonHeader) {
            var bar1 = document.createElement("div");
            bar1.className = "cui-topBar1";
            if (this.appearance.transistionalHeaderUIIsEnabled) {
                if (this.appearance.reactSharedHeaderIsEnabled) {
                    bar1.className += " cui-topBar1-transitionalReactHeaderUI";
                }
                else {
                    bar1.className += " cui-topBar1-transistionalHeaderUI";
                }
            }
            bar1.setAttribute("unselectable", "on");
            var row = document.createElement("span");
            row.className = "cui-QATRowLeft BreadcrumbContainer";
            var app = document.createElement("span");
            app.className = "AppAndBrandContainer";
            var loaderSpinner = document.createElement("span");
            loaderSpinner.className = "WACFastBootLoaderSpinner";
            var loader = document.createElement("div");
            loader.className = "WACFastBootLoader";
            loader.appendChild(loaderSpinner);
            var breadcrumb = document.createElement("span");
            breadcrumb.className = "BreadcrumbItem";
            breadcrumb.setAttribute("style", "width:48px;height:48px;display:inline-block;");
            var separator = document.createElement("span");
            separator.className = "OfficeOnlineBrandSwitcherSeparator";
            var brandText = document.createElement("span");
            brandText.className = "headBrand";
            if (!this.appearance.transistionalHeaderUIIsEnabled) {
                brandText.setAttribute("style", "line-height:48px;font-weight:lighter");
            }
            brandText.appendChild(document.createTextNode(this.appearance.appBrandedName));
            app.appendChild(breadcrumb);
            if (!this.appearance.transistionalHeaderUIIsEnabled) {
                app.appendChild(separator);
            }
            app.appendChild(brandText);
            app.appendChild(loader);
            row.appendChild(app);
            bar1.appendChild(row);
            var bar2 = document.createElement("div");
            bar2.className = "cui-topBar2";
            bar2.setAttribute("unselectable", "on");
            var topbarPlaceholder = document.createElement("div");
            topbarPlaceholder.id = "WACTopbarPlaceholder";
            topbarPlaceholder.appendChild(bar1);
            topbarPlaceholder.appendChild(bar2);
            topbarContainer.appendChild(topbarPlaceholder);
            this.topbarPlaceholderElement = topbarPlaceholder;
        }
        var ribbonContainer = this.getRibbonContainerFunc();
        if (ribbonContainer && ribbonContainer.children.length === 0) {
            var placeholder = document.createElement("div");
            placeholder.id = "WACRibbonPlaceholder";
            placeholder.className = placeholder.id;
            if (this.appearance.showRibbon && !this.appearance.skeletalBootUXIsEnabled) {
                if (this.appearance.simplifiedReactRibbonUxIsEnabled) {
                    var ribbonBar = createFalseOneLineRibbon(this.appearance.simplifiedReactRibbonAnimationIsEnabled, this.appearance.ribbonTabHeaderRefreshIsEnabled);
                    ribbonBar.addEventListener("click", function () { _this.logEventData("ribbonClick"); });
                    placeholder.appendChild(ribbonBar);
                }
                else if (this.appearance.showRibbonImage && this.appearance.ribbonExpandedByDefault && this.getCookieFunc(this.appearance.ribbonPreferenceCookieName) != 'true') {
                    var ribbonBar = createRibbonImage(this.touchSupport, this.appearance.ribbonImageBase);
                    if (this.appearance.ribbonVisualRefreshIsEnabled) {
                        ribbonBar.className += " MLRVisualRefresh";
                    }
                    ribbonBar.addEventListener("click", function () { _this.logEventData("ribbonClick"); });
                    placeholder.appendChild(ribbonBar);
                }
                else {
                    placeholder.style.height = "30px";
                }
            }
            else {
                placeholder.className = "cui-exth";
            }
            ribbonContainer.appendChild(placeholder);
            this.ribbonPlaceholderElement = placeholder;
        }
    };
    FastView.prototype.makeInitialParaEditable = function (container) {
        var _this = this;
        var contentContainer = container.querySelector(".PageContentContainer");
        if (contentContainer) {
            contentContainer.className += " WACFastViewEditor";
            contentContainer.addEventListener("mousedown", function (ev) { _this.handleEditableMousedownEvent(ev); });
        }
        this.editableSpan = (container.querySelector(".NormalTextRun"));
        if (this.editableSpan) {
            this.editableSpan.contentEditable = "true";
            this.editableSpan.style.outline = "0px";
            this.editableSpan.spellcheck = false;
            this.editableSpan.setAttribute("aria-hidden", "true");
            this.editableSpan.focus();
            this.editableSpan.addEventListener("paste", function (event) { _this.handlePasteEvent(event); });
            this.editableSpan.addEventListener("keydown", function (ev) { _this.handleEditableKeyboardEvent(ev); });
        }
    };
    FastView.prototype.sendBeaconForBoot = function (phase) {
        if (window._bB) {
            window._bB.sendBeacon(phase, 'BootPhaseCompleted');
        }
    };
    FastView.prototype.open = function (pageHtml, hidden) {
        var _this = this;
        if (hidden === void 0) { hidden = false; }
        function removeSplashScreen() {
            var splashScreenFront = document.getElementById("load_img");
            if (splashScreenFront) {
                splashScreenFront.style.opacity = "0";
                splashScreenFront.style.height = "1px";
            }
            var splashScreenBack = document.getElementById("load_back");
            if (splashScreenBack) {
                splashScreenBack.style.opacity = "0";
                splashScreenBack.style.height = "1px";
            }
        }
        function getCssClasses(appearance, getCookieFunc, touchSupport) {
            var classNames = FastView.cssClass;
            if (appearance.positionAbsolute) {
                classNames += " " + FastView.cssClassAbsolute;
                if (!appearance.showRibbon)
                    classNames += " " + "HeaderAndRibbonHidden";
                else if (!appearance.showRibbonHeader)
                    classNames += " " + "HeaderHidden";
                if (!appearance.showNavPane)
                    classNames += " " + "NavHidden";
                else if (!appearance.showNavSections)
                    classNames += " " + "SectionsHidden";
                if (appearance.simplifiedReactRibbonUxIsEnabled) {
                    classNames += " OneLineRibbon";
                    if (appearance.ribbonTabHeaderRefreshIsEnabled) {
                        classNames += " OneLineRibbonWithTabHeaderRefresh";
                    }
                }
                else {
                    var cookieValue = getCookieFunc(appearance.ribbonPreferenceCookieName);
                    if ((!appearance.ribbonExpandedByDefault && cookieValue == 'false')
                        || (appearance.ribbonExpandedByDefault && cookieValue != 'true')) {
                        classNames += " RibbonPinned";
                        if (touchSupport)
                            classNames += " Touch";
                    }
                }
                if (appearance.skeletalBootUXIsEnabled) {
                    classNames += " " + SkeletalBootUtils.getFastViewSkeletalClass();
                }
                if (appearance.snackbarNavPaneIsEnabled) {
                    classNames += " Snackbar";
                }
                if (appearance.twoPaneNavIsEnabled) {
                    classNames += " TwoPaneNav";
                }
            }
            return classNames;
        }
        function setFastViewScrollTop(container) {
            if (FastViewSettings.initialParaId != 0) {
                var initPara = document.querySelector("p[paraid=\'" + FastViewSettings.initialParaId + "\']");
                if (!initPara || !initPara.getBoundingClientRect)
                    return;
                var initParaBottom = initPara.getBoundingClientRect().bottom;
                var scrollContainerBottom = container.getBoundingClientRect().bottom;
                if (container.firstElementChild) {
                    container.firstElementChild.scrollTop = initParaBottom - scrollContainerBottom + 70;
                }
            }
        }
        if (!this.appearance.showRibbonHeader) {
            this.makeStyleChangesToHideHeader();
        }
        this.showRibbonPlaceholderIfRequired();
        var container = this.getDocumentContainerFunc();
        if (!container || !pageHtml) {
            return false;
        }
        var fastViewContainer = document.createElement("div");
        var classNames = getCssClasses(this.appearance, this.getCookieFunc, this.touchSupport);
        fastViewContainer.className = classNames;
        fastViewContainer.id = "WACFastView";
        fastViewContainer.innerHTML = pageHtml;
        this.htmlElement = fastViewContainer;
        if (this.appearance.editable) {
            this.isEditable = FastViewUtils.isDocumentEmpty(fastViewContainer);
        }
        if (hidden) {
            fastViewContainer.style.visibility = "hidden";
        }
        else {
            this.keyboardEventHandler = this.handleKeyboardEvent;
            document.addEventListener("keydown", function (ev) { _this.keyboardEventHandler(ev); });
            var log = function (event) { _this.logEvent(event); };
            if (fastViewContainer.firstChild) {
                fastViewContainer.firstChild.addEventListener("scroll", log);
                fastViewContainer.firstChild.addEventListener("click", log);
                fastViewContainer.firstChild.addEventListener("dblclick", log);
                fastViewContainer.firstChild.addEventListener("contextmenu", function (event) { _this.blockEvent(event); });
            }
            container.appendChild(fastViewContainer);
            if (navigator.userAgent.indexOf('Macintosh') >= 0) {
                document.body.classList.add('Mac');
            }
            this.applyVisualRefreshStyling();
            if (!g_isUserCreatingPersonalNotebookFirstTime) {
                if (this.appearance.skeletalBootUXIsEnabled) {
                    SkeletalBoot.setFastViewReady();
                }
                else {
                    removeSplashScreen();
                }
            }
            setFastViewScrollTop(fastViewContainer);
            this.sendBeaconForBoot("RecordContentDisplayed");
            if (this.isEditable) {
                fastViewContainer.className += " WACFastViewEditable";
                this.makeInitialParaEditable(fastViewContainer);
                this.sendBeaconForBoot("RecordAppInteractive");
            }
        }
        this.openTime = new Date().getTime();
        PerfUtils.AddMark('ViewableEnd');
        PerfUtils.MeasureMarks('Viewable', 'StartWacBoot', 'ViewableEnd');
        return true;
    };
    FastView.prototype.showRibbonPlaceholderIfRequired = function () {
        if (this.appearance.positionAbsolute && this.appearance.showRibbon && !this.ribbonPlaceholderShown && !this.appearance.skeletalBootUXIsEnabled) {
            this.showRibbonPlaceholder();
            this.ribbonPlaceholderShown = true;
        }
    };
    FastView.prototype.makeStyleChangesToHideHeader = function () {
        var applicationOuterFrame = document.getElementById("application");
        if (applicationOuterFrame) {
            applicationOuterFrame.style.top = '0';
        }
    };
    FastView.prototype.applyVisualRefreshStyling = function () {
        if (this.appearance.ribbonVisualRefreshIsEnabled) {
            var innerFrame = document.getElementById("WACInnerFrame");
            if (innerFrame) {
                innerFrame.classList.add('MLRVisualRefresh');
            }
        }
    };
    FastView.prototype.isOpen = function () {
        if (this.htmlElement && this.htmlElement.parentNode)
            return true;
        return false;
    };
    FastView.cssClassAbsolute = "WACFastViewAbsolute";
    FastView.cssClass = "WACFastView";
    return FastView;
}());
var FastViewLauncher = (function () {
    function FastViewLauncher(ribbonExpandedByDefault, showRibbonImage, shouldStretchPageToBottom, shouldShowNavPane, appSettings) {
        this.fastBootEnabled = appSettings["FastBoot"] === "true";
        FastViewLauncher.slice0Name = appSettings["Slice0Name"];
        this.appearance = {
            positionAbsolute: true,
            showRibbon: !(appSettings["HideRibbonEmbedded"] === "true"),
            ribbonExpandedByDefault: ribbonExpandedByDefault,
            ribbonPreferenceCookieName: appSettings["RibbonPreferenceCookieNameHint"],
            showRibbonImage: showRibbonImage,
            ribbonImageBase: appSettings["RibbonImageBase"],
            shouldStretchPageToBottom: shouldStretchPageToBottom,
            appBrandedName: appSettings["BrandedWebAppName"],
            showRibbonHeader: !(appSettings["HideHeaderEmbedded"] === "true"),
            showNavPane: shouldShowNavPane && !(appSettings["ONHideNavEmbedded"] === "true"),
            showNavSections: !(appSettings["ONHideSectionsEmbedded"] === "true"),
            editable: false,
            pasteLoadingUI: appSettings["PasteInBootLoadingUIIsEnabled"] === "true",
            loadingUIGif: appSettings["ProgressGifResource"],
            transistionalHeaderUIIsEnabled: FastViewLauncher.isTransistionalHeaderUiEnabled(appSettings),
            simplifiedReactRibbonUxIsEnabled: FastViewLauncher.isSimplifiedReactRibbonUxEnabled(appSettings),
            simplifiedReactRibbonAnimationIsEnabled: FastViewLauncher.isSimplifiedReactRibbonAnimationEnabled(appSettings),
            skeletalBootUXIsEnabled: appSettings["OneNoteSkeletalBootUXIsEnabled"] === "true",
            ribbonVisualRefreshIsEnabled: appSettings["RibbonVisualRefreshIsEnabled"] === "true",
            ribbonTabHeaderRefreshIsEnabled: appSettings["RefreshedTabHeaderVisualsForSimplifiedUxIsEnabled"] === "true",
            snackbarNavPaneIsEnabled: appSettings["SnackbarNavPaneIsEnabled"] === "true",
            twoPaneNavIsEnabled: appSettings["OneNoteTwoPaneNavPaneIsEnabled"] === "true",
            reactSharedHeaderIsEnabled: appSettings["ReactSharedHeaderIsEnabled"] === "true"
        };
    }
    FastViewLauncher.prototype.launchFastView = function (pageHtml, entry, editable) {
        if (editable === void 0) { editable = false; }
        this.appearance.editable = editable;
        if (this.fastBootEnabled && !FastViewSettings.fastView && !document.getElementById("PageContentContainer")) {
            FastViewSettings.fastView = new FastView(function () { return (document.getElementById("AppHeaderPanel")); }, function () { return (document.getElementById("WACRibbonPanel")); }, function () { return (document.getElementById("WACInnerFrame")); }, this.appearance, entry);
            try {
                return FastViewSettings.fastView.open(pageHtml);
            }
            catch (e) {
                FastViewSettings.fastBootError = "FastView open failed: " + e.message + "\r\n" + e.stack;
                return false;
            }
        }
        return false;
    };
    FastViewLauncher.getSlice0 = function () {
        if (FastViewLauncher.slice0Name != null && FastViewLauncher.slice0Name.length > 0) {
            var slice0Script = document.createElement("script");
            slice0Script.type = "text/javascript";
            slice0Script.src = FastViewLauncher.slice0Name;
            document.getElementsByTagName("head")[0].appendChild(slice0Script);
        }
    };
    FastViewLauncher.isSimplifiedReactRibbonUxEnabled = function (appSettings) {
        return appSettings["SimplifiedReactRibbonUxIsEnabled"] === "true" && FastViewLauncher.userDidNotOptOutOfSimplifiedUX(appSettings);
    };
    FastViewLauncher.isSimplifiedReactRibbonAnimationEnabled = function (appSettings) {
        return appSettings["OneLineRibbonAnimationIsEnabled"] === "true" && FastViewLauncher.isSimplifiedReactRibbonUxEnabled(appSettings);
    };
    FastViewLauncher.isTransistionalHeaderUiEnabled = function (appSettings) {
        return appSettings["TransistionalHeaderUIIsEnabled"] === "true" ||
            appSettings["SimplifiedReactRibbonUxIsEnabled"] === "true";
    };
    FastViewLauncher.userDidNotOptOutOfSimplifiedUX = function (appSettings) {
        if (appSettings["OptOutSupportForSimplifiedRibbonIsEnabled"] === "false") {
            return true;
        }
        return FastViewUtils.getCookie(appSettings["IsSimplifiedRibbonOnCookieName"]).toLowerCase() !== 'false';
    };
    return FastViewLauncher;
}());
var INITIAL_REQUEST = "InitialRequest";
var INITIAL_REQUEST_START = "InitialRequestStart";
var INITIAL_REQUEST_END = "InitialRequestEnd";
var INITIAL_RESPONSE_PROCESS = "InitialResponseProcess";
var INITIAL_RESPONSE_PROCESS_START = "InitialResponseProcessStart";
var INITIAL_RESPONSE_PROCESS_END = "InitialResponseProcessEnd";
var WacBootExecutor = (function () {
    function WacBootExecutor(fastViewFactory, wacBootOptions) {
        var _this = this;
        this.fastViewFactory = fastViewFactory;
        this.wacBootOptions = wacBootOptions;
        this.onGetCellsRequestCompleted = function (xmlHttpRequest) {
            g_initialRequestCompleted = true;
            g_initialResponseTime = new Date();
            PerfUtils.AddMark(INITIAL_REQUEST_END);
            PerfUtils.AddMark(INITIAL_RESPONSE_PROCESS_START);
            PerfUtils.MeasureMarks(INITIAL_REQUEST, INITIAL_REQUEST_START, INITIAL_REQUEST_END);
            var responseObject = WacBootExecutor.getResponseFromText(xmlHttpRequest.responseText);
            g_initialRequestResponseObject = responseObject;
            if (responseObject) {
                if (responseObject.Responses && responseObject.Responses[0] && responseObject.Responses[0][1]) {
                    var cells = responseObject.Responses[0][1];
                    g_acquireLockStartTime = cells.AcquireLockStartTime;
                    g_acquireLockEndTime = cells.AcquireLockEndTime;
                    g_acquireLockStartTime = cells.AcquireLockStartTime;
                    g_getDocumentStartTime = cells.GetDocumentStartTime;
                    g_getDocumentEndTime = cells.GetDocumentEndTime;
                    g_getCellsStartTime = cells.GetCellsStartTime;
                    g_getCellsEndTime = cells.GetCellsEndTime;
                    g_getInitializeLocalCobaltStartTime = cells.InitializeLocalCobaltStartTime;
                    g_getInitializeLocalCobaltEndTime = cells.InitializeLocalCobaltEndTime;
                }
            }
            g_initialResponseReadyTime = new Date();
            PerfUtils.AddMark(INITIAL_RESPONSE_PROCESS_END);
            PerfUtils.MeasureMarks(INITIAL_RESPONSE_PROCESS, INITIAL_RESPONSE_PROCESS_START, INITIAL_RESPONSE_PROCESS_END);
            if (!FastViewSettings.fastView) {
                var ssrData = SSRDataUtils.getPageHtmlInfoFromGetCellsResponse(g_initialRequestResponseObject);
                if (ssrData && ssrData.pageHtml) {
                    _this.fastViewFactory.launchFastView(ssrData.pageHtml, "WacBootGetCells", ssrData.editable);
                }
            }
            g_fastViewOpenTime = new Date();
        };
        this.onInitialResponseReady = function () {
            if (g_onInitialResponseReady) {
                g_onInitialResponseReady();
            }
        };
        this.onRenderPageRequestCompleted = function (xmlHttpRequest) {
            var renderPageRequestResponse = xmlHttpRequest.responseText;
            function getPageHtmlFromRenderPageResponse(responseText) {
                var response = WacBootExecutor.getResponseFromText(responseText);
                if (response && response.Responses[0] && response.Responses[0][1] && response.Responses[0][1].Html) {
                    return response.Responses[0][1].Html;
                }
                return undefined;
            }
            if (FastViewSettings.fastView)
                return;
            var pageHtml = getPageHtmlFromRenderPageResponse(renderPageRequestResponse);
            if (pageHtml) {
                _this.fastViewFactory.launchFastView(pageHtml, "WacBootRenderPage");
            }
        };
    }
    WacBootExecutor.prototype.makeGetCellsRequest = function (onRequestCompleted) {
        FastViewSettings.initialParaId = this.wacBootOptions.initParagraphId || 0;
        var requestUrl = JSON.stringify(window.location.href);
        var getCellsRequestMembers = ",\"SearchQuery\":null" +
            ",\"IsNewFile\":" +
            (this.wacBootOptions.isNewFile && this.wacBootOptions.optimizedForNewFile).toString() +
            ",\"InitialParaId\":" +
            FastViewSettings.initialParaId +
            ",\"RequestUrl\":" +
            requestUrl +
            ",\"SkipPageHtmlInResponse\":" +
            this.wacBootOptions.skipPageHtmlInGetCellsResponse.toString();
        var body = this.getRequestBody(1, getCellsRequestMembers, {});
        var oneNoteRequestUrl = this.wacBootOptions.requestOptions.url + "OneNote.ashx";
        this.makeRequest(oneNoteRequestUrl, body, onRequestCompleted, this.setGetCellsRequestGlobals);
    };
    WacBootExecutor.prototype.makeRenderPageRequest = function (additionalBodyData) {
        if (this.wacBootOptions.isNewFile && this.wacBootOptions.optimizedForNewFile) {
            return;
        }
        var body = this.getRequestBody(46, "", additionalBodyData);
        var oneNoteRequestUrl = this.wacBootOptions.requestOptions.url + "OneNote.ashx?IsRenderPage=1";
        this.makeRequest(oneNoteRequestUrl, body, this.onRenderPageRequestCompleted, function () { });
    };
    WacBootExecutor.prototype.makeStartSessionRequest = function (startSessionHandler, responseHandler) {
        var requestUrl = this.wacBootOptions.requestOptions.url + startSessionHandler;
        this.makeRequest(requestUrl, "", responseHandler, function () { });
    };
    WacBootExecutor.prototype.setGetCellsRequestGlobals = function () {
        g_initialRequestInvokedTime = new Date();
        g_initialRequestMade = true;
        PerfUtils.AddMark(INITIAL_REQUEST_START);
    };
    WacBootExecutor.prototype.makeRequest = function (requestUrl, requestBody, responseHandler, setRequestGlobals) {
        var request = new XMLHttpRequest();
        var requestHeader = {};
        request.onreadystatechange = function () {
            if (request && request.readyState === 4) {
                if (typeof request.status === "undefined" || request.status === 0)
                    return;
                try {
                    if (responseHandler) {
                        responseHandler(request);
                    }
                }
                finally {
                    if (request != null) {
                        request.onreadystatechange = function () { };
                        request = undefined;
                    }
                }
            }
        };
        request.open('Post', requestUrl, true);
        this.buildRequestHeaderDict(requestHeader);
        for (var k in requestHeader) {
            request.setRequestHeader(k, requestHeader[k]);
        }
        if (!requestBody) {
            requestBody = "";
        }
        setRequestGlobals();
        request.send(requestBody);
    };
    WacBootExecutor.prototype.buildRequestHeaderDict = function (requestHeader) {
        requestHeader['X-xhr'] = '1';
        if (this.wacBootOptions.requestOptions.userSessionId) {
            requestHeader["X-UserSessionId"] = this.wacBootOptions.requestOptions.userSessionId;
        }
        if (this.wacBootOptions.requestOptions.buildVersion) {
            requestHeader["X-OfficeVersion"] = this.wacBootOptions.requestOptions.buildVersion;
        }
        requestHeader["Content-Type"] = "application/json; charset=utf-8";
        if (this.wacBootOptions.requestOptions.canary) {
            requestHeader["X-Key"] = this.wacBootOptions.requestOptions.canary;
        }
        if (this.wacBootOptions.requestOptions.accessToken) {
            requestHeader["X-AccessToken"] = this.wacBootOptions.requestOptions.accessToken;
        }
        if (this.wacBootOptions.requestOptions.accessTokenTtl) {
            requestHeader["X-AccessTokenTtl"] = this.wacBootOptions.requestOptions.accessTokenTtl;
        }
        if (this.wacBootOptions.requestOptions.userType) {
            requestHeader["X-UserType"] = this.wacBootOptions.requestOptions.userType;
        }
        if (this.wacBootOptions.requestOptions.logHostRequests === 1) {
            requestHeader["X-LogHostRequests"] = '1';
        }
        if (this.wacBootOptions.requestOptions.wacCluster) {
            requestHeader["X-WacCluster"] = this.wacBootOptions.requestOptions.wacCluster;
        }
        if (this.wacBootOptions.requestOptions.wacUserAgent) {
            requestHeader["X-WacUserAgent"] = this.wacBootOptions.requestOptions.wacUserAgent;
        }
        if (this.wacBootOptions.requestOptions.renderingMode) {
            requestHeader["X-ServerSideRendering"] = this.wacBootOptions.requestOptions.renderingMode;
        }
        if (this.wacBootOptions.requestOptions.feMachineId) {
            requestHeader["X-FEMachineId"] = this.wacBootOptions.requestOptions.feMachineId;
        }
        requestHeader["X-Requested-With"] = "XMLHttpRequest";
    };
    WacBootExecutor.prototype.getRequestBody = function (operationId, requestMembers, additionalBodyData) {
        var fileId = JSON.stringify(this.wacBootOptions.requestOptions.rootQuerySignature);
        if (fileId) {
            fileId = fileId.substring(1, fileId.length - 1);
        }
        var pageTarget = JSON.stringify(this.wacBootOptions.requestOptions.pageTarget);
        if (pageTarget) {
            pageTarget = pageTarget.substring(1, pageTarget.length - 1);
        }
        var head = "{\"Mode\":" + this.wacBootOptions.requestOptions.requestHeadMode + ",\"srs\":[[";
        var body = ",{\"FileId\":\"" + fileId + "\",\"PageTarget\":\"" + pageTarget + "\",\"OperationId\":1";
        for (var id in additionalBodyData) {
            body += ",\"" + id + "\":" + additionalBodyData[id];
        }
        var tail = "}]]}";
        return head + operationId + body + requestMembers + tail;
    };
    WacBootExecutor.getResponseFromText = function (responseText) {
        try {
            return JSON.parse(responseText);
        }
        catch (e) {
            FastViewSettings.fastBootError = "JSON.parse failed: " + e.message + "\r\n" + e.stack;
        }
        return undefined;
    };
    return WacBootExecutor;
}());
var SkeletalDOM = (function () {
    function SkeletalDOM() {
    }
    SkeletalDOM.getElement = function (id) {
        if (this.DOMElements.hasOwnProperty(id)) {
            return this.DOMElements[id];
        }
        var element = document.getElementById(id);
        return element ? this.DOMElements[id] = element : null;
    };
    SkeletalDOM.removeElement = function (element) {
        if (element && this.DOMElements.hasOwnProperty(element.id)) {
            delete this.DOMElements[element.id];
        }
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
        }
        return;
    };
    SkeletalDOM.removeElementById = function (id) {
        this.removeElement(this.getElement(id));
    };
    SkeletalDOM.DOMElements = {};
    return SkeletalDOM;
}());
var AppState = (function () {
    function AppState() {
    }
    AppState.initialize = function (isViewMode, isEmbedMode, isSimplifiedReactRibbonInTreatment, isNewSLRVisualsShown, isNewHeaderInTreatment, ribbonCookieName, simplifiedRibbonCookieName, isSnackbarNavPaneEnabled, isTwoPaneNavEnabled, isCssPositionRewriteEnabled) {
        this.isViewMode = isViewMode;
        this.isEmbedMode = isEmbedMode;
        this.isInTouchMode = "ontouchstart" in window;
        this.isSimplifiedReactRibbonInTreatment = isSimplifiedReactRibbonInTreatment;
        this.isNewSLRVisualsShown = isNewSLRVisualsShown;
        this.isOldRibbonCollapsedCookieOn = FastViewUtils.getCookie(ribbonCookieName).toLowerCase() !== 'false';
        this.isSimplifiedRibbonCookieOn = FastViewUtils.getCookie(simplifiedRibbonCookieName).toLowerCase() !== 'false';
        this.isNewHeaderShown = (this.isSimplifiedReactRibbonInTreatment || isNewHeaderInTreatment) && !this.isViewMode;
        this.isSimplifiedReactRibbonShown = this.isSimplifiedReactRibbonInTreatment && this.isSimplifiedRibbonCookieOn && !this.isViewMode;
        this.isOldRibbonExpandedAndShown = !this.isSimplifiedReactRibbonShown && !this.isOldRibbonCollapsedCookieOn && !this.isViewMode;
        this.isOldRibbonCollapsedAndShown = !this.isSimplifiedReactRibbonShown && this.isOldRibbonCollapsedCookieOn && !this.isViewMode;
        this.isViewModeAndRibbonPanelSmall = this.isViewMode && this.isOldRibbonCollapsedCookieOn && !this.isSimplifiedReactRibbonInTreatment;
        this.isViewModeAndRibbonPanelLarge = this.isViewMode && (!this.isOldRibbonCollapsedCookieOn || this.isSimplifiedReactRibbonInTreatment);
        this.isSnackbarNavPaneEnabled = isSnackbarNavPaneEnabled;
        this.isTwoPaneNavEnabled = isTwoPaneNavEnabled;
        this.isCssPositionRewriteEnabled = isCssPositionRewriteEnabled;
    };
    return AppState;
}());
var SkeletalConstants;
(function (SkeletalConstants) {
    SkeletalConstants[SkeletalConstants["HideAnimationTime"] = 256] = "HideAnimationTime";
    SkeletalConstants[SkeletalConstants["MinWidthToShowPageColumnPane"] = 900] = "MinWidthToShowPageColumnPane";
    SkeletalConstants[SkeletalConstants["MinWidthToShowNavpane"] = 499] = "MinWidthToShowNavpane";
    SkeletalConstants[SkeletalConstants["MinWidthToResizeTwoPaneNav"] = 425] = "MinWidthToResizeTwoPaneNav";
    SkeletalConstants[SkeletalConstants["MinWidthForTwoPaneNav"] = 300] = "MinWidthForTwoPaneNav";
})(SkeletalConstants || (SkeletalConstants = {}));
var SkeletalBootUtils = (function () {
    function SkeletalBootUtils() {
    }
    SkeletalBootUtils.clearAriaLoadingAttributes = function () {
        var appOuterContainer = document.getElementById("applicationOuterContainer");
        if (appOuterContainer) {
            appOuterContainer.removeAttribute("aria-busy");
            appOuterContainer.removeAttribute("aria-hidden");
        }
    };
    SkeletalBootUtils.getFastViewSkeletalClass = function () {
        if (AppState.isCssPositionRewriteEnabled) {
            return this.getPositionRewriteFastViewSkeletalClass();
        }
        else {
            return this.getAbsoluteFastViewSkeletalClass();
        }
    };
    SkeletalBootUtils.getPositionRewriteFastViewSkeletalClass = function () {
        return "";
    };
    SkeletalBootUtils.getAbsoluteFastViewSkeletalClass = function () {
        var fastViewSkeletalClass = "";
        if (this.isRtlMode()) {
            fastViewSkeletalClass = "SkeletalFastViewRtl";
        }
        else {
            fastViewSkeletalClass = "SkeletalFastView";
            if (AppState.isEmbedMode ||
                this._clientWidth <= SkeletalConstants.MinWidthToShowNavpane) {
                fastViewSkeletalClass = "SkeletalFastViewNoNavpane";
            }
            else if (this._clientWidth <= SkeletalConstants.MinWidthToShowPageColumnPane) {
                fastViewSkeletalClass = "SkeletalFastViewPageColumnNavpane";
            }
        }
        if (AppState.isViewModeAndRibbonPanelLarge) {
            fastViewSkeletalClass += " SkeletalFastViewViewMode";
        }
        if (AppState.isEmbedMode) {
            fastViewSkeletalClass += " SkeletalFastViewEmbedMode";
        }
        return fastViewSkeletalClass;
    };
    SkeletalBootUtils.collapseSkeletalRibbon = function () {
        if (AppState.isCssPositionRewriteEnabled) {
            this.collapsePositionRewriteSkeletalRibbon();
        }
        else {
            this.collapseAbsoluteSkeletalRibbon();
        }
    };
    SkeletalBootUtils.collapsePositionRewriteSkeletalRibbon = function () {
    };
    SkeletalBootUtils.collapseAbsoluteSkeletalRibbon = function () {
        var skeletalMainContent = SkeletalDOM.getElement('SkeletalMainContent');
        if (skeletalMainContent) {
            skeletalMainContent.className += AppState.isEmbedMode ? " collapsedRibbonEmbedMode" : " collapsedRibbon";
        }
        SkeletalDOM.removeElementById('SkeletalRibbonExtension');
    };
    SkeletalBootUtils.updateRibbonPanel = function () {
        if (AppState.isCssPositionRewriteEnabled) {
            this.updatePositionRewriteRibbonPanel();
        }
        else {
            this.updateAbsoluteRibbonPanel();
        }
    };
    SkeletalBootUtils.updatePositionRewriteRibbonPanel = function () {
    };
    SkeletalBootUtils.updateAbsoluteRibbonPanel = function () {
        if (this._ribbonPanelUpdated)
            return;
        var wacViewRibbonPanel = document.getElementsByClassName("WACReadingBarPanel").item(0);
        if (AppState.isViewMode && wacViewRibbonPanel) {
            this._ribbonPanelUpdated = true;
            if (AppState.isViewModeAndRibbonPanelLarge) {
                wacViewRibbonPanel.className += " RibbonPanelMaximizedViewMode";
            }
            else if (AppState.isViewModeAndRibbonPanelSmall) {
                wacViewRibbonPanel.className += " RibbonPanelMinimized";
            }
        }
        else {
            var wacRibbonPanel = document.getElementById("WACRibbonPanel");
            if (wacRibbonPanel != null) {
                this._ribbonPanelUpdated = true;
                if (AppState.isSimplifiedReactRibbonShown) {
                    wacRibbonPanel.className += " RibbonPanelSLRMode";
                    wacRibbonPanel.className += AppState.isNewSLRVisualsShown ? " RibbonPanelNewSLRMode" : "";
                }
                else if (AppState.isOldRibbonExpandedAndShown && !AppState.isInTouchMode) {
                    wacRibbonPanel.className += " RibbonPanelMaximized";
                }
                else if (AppState.isOldRibbonExpandedAndShown && AppState.isInTouchMode) {
                    wacRibbonPanel.className += " RibbonPanelMaximizedTouchMode";
                }
                else if (AppState.isOldRibbonCollapsedAndShown) {
                    wacRibbonPanel.className += " RibbonPanelMinimized";
                }
            }
            if (wacViewRibbonPanel) {
                wacViewRibbonPanel.style.display = 'none';
            }
        }
    };
    SkeletalBootUtils.updateWacDocumentPanel = function () {
        if (AppState.isCssPositionRewriteEnabled) {
            this.updatePositionRewriteWacDocumentPanel();
        }
        else {
            this.updateAbsoluteWacDocumentPanel();
        }
    };
    SkeletalBootUtils.updatePositionRewriteWacDocumentPanel = function () {
    };
    SkeletalBootUtils.updateAbsoluteWacDocumentPanel = function () {
        var wacDocumentPanel = document.getElementById("WACDocumentPanel");
        var wacDocumentPanelContent = document.getElementById("WACDocumentPanelContent");
        if (wacDocumentPanel != null) {
            wacDocumentPanel.className += " skeletalEnabled";
            if (AppState.isViewModeAndRibbonPanelLarge) {
                wacDocumentPanel.style.top = '40px';
            }
            else if (AppState.isViewModeAndRibbonPanelSmall) {
                wacDocumentPanel.style.top = '30px';
            }
            else if (AppState.isSimplifiedReactRibbonShown) {
                wacDocumentPanel.style.top = AppState.isNewSLRVisualsShown ? "77px" : "73px";
            }
            else if (!AppState.isOldRibbonCollapsedCookieOn && !AppState.isInTouchMode) {
                wacDocumentPanel.style.top = "124px";
            }
            if (this.isRtlMode()) {
                wacDocumentPanel.style.right = "0px";
            }
            else if (AppState.isTwoPaneNavEnabled && !AppState.isEmbedMode) {
                if (this._clientWidth < SkeletalConstants.MinWidthForTwoPaneNav) {
                    wacDocumentPanel.style.left = SkeletalConstants.MinWidthToShowNavpane.toFixed() + 'px';
                }
                else if (this._clientWidth < SkeletalConstants.MinWidthToResizeTwoPaneNav) {
                    wacDocumentPanel.style.left = this._clientWidth.toFixed() + 'px';
                }
                else {
                    wacDocumentPanel.style.left = '426px';
                }
            }
            else if (AppState.isEmbedMode || this._clientWidth <= SkeletalConstants.MinWidthToShowNavpane) {
                wacDocumentPanel.style.left = "0px";
            }
            else if (this._clientWidth <= SkeletalConstants.MinWidthToShowPageColumnPane) {
                wacDocumentPanel.style.left = "198px";
            }
            else if (AppState.isSnackbarNavPaneEnabled) {
                wacDocumentPanel.style.left = "438px";
            }
            else {
                wacDocumentPanel.style.left = "393px";
            }
        }
        if (wacDocumentPanelContent != null) {
            wacDocumentPanelContent.style.border = 'unset';
        }
    };
    SkeletalBootUtils.customizeSkeletalExperience = function () {
        this._clientWidth = document.body.clientWidth;
        if (AppState.isSimplifiedReactRibbonShown) {
            SkeletalDOM.removeElementById('SkeletalAdditionOldRibbon');
        }
        else {
            SkeletalDOM.removeElementById('SkeletalNewRibbon');
        }
        if (AppState.isEmbedMode) {
            SkeletalDOM.removeElementById('SkeletalHeader');
            SkeletalDOM.removeElementById('SkeletalNewHeader');
        }
        else if (AppState.isNewHeaderShown) {
            SkeletalDOM.removeElementById('SkeletalHeader');
        }
        else {
            SkeletalDOM.removeElementById('SkeletalNewHeader');
        }
        if (AppState.isCssPositionRewriteEnabled) {
            this.customizePositionRewriteSkeletalExperienceLayout();
        }
        else {
            this.customizeAbsoluteSkeletalExperienceLayout();
        }
    };
    SkeletalBootUtils.customizePositionRewriteSkeletalExperienceLayout = function () {
    };
    SkeletalBootUtils.customizeAbsoluteSkeletalExperienceLayout = function () {
        var skeletalMainContent = SkeletalDOM.getElement('SkeletalMainContent');
        if (AppState.isViewModeAndRibbonPanelSmall) {
            var skeletalRibbon = SkeletalDOM.getElement('SkeletalRibbon');
            if (skeletalMainContent) {
                skeletalMainContent.style.top = AppState.isEmbedMode ? '30px' : '80px';
            }
            if (skeletalRibbon) {
                skeletalRibbon.innerHTML = "";
                skeletalRibbon.className = "skeletalRibbon skeletalRibbonCollapsedViewMode";
            }
        }
        else if (AppState.isViewModeAndRibbonPanelLarge) {
            var skeletalRibbon = SkeletalDOM.getElement('SkeletalRibbon');
            if (skeletalRibbon) {
                skeletalRibbon.innerHTML = "";
                skeletalRibbon.className = "skeletalRibbon skeletalRibbonExpandedViewMode";
            }
            if (skeletalMainContent) {
                skeletalMainContent.style.top = AppState.isEmbedMode ? '40px' : '90px';
            }
        }
        if (AppState.isSimplifiedReactRibbonShown) {
            var skeletalRibbon = SkeletalDOM.getElement('SkeletalRibbon');
            if (skeletalRibbon) {
                skeletalRibbon.className = AppState.isNewSLRVisualsShown ? 'skeletalSLRNewVisual' : 'skeletalSLR';
            }
        }
        if (AppState.isEmbedMode) {
            var skeletalRibbon = SkeletalDOM.getElement('SkeletalRibbon');
            if (skeletalRibbon) {
                skeletalRibbon.style.top = '0px';
            }
            var skeletalAdditionalRibbon = SkeletalDOM.getElement('SkeletalAdditionOldRibbon');
            if (skeletalAdditionalRibbon) {
                skeletalAdditionalRibbon.style.top = '0px';
            }
        }
        if (this.isRtlMode()) {
            this.loadSkeletalInRTL();
        }
        if (AppState.isOldRibbonCollapsedAndShown) {
            SkeletalBootUtils.collapseSkeletalRibbon();
        }
        else if (AppState.isOldRibbonExpandedAndShown && AppState.isEmbedMode) {
            if (skeletalMainContent) {
                skeletalMainContent.style.top = '125px';
            }
        }
        if (AppState.isTwoPaneNavEnabled && !AppState.isEmbedMode) {
            var skeletalNavpane = SkeletalDOM.getElement('SkeletalNavpane');
            var skeletalSectionColumn = SkeletalDOM.getElement("SkeletalNavpaneSectionColumn");
            var skeletalPageColumn = SkeletalDOM.getElement('SkeletalNavpanePageColumn');
            var skeletalCanvas = SkeletalDOM.getElement('SkeletalCanvas');
            if (skeletalNavpane != null && skeletalSectionColumn != null && skeletalPageColumn != null && skeletalCanvas != null) {
                if (this._clientWidth <= SkeletalConstants.MinWidthForTwoPaneNav) {
                    skeletalNavpane.style.width = '300px';
                    skeletalCanvas.style.left = '299px';
                    skeletalSectionColumn.style.width = '124px';
                    skeletalPageColumn.style.width = '124px';
                }
                else if (this._clientWidth <= SkeletalConstants.MinWidthToResizeTwoPaneNav) {
                    skeletalNavpane.style.width = this._clientWidth.toFixed() + 'px';
                    skeletalCanvas.style.left = this._clientWidth - 1 + 'px';
                    var paneWidth = (this._clientWidth * 0.5) - 24;
                    skeletalSectionColumn.style.width = paneWidth.toFixed() + 'px';
                    skeletalPageColumn.style.width = paneWidth.toFixed() + 'px';
                }
            }
        }
        else if (AppState.isEmbedMode ||
            this._clientWidth <= SkeletalConstants.MinWidthToShowNavpane) {
            SkeletalDOM.removeElementById('SkeletalNavpane');
            var skeletalCanvas = SkeletalDOM.getElement('SkeletalCanvas');
            if (skeletalCanvas != null) {
                skeletalCanvas.style.left = '0px';
            }
        }
        else if (this._clientWidth <= SkeletalConstants.MinWidthToShowPageColumnPane) {
            var skeletalNavpane = SkeletalDOM.getElement('SkeletalNavpane');
            var skeletalNotebookName = SkeletalDOM.getElement("SkeletalNotebookName");
            var skeletalCanvas = SkeletalDOM.getElement('SkeletalCanvas');
            SkeletalDOM.removeElementById('SkeletalNavpaneSectionColumn');
            SkeletalDOM.removeElementById('SkeletalNavpaneTab');
            if (skeletalNavpane != null &&
                skeletalNotebookName != null &&
                skeletalCanvas != null) {
                skeletalNavpane.style.width = '201px';
                skeletalCanvas.style.left = '200px';
                skeletalNotebookName.style.right = '42px';
            }
        }
        if (AppState.isSimplifiedReactRibbonShown && skeletalMainContent != null) {
            skeletalMainContent.style.paddingTop =
                AppState.isEmbedMode ? '74px'
                    : AppState.isNewSLRVisualsShown ? '128px'
                        : '124px';
            skeletalMainContent.style.top = '0px';
        }
        else if (AppState.isOldRibbonCollapsedAndShown) {
            var ribbonSelectedTabWrapper = document.getElementsByClassName("skeletalRibbonBoxContainer").item(0);
            var skeletalRibbonElement = SkeletalDOM.getElement('SkeletalRibbonBar');
            if (skeletalMainContent != null &&
                skeletalRibbonElement != null &&
                ribbonSelectedTabWrapper != null) {
                SkeletalDOM.removeElement(ribbonSelectedTabWrapper);
                skeletalRibbonElement.style.height = '29px';
                skeletalRibbonElement.style.borderBottom = '1px solid #d2d2d2';
                skeletalMainContent.style.top = '0px';
            }
        }
        else if (AppState.isOldRibbonExpandedAndShown && AppState.isInTouchMode) {
            var skeletalExtendedRibbonElement = SkeletalDOM.getElement('SkeletalRibbonExtension');
            if (skeletalMainContent != null && skeletalExtendedRibbonElement != null) {
                skeletalExtendedRibbonElement.style.height = '108px';
                skeletalMainContent.style.top = '189px';
            }
        }
    };
    SkeletalBootUtils.isRtlMode = function () {
        var container = SkeletalDOM.getElement('SkeletalExperience');
        if (container != null) {
            return container.getAttribute("direction") == "rtl";
        }
        return false;
    };
    SkeletalBootUtils.loadSkeletalInRTL = function () {
        var elementsToRTL = ['SkeletalHeader', 'SkeletalNewHeader', 'SkeletalRibbonAppTitle', 'SkeletalSLRAppTitle', 'SkeletalRibbon', 'SkeletalAdditionOldRibbon', 'SkeletalMainContent', 'SkeletalCanvas'];
        for (var elementId in elementsToRTL) {
            var element = SkeletalDOM.getElement(elementsToRTL[elementId]);
            if (element) {
                element.className += " skeletalRTL";
            }
        }
        var canvas = SkeletalDOM.getElement('SkeletalCanvas');
        if (canvas) {
            canvas.className += " skeletalCanvasRtl";
        }
    };
    SkeletalBootUtils.fadeOutAndRemoveElement = function (elementId, callback) {
        var element = SkeletalDOM.getElement(elementId);
        if (element) {
            element.style.background = "transparent";
            element.style.opacity = "0";
            element.className += " skeletalCover";
            window.setTimeout(function () {
                SkeletalDOM.removeElement(element);
                if (callback)
                    callback();
            }, SkeletalConstants.HideAnimationTime);
        }
    };
    SkeletalBootUtils.setMainContentEditable = function () {
        if (this._isMainContentEditable)
            return;
        this._isMainContentEditable = true;
        this.fadeOutAndRemoveElement("SkeletalNavpane");
        this.fadeOutAndRemoveElement("SkeletalMainContent");
        var splashScreen = document.getElementById("load_back");
        if (splashScreen) {
            splashScreen.style.height = 'auto';
        }
    };
    SkeletalBootUtils._clientWidth = 0;
    SkeletalBootUtils._isMainContentEditable = false;
    SkeletalBootUtils._ribbonPanelUpdated = false;
    return SkeletalBootUtils;
}());
var SkeletalBoot = (function () {
    function SkeletalBoot() {
    }
    SkeletalBoot.launchExperience = function (appSettings) {
        AppState.initialize(appSettings["IsEditMode"] === "false", appSettings["IsEmbedMode"] === "true", appSettings["SimplifiedReactRibbonUxIsEnabled"] === "true", appSettings["RefreshedTabHeaderVisualsForSimplifiedUxIsEnabled"] === "true", appSettings["TransistionalHeaderUIIsEnabled"] === "true", appSettings["RibbonPreferenceCookieNameHint"], appSettings["IsSimplifiedRibbonOnCookieName"], appSettings["SnackbarNavPaneIsEnabled"] === "true", appSettings["OneNoteTwoPaneNavPaneIsEnabled"] === "true", appSettings["OneNoteCssPositionRewriteIsEnabled"] === "true");
        SkeletalBootUtils.customizeSkeletalExperience();
        this.showSkeletalUx();
        window.setTimeout(this.dismissSkeletalBootUx, this.HalfMinute);
    };
    SkeletalBoot.showSkeletalUx = function () {
        var skeletalExperienceContainer = SkeletalDOM.getElement("SkeletalExperience");
        if (skeletalExperienceContainer) {
            skeletalExperienceContainer.style.opacity = "1";
            skeletalExperienceContainer.className += " skeletalShow";
        }
    };
    SkeletalBoot.setRibbonReady = function () {
        if (this._isExperienceEnded)
            return;
        this._isRibbonReady = true;
        if (this.tryDismissSkeletalBootUxIfAllComponentsReady() == false && this._isContentReady) {
            SkeletalBootUtils.fadeOutAndRemoveElement("SkeletalRibbon");
        }
    };
    SkeletalBoot.setPageReady = function () {
        if (this._isExperienceEnded)
            return;
        SkeletalBootUtils.updateRibbonPanel();
        SkeletalBootUtils.updateWacDocumentPanel();
        this._isContentReady = true;
        if (this.tryDismissSkeletalBootUxIfAllComponentsReady() == false) {
            this.dismissSkeletalCanvas();
        }
    };
    SkeletalBoot.setNavpaneReady = function () {
        if (this._isExperienceEnded)
            return;
        SkeletalBootUtils.updateRibbonPanel();
        this._isNavpaneReady = true;
        if (this.tryDismissSkeletalBootUxIfAllComponentsReady() == false && this._isContentReady) {
            SkeletalBootUtils.fadeOutAndRemoveElement("SkeletalNavpane", function () { SkeletalBootUtils.setMainContentEditable(); });
        }
    };
    SkeletalBoot.setFastViewReady = function () {
        if (this._isExperienceEnded)
            return;
        this.dismissSkeletalCanvas();
    };
    SkeletalBoot.tryDismissSkeletalBootUxIfAllComponentsReady = function () {
        if (this._isContentReady && this._isNavpaneReady && this._isRibbonReady) {
            return this.dismissSkeletalBootUx();
        }
        return false;
    };
    SkeletalBoot.dismissSkeletalBootUx = function () {
        if (this._isExperienceEnded)
            return false;
        var skeletalExperience = SkeletalDOM.getElement('SkeletalExperience');
        var splashScreenBack = document.getElementById("load_back");
        var wacCanvas = document.getElementById('WACDocumentPanel');
        var wacRibbonPanel = document.getElementById('WACRibbonPanel');
        if (!skeletalExperience || !splashScreenBack || !wacCanvas || !wacRibbonPanel) {
            SkeletalBoot.endExperience(splashScreenBack);
            return false;
        }
        this.adjustWacRibbonAfterDismissSkeletal(wacRibbonPanel);
        this.adjustWacCanvasAfterDismissSkeletal(wacCanvas);
        SkeletalBootUtils.fadeOutAndRemoveElement('SkeletalExperience');
        window.setTimeout(function () {
            SkeletalBoot.endExperience(splashScreenBack);
        }, SkeletalConstants.HideAnimationTime * 2);
        return true;
    };
    SkeletalBoot.adjustWacRibbonAfterDismissSkeletal = function (wacRibbonPanel) {
        if (AppState.isCssPositionRewriteEnabled) {
            this.adjustPositionRewriteWacRibbonAfterDismissSkeletal();
        }
        else {
            this.adjustAbsoluteWacRibbonAfterDismissSkeletal(wacRibbonPanel);
        }
    };
    SkeletalBoot.adjustPositionRewriteWacRibbonAfterDismissSkeletal = function () {
    };
    SkeletalBoot.adjustAbsoluteWacRibbonAfterDismissSkeletal = function (wacRibbonPanel) {
        if (AppState.isSimplifiedReactRibbonShown) {
            wacRibbonPanel.style.height = AppState.isNewSLRVisualsShown ? "77px" : "73px";
        }
        else {
            wacRibbonPanel.style.height = "auto";
        }
    };
    SkeletalBoot.adjustWacCanvasAfterDismissSkeletal = function (wacCanvas) {
        if (AppState.isCssPositionRewriteEnabled) {
            this.adjustPositionRewriteWacCanvasAfterDismissSkeletal();
        }
        else {
            this.adjustAbsoluteWacCanvasAfterDismissSkeletal(wacCanvas);
        }
    };
    SkeletalBoot.adjustPositionRewriteWacCanvasAfterDismissSkeletal = function () {
    };
    SkeletalBoot.adjustAbsoluteWacCanvasAfterDismissSkeletal = function (wacCanvas) {
        wacCanvas.className = "SkeletalWacDocumentPanel skeletalEnabled " + wacCanvas.className;
    };
    SkeletalBoot.dismissSkeletalCanvas = function () {
        var _this = this;
        if (this._isContentReady)
            return;
        this._isContentReady = true;
        var splashScreen = document.getElementById("load_back");
        if (splashScreen != null) {
            this.preDismissSkeletalCanvas(splashScreen);
            SkeletalBootUtils.fadeOutAndRemoveElement("SkeletalCanvas", function () {
                if (_this._isNavpaneReady) {
                    SkeletalBootUtils.setMainContentEditable();
                }
            });
        }
    };
    SkeletalBoot.preDismissSkeletalCanvas = function (splashScreen) {
        if (AppState.isCssPositionRewriteEnabled) {
            this.preDismissPositionRewriteSkeletalCanvas();
        }
        else {
            this.preDismissAbsoluteSkeletalCanvas(splashScreen);
        }
    };
    SkeletalBoot.preDismissPositionRewriteSkeletalCanvas = function () {
    };
    SkeletalBoot.preDismissAbsoluteSkeletalCanvas = function (splashScreen) {
        var ribbonPlaceHolder = document.getElementById("WACRibbonPlaceholder");
        var ribbonExtendedElement = SkeletalDOM.getElement("SkeletalRibbonExtension");
        if (ribbonPlaceHolder != null && ribbonExtendedElement != null) {
            ribbonPlaceHolder.style.height = "124px";
        }
        splashScreen.style.background = "transparent";
        if (SkeletalBootUtils.isRtlMode()) {
            var appContainer = document.getElementById("application");
            if (appContainer) {
                appContainer.style.minWidth = "0px";
            }
        }
        if (!AppState.isEmbedMode) {
            var appHeader = document.getElementById('AppHeaderPanel');
            if (appHeader) {
                appHeader.style.height = '48px';
            }
        }
    };
    SkeletalBoot.endExperience = function (splashScreenBack) {
        if (splashScreenBack) {
            this._isExperienceEnded = true;
            splashScreenBack.style.display = "none";
            splashScreenBack.style.height = "1px";
            splashScreenBack.style.opacity = "0";
            splashScreenBack.setAttribute("aria-hidden", "true");
            SkeletalBootUtils.clearAriaLoadingAttributes();
        }
    };
    SkeletalBoot._isRibbonReady = false;
    SkeletalBoot._isContentReady = false;
    SkeletalBoot._isNavpaneReady = false;
    SkeletalBoot._isExperienceEnded = false;
    SkeletalBoot.HalfMinute = 30000;
    return SkeletalBoot;
}());
var WindowVisibilityMetrics;
(function (WindowVisibilityMetrics) {
    ;
    function initialize() {
        WindowVisibilityMetrics.metrics = { initialVisibility: document.visibilityState, initializeTime: new Date(), events: [] };
        document.addEventListener("visibilitychange", handleVisibilityChange);
    }
    function stop() {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
    }
    WindowVisibilityMetrics.stop = stop;
    function handleVisibilityChange() {
        var eventData = { visibility: document.visibilityState, time: new Date() };
        WindowVisibilityMetrics.metrics.events.push(eventData);
    }
    initialize();
})(WindowVisibilityMetrics || (WindowVisibilityMetrics = {}));
function startWacBoot(appSettings, makeInitRequest) {
    if (makeInitRequest) {
        FastViewUtils.ensureCookieCompliance(appSettings["MSCCEnabled"] === "true", appSettings["MSCCCookies"]);
        var wacBootOptions = WacBootOptionsFactory.createWacBootOptions(appSettings, 2, true);
        var fastViewLauncher = new FastViewLauncher(appSettings["BootReadOnlyUx"] !== "true", true, true, false, appSettings);
        var wacBootExecutor_1 = new WacBootExecutor(fastViewLauncher, wacBootOptions);
        wacBootExecutor_1.makeGetCellsRequest(function (xmlHttpRequest) {
            wacBootExecutor_1.onGetCellsRequestCompleted(xmlHttpRequest);
            wacBootExecutor_1.onInitialResponseReady();
        });
        if (wacBootOptions.getCachedSSR) {
            wacBootExecutor_1.makeRenderPageRequest({});
        }
    }
}
var g_appSettings = {};
var WordEditorInstantAppResult = (function () {
    function WordEditorInstantAppResult(success, errorCode, extraErrorInfo) {
        this.success = success;
        this.errorCode = errorCode;
        this.extraErrorInfo = extraErrorInfo;
    }
    WordEditorInstantAppResult.createSuccess = function () {
        return new WordEditorInstantAppResult(true);
    };
    WordEditorInstantAppResult.createFailure = function (errorCode, extraErrorInfo) {
        return new WordEditorInstantAppResult(false, errorCode, extraErrorInfo);
    };
    return WordEditorInstantAppResult;
}());
var WordEditorInstantApp = (function () {
    function WordEditorInstantApp(instantAppSettings) {
        this.wacInitializeReadyRetryCount = 0;
        this.wacInitializeReadyAckReceived = false;
        this.wopiStartSessionCompleteReceived = false;
        this.wopiPendingSessionCompleteReceived = false;
        this.wopiStartSessionSentFromWacFrame = false;
        this.instantBootPltDiagnostics = {};
        this.instantAppSettings = instantAppSettings;
        this.logs = [];
        this.postMessageOrigin = this.instantAppSettings["PostMessageOrigin"];
        this.acceptStartSessionComplete = (this.instantAppSettings["AcceptStartSessionComplete"] === 'true');
    }
    WordEditorInstantApp.prototype.launchFastView = function (pageHtml, editable) {
        if (window.g_liveBooksAppConstructed) {
            this.log('App constructed before launching FastView');
        }
        if (FastViewSettings.fastView && FastViewSettings.fastView.isOpen()) {
            this.log('FastView was already opened');
        }
        new FastViewLauncher(true, true, true, false, this.instantAppSettings).launchFastView(pageHtml, 'WordEditorInstantApp', editable);
    };
    WordEditorInstantApp.prototype.trackOfficeServerDiagnostics = function (serverDiagnostics) {
        this.officeFrameDocumentFlushTime = Date.now();
        this.serverDiagnostics = serverDiagnostics;
    };
    WordEditorInstantApp.prototype.sendAppFailedMessage = function (errorCode) {
        this.sendPostMessageToParentWindow(WordEditorInstantApp.toJsApiAppFailed, { Error: { errorType: errorCode } }, '*');
    };
    WordEditorInstantApp.prototype.signalReady = function () {
        var _this = this;
        window.addEventListener('message', function (event) { _this.receivePostMessage(event); }, false);
        this.sendReadyMessage();
        var timeoutInMs = Number(this.instantAppSettings['WopiPendingSessionMessageTimeoutInMs']);
        if (!timeoutInMs)
            timeoutInMs = 10000;
        window.setTimeout(function () { return _this.timeoutWopiPendingSessionMessage(); }, timeoutInMs);
    };
    WordEditorInstantApp.prototype.startWacBoot = function () {
        startWacBoot(this.instantAppSettings, true);
    };
    WordEditorInstantApp.prototype.sendPostMessageToParentWindow = function (messageId, values, targetOriginOverride) {
        var message = {
            MessageId: messageId,
            SendTime: Date.now(),
            Values: values
        };
        var targetOrigin = this.postMessageOrigin;
        if (targetOriginOverride) {
            targetOrigin = targetOriginOverride;
        }
        window.parent.postMessage(JSON.stringify(message), targetOrigin);
        this.log("Sent " + messageId);
    };
    WordEditorInstantApp.prototype.receivePostMessage = function (event) {
        if (event.origin !== this.postMessageOrigin)
            return;
        var message;
        try {
            message = JSON.parse(event.data);
        }
        catch (e) {
            return;
        }
        switch (message.MessageId) {
            case WordEditorInstantApp.fromJsApiInitReadyAck:
                this.log('WacInitialize_Ready_Ack received');
                this.wacInitializeReadyAckReceived = true;
                break;
            case WordEditorInstantApp.fromJsApiPendingSessionFail:
                this.log('WopiPendingSession_Fail received');
                if (this.wopiPendingSessionCompleteReceived) {
                    this.log('WopiPendingSession_Fail received after a Complete/Fail was already received previously.');
                    return;
                }
                this.wopiPendingSessionCompleteReceived = true;
                this.wopiStartSessionCompleteReceived = true;
                this.initializeAppOnFailure('WopiPendingSession_Fail');
                break;
            case WordEditorInstantApp.fromJsApiPendingSessionComplete:
                this.log('WopiPendingSession_Complete received');
                this.sendPostMessageToParentWindow(WordEditorInstantApp.toJsApiSessionCompleteAck, {});
                if (this.wopiPendingSessionCompleteReceived) {
                    this.log('WopiPendingSession_Complete received after a Complete/Fail was already received previously.');
                }
                this.wopiPendingSessionCompleteReceived = true;
                var wopiDetails = message.Values.WopiDetails;
                this.instantBootPltDiagnostics = message.Values.Diagnostics || {};
                this.makeStartSessionRequest(wopiDetails);
                this.beginStartSessionTimeout(true);
                break;
            case WordEditorInstantApp.fromJsApiStartSessionComplete:
                this.log('WopiStartSession_Complete received');
                this.sendPostMessageToParentWindow(WordEditorInstantApp.toJsApiSessionCompleteAck, {});
                if (this.wopiStartSessionCompleteReceived) {
                    this.log('WopiStartSession_Complete received after a Complete/Fail was already received previously.');
                    return;
                }
                if (!this.acceptStartSessionComplete) {
                    this.log('WopiStartSession_Complete rejected');
                    return;
                }
                if (!message.Values.StartSessionResponse) {
                    this.log('WopiStartSession_Complete invalid content');
                    return;
                }
                this.wopiStartSessionCompleteReceived = true;
                if (!this.wopiPendingSessionCompleteReceived) {
                    this.wopiPendingSessionCompleteReceived = true;
                }
                var startSessionResponse = message.Values.StartSessionResponse;
                this.instantBootPltDiagnostics = message.Values.Diagnostics || {};
                this.processStartSessionResponse(false, startSessionResponse.RequestStatus, startSessionResponse.ResponseText);
                break;
            case WordEditorInstantApp.fromJsApiPendingAppCompleteReceived:
                this.log('WopiPendingApplicationComplete_Received received on wac frame');
                if (!this.wopiPendingSessionCompleteReceived) {
                    this.wopiPendingSessionCompleteReceived = true;
                }
                this.beginStartSessionTimeout(false);
                break;
        }
    };
    WordEditorInstantApp.prototype.beginStartSessionTimeout = function (startSessionRequestIsFromWacFrame) {
        var _this = this;
        var startSessionTimeoutInMs = Number(this.instantAppSettings['WopiStartSessionTimeoutInMs']);
        if (!startSessionTimeoutInMs)
            startSessionTimeoutInMs = 10000;
        if (startSessionRequestIsFromWacFrame) {
            this.wopiStartSessionSentFromWacFrame = true;
            window.setTimeout(function () { return _this.timeoutWopiStartSessionFromWacFrameMessage(); }, startSessionTimeoutInMs);
        }
        else {
            window.setTimeout(function () { return _this.timeoutWopiStartSessionFromJsApiMessage(); }, startSessionTimeoutInMs);
        }
    };
    WordEditorInstantApp.prototype.sendReadyMessage = function () {
        var _this = this;
        this.sendPostMessageToParentWindow(WordEditorInstantApp.toJsApiInitReady, {
            CanAcceptStartSessionComplete: this.acceptStartSessionComplete,
            Diagnostics: {
                officeSessionId: this.instantAppSettings['SessionId']
            }
        });
        window.setTimeout(function () { return _this.timeoutWacInitializeReadyAckMessage(); }, WordEditorInstantApp.wacInitializeReadyAckTimeoutInMs);
    };
    WordEditorInstantApp.prototype.timeoutWacInitializeReadyAckMessage = function () {
        if (this.wacInitializeReadyAckReceived || this.wopiPendingSessionCompleteReceived) {
            return;
        }
        this.wacInitializeReadyRetryCount++;
        if (this.wacInitializeReadyRetryCount < WordEditorInstantApp.wacInitializeReadyMaxRetries) {
            this.sendReadyMessage();
            this.log("WacInitializeReadyAckTimeout. [RetriesRemain:" + (WordEditorInstantApp.wacInitializeReadyMaxRetries -
                this.wacInitializeReadyRetryCount) + "]");
        }
        else {
            this.log('WacInitializeReadyAckTimeout. No retries remain');
        }
    };
    WordEditorInstantApp.prototype.timeoutWopiPendingSessionMessage = function () {
        if (!this.wopiPendingSessionCompleteReceived) {
            this.initializeAppOnFailure('WopiPendingSession_Timeout');
        }
    };
    WordEditorInstantApp.prototype.timeoutWopiStartSessionFromJsApiMessage = function () {
        if (!this.wopiStartSessionCompleteReceived && !this.wopiStartSessionSentFromWacFrame) {
            this.initializeAppOnFailure('StartSession_Fail');
        }
    };
    WordEditorInstantApp.prototype.timeoutWopiStartSessionFromWacFrameMessage = function () {
        if (!this.wopiStartSessionCompleteReceived) {
            this.initializeAppOnFailure('StartSession_Fail');
        }
    };
    WordEditorInstantApp.prototype.makeStartSessionRequest = function (wopiDetails) {
        var _this = this;
        var wacBootOptions = WacBootOptionsFactory.createWacBootOptions(this.instantAppSettings, 0, true, wopiDetails);
        var wacBootExecutor = new WacBootExecutor(null, wacBootOptions);
        var queryString = "WOPIsrc=" + encodeURIComponent(wopiDetails.WopiSrc);
        if (window.location.search)
            queryString += "&" + window.location.search.substr(1);
        if (this.instantAppSettings['FileGetUrlPresent'] === 'true') {
            queryString += '&fileGetUrlPresent=1';
        }
        this.instantBootPltDiagnostics.startSessionStartTime = Date.now();
        wacBootExecutor.makeStartSessionRequest("WordEditorStartSession.ashx?" + queryString, function (executor) { return _this.processStartSessionResponse(true, executor._xmlHttpRequest.status, executor._xmlHttpRequest.responseText); });
    };
    WordEditorInstantApp.prototype.getAppSettingsFromResponse = function (responseText) {
        try {
            var appSettings = JSON.parse(responseText);
            return { success: true, appSettings: appSettings };
        }
        catch (e) {
            return { success: false, errorInfo: e.message + '\r\n' + e.stack };
        }
    };
    WordEditorInstantApp.prototype.processStartSessionResponse = function (isStartSessionFromWac, requestStatus, responseText) {
        var _this = this;
        var processSessionResponseTime = Date.now();
        this.wopiStartSessionCompleteReceived = true;
        if (requestStatus !== 200) {
            this.initializeAppOnFailure('StartSession_Fail', "Status " + requestStatus);
            return;
        }
        function redirectIfNecessary(appSettings) {
            var urlToRedirect = appSettings['UrlToRedirect'];
            if (urlToRedirect) {
                window.top.location.replace(urlToRedirect);
            }
        }
        var appSettingsFromResponse = this.getAppSettingsFromResponse(responseText);
        if (!appSettingsFromResponse.success) {
            this.initializeAppOnFailure('StartSession_AppSettingsParseError', appSettingsFromResponse.errorInfo);
            return;
        }
        redirectIfNecessary(appSettingsFromResponse.appSettings);
        this.instantBootPltDiagnostics.isStartSessionFromWac = isStartSessionFromWac;
        if (isStartSessionFromWac) {
            this.instantBootPltDiagnostics.startSessionCompleteTime = processSessionResponseTime;
        }
        this.instantBootPltDiagnostics.appSettingsFetchedTime = Date.now();
        g_appSettings = appSettingsFromResponse.appSettings;
        WordEditorInstantApp.instantAppSettingsToPreserve.forEach(function (setting) {
            if (setting in _this.instantAppSettings) {
                g_appSettings[setting] = _this.instantAppSettings[setting];
            }
        });
        window.g_appSettingsDownloaded = true;
        this.initializeApp(WordEditorInstantAppResult.createSuccess());
    };
    WordEditorInstantApp.prototype.initializeAppOnFailure = function (errorCode, extraErrorInfo) {
        g_appSettings = this.instantAppSettings;
        window.g_appSettingsDownloaded = true;
        this.initializeApp(WordEditorInstantAppResult.createFailure(errorCode, extraErrorInfo));
    };
    WordEditorInstantApp.prototype.initializeApp = function (result) {
        if (result.success) {
            startWacBoot(g_appSettings, true);
        }
        else {
            this.sendBeacon('WordEditorInstantAppBootError', { errorCode: result.errorCode, extraErrorInfo: result.extraErrorInfo });
            g_appSettings['InstantBoot_FailureCode'] = result.errorCode;
            if (result.errorCode && result.extraErrorInfo) {
                g_appSettings[result.errorCode] = result.extraErrorInfo;
            }
        }
        this.sendBeacon('WordEditorInstantAppLogs', this.logs);
        if (window.g_livebooksJsDownloaded) {
            if (!Sys.Application.get_isInitialized()) {
                Sys.Application.add_init(pageInit);
                Sys.Application.initialize();
            }
            else if (!window.g_liveBooksAppConstructed) {
                pageInit();
            }
        }
    };
    WordEditorInstantApp.prototype.log = function (message) {
        this.logs.push({ time: Date.now(), message: message });
    };
    WordEditorInstantApp.prototype.sendBeacon = function (beaconType, beaconValue) {
        if (window._bB) {
            window._bB.sendBeacon(beaconType, beaconValue);
        }
    };
    WordEditorInstantApp.fromJsApiInitReadyAck = 'WacInitialize_Ready_Ack';
    WordEditorInstantApp.fromJsApiPendingSessionComplete = 'WopiPendingSession_Complete';
    WordEditorInstantApp.fromJsApiPendingSessionFail = 'WopiPendingSession_Fail';
    WordEditorInstantApp.fromJsApiPendingAppCompleteReceived = 'WopiPendingApplicationComplete_Received';
    WordEditorInstantApp.fromJsApiStartSessionComplete = 'WopiStartSession_Complete';
    WordEditorInstantApp.toJsApiInitReady = 'WacInitialize_Ready';
    WordEditorInstantApp.toJsApiAppFailed = 'Wac_AppFailed';
    WordEditorInstantApp.toJsApiSessionCompleteAck = 'WopiSession_Complete_Ack';
    WordEditorInstantApp.wacInitializeReadyMaxRetries = 3;
    WordEditorInstantApp.wacInitializeReadyAckTimeoutInMs = 1000;
    WordEditorInstantApp.instantAppSettingsToPreserve = ['MSCCCookies', 'MSCCEnabled', 'MSCCMarkup', 'RibbonImageBase', 'SharedStaticContentHost', 'Slice1Name', 'StaticContentHost', 'WacRootDomain'];
    return WordEditorInstantApp;
}());
