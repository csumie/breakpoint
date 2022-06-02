var g_cookieBannerVisible = false;
var CookieComplianceConstants;
(function (CookieComplianceConstants) {
    CookieComplianceConstants.cookieBannerId = "wacMsccBanner";
    CookieComplianceConstants.msccCookieName = "MSCC";
    CookieComplianceConstants.msccLearnMoreId = "msccLearnMore";
})(CookieComplianceConstants || (CookieComplianceConstants = {}));
var CookieComplianceSettings = (function () {
    function CookieComplianceSettings(essentialCookies) {
        this.essentialCookies = essentialCookies;
    }
    return CookieComplianceSettings;
}());
var ConsentSettings = (function () {
    function ConsentSettings(sourceEvent, eventName) {
        this.sourceEvent = sourceEvent;
        this.eventName = eventName;
    }
    return ConsentSettings;
}());
var WacCookieCompliance;
(function (WacCookieCompliance) {
    var essentialCookies = [];
    var skippedCookies = [];
    var allowConsent = true;
    var nonEssentialCookiesAllowed = true;
    var cookieProxied = false;
    var origCookieDescriptor = null;
    var getOriginalCookie = function () { return document.cookie; };
    var setOriginalCookie = function (value) { document.cookie = value; };
    var rootDomain = null;
    var consentDurationInDays = 390;
    function cookieIsEssential(cookie) {
        if (!cookie) {
            return false;
        }
        var trimmedCookie = cookie.trim();
        return essentialCookies.some(function (essentialCookie) {
            return essentialCookie.exec(trimmedCookie) != null;
        });
    }
    function getCompliantCookies() {
        var allCookieString = getOriginalCookie();
        if (nonEssentialCookiesAllowed) {
            return allCookieString;
        }
        var essentialCookies = "";
        allCookieString.split(";").forEach(function (cookie) {
            if (cookieIsEssential(cookie)) {
                essentialCookies += cookie + ";";
            }
        });
        return essentialCookies;
    }
    WacCookieCompliance.getCompliantCookies = getCompliantCookies;
    function setCompliantCookie(value) {
        if (nonEssentialCookiesAllowed || cookieIsEssential(value)) {
            setOriginalCookie(value);
        }
        else {
            skippedCookies.push(value);
        }
    }
    WacCookieCompliance.setCompliantCookie = setCompliantCookie;
    function disableNonEssentialCookies() {
        nonEssentialCookiesAllowed = false;
        if (cookieProxied) {
            return;
        }
        if (!origCookieDescriptor) {
            origCookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') || Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');
        }
        if (origCookieDescriptor && origCookieDescriptor.configurable) {
            Object.defineProperty(document, "cookie", {
                get: getCompliantCookies,
                set: setCompliantCookie
            });
            getOriginalCookie = function () {
                return origCookieDescriptor.get.call(document);
            };
            setOriginalCookie = function (value) {
                origCookieDescriptor.set.call(document, value);
            };
            cookieProxied = true;
        }
    }
    function createCookieBanner(bannerMarkup, bannerParent, addEventHandler) {
        if (g_cookieBannerVisible) {
            return;
        }
        var banner = document.createElement("div");
        banner.id = CookieComplianceConstants.cookieBannerId;
        banner.innerHTML = bannerMarkup;
        banner.children[0].style.display = "block";
        banner.children[0].style.zIndex = "9999";
        if (bannerParent) {
            bannerParent.insertBefore(banner, bannerParent.firstChild);
        }
        else {
            document.body.insertBefore(banner, document.body.firstChild);
        }
        var learnMore = document.getElementById(CookieComplianceConstants.msccLearnMoreId);
        if (learnMore != null) {
            addEventHandler(learnMore, "click", function (e) {
                window.open(e.target.href);
                e.preventDefault();
            });
        }
        g_cookieBannerVisible = true;
    }
    function requestConsentWithSettings(settings) {
        if (settings.essentialCookies) {
            settings.essentialCookies.forEach(function (essentialCookie) {
                try {
                    var regExp = new RegExp(essentialCookie);
                    essentialCookies.push(regExp);
                }
                catch (e) {
                }
            });
        }
        disableNonEssentialCookies();
        if (settings.markup) {
            createCookieBanner(settings.markup, settings.bannerParent, settings.addHandler);
        }
        if (settings.rootDomain) {
            rootDomain = settings.rootDomain;
        }
        disableInteractiveConsent();
        settings.onConsentRequested && settings.onConsentRequested();
    }
    WacCookieCompliance.requestConsentWithSettings = requestConsentWithSettings;
    function consentGiven() {
        nonEssentialCookiesAllowed = true;
        skippedCookies.forEach(function (cookie) {
            setOriginalCookie(cookie);
        });
        skippedCookies = [];
        removeBanner();
        setConsent();
    }
    WacCookieCompliance.consentGiven = consentGiven;
    function removeBanner() {
        if (g_cookieBannerVisible) {
            var banner = document.getElementById(CookieComplianceConstants.cookieBannerId);
            if (banner != null) {
                banner.parentNode.removeChild(banner);
            }
            g_cookieBannerVisible = false;
        }
    }
    function checkConsentWithSettings(settings) {
        var e = settings.sourceEvent;
        if (!e || !e.target || e.target.id !== CookieComplianceConstants.msccLearnMoreId) {
            if (isConsentingEvent(e, settings.eventName, settings.clickEventCheckHandler)) {
                consentGiven();
                return true;
            }
        }
        return false;
    }
    WacCookieCompliance.checkConsentWithSettings = checkConsentWithSettings;
    function setAllowConsent(newAllowConsent) {
        allowConsent = newAllowConsent;
    }
    WacCookieCompliance.setAllowConsent = setAllowConsent;
    function isConsentingEvent(e, eventName, clickEventCheckHandler) {
        if (!allowConsent) {
            return false;
        }
        if (eventName === "click") {
            if (clickEventCheckHandler) {
                return clickEventCheckHandler(e);
            }
            if (ignoreEventForElement(e.target)) {
                return false;
            }
            return true;
        }
        if (eventName === "keypress" || eventName === "keydown" || eventName === "keyup") {
            if (ignoreEventForElement(e.target)) {
                return false;
            }
            if (e.keyCode === 13 || e.keyCode === 32) {
                return true;
            }
            if (e.key && (e.key.charCodeAt(0) === 13 || e.key.charCodeAt(0) === 32)) {
                return true;
            }
        }
        return false;
    }
    function ignoreEventForElement(targetElement) {
        return isRibbonEvent(targetElement)
            || isDialogEvent(targetElement)
            || isDialogOverlayEvent(targetElement)
            || isHeaderEvent(targetElement)
            || isWacBusinessBarEvent(targetElement);
    }
    function isRibbonEvent(targetElement) {
        return isEventInElement(targetElement, "WACRibbonPanel");
    }
    function isDialogEvent(targetElement) {
        return isEventInElement(targetElement, "WACDialogPanel");
    }
    function isDialogOverlayEvent(targetElement) {
        return isEventInElement(targetElement, "WACDialogOverlay");
    }
    function isHeaderEvent(targetElement) {
        return isEventInElement(targetElement, "AppHeaderPanel");
    }
    function isWacBusinessBarEvent(targetElement) {
        return isEventInElement(targetElement, "WACBusinessBar");
    }
    function isEventInElement(targetElement, elementId) {
        var element = document.getElementById(elementId);
        return (element && (targetElement === element || element.contains(targetElement)));
    }
    function disableInteractiveConsent() {
        try {
            mscc.interactiveConsentEnabled = false;
        }
        catch (_a) { }
    }
    function hasConsent() {
        try {
            return !!(mscc && mscc.hasConsent());
        }
        catch (_a) { }
        return false;
    }
    function setConsent() {
        try {
            mscc.setConsent();
        }
        catch (_a) { }
    }
    function initCookieCompliance(getCookieProxy, setCookieProxy) {
        getOriginalCookie = getCookieProxy;
        setOriginalCookie = setCookieProxy;
        cookieProxied = true;
    }
    WacCookieCompliance.initCookieCompliance = initCookieCompliance;
    function getSkippedCookies() {
        return skippedCookies;
    }
    WacCookieCompliance.getSkippedCookies = getSkippedCookies;
})(WacCookieCompliance || (WacCookieCompliance = {}));
//# sourceMappingURL=CookieCompliance.js.map