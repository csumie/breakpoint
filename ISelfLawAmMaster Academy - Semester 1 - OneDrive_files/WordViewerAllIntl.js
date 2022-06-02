Type.registerNamespace('WordViewerIntl');

WordViewerIntl.WordViewerStrings = function WordViewerIntl_WordViewerStrings() {
    /// <summary>
    /// Contains the localizable strings for the WordViewer application
    /// All string will be formatted with the following substitutions:
    /// {webappfull} is the long name of the Web client application; e.g., "Microsoft OneNote Online"
    /// {webappshort} is the short name of the Web client application; e.g. "OneNote Online")
    /// {richclientfull} is the name of the equivalent rich client (e.g. "Microsoft OneNote")
    /// {doctype} is the friendly name of the file/document type (e.g. "document", "presentation")
    /// {doctypetitlecase} is the friendly name of the file/document type in title case (e.g. "Document", "Presentation")
    /// {doctypeplural} is the plural form of {doctype} (e.g. "documents", "presentations").
    /// {onedrive} is the short name for OneDrive
    /// </summary>
    /// <field name="l_HeaderText" type="String" static="true">
    /// </field>
    /// <field name="l_NumberOfSearchedPages" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}Both placeholders are numbers
    /// </field>
    /// <field name="l_ProgressTextManyResults" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is a large number, like 100 or more
    /// </field>
    /// <field name="l_ProgressTextNoResults" type="String" static="true">
    /// </field>
    /// <field name="l_ProgressTextOneResult" type="String" static="true">
    /// </field>
    /// <field name="l_ProgressTextSearching" type="String" static="true">
    /// </field>
    /// <field name="l_ResultsInfoText" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is a number
    /// </field>
    /// <field name="l_ResultToolTip" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is a number
    /// </field>
    /// <field name="l_SearchBoxValue" type="String" static="true">
    /// </field>
    /// <field name="l_SearchButtonTitleBegin" type="String" static="true">
    /// Text for Tooltip displayed over Search filter dropdown next to find textbox when search icon is being shown
    /// </field>
    /// <field name="l_SearchButtonTitleEnd" type="String" static="true">
    /// Text for Tooltip displayed over Search filter dropdown next to find textbox when cancel icon is being shown
    /// </field>
    /// <field name="l_NextButtonTitle" type="String" static="true">
    /// </field>
    /// <field name="l_PrevButtonTitle" type="String" static="true">
    /// </field>
    /// <field name="l_SearchText" type="String" static="true">
    /// </field>
    /// <field name="l_FindFilterLabelText" type="String" static="true">
    /// Used to display filter applied to search query in find pane. {0} will be replaced by name of filter.
    /// For example, (Match Case) or (Match Whole Word)
    /// </field>
    /// <field name="l_FindMultipleFiltersLabelText" type="String" static="true">
    /// Used to display more than one filters applied to search query in find pane. {0} and {1} will be replaced by names of filters.
    /// For example, (Match Case, Match Whole Word)
    /// </field>
    /// <field name="l_SelectedSearchOption" type="String" static="true">
    /// Screen reader label for Filters summary line showing currently applied filter
    /// </field>
    /// <field name="l_SelectedSearchOptions" type="String" static="true">
    /// Screen reader label for Filters summary line showing currently applied filters
    /// </field>
    /// <field name="l_FindPlaceholderTooltip" type="String" static="true">
    /// Used as a tooltip when mouse is over find textbox
    /// </field>
    /// <field name="l_MatchCase" type="String" static="true">
    /// </field>
    /// <field name="l_MatchWholeWord" type="String" static="true">
    /// </field>
    /// <field name="l_ClearSearch" type="String" static="true">
    /// </field>
    /// <field name="L_StatusBarLabel" type="String" static="true">
    /// </field>
    /// <field name="L_JewelText" type="String" static="true">
    /// </field>
    /// <field name="L_Edit" type="String" static="true">
    /// Used in the binary conversion success dialog.
    /// </field>
    /// <field name="L_SkipToEditDocument" type="String" static="true">
    /// Text for accessibility helper link at the top of the page for quick access to edit document options.
    /// </field>
    /// <field name="L_EditDocument" type="String" static="true">
    /// </field>
    /// <field name="L_OpenDocument" type="String" static="true">
    /// The action of opening the document, which is to say loading it without the implication of being able to change it.
    /// </field>
    /// <field name="L_EditInBrowser" type="String" static="true">
    /// </field>
    /// <field name="L_InteractiveViewInBrowser" type="String" static="true">
    /// </field>
    /// <field name="L_OpenInWord" type="String" static="true">
    /// </field>
    /// <field name="L_EditInWord" type="String" static="true">
    /// </field>
    /// <field name="L_EditInWordDescription" type="String" static="true">
    /// {Placeholder="{richclientfull}"}
    /// </field>
    /// <field name="L_EditInWordWebAppDescription" type="String" static="true">
    /// </field>
    /// <field name="L_ViewInWordWebAppDescription" type="String" static="true">
    /// The text of a button which will load the Interactive View app.
    /// {webappshort} is the short name of the Web client application; e.g. "Word Online")
    /// </field>
    /// <field name="L_PrintPDF" type="String" static="true">
    /// Windows Live UX Integration Feature Crew
    /// </field>
    /// <field name="L_CurrentZoom" type="String" static="true">
    /// </field>
    /// <field name="L_OpenSearchPane" type="String" static="true">
    /// </field>
    /// <field name="L_GiveFeedback" type="String" static="true">
    /// Label used by controls for gathering customer feedback on the application.
    /// </field>
    /// <field name="L_GiveFeedbackShort" type="String" static="true">
    /// Label used by controls for gathering customer feedback on the application.
    /// </field>
    /// <field name="L_GiveFeedbackDescription" type="String" static="true">
    /// Description of the menu item to provide customer feedback on the application.
    /// </field>
    /// <field name="L_Privacy" type="String" static="true">
    /// </field>
    /// <field name="L_PrivacyDescription" type="String" static="true">
    /// </field>
    /// <field name="L_TermsOfUse" type="String" static="true">
    /// </field>
    /// <field name="L_TermsOfUseDescription" type="String" static="true">
    /// </field>
    /// <field name="L_TryOffice" type="String" static="true">
    /// </field>
    /// <field name="L_TryOfficeDescription" type="String" static="true">
    /// </field>
    /// <field name="L_TryMacOffice" type="String" static="true">
    /// Title for the file menu option to offer Office for Mac 2011.
    /// </field>
    /// <field name="L_TryMacOfficeDescription" type="String" static="true">
    /// Description for the file menu option to offer Office for Mac.
    /// </field>
    /// <field name="L_Close" type="String" static="true">
    /// </field>
    /// <field name="L_PdfConvertDialog" type="String" static="true">
    /// </field>
    /// <field name="L_Share" type="String" static="true">
    /// </field>
    /// <field name="L_OpenCommentPane" type="String" static="true">
    /// </field>
    /// <field name="L_TranslateDocument" type="String" static="true">
    /// </field>
    /// <field name="L_SaveAndEditTranslatedDocumentButtonAltText" type="String" static="true">
    /// </field>
    /// <field name="L_SaveAndEditTranslatedDocumentDialogMessage" type="String" static="true">
    /// </field>
    /// <field name="L_TranslateDocumentDescription" type="String" static="true">
    /// </field>
    /// <field name="L_TranslateBackToOriginal" type="String" static="true">
    /// </field>
    /// <field name="L_TranslateBackToOriginalDescription" type="String" static="true">
    /// </field>
    /// <field name="L_SyncToPresenter" type="String" static="true">
    /// </field>
    /// <field name="L_OpenSharedNotes" type="String" static="true">
    /// </field>
    /// <field name="L_RibbonOptionTextDirection" type="String" static="true">
    /// {Locked=!@RTLLangs@} {ValidStrings=@RTLLangs@; 'rtl'}
    /// </field>
    /// <field name="L_Info" type="String" static="true">
    /// </field>
    /// <field name="L_Open" type="String" static="true">
    /// </field>
    /// <field name="L_FileHistory" type="String" static="true">
    /// Text on the button to go to version history feature
    /// </field>
    /// <field name="L_FileHistoryDescription" type="String" static="true">
    /// </field>
    /// <field name="L_PreviousVersions" type="String" static="true">
    /// </field>
    /// <field name="L_PreviousVersionsDescription" type="String" static="true">
    /// </field>
    /// <field name="L_FileMenuEdit" type="String" static="true">
    /// </field>
    /// <field name="L_SaveAs" type="String" static="true">
    /// </field>
    /// <field name="L_DownloadDescription" type="String" static="true">
    /// </field>
    /// <field name="L_Print" type="String" static="true">
    /// </field>
    /// <field name="L_PrintToPdf" type="String" static="true">
    /// </field>
    /// <field name="L_PrintToPdfDescription" type="String" static="true">
    /// </field>
    /// <field name="L_PrintPdfFileDescription" type="String" static="true">
    /// </field>
    /// <field name="L_ShareWithPeople" type="String" static="true">
    /// </field>
    /// <field name="L_ShareWithPeopleDescription" type="String" static="true">
    /// </field>
    /// <field name="L_EmailALink" type="String" static="true">
    /// </field>
    /// <field name="L_EmailALinkDescription" type="String" static="true">
    /// </field>
    /// <field name="L_Embed" type="String" static="true">
    /// </field>
    /// <field name="L_EmbedDescription" type="String" static="true">
    /// </field>
    /// <field name="L_Exit" type="String" static="true">
    /// </field>
    /// <field name="L_About" type="String" static="true">
    /// </field>
    /// <field name="L_Help" type="String" static="true">
    /// </field>
    /// <field name="L_HelpButtonTitle" type="String" static="true">
    /// </field>
    /// <field name="L_HelpButtonDescription" type="String" static="true">
    /// </field>
    /// <field name="L_ReportAbuse" type="String" static="true">
    /// </field>
    /// <field name="L_ReportAbuseDescription" type="String" static="true">
    /// </field>
    /// <field name="L_AccessibilityHelp" type="String" static="true">
    /// </field>
    /// <field name="L_AccessibilityMode" type="String" static="true">
    /// </field>
    /// <field name="L_AccessibilityModeDescription" type="String" static="true">
    /// </field>
    /// <field name="L_ImmersiveView" type="String" static="true">
    /// </field>
    /// <field name="L_CloseMenu" type="String" static="true">
    /// </field>
    /// <field name="L_New" type="String" static="true">
    /// </field>
    /// <field name="L_NewBlank" type="String" static="true">
    /// </field>
    /// <field name="L_NewBlankDescription" type="String" static="true">
    /// </field>
    /// <field name="L_DownloadAsPDF" type="String" static="true">
    /// The label for the button in the jewel to download this document as a PDF file.
    /// </field>
    /// <field name="L_DownloadAsPDFDescription" type="String" static="true">
    /// The description for the download as PDF button.
    /// </field>
    /// <field name="l_PageCountUnknown" type="String" static="true">
    /// String used to replace the placeholder 1 in L_PageLabel when the page count is not yet known.
    /// Example of the whole string when the count is not yet known: Page _1_ of ?
    /// </field>
    /// <field name="l_PageLabel" type="String" static="true">
    /// {Placeholder="{0}", "{1}"} Format to display current page and total pages. The placeholder 0 is a number for current page number, and the placeholder 1 is a number for total pages.
    /// </field>
    /// <field name="L_FitHeight" type="String" static="true">
    /// </field>
    /// <field name="L_FitWidth" type="String" static="true">
    /// </field>
    /// <field name="L_ControlMenu" type="String" static="true">
    /// </field>
    /// <field name="L_DocumentInformation" type="String" static="true">
    /// </field>
    /// <field name="L_FullScreen" type="String" static="true">
    /// </field>
    /// <field name="l_SyncedWithPresenter" type="String" static="true">
    /// Message displayed when the attendee is in sync with the presenter.
    /// </field>
    /// <field name="L_Progress" type="String" static="true">
    /// </field>
    /// <field name="l_PrintPDFWait" type="String" static="true">
    /// Print and accessibility PDF dialog strings
    /// </field>
    /// <field name="l_PrintError" type="String" static="true">
    /// {Placeholder="{richclientfull}"}
    /// </field>
    /// <field name="l_PrintPdfError" type="String" static="true">
    /// </field>
    /// <field name="l_AccessibilityPDFWait" type="String" static="true">
    /// </field>
    /// <field name="l_AccessibilityLink" type="String" static="true">
    /// </field>
    /// <field name="l_MoreAccessibleViewDialogDescription" type="String" static="true">
    /// </field>
    /// <field name="l_MoreAccessibleViewDialogLink" type="String" static="true">
    /// </field>
    /// <field name="l_TranslationPrivacyWarning" type="String" static="true">
    /// </field>
    /// <field name="l_ChooseTranslationLanguage" type="String" static="true">
    /// </field>
    /// <field name="l_WaitForTranslation" type="String" static="true">
    /// </field>
    /// <field name="l_WaitForLongTranslation" type="String" static="true">
    /// </field>
    /// <field name="l_PrepareTranslationDownload" type="String" static="true">
    /// </field>
    /// <field name="l_SaveAndEditTranslatedDocument" type="String" static="true">
    /// </field>
    /// <field name="l_TranslatedDocumentBusinessBarTitle" type="String" static="true">
    /// </field>
    /// <field name="l_TranslatedDocumentBusinessBarDescription" type="String" static="true">
    /// This is the text that appears in the business bar when viewing a translated version of a document.
    /// </field>
    /// <field name="l_TranslationServiceUnavailable" type="String" static="true">
    /// </field>
    /// <field name="l_DocumentCannotBeTranslated" type="String" static="true">
    /// </field>
    /// <field name="l_DocumentCannotBeTranslatedOCX" type="String" static="true">
    /// </field>
    /// <field name="l_GenericTranslationError" type="String" static="true">
    /// </field>
    /// <field name="l_DownloadTranslatedDocumentError" type="String" static="true">
    /// </field>
    /// <field name="l_DocumentCannotBeTranslatedLength" type="String" static="true">
    /// </field>
    /// <field name="l_PrintOption" type="String" static="true">
    /// </field>
    /// <field name="l_ReembedOption" type="String" static="true">
    /// </field>
    /// <field name="l_StartOnOption" type="String" static="true">
    /// </field>
    /// <field name="l_Width" type="String" static="true">
    /// Display text for input box which gets width in pixcels.
    /// </field>
    /// <field name="l_Height" type="String" static="true">
    /// Display text for input box which gets height in pixcels.
    /// </field>
    /// <field name="l_StartPage" type="String" static="true">
    /// </field>
    /// <field name="l_View" type="String" static="true">
    /// Caption for button in the binary conversion success dialog.
    /// </field>
    /// <field name="l_HK_Find" type="String" static="true">
    /// Find - Ctrl+F
    /// </field>
    /// <field name="l_HK_Save" type="String" static="true">
    /// Save - Ctrl+S
    /// </field>
    /// <field name="l_CommentPanePageLabel" type="String" static="true">
    /// {Placeholder="{0}"}The label for each page in the comment pane.  Placeholder 0 is replaced with the page number, an integer.
    /// </field>
    /// <field name="l_DocumentPasswordEncryptedOpen" type="String" static="true">
    /// </field>
    /// <field name="l_DocumentPasswordEncryptedSave" type="String" static="true">
    /// </field>
    /// <field name="l_AccessDeniedSave" type="String" static="true">
    /// </field>
    /// <field name="l_LockedByOtherInterfaceOpen" type="String" static="true">
    /// </field>
    /// <field name="l_LockedByOtherInterfaceSave" type="String" static="true">
    /// </field>
    /// <field name="l_LockedForOfflineCheckoutOpen" type="String" static="true">
    /// </field>
    /// <field name="l_LockedForOfflineCheckoutSave" type="String" static="true">
    /// </field>
    /// <field name="l_RequiresCheckoutOpen" type="String" static="true">
    /// </field>
    /// <field name="l_RequiresCheckoutSave" type="String" static="true">
    /// </field>
    /// <field name="l_CheckedOutOpen" type="String" static="true">
    /// </field>
    /// <field name="l_CheckedOutSave" type="String" static="true">
    /// </field>
    /// <field name="l_OldProductDigitalSignatureOpen" type="String" static="true">
    /// </field>
    /// <field name="l_OldProductDigitalSignatureSave" type="String" static="true">
    /// </field>
    /// <field name="l_CorruptFileOpen" type="String" static="true">
    /// </field>
    /// <field name="l_CorruptFileSave" type="String" static="true">
    /// </field>
    /// <field name="l_GenericErrorOpen" type="String" static="true">
    /// </field>
    /// <field name="l_GenericErrorSave" type="String" static="true">
    /// </field>
    /// <field name="l_NumberOfCoauthorsReachedMaxOpen" type="String" static="true">
    /// </field>
    /// <field name="l_NumberOfCoauthorsReachedMaxSave" type="String" static="true">
    /// </field>
    /// <field name="l_DocxCoherencyErrorSave" type="String" static="true">
    /// </field>
    /// <field name="l_DocumentChangedErrorSave" type="String" static="true">
    /// </field>
    /// <field name="l_DocumentMarkedFinalOpen" type="String" static="true">
    /// </field>
    /// <field name="l_DocumentMarkedFinalSave" type="String" static="true">
    /// </field>
    /// <field name="l_PreReleaseFile" type="String" static="true">
    /// </field>
    /// <field name="l_LearnMore" type="String" static="true">
    /// Title of a hyperlink in a dialog that sends the user to a help page
    /// </field>
    /// <field name="l_CoauthHelpContextId" type="String" static="true">
    /// Help Page Context IDs. {Locked}
    /// </field>
    /// <field name="l_CommentingNeedsRefresh" type="String" static="true">
    /// </field>
    /// <field name="l_Reload" type="String" static="true">
    /// Reload, used as the label on a dialog button, as in "we must reload the document"
    /// </field>
    /// <field name="L_Download" type="String" static="true">
    /// File menu and toolbar button string for hosts that don't support OIC and will launch a download instead.
    /// </field>
    /// <field name="l_BroadcastOutOfSync" type="String" static="true">
    /// Message displayed when an attendee goes out of sync with the presenter.
    /// </field>
    /// <field name="L_ViewerWarningBusinessBarTitle" type="String" static="true">
    /// Messages for word Viewer default business bar
    /// </field>
    /// <field name="L_ViewerWarningBusinessBarMessage" type="String" static="true">
    /// </field>
    /// <field name="L_ViewerWarningBusinessBarMessagePdf" type="String" static="true">
    /// </field>
    /// <field name="L_ViewerWarningDisabledEditBusinessBarMessage" type="String" static="true">
    /// </field>
    /// <field name="L_ViewerWarningDisabledEditBusinessBarMessagePdf" type="String" static="true">
    /// </field>
    /// <field name="L_ViewerWarningBusinessBarButton" type="String" static="true">
    /// </field>
    /// <field name="L_ViewerWarningBusinessBarButtonPdf" type="String" static="true">
    /// </field>
    /// <field name="l_DocumentProtectionSettingsEmbed" type="String" static="true">
    /// </field>
    /// <field name="l_DocumentProtectionSettingsCommentOpen" type="String" static="true">
    /// </field>
    /// <field name="l_DocumentProtectionSettingsCommentSave" type="String" static="true">
    /// </field>
    /// <field name="L_Copy" type="String" static="true">
    /// </field>
    /// <field name="L_Comment" type="String" static="true">
    /// </field>
    /// <field name="l_CopyIframeTitle" type="String" static="true">
    /// </field>
    /// <field name="l_NonUserFacingFrameTitle" type="String" static="true">
    /// </field>
    /// <field name="l_LearningToolsErrorMessage" type="String" static="true">
    /// Message used in error dialog for learning tools
    /// </field>
    /// <field name="L_DirectPrintJewelButton" type="String" static="true">
    /// The label associated with the print button when direct print is enabled.
    /// </field>
    /// <field name="L_DirectPrintJewelDescription" type="String" static="true">
    /// The description associated with the print button when direct print is enabled.
    /// </field>
    /// <field name="L_DirectPrintWait" type="String" static="true">
    /// The text in the dialog with the spinner for when we're printing your document (creating the pdf on the server)
    /// </field>
    /// <field name="L_AccHelpDialogSwitchToAccessibleMode" type="String" static="true">
    /// The text displayed in the dialog when in PNG viewer mode.
    /// </field>
    /// <field name="L_ProblemOpeningDocument" type="String" static="true">
    /// The text in the send us your file dialog that tells the user we had a problem.
    /// </field>
    /// <field name="L_SendUsYourFileDialogText" type="String" static="true">
    /// The text in the send us your file dialog that tells the user we need their file to investigate it.
    /// </field>
    /// <field name="L_TellMicrosoftAboutThis" type="String" static="true">
    /// The title of the send us your file dialog.
    /// </field>
}


WordViewerIntl.WordViewerStrings.registerClass('WordViewerIntl.WordViewerStrings');
WordViewerIntl.WordViewerStrings.l_HeaderText = 'Find';
WordViewerIntl.WordViewerStrings.l_NumberOfSearchedPages = '(in {0} of {1} pages)';
WordViewerIntl.WordViewerStrings.l_ProgressTextManyResults = '{0} matches';
WordViewerIntl.WordViewerStrings.l_ProgressTextNoResults = 'No matches';
WordViewerIntl.WordViewerStrings.l_ProgressTextOneResult = '1 match';
WordViewerIntl.WordViewerStrings.l_ProgressTextSearching = 'Searching...';
WordViewerIntl.WordViewerStrings.l_ResultsInfoText = '(in 0 of {0} pages)';
WordViewerIntl.WordViewerStrings.l_ResultToolTip = '[Page {0}]';
WordViewerIntl.WordViewerStrings.l_SearchBoxValue = 'Search for...';
WordViewerIntl.WordViewerStrings.l_SearchButtonTitleBegin = 'Search options';
WordViewerIntl.WordViewerStrings.l_SearchButtonTitleEnd = 'Clear search and other search options';
WordViewerIntl.WordViewerStrings.l_NextButtonTitle = 'Next Search Result';
WordViewerIntl.WordViewerStrings.l_PrevButtonTitle = 'Previous Search Result';
WordViewerIntl.WordViewerStrings.l_SearchText = 'Use the search box above to find text in your document.';
WordViewerIntl.WordViewerStrings.l_FindFilterLabelText = '({0})';
WordViewerIntl.WordViewerStrings.l_FindMultipleFiltersLabelText = '({0}, {1})';
WordViewerIntl.WordViewerStrings.l_SelectedSearchOption = 'Selected search option: {0}';
WordViewerIntl.WordViewerStrings.l_SelectedSearchOptions = 'Selected search options: {0} and {1}';
WordViewerIntl.WordViewerStrings.l_FindPlaceholderTooltip = 'Search the {doctype} for...';
WordViewerIntl.WordViewerStrings.l_MatchCase = 'Match case';
WordViewerIntl.WordViewerStrings.l_MatchWholeWord = 'Find whole words only';
WordViewerIntl.WordViewerStrings.l_ClearSearch = 'Clear search';
WordViewerIntl.WordViewerStrings.L_StatusBarLabel = 'Status Bar';
WordViewerIntl.WordViewerStrings.L_JewelText = 'File';
WordViewerIntl.WordViewerStrings.L_Edit = 'Edit';
WordViewerIntl.WordViewerStrings.L_SkipToEditDocument = 'Skip to Edit Document';
WordViewerIntl.WordViewerStrings.L_EditDocument = 'Edit Document';
WordViewerIntl.WordViewerStrings.L_OpenDocument = 'Open Document';
WordViewerIntl.WordViewerStrings.L_EditInBrowser = 'Edit in Browser';
WordViewerIntl.WordViewerStrings.L_InteractiveViewInBrowser = 'Live View in Browser';
WordViewerIntl.WordViewerStrings.L_OpenInWord = 'Open in Desktop App';
WordViewerIntl.WordViewerStrings.L_EditInWord = 'Edit in Desktop App';
WordViewerIntl.WordViewerStrings.L_EditInWordDescription = 'Use the full functionality of {richclientfull}.';
WordViewerIntl.WordViewerStrings.L_EditInWordWebAppDescription = 'Make quick changes right here using {webappshort}.';
WordViewerIntl.WordViewerStrings.L_ViewInWordWebAppDescription = 'View changes as they happen in {webappshort}.';
WordViewerIntl.WordViewerStrings.L_PrintPDF = 'Print to PDF';
WordViewerIntl.WordViewerStrings.L_CurrentZoom = 'Zoom level';
WordViewerIntl.WordViewerStrings.L_OpenSearchPane = 'Find';
WordViewerIntl.WordViewerStrings.L_GiveFeedback = 'Give Feedback to Microsoft';
WordViewerIntl.WordViewerStrings.L_GiveFeedbackShort = 'Give Feedback';
WordViewerIntl.WordViewerStrings.L_GiveFeedbackDescription = 'Tell us what you think.';
WordViewerIntl.WordViewerStrings.L_Privacy = 'Privacy and Cookies';
WordViewerIntl.WordViewerStrings.L_PrivacyDescription = 'Learn how {webappshort} protects your privacy.';
WordViewerIntl.WordViewerStrings.L_TermsOfUse = 'Terms of Use';
WordViewerIntl.WordViewerStrings.L_TermsOfUseDescription = 'Read the terms and conditions for using {webappshort}.';
WordViewerIntl.WordViewerStrings.L_TryOffice = 'Upgrade to Office 365';
WordViewerIntl.WordViewerStrings.L_TryOfficeDescription = 'Get the premium, always up-to-date Microsoft Office experience.';
WordViewerIntl.WordViewerStrings.L_TryMacOffice = 'Upgrade to Office 365';
WordViewerIntl.WordViewerStrings.L_TryMacOfficeDescription = 'Get the premium, always up-to-date Microsoft Office experience.';
WordViewerIntl.WordViewerStrings.L_Close = 'Close';
WordViewerIntl.WordViewerStrings.L_PdfConvertDialog = 'We need to convert your .pdf file into a .docx file in order to enable editing.';
WordViewerIntl.WordViewerStrings.L_Share = 'Share';
WordViewerIntl.WordViewerStrings.L_OpenCommentPane = 'Comments';
WordViewerIntl.WordViewerStrings.L_TranslateDocument = 'Translate';
WordViewerIntl.WordViewerStrings.L_SaveAndEditTranslatedDocumentButtonAltText = 'Save a copy of the translated document and edit in the current browser tab.';
WordViewerIntl.WordViewerStrings.L_SaveAndEditTranslatedDocumentDialogMessage = 'Word will save a copy of the translated document for you to edit.';
WordViewerIntl.WordViewerStrings.L_TranslateDocumentDescription = 'Translate the {doctype} in {webappshort}.';
WordViewerIntl.WordViewerStrings.L_TranslateBackToOriginal = 'View the Original';
WordViewerIntl.WordViewerStrings.L_TranslateBackToOriginalDescription = 'View the {doctype} in its original language in {webappshort}.';
WordViewerIntl.WordViewerStrings.L_SyncToPresenter = 'Follow Presenter';
WordViewerIntl.WordViewerStrings.L_OpenSharedNotes = 'Shared Meeting Notes';
WordViewerIntl.WordViewerStrings.L_RibbonOptionTextDirection = 'ltr';
WordViewerIntl.WordViewerStrings.L_Info = 'Info';
WordViewerIntl.WordViewerStrings.L_Open = 'Open';
WordViewerIntl.WordViewerStrings.L_FileHistory = 'Version History';
WordViewerIntl.WordViewerStrings.L_FileHistoryDescription = 'View previous versions';
WordViewerIntl.WordViewerStrings.L_PreviousVersions = 'Previous Versions';
WordViewerIntl.WordViewerStrings.L_PreviousVersionsDescription = 'View, restore, or download older versions of this {doctype}.';
WordViewerIntl.WordViewerStrings.L_FileMenuEdit = 'Edit';
WordViewerIntl.WordViewerStrings.L_SaveAs = 'Save As';
WordViewerIntl.WordViewerStrings.L_DownloadDescription = 'Download a copy of this {doctype} to your computer.';
WordViewerIntl.WordViewerStrings.L_Print = 'Print';
WordViewerIntl.WordViewerStrings.L_PrintToPdf = 'Print to PDF';
WordViewerIntl.WordViewerStrings.L_PrintToPdfDescription = 'Create a printable PDF of this {doctype}.';
WordViewerIntl.WordViewerStrings.L_PrintPdfFileDescription = 'Download a copy of the PDF for printing.';
WordViewerIntl.WordViewerStrings.L_ShareWithPeople = 'Share with People';
WordViewerIntl.WordViewerStrings.L_ShareWithPeopleDescription = 'Invite other people to view or edit this {doctype}.';
WordViewerIntl.WordViewerStrings.L_EmailALink = 'Email a Link';
WordViewerIntl.WordViewerStrings.L_EmailALinkDescription = 'Send an email that includes a link to this {doctype}.';
WordViewerIntl.WordViewerStrings.L_Embed = 'Embed';
WordViewerIntl.WordViewerStrings.L_EmbedDescription = 'Embed this {doctype} in your blog or website.';
WordViewerIntl.WordViewerStrings.L_Exit = 'Exit';
WordViewerIntl.WordViewerStrings.L_About = 'About';
WordViewerIntl.WordViewerStrings.L_Help = 'Help';
WordViewerIntl.WordViewerStrings.L_HelpButtonTitle = 'Help';
WordViewerIntl.WordViewerStrings.L_HelpButtonDescription = 'Get answers to your {webappshort} questions.';
WordViewerIntl.WordViewerStrings.L_ReportAbuse = 'Report Abuse';
WordViewerIntl.WordViewerStrings.L_ReportAbuseDescription = 'Report this {doctype} as having inappropriate content.';
WordViewerIntl.WordViewerStrings.L_AccessibilityHelp = 'Accessibility Help (Alt+Shift+A)';
WordViewerIntl.WordViewerStrings.L_AccessibilityMode = 'Accessibility Mode';
WordViewerIntl.WordViewerStrings.L_AccessibilityModeDescription = 'Change to a more accessible view of this {doctype}.';
WordViewerIntl.WordViewerStrings.L_ImmersiveView = 'Immersive Reader';
WordViewerIntl.WordViewerStrings.L_CloseMenu = 'Close Menu';
WordViewerIntl.WordViewerStrings.L_New = 'New';
WordViewerIntl.WordViewerStrings.L_NewBlank = 'Blank Document';
WordViewerIntl.WordViewerStrings.L_NewBlankDescription = 'Create a new blank {doctype}.';
WordViewerIntl.WordViewerStrings.L_DownloadAsPDF = 'Download as PDF';
WordViewerIntl.WordViewerStrings.L_DownloadAsPDFDescription = 'Download a copy of this {doctype} to your computer as a PDF file.';
WordViewerIntl.WordViewerStrings.l_PageCountUnknown = '?';
WordViewerIntl.WordViewerStrings.l_PageLabel = 'Page {0} of {1}';
WordViewerIntl.WordViewerStrings.L_FitHeight = 'Full Page';
WordViewerIntl.WordViewerStrings.L_FitWidth = 'Page Width';
WordViewerIntl.WordViewerStrings.L_ControlMenu = 'Menu';
WordViewerIntl.WordViewerStrings.L_DocumentInformation = 'Embed Information';
WordViewerIntl.WordViewerStrings.L_FullScreen = 'Full Screen';
WordViewerIntl.WordViewerStrings.l_SyncedWithPresenter = 'You are following the presenter';
WordViewerIntl.WordViewerStrings.L_Progress = 'Loading...';
WordViewerIntl.WordViewerStrings.l_PrintPDFWait = 'Converting to PDF...';
WordViewerIntl.WordViewerStrings.l_PrintError = 'Sorry, your {doctype} could not be converted.\n\n Try again later or print the {doctype} in {richclientfull}.';
WordViewerIntl.WordViewerStrings.l_PrintPdfError = 'This PDF is not ready.\n\n Try again or download the PDF and print it from a local PDF viewer.';
WordViewerIntl.WordViewerStrings.l_AccessibilityPDFWait = 'Generating {doctype}...';
WordViewerIntl.WordViewerStrings.l_AccessibilityLink = 'Accessible reading mode';
WordViewerIntl.WordViewerStrings.l_MoreAccessibleViewDialogDescription = 'We generated a PDF of this document with accessibility tagging for better interaction with screen readers.';
WordViewerIntl.WordViewerStrings.l_MoreAccessibleViewDialogLink = 'Click here to view the PDF of your document.';
WordViewerIntl.WordViewerStrings.l_TranslationPrivacyWarning = 'Translate your document with the Microsoft Translator online service. The translation will open as a separate document in the current browser tab.';
WordViewerIntl.WordViewerStrings.l_ChooseTranslationLanguage = 'Translate to:';
WordViewerIntl.WordViewerStrings.l_WaitForTranslation = 'Translating, please wait...';
WordViewerIntl.WordViewerStrings.l_WaitForLongTranslation = 'This translation will take several seconds, please wait...';
WordViewerIntl.WordViewerStrings.l_PrepareTranslationDownload = 'Preparing {doctype} for download...';
WordViewerIntl.WordViewerStrings.l_SaveAndEditTranslatedDocument = 'Saving a copy of the translation...';
WordViewerIntl.WordViewerStrings.l_TranslatedDocumentBusinessBarTitle = 'Translated Document';
WordViewerIntl.WordViewerStrings.l_TranslatedDocumentBusinessBarDescription = 'Edit in browser for full editing features.';
WordViewerIntl.WordViewerStrings.l_TranslationServiceUnavailable = 'Sorry, the {doctype} can\'t be translated at this time because we\'re having trouble talking to the service. Please try again in a few minutes.';
WordViewerIntl.WordViewerStrings.l_DocumentCannotBeTranslated = 'Sorry, this {doctype} contains text that can\'t be translated.';
WordViewerIntl.WordViewerStrings.l_DocumentCannotBeTranslatedOCX = 'Sorry, this {doctype} can\'t be translated because it contains ActiveX controls.';
WordViewerIntl.WordViewerStrings.l_GenericTranslationError = 'Sorry, {webappshort} ran into a problem translating this {doctype}.';
WordViewerIntl.WordViewerStrings.l_DownloadTranslatedDocumentError = 'Sorry, the {doctype} couldn\'t be downloaded at this time. Please try again in a few minutes.';
WordViewerIntl.WordViewerStrings.l_DocumentCannotBeTranslatedLength = 'Sorry, this {doctype} is too long to be translated.';
WordViewerIntl.WordViewerStrings.l_PrintOption = 'Let people print the document';
WordViewerIntl.WordViewerStrings.l_ReembedOption = 'Let people see the embed code for this document';
WordViewerIntl.WordViewerStrings.l_StartOnOption = 'Start on page:';
WordViewerIntl.WordViewerStrings.l_Width = 'Width (px):';
WordViewerIntl.WordViewerStrings.l_Height = 'Height (px):';
WordViewerIntl.WordViewerStrings.l_StartPage = 'Start page';
WordViewerIntl.WordViewerStrings.l_View = 'View';
WordViewerIntl.WordViewerStrings.l_HK_Find = 'F:X';
WordViewerIntl.WordViewerStrings.l_HK_Save = 'S:X';
WordViewerIntl.WordViewerStrings.l_CommentPanePageLabel = 'Page {0}';
WordViewerIntl.WordViewerStrings.l_DocumentPasswordEncryptedOpen = 'Sorry, {webappshort} can\'t open this {doctype} for commenting in a browser because it\'s protected with a password. To comment on this {doctype}, please open it in the desktop version of {richclientfull}.';
WordViewerIntl.WordViewerStrings.l_DocumentPasswordEncryptedSave = 'Sorry, {webappshort} can\'t save your comments in a browser because the {doctype} is protected with a password. To comment on this {doctype}, please open it in the desktop version of {richclientfull}.';
WordViewerIntl.WordViewerStrings.l_AccessDeniedSave = 'Sorry, you can\'t comment on this {doctype} because you don\'t have permission to edit it.';
WordViewerIntl.WordViewerStrings.l_LockedByOtherInterfaceOpen = 'Sorry, {webappshort} can\'t open this {doctype} for commenting because it\'s currently locked by another person.';
WordViewerIntl.WordViewerStrings.l_LockedByOtherInterfaceSave = 'Sorry, {webappshort} can\'t save your comments because the {doctype} is currently locked by another person.';
WordViewerIntl.WordViewerStrings.l_LockedForOfflineCheckoutOpen = 'Sorry, {webappshort} can\'t open this {doctype} for commenting because it\'s checked out to your local drafts folder.';
WordViewerIntl.WordViewerStrings.l_LockedForOfflineCheckoutSave = 'Sorry, {webappshort} can\'t save your comments because the {doctype} is checked out to your local drafts folder.';
WordViewerIntl.WordViewerStrings.l_RequiresCheckoutOpen = 'Sorry, {webappshort} can\'t open this {doctype} for commenting unless you check it out.';
WordViewerIntl.WordViewerStrings.l_RequiresCheckoutSave = 'Sorry, {webappshort} can\'t save your comments unless you check out this {doctype}.';
WordViewerIntl.WordViewerStrings.l_CheckedOutOpen = 'Sorry, {webappshort} can\'t open this {doctype} for commenting because it\'s currently checked out to another person.';
WordViewerIntl.WordViewerStrings.l_CheckedOutSave = 'Sorry, {webappshort} can\'t save your comments because the {doctype} is currently checked out to another person.';
WordViewerIntl.WordViewerStrings.l_OldProductDigitalSignatureOpen = 'Sorry, {webappshort} can\'t open this {doctype} for commenting because it has a digital signature.';
WordViewerIntl.WordViewerStrings.l_OldProductDigitalSignatureSave = 'Sorry, {webappshort} can\'t save your comments because the {doctype} has a digital signature.';
WordViewerIntl.WordViewerStrings.l_CorruptFileOpen = 'Sorry, {webappshort} can\'t open this {doctype} for commenting because it\'s corrupt.';
WordViewerIntl.WordViewerStrings.l_CorruptFileSave = 'Sorry, {webappshort} can\'t save your comments because this {doctype} is corrupt.';
WordViewerIntl.WordViewerStrings.l_GenericErrorOpen = 'Sorry, we ran into a problem while preparing this {doctype} for commenting. Please try again later.';
WordViewerIntl.WordViewerStrings.l_GenericErrorSave = 'Sorry, we ran into a problem saving your comments. Please try again later.';
WordViewerIntl.WordViewerStrings.l_NumberOfCoauthorsReachedMaxOpen = 'Sorry, {webappshort} can\'t open this {doctype} for commenting because too many people are already editing it.';
WordViewerIntl.WordViewerStrings.l_NumberOfCoauthorsReachedMaxSave = 'Sorry, {webappshort} can\'t save your comments because too many people are already editing the {doctype}.';
WordViewerIntl.WordViewerStrings.l_DocxCoherencyErrorSave = 'Sorry, {webappshort} can\'t save your comments because someone else is currently editing this {doctype}.';
WordViewerIntl.WordViewerStrings.l_DocumentChangedErrorSave = 'Sorry, {webappshort} can\'t save your comments because someone else changed the {doctype} before you.';
WordViewerIntl.WordViewerStrings.l_DocumentMarkedFinalOpen = 'Sorry, {webappshort} can\'t open this {doctype} for commenting because it\'s been marked final.';
WordViewerIntl.WordViewerStrings.l_DocumentMarkedFinalSave = 'Sorry, {webappshort} can\'t save your comments because this {doctype} has been marked final.';
WordViewerIntl.WordViewerStrings.l_PreReleaseFile = 'Sorry, {webappshort} can\'t open this {doctype} for commenting in a browser because it was created in a pre-release version of {richclientfull}.  To comment on this {doctype}, please open it in the desktop version of {richclientfull}.';
WordViewerIntl.WordViewerStrings.l_LearnMore = 'Learn More';
WordViewerIntl.WordViewerStrings.l_CoauthHelpContextId = 'Collablock';
WordViewerIntl.WordViewerStrings.l_CommentingNeedsRefresh = 'Your {doctype} is almost ready for commenting! To begin commenting, {webappshort} needs to reload to include recent changes to the {doctype}.';
WordViewerIntl.WordViewerStrings.l_Reload = 'Reload';
WordViewerIntl.WordViewerStrings.L_Download = 'Download';
WordViewerIntl.WordViewerStrings.l_BroadcastOutOfSync = 'You are no longer following the presenter';
WordViewerIntl.WordViewerStrings.L_ViewerWarningBusinessBarTitle = 'Read-only';
WordViewerIntl.WordViewerStrings.L_ViewerWarningBusinessBarMessage = 'This {doctype} was opened in read-only mode';
WordViewerIntl.WordViewerStrings.L_ViewerWarningBusinessBarMessagePdf = 'PDFs are not editable in {webappshort}';
WordViewerIntl.WordViewerStrings.L_ViewerWarningDisabledEditBusinessBarMessage = 'This document is read-only.';
WordViewerIntl.WordViewerStrings.L_ViewerWarningDisabledEditBusinessBarMessagePdf = 'This PDF is read-only.';
WordViewerIntl.WordViewerStrings.L_ViewerWarningBusinessBarButton = 'Edit Document';
WordViewerIntl.WordViewerStrings.L_ViewerWarningBusinessBarButtonPdf = 'Convert and Edit';
WordViewerIntl.WordViewerStrings.l_DocumentProtectionSettingsEmbed = 'Sorry, {webappshort} can\'t display this embedded {doctype} because it\'s protected by Information Rights Management (IRM).';
WordViewerIntl.WordViewerStrings.l_DocumentProtectionSettingsCommentOpen = 'Sorry, {webappshort} can\'t open this {doctype} for commenting in a browser because it\'s protected by Information Rights Management (IRM). To comment on this {doctype}, please open it in the desktop version of {richclientfull}.';
WordViewerIntl.WordViewerStrings.l_DocumentProtectionSettingsCommentSave = 'Sorry, {webappshort} can\'t save your comments in a browser because the {doctype} is protected by Information Rights Management (IRM). To comment on this {doctype}, please open it in the desktop version of {richclientfull}.';
WordViewerIntl.WordViewerStrings.L_Copy = 'Copy';
WordViewerIntl.WordViewerStrings.L_Comment = 'Comment';
WordViewerIntl.WordViewerStrings.l_CopyIframeTitle = 'Reading View.';
WordViewerIntl.WordViewerStrings.l_NonUserFacingFrameTitle = 'Not intended for user action';
WordViewerIntl.WordViewerStrings.l_LearningToolsErrorMessage = 'We are sorry, but your request to open up the Immersive Reader did not complete successfully.';
WordViewerIntl.WordViewerStrings.L_DirectPrintJewelButton = 'Print';
WordViewerIntl.WordViewerStrings.L_DirectPrintJewelDescription = 'Print this {doctype}.';
WordViewerIntl.WordViewerStrings.L_DirectPrintWait = 'Preparing to print...';
WordViewerIntl.WordViewerStrings.L_AccHelpDialogSwitchToAccessibleMode = 'For a more accessible experience, switch to Accessiblility Mode.\nYou can use the Accessibility Mode button on this dialog, or the Accessibility Mode button on the top bar.';
WordViewerIntl.WordViewerStrings.L_ProblemOpeningDocument = 'Sorry, we couldn\'t open your {doctype}.';
WordViewerIntl.WordViewerStrings.L_SendUsYourFileDialogText = 'We would like to prevent errors like this. You can help by sending us a copy of your file as part of an error report. We will only use your file to try to fix the problem and improve your future experience.';
WordViewerIntl.WordViewerStrings.L_TellMicrosoftAboutThis = 'Please tell Microsoft about this problem.';
CommonStrings={afrikaans:"Afrikaans",albanian:"Albanian",alsatian:"Alsatian",amharic:"Amharic",arabic:"Arabic",arabic_Algeria:"Arabic (Algeria)",arabic_Bahrain:"Arabic (Bahrain)",arabic_Egypt:"Arabic (Egypt)",arabic_Iraq:"Arabic (Iraq)",arabic_Jordan:"Arabic (Jordan)",arabic_Kuwait:"Arabic (Kuwait)",arabic_Lebanon:"Arabic (Lebanon)",arabic_Libya:"Arabic (Libya)",arabic_Morocco:"Arabic (Morocco)",arabic_Oman:"Arabic (Oman)",arabic_Qatar:"Arabic (Qatar)",arabic_Saudi_Arabia:"Arabic (Saudi Arabia)",arabic_Syria:"Arabic (Syria)",arabic_Tunisia:"Arabic (Tunisia)",arabic_UAE:"Arabic (U.A.E.)",arabic_Yemen:"Arabic (Yemen)",armenian:"Armenian",assamese:"Assamese",azerbaijani:"Azerbaijani",azerbaijani_Cyrillic:"Azerbaijani (Cyrillic)",azerbaijani_Latin:"Azerbaijani (Latin)",bangla_Bangladesh:"Bangla (Bangladesh)",bangla_India:"Bangla (India)",bashkir:"Bashkir",basque:"Basque",belarusian:"Belarusian",bosnian_Cyrillic:"Bosnian (Cyrillic)",bosnian_Latin:"Bosnian (Latin)",breton:"Breton",bulgarian:"Bulgarian",burmese:"Burmese",catalan:"Catalan",central_Kurdish_Iraq:"Central Kurdish (Iraq)",cherokee:"Cherokee",chinese_Hong_Kong_SAR:"Chinese (Hong Kong S.A.R.)",chinese_Macao_SAR:"Chinese (Macao S.A.R.)",chinese_China:"Chinese (China)",chinese_Simplified:"Chinese (Simplified)",chinese_Singapore:"Chinese (Singapore)",chinese_Taiwan:"Chinese (Taiwan)",chinese_Traditional:"Chinese (Traditional)",corsican:"Corsican",croatian:"Croatian",croatian_Bosnia_and_Herzegovina:"Croatian (Bosnia and Herzegovina)",croatian_Croatia:"Croatian (Croatia)",czech:"Czech",danish:"Danish",dari_Afghanistan:"Dari (Afghanistan)",divehi:"Divehi",dutch:"Dutch",dutch_Belgium:"Dutch (Belgium)",dutch_Netherlands:"Dutch (Netherlands)",edo:"Edo",english:"English",english_Australia:"English (Australia)",english_Belize:"English (Belize)",english_Canada:"English (Canada)",english_Caribbean:"English (Caribbean)",english_Hong_Kong_SAR:"English (Hong Kong S.A.R.)",english_India:"English (India)",english_Indonesia:"English (Indonesia)",english_Ireland:"English (Ireland)",english_Jamaica:"English (Jamaica)",english_Malaysia:"English (Malaysia)",english_New_Zealand:"English (New Zealand)",english_Philippines:"English (Philippines)",english_Singapore:"English (Singapore)",english_South_Africa:"English (South Africa)",english_Trinidad_and_Tobago:"English (Trinidad and Tobago)",english_UK:"English (U.K.)",english_US:"English (U.S.)",english_Zimbabwe:"English (Zimbabwe)",estonian:"Estonian",faroese:"Faroese",filipino:"Filipino",finnish:"Finnish",french:"French",french_Belgium:"French (Belgium)",french_Cameroon:"French (Cameroon)",french_Canada:"French (Canada)",french_Congo_DRC:"French (Congo (DRC))",french_Cote_dIvoire:"French (C\u00f4te d'Ivoire)",french_France:"French (France)",french_Haiti:"French (Haiti)",french_Luxembourg:"French (Luxembourg)",french_Mali:"French (Mali)",french_Monaco:"French (Monaco)",french_Morocco:"French (Morocco)",french_Reunion:"French (Reunion)",french_Senegal:"French (Senegal)",french_Switzerland:"French (Switzerland)",french_West_Indies:"French (West Indies)",frisian:"Western Frisian",fulfulde:"Fulfulde",galician:"Galician",georgian:"Georgian",german:"German",german_Austria:"German (Austria)",german_Germany:"German (Germany)",german_Liechtenstein:"German (Liechtenstein)",german_Luxembourg:"German (Luxembourg)",german_Switzerland:"German (Switzerland)",greek:"Greek",greenlandic:"Greenlandic",guarani:"Guarani",gujarati:"Gujarati",hausa:"Hausa",hawaiian:"Hawaiian",hebrew:"Hebrew",hindi:"Hindi",hungarian:"Hungarian",ibibio:"Ibibio",ibibio_Nigeria:"Ibibio (Nigeria)",icelandic:"Icelandic",igbo:"Igbo",indonesian:"Indonesian",inuktitut_Latin:"Inuktitut (Latin)",inuktitut_Syllabics:"Inuktitut (Syllabics)",invariant_Language:"Invariant Language",irish:"Irish",irish_Ireland:"Irish (Ireland)",isiXhosa:"isiXhosa",isiZulu:"isiZulu",italian:"Italian",italian_Italy:"Italian (Italy)",italian_Switzerland:"Italian (Switzerland)",japanese:"Japanese",kannada:"Kannada",kanuri:"Kanuri",kashmiri:"Kashmiri",kashmiri_Arabic:"Kashmiri (Arabic)",kazakh:"Kazakh",khmer:"Khmer",kiche:"K\u02bciche\u02bc",kinyarwanda:"Kinyarwanda",kiswahili:"Kiswahili",konkani:"Konkani",korean:"Korean",kyrgyz:"Kyrgyz",lao:"Lao",latin:"Latin",latvian:"Latvian",lithuanian:"Lithuanian",lower_Sorbian:"Lower Sorbian",luxembourgish:"Luxembourgish",macedonian:"Macedonian",malay:"Malay",malay_Brunei_Darussalam:"Malay (Brunei Darussalam)",malay_Malaysia:"Malay (Malaysia)",malayalam:"Malayalam",maltese:"Maltese",manipuri:"Manipuri",maori:"Maori",mapudungun:"Mapudungun",marathi:"Marathi",mohawk:"Mohawk",mongolian:"Mongolian",mongolian_Cyrillic:"Mongolian (Cyrillic)",mongolian_Traditional_Mongolian_China:"Mongolian (Traditional Mongolian, China)",nepali:"Nepali",nepali_India:"Nepali (India)",norwegian:"Norwegian",norwegian_Bokmal:"Norwegian (Bokm\u00e5l)",norwegian_Nynorsk:"Norwegian (Nynorsk)",occitan:"Occitan",odia:"Odia",oromo:"Oromo",papiamentu:"Papiamento",pashto:"Pashto",persian:"Persian",polish:"Polish",portuguese:"Portuguese",portuguese_Brazil:"Portuguese (Brazil)",portuguese_Portugal:"Portuguese (Portugal)",punjabi:"Punjabi",punjabi_Pakistan:"Punjabi (Pakistan)",quechua_Bolivia:"Quechua (Bolivia)",quechua_Ecuador:"Quechua (Ecuador)",quechua_Peru:"Quechua (Peru)",romanian:"Romanian",romanian_Moldova:"Romanian (Moldova)",romansh:"Romansh",russian:"Russian",russian_Moldova:"Russian (Moldova)",sakha:"Sakha",sami_Inari_Finland:"Sami, Inari (Finland)",sami_Lule_Norway:"Sami, Lule (Norway)",sami_Lule_Sweden:"Sami, Lule (Sweden)",sami_Northern_Finland:"Sami, Northern (Finland)",sami_Northern_Norway:"Sami, Northern (Norway)",sami_Northern_Sweden:"Sami, Northern (Sweden)",sami_Skolt_Finland:"Sami, Skolt (Finland)",sami_Southern_Norway:"Sami, Southern (Norway)",sami_Southern_Sweden:"Sami, Southern (Sweden)",sanskrit:"Sanskrit",scottish_Gaelic_United_Kingdom:"Scottish Gaelic (United Kingdom)",serbian:"Serbian",serbian_Cyrillic_Bosnia_and_Herzegovina:"Serbian (Cyrillic, Bosnia and Herzegovina)",serbian_Cyrillic_Montenegro:"Serbian (Cyrillic, Montenegro)",serbian_Cyrillic_Serbia_and_Montenegro_Former:"Serbian (Cyrillic, Serbia and Montenegro (Former))",serbian_Cyrillic_Serbia:"Serbian (Cyrillic, Serbia)",serbian_Latin_Bosnia_and_Herzegovina:"Serbian (Latin, Bosnia and Herzegovina)",serbian_Latin_Montenegro:"Serbian (Latin, Montenegro)",serbian_Latin_Serbia_and_Montenegro_Former:"Serbian (Latin, Serbia and Montenegro (Former))",serbian_Latin_Serbia:"Serbian (Latin, Serbia)",sesotho_sa_Leboa:"Sesotho sa Leboa",sesotho_South_Africa:"Sesotho (South Africa)",setswana:"Setswana",sindhi:"Sindhi",sindhi_Arabic:"Sindhi (Arabic)",sindhi_Devanagari:"Sindhi (Devanagari)",sinhala:"Sinhala",slovak:"Slovak",slovenian:"Slovenian",somali:"Somali",spanish:"Spanish",spanish_Argentina:"Spanish (Argentina)",spanish_Bolivia:"Spanish (Bolivia)",spanish_Chile:"Spanish (Chile)",spanish_Colombia:"Spanish (Colombia)",spanish_Costa_Rica:"Spanish (Costa Rica)",spanish_Dominican_Republic:"Spanish (Dominican Republic)",spanish_Ecuador:"Spanish (Ecuador)",spanish_El_Salvador:"Spanish (El Salvador)",spanish_Guatemala:"Spanish (Guatemala)",spanish_Honduras:"Spanish (Honduras)",spanish_International_Sort:"Spanish (International Sort)",spanish_Latin_America:"Spanish (Latin America)",spanish_Mexico:"Spanish (Mexico)",spanish_Nicaragua:"Spanish (Nicaragua)",spanish_Panama:"Spanish (Panama)",spanish_Paraguay:"Spanish (Paraguay)",spanish_Peru:"Spanish (Peru)",spanish_Puerto_Rico:"Spanish (Puerto Rico)",spanish_Spain_Traditional_Sort:"Spanish (Spain-Traditional Sort)",spanish_United_States:"Spanish (United States)",spanish_Uruguay:"Spanish (Uruguay)",spanish_Venezuela:"Spanish (Venezuela)",swahili:"Swahili",swedish:"Swedish",swedish_Finland:"Swedish (Finland)",swedish_Sweden:"Swedish (Sweden)",syriac:"Syriac",tajik:"Tajik",tamazight:"Central Atlas Tamazight",tamazight_Arabic_Morocco:"Central Atlas Tamazight (Arabic, Morocco)",tamazight_Latin_Algeria:"Central Atlas Tamazight (Latin, Algeria)",tamil:"Tamil",tatar:"Tatar",telugu:"Telugu",thai:"Thai",tibetan_China:"Tibetan (China)",tigrigna:"Tigrigna",tigrigna_Eritrea:"Tigrigna (Eritrea)",tigrigna_Ethiopia:"Tigrigna (Ethiopia)",turkish:"Turkish",turkmen:"Turkmen",ukrainian:"Ukrainian",upper_Sorbian:"Upper Sorbian",urdu:"Urdu",uyghur_China:"Uyghur (China)",uzbek:"Uzbek",uzbek_Cyrillic:"Uzbek (Cyrillic)",uzbek_Latin:"Uzbek (Latin)",valencian:"Valencian",venda:"Venda",vietnamese:"Vietnamese",welsh:"Welsh",wolof:"Wolof",xitsonga:"Xitsonga",yi_China:"Yi (China)",yiddish:"Yiddish",yoruba:"Yoruba"};CommonUIStrings={l_DefaultDialogTitle:"{webappfull}",l_UserInterfaceFontName:"'Segoe UI','Segoe UI Web',Arial,Verdana,sans-serif",l_UserInterfaceFontSize:"9pt",l_UserInterfaceSmallFontSize:"8pt",l_UserInterfaceFontWeightBold:"bold",l_UserInterfaceUpperCaseTextTransform:"uppercase",l_UserInterfaceLightFontName:"'Segoe UI Light','Segoe UI',Arial,Verdana,sans-serif",l_UserInterfaceSemiLightFontName:"'Segoe UI Semi Light','Segoe UI Light','Segoe UI',Arial,Verdana,sans-serif",l_HeaderLargeFontSize:"10pt",l_JewelMenuFontSize:"10pt",l_JewelSubMenuFontSize:"14pt",l_JewelSubmenuFileNameFontSize:"16pt",l_JewelSubMenuMainTitleFontSize:"30pt",l_JewelSubmenuMruButtonTitleFontSize:"11pt",l_JewelSubmenuFooterButtonFontSize:"9pt",l_UserInterfaceDialogTitleFontSize:"16pt",l_UserInterfaceDialogButtonFontSize:"12pt",l_UserInterfaceDialogTextFontSize:"11pt",l_UserInterfaceDialogTextLargeFontSize:"14pt",l_UserInterfaceTaskPaneTitleFontSize:"16pt",l_PolicyOverrideButton:"More Options",l_PolicyBusinessBarTitle:"POLICY TIP:",l_PolicyLabelAutomaticallyAppliedMessage:"Your organization automatically applied the sensitivity: {0}.",l_PolicyLabelRecommendationMessage:"Your organization recommends that you change the sensitivity to: {0}.",l_PolicyLabelRecommendationButton:"Change now",l_DialogOk:"OK",l_DialogCancel:"Cancel",l_DialogYes:"Yes",l_DialogNo:"No",l_DialogRetry:"Retry",l_DialogPermanentlyDelete:"Permanently Delete",l_DialogShareAndNotify:"Share and notify",l_DialogWidth:15,l_DialogClose:"Close",l_DialogError:"Error",l_DialogWarning:"Warning",l_DialogInfo:"Information",l_DialogQuestion:"Question",l_DialogDoNotShow:"Don't show this dialog again.",l_DialogLoading:"Loading...",l_DialogSessionInfo:"Session ID: {0}",l_DialogView:"View",l_DialogMove:"Move",l_DialogChange:"Change",l_NeedToSignIn:"This feature is available when you sign in.",l_RenameFileTooltip:"Rename File",l_SaveStatusTooltip:"We're automatically saving your changes.",L_PinRibbonTooltip:"Expand the Ribbon",L_UnpinRibbonTooltip:"Collapse the Ribbon",l_HelpTooltip:"Help",L_GroupApps:"Add-ins",L_ButtonMyApps:"My Add-ins",L_ButtonOfficeAddins:"Office Add-ins",L_ButtonUploadAddins:"Upload Add-ins",L_ButtonStore:"Store",l_SignoutLink:"Sign out",l_OICContinueInBrowser:"Continue in Browser",l_OICErrorMessage:"Sorry, but to open this {doctype}, your computer must be running a supported version of {richclientfull} and a browser that supports opening files directly from Office.",l_OICErrorMessageNoOffice:"Sorry, but to open this {doctype}, your computer must be running a supported version of {richclientfull}.",l_OICErrorHelpLink:"Troubleshoot",l_OICErrorIHaveOfficeButton:"I have Office",l_OICErrorNoOfficeDetected:"Sorry, we can't find {richclientfull} on your computer.",l_OICErrorMacOfficeOffer:"If you have an older version of Office or no Office at all, you can try {0}.",l_OICErrorMacOFficeLink:"Microsoft Office for Mac 2011",l_OICErrorNoOfficeDownloadButton:"Download My File",l_OICErrorFileDownloadOffer:"You can also download a copy of this {doctype}.",l_OICDialogTitle:"We're opening this in {richclientfull}...",l_OICDialog2ndTitle:"All done. You can close this file now.",l_OICDialogSectionTitle:"We opened this file in {richclientfull} on your computer.",l_OICBrowserDialogTitle:"We opened this file in {richclientfull} on your browser.",l_OICResumeEditing:"Resume editing here",l_OICDialogRetry:"Try launching {richclientfull} again",l_OICErrorC2ROneNoteOffer:"Download {richclientfull} for free at OneNote.com.",l_OICErrorC2ROffer:"If you have an older version of Office or no Office at all, you can try {officefull} for free.",l_OICErrorC2RInstallOneNoteButton:"Download and Install {richclientfull}",l_OICErrorC2RInstallButton:"Try {officeshort}",l_OICErrorPopupBlockerForSafari:"{richclientfull} failed to launch because the pop-up was blocked by Safari. Please go to Settings > Safari > Block Pop-ups and turn off the pop-up blocker.",l_OICLaunchDialogTitle:"Your content has been saved.",l_OICLaunchDialogTitleForView:"We are ready.",l_OICLaunchRichClient:"Launch {richclientfull}.",l_OICReturnToOnlineClient:"Return to {webappfull}.",l_OneDriveContactError:"Sorry, we ran into a problem contacting {onedrive}. Try again later.",l_RoamingAppsInstallTitle:"Want to use Office on Demand?",l_RoamingAppsInstallText:"Office on Demand is a fast and easy way to use the latest full-featured Office programs on any PC without installing them.",l_RoamingAppsInstallHelpLink:"Learn more",l_RoamingAppsInstallYesButton:"Yes, let's go!",l_RoamingAppsInstallNoButton:"No, thanks.",l_RoamingAppsDialogTitle:"Waiting for you...",l_RoamingAppsDialogText:"Your browser is asking you to install an add-on right now. Please allow the installation and we'll open your document automatically.",l_ConversionButton:"Convert",l_ConversionDialogTitle:"File Conversion",l_ConvertAndEditDialogTitle:"Converting your file for editing...",l_ConversionDialogLine1:"To edit this file in {webappshort} we need to convert it to the newest file format. Don't worry, we will create a backup of the original file.",l_ConversionDialogLine2:"To edit this file without converting it, open it in {richclientfull}.",l_ConversionDialogPdf:"{webappshort} will make a copy of your PDF and convert it to a Word document for you to edit.",l_ConversionProgressString:"Copying and converting {doctype}...",l_ConversionErrorMessage1:"Sorry, but we had trouble opening this {doctype}.  To edit this {doctype}, open it in {richclientfull}.",l_ConversionErrorMessage2:"Don't worry, no changes were made to your original file.",l_ConversionSucceded1:"Changes to the layout of the {doctype} could have occurred during conversion. To check the layout of this {doctype}, click View. To start editing right now, click Edit.",l_ConversionSucceded2:"Don't worry, no changes were made to your original file.",l_ConversionFileExists:"A converted version of this {doctype} already exists.",L_Diagnostics:"Diagnostics",L_DiagnosticsBuild:"Build",L_DiagnosticsDescription:"The following session details may be requested by technical support.",L_DiagnosticsSessionId:"Session ID",l_EmbedDialogTitle:"Document Embedding",l_EmbedCodeText:"This is the embed code for this {doctype}. To embed it yourself, copy this text and paste it in your site or blog",l_EmbedUrlText:"You can also just grab the embed URL if that's easier for you. Copy it below.",l_ErrorDialogRestartName:"Restart",l_ErrorDialogExitName:"Exit",l_ErrorDialogRefreshName:"Refresh",l_LearnMore:"Learn More",l_ErrorDialogMessage:"Sorry, we ran into a problem.",l_ErrorDialogFeedbackLinkText:"Give feedback to Microsoft",l_ErrorDialogFeedbackText:"Your feedback helps Microsoft improve {webappshort}.",L_HelpImproveOffice:"Help Improve Office",L_Disconnected:"Disconnected",L_Connected:"Connected",L_Reconnecting:"Reconnecting...",l_ModalCalloutContentWhenDisconnected:"The network is currently unavailable. We're trying to connect...",l_OfficeNameLong:"Microsoft Office 2016",l_OfficeNameShort:"Office 2016",l_OneDriveName:"OneDrive",l_RichClientNameLong_V:"Microsoft Visio",l_AppNameShort_V:"Visio",l_DocumentType_V:"diagram",l_RichClientNameLong_W:"Microsoft Word",l_AppNameShort_W:"Word",l_DocumentType_W:"document",l_DocumentTypeTitleCase_W:"Document",l_DocumentTypePlural_W:"documents",l_SubDocumentType_W:"document",l_BrandingString:"Online",l_DocumentType_Pdf:"PDF",l_DocumentTypePlural_Pdf:"PDFs",l_SubDocumentType_Pdf:"PDF",l_RichClientNameLong_ON:"Microsoft OneNote",l_AppNameShort_ON:"OneNote",l_DocumentType_ON:"notebook",l_DocumentTypeTitleCase_ON:"Notebook",l_DocumentTypePlural_ON:"notebooks",l_SubDocumentType_ON:"page",l_RichClientNameLong_PPT:"Microsoft PowerPoint",l_AppNameShort_PPT:"PowerPoint",l_DocumentType_PPT:"presentation",l_DocumentTypePlural_PPT:"presentations",l_SubDocumentType_PPT:"slide",l_AppTitle:"{webappfull}",l_AppTitlePreview:"{webappfull} Preview",l_SwitcherTooltip:"List of Microsoft Services",l_AppNameShort:"{webappshort}",l_NetworkProblemToast:"Can't Contact Server",l_NetworkRestoredToast:"Connection Restored",l_NetworkProblemDialogDescription:"Sorry, we're having trouble talking to the service and must close. Check your network connection and try again.",l_NetworkProblemInitialDialogDescription:"Sorry, we can't open this {doctype} because there was a problem talking to the service. Check your network connection and try again.",l_AuthenticationLostTitle:"Account Information Needed",l_AuthenticationLostMessage:"It looks like you've signed out. Your {doctype} will not be saved. Please click the sign in button and re-enter your username and password.",l_AuthenticationLostSigninInProgressMessage:"Please use the newly launched browser window to enter your username and password. If you don't see it, try clicking the sign in button again.",l_SignIn:"Sign in",l_VoicedLoadingText:"Loading",l_SignInToSaveDialogTitle:"Sign in to Save",l_SignInToSaveDialogMessage:"Don't lose your work! Sign in to save this {doctype} to your {onedrive}.",l_SignInToSaveDialogCancelButton:"Not now",l_SavingToOneDrive:"Saving to {onedrive}",l_ErrorSavingToOneDrive:"Sorry, there was a problem saving your {doctype} to {onedrive}. Please download the {doctype} and upload it to {onedrive} or copy your content and paste it into a new {doctype}.",l_WheresTheSaveButtonDialogTitle:"Where's the Save Button?",l_WheresTheSaveButtonDialogMessage:"In {webappshort}, there's no save button because your {doctype} is being saved automatically.",l_PrintDialogDocumentIsPrinting:"Your PDF is ready.",l_PrintDialogDocumentIsReadyToPrint:"Your PDF is ready to print.",l_PrintDialogHelpLink:"Learn more",l_PrintDialogLinkSuggestion:"Click here to view the PDF of your document.",l_PrintDialogOpenPDF:"Open PDF",l_DownLoadACopyDialogMessage:"Your {doctype} is ready.",l_DownLoadACopyDialogLinkSuggestion:"Click here to download your {doctype}.",l_PdfConvertFailureDialogMessage:"Sorry, {webappshort} ran into a problem opening this {doctype}.",l_PdfConvertFailureDialogLinkSuggestion:"Click here to download the document.",l_DirectPrintDialogDocumentIsPrinting:"Your document is ready to print.",l_DirectPrintDialogLinkSuggestion:"Click here to view your printable PDF.",l_DirectPrintDialogHeader:"Print your document from the preview window below.",l_DirectPrintDialogDownloadPDFHeader:"Didn't print correctly?",l_DirectPrintDialogDownloadPDFLink:"Open a printable PDF of your document.",l_DirectPrintDialogSuccessText:"Done printing.",l_DirectPrintPreparingPDF:"Preparing your PDF to print...",l_FontDropdownMenuSectionTheme:"Theme Fonts",l_FontDropdownMenuSectionMru:"Recently Used Fonts",l_FontDropdownMenuSectionAll:"All Fonts",l_LookupAltText:"Tell me what you want to do",l_LookupHotkeyText:"{0} (Alt+Q)",l_LookupNoResultsTitle:"No Results Found",L_OnlinePictureFromHost:"Pictures from {0}",l_OnlinePictureFromOneDrive:"Pictures from OneDrive",L_OnlinePictureFromBing:"Pictures from Bing",l_LookupNoResultsDescription:'Sorry, we didn\'t find any results for "{0}".',l_TellMeRecentlyUsedTitle:"Recently Used",l_TellMeTryQueryTitle:"Try",l_TellMeTryQueryAccessibleLabelFormat:"Try this query: {0}",l_TellMeTryCommandAccessibleLabelFormat:"Try command: {0}",l_TellMeRecentlyUsedAccessibleLabelFormat:"Recently Used command: {0}",l_TellMeClassifierCommandAccessibleLabelFormat:"Relevant command: {0}",l_FindInDocumentText:'Find "{0}" in Document',l_InsightsButtonText:'Smart Lookup on "{0}"',l_InsightsPaneNotification:"Insights Pane. Press Ctrl F6 to Leave.",l_HelpButtonTextWithQuotation:'"{0}"',l_HelpButtonTextNoPlaceholder:"Get Help",l_LookupLiveNotificationResultPluralFormText:"Found {0} results.",l_LookupLiveNotificationResultSingularFormText:"Found 1 result.",l_LookupFirstRunExperienceTitle:"Just start typing!",l_LookupFirstRunExperienceDescription:"You'll get commands and help for your task.",L_Insights:"Insights",L_InsightsMenu:"Smart Lookup",L_FontSize8:"8",L_FontSize9:"9",L_FontSize10:"10",L_FontSize11:"11",L_FontSize12:"12",L_FontSize14:"14",L_FontSize16:"16",L_FontSize18:"18",L_FontSize20:"20",L_FontSize24:"24",L_FontSize26:"26",L_FontSize28:"28",L_FontSize36:"36",L_FontSize48:"48",L_FontSize72:"72",l_AngsanaNew:"Angsana New",l_Arial:"Arial",l_ArialBlack:"Arial Black",l_Batang:"Batang",l_BookAntiqua:"Book Antiqua",l_BookmanOldStyle:"Bookman Old Style",l_BrowalliaNew:"Browallia New",l_Calibri:"Calibri",l_Cambria:"Cambria",l_Candara:"Candara",l_Century:"Century",l_CenturyGothic:"Century Gothic",l_CenturySchoolbook:"Century Schoolbook",l_ComicSansMS:"Comic Sans MS",l_Consolas:"Consolas",l_Constantia:"Constantia",l_Corbel:"Corbel",l_CordiaNew:"Cordia New",l_CourierNew:"Courier New",l_DilleniaUPC:"DilleniaUPC",l_DaunPenh:"DaunPenh",l_Dotum:"Dotum",l_FangSong:"FangSong",l_FranklinGothicBook:"Franklin Gothic Book",l_FranklinGothicMedium:"Franklin Gothic Medium",l_Garamond:"Garamond",l_Gautami:"Gautami",l_Georgia:"Georgia",l_GillSansMT:"Gill Sans MT",l_Gulim:"Gulim",l_GungSuh:"GungSuh",l_HGGothicE:"HGGothicE",l_HGGyoshotai:"HGGyoshotai",l_HGPMinchoE:"HGPMinchoE",l_HYGothic_Extra:"HYGothic-Extra",l_HYMyeongJo_Extra:"HYMyeongJo-Extra",l_IskoolaPota:"Iskoola Pota",l_JasmineUPC:"JasmineUPC",l_KaiTi:"KaiTi",l_Kalinga:"Kalinga",l_Kartika:"Kartika",l_Latha:"Latha",l_LiSu:"LiSu",l_LucidaSans:"Lucida Sans",l_LucidaSansUnicode:"Lucida Sans Unicode",l_MalgunGothic:"Malgun Gothic",l_Mangal:"Mangal",l_Meiryo:"Meiryo",l_MicrosoftJhengHei:"Microsoft JhengHei",l_MicrosoftYaHei:"Microsoft YaHei",l_MingLiU:"MingLiU",l_MingLiU_HKSCS:"MingLiU_HKSCS",l_MSGothic:"MS Gothic",l_MSMincho:"MS Mincho",l_MSPGothic:"MS PGothic",l_MSPMincho:"MS PMincho",l_Nyala:"Nyala",l_PMingLiU:"PMingLiU",l_PMingLiU_ExtB:"PMingLiU-ExtB",l_Raavi:"Raavi",l_Rockwell:"Rockwell",l_Shruti:"Shruti",l_Segoe:"Segoe",l_SegoeLight:"Segoe Light",l_SegoeUI:"Segoe UI",l_SegoeUILight:"Segoe UI Light",l_SimHei:"SimHei",l_SimSun:"SimSun",l_SimSun_ExtB:"SimSun-ExtB",l_STKaiti:"STKaiti",l_STXingkai:"STXingkai",l_STXinwei:"STXinwei",l_Sylfaen:"Sylfaen",l_Tahoma:"Tahoma",l_Times:"Times",l_TimesNewRoman:"Times New Roman",l_TrebuchetMS:"Trebuchet MS",l_Tunga:"Tunga",l_TWCenMT:"TW Cen MT",l_Verdana:"Verdana",l_Vrinda:"Vrinda",l_Embed:"Embed",l_Preview:"Preview",l_EmbedCode:"Embed Code",l_Dimensions:"Dimensions",l_Interaction:"Interaction",l_Expand:"Expand",l_Collapse:"Collapse",l_CopyText:"Copy this text and paste it in your site or blog",l_Close:"Close",l_NoFrames:"This is an embedded {0} {doctype}, powered by {1}.",l_Office:"Microsoft Office",l_WebAppName:"Office",l_CannotOpenFile:"Sorry, there was a problem and we can't open this {doctype}.  If this happens again, try opening the {doctype} in {richclientfull}.",l_OdfFileCompatWarningBusinessBar:"Some compatibility issues could occur if you edit this file.",l_OdfFileCompatWarningBusinessBarButton:"Details...",l_CentimeterUnitPlaceholder:"{0} cm",l_CharacterUnitPlaceholder:"{0} ch",l_DegreeUnitPlaceholder:"{0}\u00b0",l_InchUnitPlaceholder:'{0}"',l_LineUnitPlaceholder:"{0} line",l_PointUnitPlaceholder:"{0} pt",l_PixelsUnitPlaceholder:"{0} px",l_NewCommentError:"Please select something in the {doctype} to comment on, or select a comment to reply to.",l_NewCommentInvalidContent:"Sorry, but you can't comment on that type of content.",l_DeleteCommentConfirm:"Are you sure you want to delete this comment and all of its replies?",l_NavigateAway:"Some of your comments have not yet finished saving. Are you sure you want to discard those comments?",L_ActivityPaneTitle:"Catch up",L_OpenCommentPane:"Comments",l_CommentContent:"Comment Content",l_CommentReplyButton:"Reply",l_CommentDoneButton:"Mark as Done",l_CommentDeleteButton:"Delete",l_CommentCloseButton:"Close",l_CommentNewCommentButton:"New Comment",l_CommentSaveCommentButton:"Post",l_CommentCancelButton:"Cancel",l_CommentHintTooltip:"Click to see this comment",l_CommentLongDateFormat:"{0} - {1}",l_CommentPaneEmpty1:"No one has commented yet.",l_CommentPaneEmpty2:"If you'd like to be the first, select some text and click New Comment.",l_CommentPaneError:"Sorry, {webappshort} ran into a problem and comments can't be displayed.",l_CommentAuthorUnknown:"Unknown",l_CommentProgressTooltip:"Saving...",l_CommentFailTooltip:"Sorry, we couldn't save your changes. If you see unsaved comments, you can select them and copy them to the clipboard and try again later. Refreshing your browser will show you what is saved.",l_CommentLoading:"Loading comments...",l_CommentTabHelp:"Tab for comment actions",l_ClipboardAccessDeniedTitle:"Can't Access Clipboard",l_ClipboardAccessDenied:"Your browser doesn't allow access to the clipboard. Instead, use the keyboard shortcuts for cut, copy, and paste.",l_ClipboardExtensionInstallButtonText:"Install the extension",l_ClipboardExtensionDialogTitle:"Install the free Copy and Paste extension?",l_ClipboardExtensionDialogMessageForPC:"The Office Online Copy and Paste extension lets us access your clipboard so you can cut, copy, and paste multiple items. If you don't install it, you can still use these keyboard shortcuts: Cut = Ctrl + X",l_ClipboardExtensionDialogMessageForMac:"The Office Online Copy and Paste extension lets us access your clipboard so you can cut, copy, and paste multiple items. If you don't install it, you can still use these keyboard shortcuts: Cut = {0} + X",l_ClipboardExtensionSuggestion:"You can also try our Copy Paste app {0} if you don't want to use shortcut keys.",l_ClipboardExtensionLink:"here",l_CopyPasteImageDialogTitle:"Too many images",l_CopyPasteImageDialogMessage:"Sorry, you can only paste {0} images at a time.",l_ClipboardUseShortcutTitle:"Use shortcut keys",l_ClipboardUseShortcutMessage:"Your browser can't access the clipboard, so use these shortcuts:",l_ClipboardCut:"Cut = Ctrl + X",l_ClipboardCopy:"Copy = Ctrl + C",l_ClipboardPaste:"Paste = Ctrl + V",l_ClipboardPasteText:"Paste Text Only = Ctrl + Shift + V",l_ClipboardCut_Mac:"Cut = {0} + X",l_ClipboardCopy_Mac:"Copy = {0} + C",l_ClipboardPaste_Mac:"Paste = {0} + V",l_ClipboardPasteText_Mac:"Paste Text Only = {0} + Shift + V",l_ClipboardModifier:"Ctrl",l_ClipboardModifier_Mac:"\u2318",l_ClipboardCutShortcut:"+X",l_ClipboardCopyShortcut:"+C",l_ClipboardPasteShortcut:"+V",l_ClipboardPasteTextShortcut:"+Shift+V",l_AccCheckerPaneTitle:"Accessibility Checker",l_AccCheckerOutOfSyncNotificationMessageBody:"The results are no longer current. Click Recheck to refresh the list of issues.",l_AccCheckerCheckingNow:"Checking Now ...",l_AccCheckerReCheckButton:"Recheck",l_AccCheckerLastTimeChecked:"Last checked: {0} ",l_AccCheckerServiceUnavailable:"Temporarily unavailable",l_accCheckerResultInstruction:"To make this document more accessible for people with disabilities, select and fix the issues in the Inspection Results box.",l_accCheckerAdditionalInfoTitle:"Additional Information",l_AccCheckerAdditionalInfoContent:"The Accessibility Checker may have identified some issues that can't be fixed in the browser. To remedy those issues open your file in the Windows or Mac version of the app.",l_AccCheckerExternalHelpLinkText:"Read more about making documents accessible",l_AccCheckerPartialResultNotification:"There are more results than the Accessibility Checker can display here. After fixing these issues, recheck your document to see more results.",l_AccCheckerCheckCompleteNotification:"Accessibility check is complete.",l_AccCheckerContentNotFoundDialogTitle:"Content Not Found",l_AccCheckerContentNotFoundDialogBody:"This content has been changed or deleted since the Accessibility Checker was last run. We'll recheck your document for accessibility issues.",l_AccCheckerContentNotFoundDialogActionButton:"Recheck",l_AccCheckerCategoryError:"Errors",l_AccCheckerCategoryWarning:"Warnings",l_AccCheckerCategoryTip:"Tips",l_AccCheckerCategoryIntelligentService:"Intelligent Services",l_AccHelpShortcutAnnouncement:"Press Alt Shift A for accessibility help.",l_AccHelpDialogMoreHelpLinkText:"More Office accessibility help",l_AccHelpDialogShortcutHeaderText:"Shortcut",l_AccHelpDialogCommandsHeaderText:"Commands",l_AccHelpDialogAppViewerTitle:"{webappshort} Reading View Accessibility",l_AccHelpDialogCtrlKey:"Ctrl",l_AccHelpDialogCommandKey:"Command",l_AccHelpDialogWindowsKey:"Windows",l_AccHelpDialogAccHelpCommand:"Get accessibility help",l_AccHelpDialogAccHelpShortcut:"Alt+Shift+A",l_AccHelpDialogLandmarkRegionsCommand:"Move among landmark regions",l_AccHelpDialogLandmarkRegionsShortcut:"{0}+F6 or {0}+Shift+F6",l_AccHelpDialogTellMeCommand:"Go to Tell Me box to run any command",l_AccHelpDialogTellMeShortcut:"Press Alt+Q to jump to the Tell Me box, then type a command",l_AccHelpDialogAccessKeysCommand:"Display or hide KeyTips",l_AccHelpDialogAccessKeysShortcut:"Alt+{0}",l_AccHelpDialogMoveInEditingAreaCommand:"Move within the {doctype} region",l_AccHelpDialogMoveInEditingAreaShortcut:"Please follow the help for your browser or PDF viewer",l_AccHelpDialogOpenDialogMenuCommand:"Open dialog menu for an accessible moving option",l_AccHelpDialogOpenDialogMenuShortcut:"Press Ctrl+Alt+Space when a dialog is open",l_AlternativeTextDialogTitle:"Alternative Text",l_AlternativeTextDialogLabel:"Type the alternative text for this picture.",l_AlternativeTextTitleCaption:"Title",l_AlternativeTextDescriptionCaption:"Description",l_SessionExpiredMessage:"Sorry, your session expired. Please refresh the page to continue.",l_SessionExpiringMessage:"Sorry, your session will expire at {0}. You can refresh the page to continue.",l_SessionExpirationRefreshButton:"Refresh",l_SessionExpiringSaveAndRefreshButton:"Save and Refresh",l_UserReportLinkText:"Report this error",l_ConfigError:"There's a configuration problem preventing us from getting your document. If possible, try opening this document in {richclientfull}.",l_HostIframeTitle:"{webappshort}",l_RenameFileInvalidNameTitle:"That File Name Won't Work",l_RenameFileInvalidName:'Please use a different name. Valid file names cannot contain any of the following characters:\\/:*?"<>|.',l_RenameFileNameTooLong:"The name you entered is too long. Please try a shorter name.",l_RenameFileRenameDisabledTitle:"Can't Rename Yet",l_RenameFileRenameDisabled:"To rename this file we need you to...",l_RenameFileRenameDisabledSignIn:"Sign in.",l_RenameFileRenameDisabledPermission:"Get permission to rename (usually this comes with permission to delete or move a file).",l_RenameFileRenameDisabledCoauth:"Wait until you're the only person working on this document.",l_RenameFileRenameDisabledPermissionFull:"To rename this file we need you to get permission to rename (usually this comes with permission to delete or move a file).",l_RenameFileRenameDisabledCoauthFull:"To rename this file we need you to wait until you're the only person working on this document.",l_RenameFileRenameNotEveryoneSupportsRename:"You can't rename the file at this time. Please try again later.",l_RenameFileRenameReadOnlyRecommended:"This file is currently in read-only mode. Press 'Edit Anyway' to begin editing and to rename the file.",l_RenameFileGenericErrorTitle:"We Couldn't Rename the File",l_RenameFileGenericError:"We're sorry, but we couldn't rename the file. Please try again in a few minutes, or refresh the page and try again.",l_ToCurrentFolder:"Create a copy of this file in the same online folder.",l_SaveAsToHostOverwrite:"Replace existing file",l_InvalidFileNameTitle:"That File Name Won't Work",l_InvalidFileNameText:'Please use a different name. Valid file names cannot contain any of the following characters:\\/:*?"<>|#{{}}%~&.',l_InvalidFileNameAllowPercentOctothorpe:'Please use a different name. Valid file names cannot contain any of the following characters:\\/:*?"<>|.',l_InvalidFileNameDisallowPercentOctothorpe:'Please use a different name. Valid file names cannot contain any of the following characters:\\/:*?"<>|#%.',l_EmptyNameTitle:"Oops, no name",l_EmptyNameText:"Please enter a name.",l_GeneralFailTitle:"Sorry, we can't save the copy",l_InvalidPermissionText:"You don't have permission to save here, or you don't have permission to replace the existing file.",l_OverwriteTargetText:"The name {0} is already taken. Try another name for this copy.",l_LockTargetText:"A {doctype} with the same name is in use. Try another name for this copy.",l_FailToSaveFile:"Please try again in a little while.",L_SaveACopyOnline:"Save a copy online.",l_SaveToOneDrive:"Save to {onedrive}",l_DestinationFolder:"Destination folder: '{0}'",l_SaveACopyFileName:"Enter a name for this copy:",l_SaveButtonLabel:"Save",l_RetryButtonLabel:"Try Again",l_SaveACopyError:"We couldn't SaveAs your file. Please try again.",L_SaveAsButtonDescription:"Save a copy to {onedrive}.",l_NoSavePermissionDialogTitle:"Sorry, we can't save here",l_NoSavePermissionDialogMessage:"You don't have permission to save files in this folder.",l_SaveFailedDialogTitle:"Sorry, we couldn't save the copy",l_FileNameLabel:"Name:",l_NewFileLocationLabel:"Location:",l_CurrentOnlineFolder:"Current online folder",l_SaveToAnotherFolder:"Save to another folder",l_SaveAsFileTooLargeTitle:"The file is too large to save a copy",l_SaveAsFileTooLargeMessage:"We can't save a copy of this file because it exceeds the {0} MB file size limit. To save a copy of this file, open it in {richclientfull}.",l_ScreenReader_SaveToAnotherFolderButton:"Save location:{0}. Click to save to another folder.",l_ScreenReader_CurrentFileLocation:"{0}, folder name: {1}",l_RenameDialogTitle:"Rename",l_RenameDialogLabel:"Enter a name for this file:",L_RenameButtonDescription:"Rename this file.",L_RenameButtonTitle:"Rename",l_ImageUploadFailedTitle:"Insert Picture",l_ImageUploadingTitle:"Insert Picture",l_ImageUploadButtonText:"Insert",l_ImageUploadDialogText:"File name:",l_ImageUploadNoFileSpecified:"Specify a file name.",l_ImageUploadUnsupportedFileType:"Sorry, we don't support that kind of file. We can only insert .jpg, .jpeg, .png, .gif, .bmp, .tif, and .tiff files.",l_ImageUploadWait:"Uploading...",l_EditorsToastArriving:"{0} is editing this {doctype}.",l_PeoplesWellFlyoutLabel:"Select someone's name to go where they are editing",l_PeoplesWellStateNumberOfOtherPeopleEditingHere:"{0} other people are here",l_PeoplesWellStateUserIsAlsoEditing:"{0} is also editing",l_PeoplesWellStateUserIsAlsoViewing:"{0} is also viewing",l_PeoplesWellStateUserIsInactive:"{0} is inactive",l_PeoplesWellStateYouAreAllByYourself:"It's just you here now",l_PeoplesWellUserStatusIsEditingOnline:"Editing online",l_PeoplesWellUserStatusIsViewingOnline:"Viewing online",l_PeoplesWellUserStatusIsEditingOffline:"Editing offline",l_PeoplesWellUserStatusIsViewingOffline:"Viewing offline",l_PeoplesWellUserStatusLocationUnknown:"Has this {doctype} open",l_PeoplesWellUserStatusIsInactive:"Inactive",l_SkypeName:"Skype",l_ChatFeatureDiscoveryBubbleShort:"Chat using {skype}",l_ChatFeatureDiscoveryBubbleLong:"Chat with others who are editing the document right now.",l_BubbleCloseButtonTooltip:"Close",l_ChatTooltip:"Chat",l_DocChatButtonLabel:"Chat",l_DocChatButtonTooltip:"Chat",l_DocChatNowButtonLabel:"Chat now",l_DocChatNowButtonTooltip:"Chat now",l_DocChatMeetNowButtonLabel:"Meet now",l_DocChatMeetNowButtonTooltip:"Meet now",l_DisabledChatTooltip:"Sign in to chat",l_GroupChat:"Group Chat",l_ChatIsNotAvailable:"Sorry, {skype} document chat isn't available right now.",L_SaveToCloudStorage:"Save to {onedrive}",l_SaveToCloudSignInDialog:"Sign in to save this {doctype} to your {onedrive}.",L_SaveACopy:"Save a Copy",L_SaveAs:"Save As",l_NewCreationLocationMessage:"Create a new document in {0}.",l_NewFileAPIConsentMessage:"This Add-In is about to create a new document in your default folder on your current cloud repository.",l_OpenWindowConsentMessage:"This Add-In is about to display a new window.",l_NewProvisioningStorageMessage:"We're setting up your {0} so you can start creating new documents. This might take a few minutes.{1}Please refresh the browser page to see if it's ready to use.",l_NewGenericErrorMessage:"Sorry, we can't get the list of available options right now. Please try again later.",l_NewTemplateErrorMessage:"We can't get the list of available templates right now.",l_NewMoreTemplates:"More on Office.com",l_Open:"Open",l_OpenMenuRecentDocuments:"Recent Documents",l_OpenMenuMoreOnHost:"More on {0}",l_OpenMenuEmptyMruMessage:"There are no recent documents.",l_OpenMenuServerErrorMessage:"We can't get the list of your recent documents right now.",l_PrivacyStatement:"View the Microsoft Privacy Statement",l_SendFileErrorReportMessage:"We'd like to prevent errors like this. You can help by sending us an error report. This will include a copy of your file, which we'll only use to fix the problem and to help improve {webappshort}.",l_SendFileErrorReportDefaultText:"(optional) For example: I was inserting a rectangle...",l_SendFileErrorReportTextCaption:"What were you trying to do when you saw this?",l_Send:"Send",l_NoThanks:"No Thanks",l_Download:"Download",L_DownloadACopy:"Download a Copy",L_DownloadAs:"Download As",l_DownloadAsKeytip:"W",l_DownloadAsPdfDialogLinkSuggestion:"Click here to download the PDF of your {doctype}.",L_MoreOptionsMenu:"More",l_UnsupportedBrowser:"The browser you're using isn't supported, so some features may not work as expected. For best results, switch to a supported browser.",l_UnsupportedBrowserCrashed:"You can't use {webappshort} because your browser isn't supported. Please switch to a supported browser.",l_FullPage:"Full Page",l_PageWidth:"Page Width",l_ZoomDialogTitle:"Zoom to",L_Zoom:"Zoom",L_ZoomTooltip:"Zoom Level. Click to open the Zoom dialog box.",l_SavingStatus:"Saving...",l_SavedStatus:"Saved",l_SavedToStatus:"Saved to {0}",l_ReadOnlyStatus:"Read-Only",l_ReadOnlyStatusTooltip:"You can only read this file.",l_ReviewModeStatus:"Review Mode",l_ReviewModeStatusTooltip:"You can only review this file.",l_EditAndReply:"Edit and Reply",l_ScreenReader_UnknowSlideTitlePrompt:"Slide Title Prompt is unknown",l_ScreenReader_UnknowSlideContentPrompt:"Slide Content Prompt is unknown",l_ScreenReader_UnknowSlideNotePrompt:"Slide Note Prompt is unknown",l_ScreenReader_UnknowSlideTitle:"Slide title is unknown",l_ScreenReader_UnknowSlideContent:"Slide content is unknown",l_ScreenReader_UnknowSlideNote:"Slide note is unknown",l_ScreenReader_NoSlideTitle:"There is no slide title",l_ScreenReader_NoSlideContent:"There is no slide content",l_ScreenReader_NoSlideNote:"There are no slide notes",l_ScreenReader_PatternWord_Slide:"Slide",l_ScreenReader_PatternWord_Title:"Title",l_ScreenReader_PatternWord_Content:"Content",l_ScreenReader_PatternWord_Notes:"Notes",l_FileUploadDialogText:"File name:",l_FileUploadNoFileSpecified:"Please choose a file.",l_AppHeader_Label:"Header",l_NewAddInLoadedContent:"{0} loaded successfully. Get started.",l_NewAddInLoadedTitle:"Get started with {0}",l_LoadingAddInsContent:"We're loading your add-ins. We'll let you know when they\u2019re ready.",l_LoadingAddInsTitle:"Loading Add-ins",l_ErrorLoadingAddInsContentOuterString:"One or more add-ins didn\u2019t load. Choose {0} to retry.",l_ErrorLoadingAddInsContentInnerString:"{0} > {1} > {2}",l_InsertionDialogRefresh:"Refresh",l_ErrorLoadingAddInsTitle:"Error loading add-ins",l_TellMeFindTitleWord:"Find in document",l_TellMeFindTitleExcel:"Find in worksheet",l_SkypeTooltip:"{skype}",l_NotificationAnswer:"Answer",l_NotificationAnswerWithIM:"Answer with IM",l_NotificationChatRequest:"Chat request",l_NotificationIgnore:"Ignore",l_NotificationIncomingCall:"Incoming call",l_NotificationIncomingVideo:"Incoming video",l_NotificationRespond:"Respond",l_ChatWithOthersHelpLink:"Learn more",l_ChatWithOthersMessage:"Use Skype to chat with everyone who is working on the document right now.",l_ChatWithOthersTitle:"Chat with others",l_TellMeAppsForOfficeFlyoutAnchorTitle:"Get Add-ins ({0} matches)",l_TellMeAppsForOfficeMenuSectionTitle:"Add-ins",l_TellMeAppsForOfficeInsertAppHint:"Insert {0} Add-in",l_ActivityGroupViewElementFontFamily:"'Segoe UI',Arial,Verdana,sans-serif",l_ActivityGroupViewTimeElementFontSize:"11pt",l_ActivityGroupViewActivityViewElementsFontSize:"11pt",l_ActivityGroupViewDescriptionElementFontSize:"12pt",l_InternalError:"Sorry, something went wrong.",l_InternalError_Directive:"Could you please try that again?",l_CrashDialogTitle:"Something went wrong",l_CrashDialogMessage:"Sorry, we ran into a problem. Please try refreshing the page.",l_AddinManifestInvalid_Message:"Your add-in manifest is not valid.",l_WildFireWordBizBarAndroidCallToAction:"Discover Word designed for Android.",l_WildFireWordBizBarHeadline:"Get the Word app",l_WildFireBizBarInstallButtonText:"Install",l_WildFireWordBizBarIPadCallToAction:"Discover Word designed for the iPad.",l_WildFireBizBarOpenAppButtonText:"Open",l_WildFireBizBarUseAppButtonText:"Use App",l_WildFirePPTBizBarAndroidCallToAction:"Discover PowerPoint designed for Android.",l_WildFirePPTBizBarHeadline:"Get the PowerPoint app",l_WildFirePPTBizBarIPadCallToAction:"Discover PowerPoint designed for the iPad.",l_WildFireExcelBizBarAndroidCallToAction:"Discover Excel designed for Android.",l_WildFireExcelBizBarHeadline:"Get the Excel app",l_WildFireExcelBizBarIPadCallToAction:"Discover Excel designed for the iPad.",l_Assign:"Manage Assignment",l_Ctrl:"Ctrl",l_Submit:"Turn In",l_TabHomeKeytip:"H",l_TabInsertKeytip:"N",l_TabWordDesignKeytip:"G",l_TabPageLayoutKeytip:"P",l_TabReferencesKeytip:"S",l_TabMailingsKeytip:"M",l_TabReviewKeytip:"R",l_TabViewKeytip:"W",l_TabDeveloperKeytip:"L",l_TabAddInsKeytip:"X",l_TabFormatPictureKeytip:"JP",l_TabDesignKeytip:"JT",l_TabLayoutKeytip:"JL",l_TabHelpKeytip:"E",l_InfoKeytip:"I",l_NewKeytip:"N",l_OpenKeytip:"O",l_SaveAsKeytip:"A",l_PrintKeytip:"P",l_ShareKeytip:"H",l_AboutKeytip:"D",l_HelpKeytip:"H",l_AccessibilityHelpKeytip:"A",l_ContactSupportKeytip:"C",l_TrainingKeytip:"S",l_WhatsNewKeytip:"W",l_ExitKeytip:"X",l_UndoKeytip:"Z",l_RedoKeytip:"O",l_PasteKeytip:"V",l_CopyKeytip:"C",l_CutKeytip:"X",l_FormatPainterKeytip:"FP",l_FontNameKeytip:"FF",l_FontSizeKeytip:"FS",l_GrowFontSizeKeytip:"FG",l_ShrinkFontSizeKeytip:"FK",l_ClearFormattingKeytip:"E",l_MenuFontColorKeytip:"FC",l_MenuHighlightColorKeytip:"I",l_BoldKeytip:"1",l_ItalicKeytip:"2",l_UnderlineKeytip:"3",l_StrikethroughKeytip:"4",l_SuperscriptKeytip:"6",l_SubscriptKeytip:"5",l_GroupParagraphKeytip:"PG",l_MenuBulletsKeytip:"U",l_MenuNumberingKeytip:"N",l_MenuMultilevelListKeytip:"M",l_DecreaseIndentKeytip:"AO",l_IncreaseIndentKeytip:"AI",l_TextDirLTRKeytip:"9",l_TextDirRTLKeytip:"0",l_AlignTextLeftKeytip:"AL",l_JustifyCenterKeytip:"AC",l_AlignTextRightKeytip:"AR",l_FullJustifyKeytip:"AJ",l_LineSpacingKeytip:"K",l_SpecialIndentTooltipKeytip:"SI",l_GroupStylesKeytip:"FY",l_MenuMoreStylesKeytip:"L",l_ApplyStylesCommandKeytip:"A",l_ClearFormattingStylesKeytip:"C",l_NextSpellingErrorKeytip:"S",l_FindKeytip:"FD",l_ReplaceKeytip:"R",l_EditInWordKeytip:"T",l_ProtectDocumentKeytip:"D",l_ProtectDocumentToolTip:"{webappshort} has temporarily disabled this feature because there is more than one person editing the file.",l_PreviousVersionsKeytip:"P",l_WheresTheSaveButtonKeytip:"W",l_RenameButtonTitleKeytip:"R",l_DownloadACopyKeytip:"C",l_DownloadAsPDFKeytip:"P",l_DownloadAsImagesKeytip:"I",l_DownloadAsODTKeytip:"T",l_PrintToPdfKeytip:"R",l_DirectPrintJewelButtonKeytip:"P",l_ShareWithPeopleKeytip:"S",l_EmbedKeytip:"E",l_ReplyWithChangesKeytip:"R",l_TryOfficeKeytip:"M",l_TryMacOfficeKeytip:"O",l_TermsOfUseKeytip:"T",l_PrivacyKeytip:"P",l_HelpButtonTitleKeytip:"H",l_GiveFeedbackKeytip:"K",l_ReportAbuseKeytip:"R",l_PasteTextOnlyKeytip:"T",l_NoHighlightKeytip:"N",l_BulletStyle1Keytip:"S",l_BulletStyle2Keytip:"H",l_BulletStyle3Keytip:"B",l_SpecialIndentNoneKeytip:"N",l_SpecialIndentFirstLineKeytip:"F",l_SpecialIndentHangingKeytip:"H",l_SetLanguageMenuKeytip:"L",l_TabDrawKeytip:"D",l_TabAudioKeytip:"JA",l_NoteTagsKeytip:"T",l_EditInOneNoteKeytip:"T",l_CopyNotebookKeytip:"C",l_AutomaticKeytip:"A",l_NoteTagRemoveKeytip:"G",l_HideSpellingErrorsKeytip:"H",l_HomeKeytip:"H",l_InsertKeytip:"N",l_DesignKeytip:"JT",l_TransitionTabKeytip:"K",l_TransitionMorphObjectsKeytip:"O",l_TransitionMorphWordsKeytip:"W",l_TransitionMorphCharactersKeytip:"C",l_TransitionCutNoneKeytip:"N",l_TransitionCutThroughBlackKeytip:"B",l_TransitionFadeSmoothlyKeytip:"S",l_TransitionFadeThroughBlackKeytip:"B",l_TransitionPushFromBottomKeytip:"B",l_TransitionPushFromLeftKeytip:"L",l_TransitionPushFromRightKeytip:"R",l_TransitionPushFromTopKeytip:"T",l_TransitionWipeFromRightKeytip:"R",l_TransitionWipeFromTopKeytip:"T",l_TransitionWipeFromLeftKeytip:"L",l_TransitionWipeFromBottomKeytip:"B",l_TransitionWipeFromTopRightKeytip:"I",l_TransitionWipeFromBottomRightKeytip:"G",l_TransitionWipeFromTopLeftKeytip:"E",l_TransitionWipeFromBottomLeftKeytip:"F",l_TransitionSplitVerticalOutKeytip:"E",l_TransitionSplitHorizontalInKeytip:"H",l_TransitionSplitHorizontalOutKeytip:"O",l_TransitionSplitVerticalInKeytip:"V",l_TransitionRandomBarsVerticalKeytip:"V",l_TransitionRandomBarsHorizontalKeytip:"H",l_TransitionShapeCircleKeytip:"C",l_TransitionShapeDiamondKeytip:"D",l_TransitionShapePlusKeytip:"P",l_TransitionShapeInKeytip:"I",l_TransitionShapeOutKeytip:"O",l_TransitionFlipRightKeytip:"R",l_TransitionFlipLeftKeytip:"L",l_TransitionCubeFromRightKeytip:"R",l_TransitionCubeFromBottomKeytip:"B",l_TransitionCubeFromLeftKeytip:"L",l_TransitionCubeFromTopKeytip:"T",l_AnimationTabKeytip:"A",l_AnimationAsOneObjectKeytip:"N",l_AnimationAllAtOnceKeytip:"A",l_AnimationOneByOneKeytip:"Y",l_AnimationFromBottomKeytip:"B",l_AnimationFromBottomLeftKeytip:"E",l_AnimationFromLeftKeytip:"L",l_AnimationFromTopLeftKeytip:"F",l_AnimationFromTopKeytip:"T",l_AnimationFromTopRightKeytip:"P",l_AnimationFromRightKeytip:"R",l_AnimationFromBottomRightKeytip:"I",l_AnimationHorizontalInKeytip:"H",l_AnimationHorizontalOutKeytip:"Z",l_AnimationVerticalInKeytip:"V",l_AnimationVerticalOutKeytip:"E",l_AnimationHorizontalKeytip:"Z",l_AnimationVerticalKeytip:"V",l_AnimationObjectCenterKeytip:"B",l_AnimationSlideCenterKeytip:"L",l_AnimationInKeytip:"I",l_AnimationInFromScreenCenterKeytip:"C",l_AnimationInSlightlyKeytip:"G",l_AnimationOutKeytip:"U",l_AnimationOutFromScreenBottomKeytip:"B",l_AnimationOutSlightlyKeytip:"S",l_AnimationAcrossKeytip:"C",l_AnimationUpKeytip:"U",l_AnimationDownKeytip:"D",l_AnimationLeftDownKeytip:"L",l_AnimationLeftUpKeytip:"E",l_AnimationRightDownKeytip:"R",l_AnimationRightUpKeytip:"I",l_AnimationClockWiseKeytip:"C",l_AnimationCounterClockWiseKeytip:"U",l_AnimationQuarterSpinKeytip:"Q",l_AnimationHalfSpinKeytip:"H",l_AnimationFullSpinKeytip:"F",l_AnimationTwoSpinKeytip:"T",l_AnimationBothKeytip:"B",l_AnimationTinyKeytip:"T",l_AnimationSmallerKeytip:"S",l_AnimationLargerKeytip:"L",l_AnimationHugeKeytip:"E",l_Animation25PerKeytip:"2",l_Animation50PerKeytip:"5",l_Animation75PerKeytip:"7",l_Animation100PerKeytip:"1",l_AnimationOutToScreenCenterKeytip:"C",l_AnimationInToScreenBottomKeytip:"B",l_SlideShowTabKeytip:"S",l_ReviewTabKeytip:"R",l_ViewKeytip:"W",l_DeveloperTabKeytip:"L",l_AddInsTabKeytip:"X",l_FormatKeytip:"JP",l_AboutOfficeKeytip:"D",l_DeleteKeytip:"DD",l_PPTDeleteKeytip:"D",l_SlideLayoutRibbonButtonKeytip:"L",l_DuplicateSlideKeytip:"P",l_DecreaseFontSizeKeytip:"FK",l_IncreaseFontSizeKeytip:"FG",l_FontColorKeytip:"FC",l_BulletListKeytip:"U",l_NumberedListKeytip:"N",l_AlignTextKeytip:"AT",l_JustifyLeftKeytip:"AL",l_JustifyRightKeytip:"AR",l_LeftToRightKeytip:"AF",l_RightToLeftKeytip:"AG",l_TextBoxKeytip:"X",l_ShapesKeytip:"SH",l_ApplyShapeStyleKeytip:"T",l_ApplyShapeFillKeytip:"SF",l_ApplyShapeOutlineKeytip:"SO",l_TableKeytip:"T",l_InsertTableDialogKeytip:"I",l_LocalImagesKeytip:"P",l_OnlineImagesKeytip:"C",l_OnlinePictureKeytip:"F",l_OneNoteOnlinePictureKeytip:"L",l_OnlinePictureFromHostKeytip:"G",l_OnlinePictureFromBingKeytip:"F",l_OnlinePictureFromM365Keytip:"M",l_SmartArtKeytip:"M",l_SmartArtRightToLeftKeytip:"R",l_ButtonOfficeAddinsKeytip:"A",l_OneNoteButtonOfficeAddinsKeytip:"I",l_PPTButtonOfficeAddinsKeytip:"AP",l_HyperlinkKeytip:"I",l_OneNoteHyperlinkKeytip:"H",l_InsertCommentKeytip:"L",l_InsertIconTitle:"Insert Icon",l_InsertIconKeytip:"Y1",l_SymbolSingleKeytip:"U",l_InsertMoreSymbolsKeytip:"M",l_EmojiSingleKeytip:"EM",l_InsertMoreEmojisKeytip:"M",l_OnlineVideoKeytip:"J",l_MoreThemesKeytip:"H",l_MoreVariantsKeytip:"V",l_SetSlideSizeKeytip:"S",l_FormatBackgroundKeytip:"F",l_MoreStylesKeytip:"S",l_TransitionEffectOptionsKeytip:"O",l_TransitionApplyAllKeytip:"L",l_TransitionDurationLabelKeytip:"E",l_EffectOptionsKeytip:"O",l_ReorderEarlierKeytip:"E",l_ReorderLaterKeytip:"L",l_AccCheckKeytip:"C",l_EditViewKeytip:"E",l_ReadKeytip:"R",l_NotesKeytip:"PN",l_ShowHideCommentsEditKeytip:"K",l_ZoomKeytip:"Q",l_ZoomTo100Keytip:"J",l_ZoomToFitKeytip:"F",l_BringForwardKeytip:"AF",l_PPTBringForwardKeytip:"F",l_SendBackwardKeytip:"AE",l_PPTSendBackwardKeytip:"B",l_RotateShapeKeytip:"AY",l_ShapeAltTextKeytip:"X",l_EditTextKeytip:"X",l_PromoteKeytip:"P",l_DemoteKeytip:"D",l_MoreLayoutsKeytip:"L",l_ChangeColorsKeytip:"C",l_ResetGraphicKeytip:"E",l_ChangePictureKeytip:"G",l_ResetPictureKeytip:"QR",l_PPTResetPictureKeytip:"Q",l_CropPictureKeytip:"VC",l_EditInPowerPointKeytip:"T",l_FileVersionKeytip:"P",l_DownloadCopyKeytip:"C",l_DownloadAsOdpKeytip:"D",l_TopKeytip:"T",l_MiddleKeytip:"M",l_BottomKeytip:"B",l_BringToFrontKeytip:"R",l_SendToBackKeytip:"K",l_GroupObjectsKeytip:"G",l_UngroupKeytip:"U",l_FlipVerticalKeytip:"V",l_FlipHorizontalKeytip:"H",l_SetSlideSize4x3Keytip:"S",l_SetSlideSize16x9Keytip:"W",l_CustomSlideSizeKeytip:"C",l_SolidFillKeytip:"S",l_FormatBackgroundPictureKeytip:"P",l_ApplyAllKeytip:"A",l_ShowHideCommentPaneEditKeytip:"P",l_ShowHideMarkupKeytip:"TM",l_TableStyleOptionFirstRowKeytip:"A",l_TableStyleOptionHeaderRowKeytip:"O",l_TableStyleOptionFirstColumnKeytip:"M",l_TableStyleOptionLastRowKeytip:"T",l_TableStyleOptionTotalRowKeytip:"J",l_TableStyleOptionLastColumnKeytip:"N",l_TableStyleOptionBandedRowKeytip:"R",l_TableStyleOptionBandedColumnKeytip:"U",l_MenuShadingColorKeytip:"H",l_OneNoteMenuShadingColorKeytip:"G",l_SelectKeytip:"K",l_PPTSelectKeytip:"Q",l_InsertAboveKeytip:"A",l_PPTMergeTableCellsKeytip:"M",l_PPTSplitTableCellsKeytip:"P",l_OneNoteInsertAboveKeytip:"V",l_PPTInsertAboveKeytip:"V",l_InsertBelowKeytip:"BE",l_OneNoteInsertBelowKeytip:"E",l_PPTInsertBelowKeytip:"E",l_InsertLeftKeytip:"L",l_InsertRightKeytip:"R",l_OneNoteInsertRightKeytip:"I",l_PPTInsertRightKeytip:"I",l_AnchorTopKeytip:"O",l_AnchorMiddleKeytip:"C",l_AnchorBottomKeytip:"B",l_SelectTableKeytip:"KT",l_OneNoteSelectTableKeytip:"S",l_PPTSelectTableKeytip:"T",l_SelectColumnKeytip:"KC",l_OneNoteSelectColumnKeytip:"M",l_PPTSelectColumnKeytip:"C",l_SelectRowKeytip:"KR",l_OneNoteSelectRowKeytip:"O",l_PPTSelectRowKeytip:"R",l_DeleteColumnKeytip:"DC",l_OneNoteDeleteColumnKeytip:"U",l_PPTDeleteColumnKeytip:"C",l_DeleteRowKeytip:"DR",l_OneNoteDeleteRowKeytip:"W",l_PPTDeleteRowKeytip:"R",l_DeleteTableKeytip:"DT",l_OneNoteDeleteTableKeytip:"D",l_PPTDeleteTableKeytip:"T",l_RecordKeytip:"A",l_StopKeytip:"S",l_PlayKeytip:"P",l_PauseKeytip:"U",l_Back15SecondsKeytip:"B",l_Forward15SecondsKeytip:"F",l_NewPageKeytip:"N",l_NewSectionKeytip:"S",l_PictureKeytip:"P",l_CameraKeytip:"W",l_ClipArtKeytip:"C",l_FilePrintoutKeytip:"O",l_FileAttachmentKeytip:"F",l_ButtonUploadAddinsKeytip:"L",l_RecordAudioKeytip:"A",l_AltTextKeytip:"E",l_GroupImageSizeKeytip:"O",l_GrowKeytip:"G",l_ShrinkKeytip:"R",l_PictureScaleTooltipKeytip:"S",l_CropKeytip:"V",l_SelectCellKeytip:"KL",l_OneNoteSelectCellKeytip:"C",l_HideBordersKeytip:"H",l_AlignLeftKeytip:"AL",l_AlignRightKeytip:"AR",l_ReadViewKeytip:"F",l_ShowAuthorsKeytip:"S",l_BrowseVersionsKeytip:"V",l_DeletedNotesKeytip:"D",l_PageColorKeytip:"PC",l_NoPageColorKeytip:"N",l_RibbonInsertPageBreakKeytip:"B",l_CommentKeytip:"L",l_BtnHeaderFooterKeytip:"H",l_PageNumbersKeytip:"NU",l_IncludePageCountKeytip:"I",l_RemovePageNumbersKeytip:"R",l_FootnoteKeytip:"RF",l_EndnoteKeytip:"RE",l_ShowFootnotesKeytip:"SF",l_ShowEndnotesKeytip:"SE",l_PageMarginsKeytip:"M",l_PageOrientationKeytip:"O",l_PageSizeKeytip:"SZ",l_SpinnerIndentAfterLtrKeytip:"IR",l_SpinnerIndentBeforeLtrKeytip:"IL",l_SpinnerSpacingAfterKeytip:"SA",l_SpinnerSpacingBeforeKeytip:"SB",l_PageCustomMarginsKeytip:"A",l_PageCustomSizesKeytip:"A",l_QuickStylesKeytip:"K",l_InsightsMenuKeytip:"L",l_NewCommentKeytip:"C1",l_DeleteCommentKeytip:"D",l_PreviousCommentKeytip:"V",l_NextCommentKeytip:"N",l_OpenCommentPaneKeytip:"K",l_ShowActivityKeytip:"AA",l_ResumeAssistantAsResumeKeytip:"R2",l_ResumeAssistantAsCVKeytip:"C2",l_ClearTableFormattingKeytip:"C",l_MenuTableThemeKeytip:"BC",l_JustifyTopLeftKeytip:"TL",l_JustifyTopCenterKeytip:"TC",l_JustifyTopRightKeytip:"TR",l_JustifyMiddleLeftKeytip:"CL",l_JustifyMiddleCenterKeytip:"CC",l_JustifyMiddleRightKeytip:"CR",l_JustifyBottomLeftKeytip:"BL",l_JustifyBottomCenterKeytip:"BC",l_JustifyBottomRightKeytip:"BR",l_TogglePageEndsKeytip:"ZE",l_NavigationPaneButtonTextKeytip:"K",l_EndnotesKeytip:"SE",l_ShowHideDesignerPaneKeytip:"D",l_ShowHideIdeasPaneKeytip:"E",l_ShowSmartLookupPaneKeytip:"SL",l_RemoveShapeFillKeytip:"N",l_RemoveShapeOutlineKeytip:"N",l_PictureWidthTooltipKeytip:"W",l_PictureHeightTooltipKeytip:"H",l_WrapTextKeytip:"TW",l_WrapTextInLineKeytip:"I",l_WrapTextSquareLeftKeytip:"SL",l_WrapTextSquareRightKeytip:"SR",l_WrapTextBehindTextKeytip:"D",l_WrapTextInFrontOfTextKeytip:"N",l_OpenAccessibilityCheckerPaneKeytip:"Q",l_LockAspectRatioKeytip:"X",l_LookupAltTextKeytip:"Q",l_MenuAlignmentKeytip:"P",l_JewelTextKeytip:"F",l_GroupPageLayoutParagraphKeytip:"PG",l_PPTApplyShapeOutlineDashStyleKeytip:"S",l_ApplyShapeOutlineEndStyleKeytip:"R",l_ApplyShapeOutlineWidthKeytip:"W",l_OpenInClientKeytip:"O",l_PPTDesignKeytip:"G",l_TabDrawingFormatKeytip:"JD",l_TabSmartArtDesignKeytip:"JS",l_DupSlideKeytip:"PS",l_HideSlideKeytip:"HS",l_PPTLeftToRightKeytip:"TL",l_PPTRightToLeftKeytip:"TR",l_PPTHomeFlipVerticalKeytip:"OV",l_PPTHomeFlipHorizontalKeytip:"OH",l_PPTFlipVerticalKeytip:"V",l_PPTFlipHorizontalKeytip:"H",l_PPTApplyShapeStyleKeytip:"SS",l_DuplicateKeytip:"PA",l_NewSlideKeytip:"SI",l_PPTNewSlideKeytip:"I",l_PPTOnlineVideoKeytip:"VO",l_PPTSolidFillKeytip:"F",l_PPTApplyAllKeytip:"L",l_PPTEditViewKeytip:"L",l_PPTReadKeytip:"D",l_SlideShowKeytip:"SS",l_PPTShowHideCommentsEditKeytip:"SP",l_PPTShowHideCommentsPaneKeytip:"P",l_PPTShowHideMarkupKeytip:"M",l_TableWidthKeytip:"TW",l_TableHeightKeytip:"TH",l_PPTMoreStylesKeytip:"A",l_PPTTransitionMoreStylesKeytip:"T",l_PPTAnimationMoreStylesKeytip:"S",l_PPTPictureToolMoreStylesKeytip:"K",l_PPTMoreSmartArtStylesKeytip:"S",l_PPTHyperlinkKeytip:"I",l_PPTInsertCommentKeytip:"L2",l_PPTShapeAltTextKeytip:"AT",l_PictureCropHeightKeytip:"VH",l_PictureCropWidthKeytip:"VW",l_PictureCropLeftKeytip:"VL",l_PictureCropTopKeytip:"VT",l_AddInKeytip:"Y",l_GeneralAddInMessageDialogTitle:"Message from Add-in",l_ShowDialogApiInlineDialogTitle:"Message from Add-in: {0}",L_TextForOfficeOnlineInGallatin:"Operated by 21Vianet in Accordance with Chinese Law",l_NotificationUITitle:"Notification",l_OnlinePictureFromHostGeneric:"Pictures from Host",l_HostGeneric:"Host",l_OnlinePictureFromHostUnsupportedFiles:"Sorry, we don't support {0} files. We can only insert .jpg, .jpeg, .png, .gif, .bmp, .tif and .tiff files.",l_ImmersiveReaderKeytip:"I",L_VideoInsertTitle:"Insert Video",L_PictureInsertTitle:"Insert Online Picture",l_RotateRight90Keytip:"R",l_RotateLeft90Keytip:"L",l_RotateMoreOptionsKeytip:"M",l_CommentDeepLinkingCommentNotExists:"This comment has been deleted.",l_EmailFieldHelpText:"Email address (optional)",l_CropMoreOptionsKeytip:"M",l_PPTSlideShowFromBeginningKeytip:"B",l_PPTSlideShowFromCurrentKeytip:"C",l_RequestConsentDialogTitle:"Permission needed",l_SpbWordCountKeytip:"W",l_WordCountMenuItemKeytip:"W",l_WordCountToggleKeytip:"C",l_EnterMathEducationModeKeytip:"M",l_EnterMathEducationSwitchKeytip:"T",l_CreateNewStyleCommandKeytip:"S",l_AutoCorrectOptionsKeytip:"A",l_GrammarSettingsKeytip:"R",l_GalleryRowAccessibleLabelFormat:"Row {0}",l_RibbonGroup:"Ribbon",l_SingleLineRibbon:"Single Line Ribbon",l_SingleLineRibbonKeyTip:"R",l_GoToClassicRibbonDialogMesage:"We'll need to refresh the page to bring back the Classic Ribbon. Your work will be saved.",l_ToggleRibbonUXDialogTitle:"Switch Ribbon",l_ToggleRibbonUXDialogTellUsWhy:"Tell us why you're switching to the Classic Ribbon.",l_GoToSingleLineRibbonDialogMessage:"We'll need to refresh the page to bring back the Single Line Ribbon. Your work will be saved.",l_CatchUpChangeNotificationMessage:"While you were away...",l_CatchUpChangeNotificationNew:"New!",l_CatchUpChangeNotificationText:"Changes were made.",l_CatchUpChangeNotificationTextOneName:"Changes were made by {0}.",l_CatchUpChangeNotificationTextTwoNames:"Changes were made by {0} and {1}.",l_CatchUpChangeNotificationTextThreeNames:"Changes were made by {0}, {1}, and {2}.",l_CatchUpChangeNotificationTextFourNames:"Changes were made by {0}, {1}, {2}, and {3}.",l_CatchUpChangeNotificationTextMoreNames:"Changes were made by {0}, {1}, {2}, and others.",l_CatchUpChangeNotificationButtonLabel:"Go to recent changes",l_WAC_NPS_PromptQuestion:"We have just two questions for you.",l_WAC_NPS_RatingQuestion:"Would you recommend {webappshort} to others, if asked?",l_WAC_NPS_RatingQuestion_Word:"How likely are you to recommend the web version of Word to others, if asked?",l_WAC_NPS_RatingQuestion_OneNote:"How likely are you to recommend the web version of OneNote to others, if asked?",l_WAC_NPS_RatingQuestion_PowerPoint:"How likely are you to recommend the web version of PowerPoint to others, if asked?",l_WAC_NPS_RatingQuestion_Excel:"How likely are you to recommend the web version of Excel to others, if asked?",l_WAC_NPS_RatingQuestion_Visio:"How likely are you to recommend the web version of Visio to others, if asked?",l_WAC_NPS_Rating_QuestionQuestion:"Please tell us more. Why did you choose that answer?",l_WAC_NPS_Rating_Values_1:"1 - Not at all likely",l_WAC_NPS_Rating_Values_2:"2",l_WAC_NPS_Rating_Values_3:"3",l_WAC_NPS_Rating_Values_4:"4",l_WAC_NPS_Rating_Values_5:"5 - Extremely likely",l_WAC_NPS_Title:"We'd love your feedback!",l_WAC_AtMentionFS_PromptTitle:"You were @mentioned in a comment for collaboration",l_WAC_AtMentionFS_PromptQuestion:"Click here to provide feedback.  We have just one question.",l_WAC_AtMentionFS_RatingQuestion:"Overall how do you feel while using @mention to collaborate?",l_WAC_GenericSurvey_SureLabel:"Sure",l_WAC_GenericSurvey_NoLabel:"Not now",l_WAC_GenericSurvey_RaitingValue_ExtremelyNegative:"Extremely negative",l_WAC_GenericSurvey_RaitingValue_SomewhatNegative:"Somewhat negative",l_WAC_GenericSurvey_RaitingValue_NeitherNegativeNorPositive:"Neither negative nor positive",l_WAC_GenericSurvey_RaitingValue_SomewhatPositive:"Somewhat positive",l_WAC_GenericSurvey_RaitingValue_ExtremelyPositive:"Extremely positive",l_WAC_GenericSurvey_WhyQuestion:"Tell us more about why you chose this rating?",l_OneNote_Search_FPS_Title:"We'd love your feedback about search!",l_OneNote_Search_FPS_PromptQuestion:"We have two questions for you.",l_OneNote_Search_FPS_RatingQuestion:"How satisfied are you with search?",l_OneNote_Search_FPS_WhyQuestion:"Please tell us why you chose that answer.",l_OneNote_Search_FPS_Rating_Values_1:"1 - Not satisfied",l_OneNote_Search_FPS_Rating_Values_2:"2",l_OneNote_Search_FPS_Rating_Values_3:"3",l_OneNote_Search_FPS_Rating_Values_4:"4",l_OneNote_Search_FPS_Rating_Values_5:"5 - Very satisfied",l_THSarabunPSK:"TH SarabunPSK",l_GrammarSettingsDialogTitle:"Editor Settings",l_GrammarSettingsDialogLanguages:"Languages:",l_ResetAll:"Reset All",l_AcronymsKeytip:"AC",l_ShareAndNotifyDialogTitle:"Share and Notify",l_ShareAndNotifyDialogText:"Some users you have mentioned may not have access to the document. Please share to let them edit and see your comment.",l_BookmarkCalloutLabel:"Click {0} to bookmark this {doctype}",l_BookmarkCalloutAriaLabel:"Press Control D to bookmark this {doctype}",l_InsertTableOfContentsKeytip:"I",l_UpdateTableOfContentsKeytip:"U",l_RemoveTableOfContentsKeytip:"RT",l_ToggleRibbonText:"Simplified Ribbon",l_FontsOnDemandTooltip:"{0}, select to download",l_OICDialogSectionGiveFeedback:"Tell us what you think of {webappshort}",l_ThirdPartyAddinDisabledTitle:"Office Add-ins are offline",l_ThirdPartyAddinDisabledMessage:"Office Add-ins have been disabled. To continue, download and open the file on your desktop, or try again later.",l_EnrichmentPaneTitle:"Data Selector",l_ThirdPartyNotices:"Third-Party Notices",l_ThirdPartyNoticesDescription:"Read the Third-Party Notices for {webappshort}.",l_ThirdPartyNoticesKeytip:"N",l_TrustCenter:"Privacy Settings",l_TrustCenterDescription:"Manage your privacy settings.",l_TrustCenterKeytip:"S",l_PrivacySettingsDialogTitle:"Privacy Settings",l_PrivacySettingsDialogHeader:"Your data, controlled by you",l_PrivacySettingsDialogSubHeader:"Office privacy settings give you control over your experience and data.",l_PrivacyDialogLearnMore:"Learn more",l_PrivacySettingsDialogMessage:"Some privacy options are managed by your organization's admin. There are optional connected experiences you can control because your admin has given you this option.",l_PrivacySettingsDialogAdminDisabled:"Your organization's admin manages your privacy settings and has decided to disable optional connected experiences.",l_PrivacySettingsDialogExperiencesTitle:"Optional connected experiences",l_PrivacySettingsDialogExperiencesMessage:"Office has helpful features that are powered by cloud-backed services. Your admin has given you the option to control some features including Smart Lookup, Insert Online Picture, and more. Most connected experiences are managed by your admin.",l_PrivacySettingsDialogCheckboxText:"Enable optional connected experiences",l_PrivacySettingsDialogWarning:"By turning this off, some experiences will no longer be available to you.",l_PrivacySettingsDialogMicrosoftPrivacyStatement:"Microsoft Privacy Statement",l_PrivacySettingsDialogMicrosoftLogoAltText:"Microsoft logo",l_PrivacyNoticeDialogTitle:"Your privacy option",l_PrivacyNoticeDialogMessageText:"Thanks for using Office! We\u2019ve made some updates to the privacy settings to give you more control.",l_PrivacyNoticeDialogMessageSubText:"Your organization\u2019s admin allows you to use several cloud-backed services. You get to decide whether you use these services.",l_PrivacyNoticeDialogSettingsLocation:"To adjust these privacy settings, go to:",l_PrivacyNoticeDialogSettingsLink:"Office on the web Privacy Settings",l_PrivacyNoticeDialogServicesAgreementText:"These optional cloud-backed services are provided to you under the Microsoft Services Agreement",l_PrivacyNoticeDialogServiesAgreementLink:"Microsoft Services Agreement",l_RefreshRequiredDialogTitle:"Refresh required",l_RefreshRequiredDialogText:"Refresh your browser tab to apply changes to your privacy settings. If you have Office for the web open in more than one tab you\u2019ll need to refresh each of those tabs to apply these changes.",l_RefreshRequiredDialogAnonymousText:"Since you\u2019re not signed in with a Microsoft account, we save your privacy settings in a browser cookie. If your browser prevents us from saving cookies, we will not be able to remember your settings for the next time you use Office on the Web.",l_RefreshRequiredDialogLinkText:"Why do I need to refresh?",l_RefreshRequiredDialogRefreshButton:"Refresh",l_RefreshRequiredDialogNotNowButton:"Not now",l_AnonymousBusBarPrivacyNotice:"Thanks for using Office! We\u2019ve made some updates to the privacy settings to give you more control. Your organization\u2019s admin allows you to use several cloud-backed services. You get to decide whether you use these services. To adjust these privacy settings, go to the Office on the web Privacy Settings. These optional cloud-backed services are provided to you under the Microsoft Services Agreement.",l_RoamedSettingsBusBarPrivacyNotice:"Your account\u2019s privacy settings are being applied. To adjust your settings, go to the Office on the web Privacy Settings. ",l_FreemiumUpsell:"Go Premium",l_PremiumBadge:"Premium",l_AttributionText:"{L_ThePhoto} by {L_PhotoAuthor} is licensed under {L_CCYYSA}.",l_ThePhoto:"This Photo",l_PhotoAuthor:"Unknown author",l_CCYYSA:"CC-YY-SA",l_TabGraphicsFormatKeytip:"JG",l_PPTApplyGraphicsStyleKeytip:"GS",l_ApplyGraphicsFillKeytip:"GF",l_ApplyGraphicsOutlineKeytip:"GO",l_StartGroupChat:"Start Group Chat",l_PeoplesWellStateUserIsJoining:"{0} is here",l_CheckSupportedBrowsers:"Check supported browsers",l_WaitForTranslation:"Translating, please wait...",l_WaitForLongTranslation:"This translation will take several seconds, please wait...",l_TranslationServiceUnavailable:"Sorry, the {doctype} can't be translated at this time because we're having trouble talking to the service. Please try again in a few minutes.",l_DocumentCannotBeTranslated:"Sorry, this {doctype} contains text that can't be translated.",l_DocumentCannotBeTranslatedOCX:"Sorry, this {doctype} can't be translated because it contains ActiveX controls.",l_GenericTranslationError:"Sorry, {webappshort} ran into a problem translating this {doctype}.",l_DocumentCannotBeTranslatedLength:"Sorry, this {doctype} is too long to be translated.",l_EnableCookiesDialogTitle:"Enable Third-Party Cookies",l_EnableCookiesDialogDescription:"To save your preferences we need to store a third-party cookie. Please enable third-party cookies for this page.",l_ReadingTimeToggleKeytip:"T",L_Sensitivity:"Sensitivity",L_SensitivityRibbonLabel:"Sensitivity",L_SensitivityKeytip:"SY",L_SensitivityTooltip:"Sensitivity",L_LearnMoreTooltip:"Learn how your organization uses these sensitivity labels.",l_SmartLookupPaneTitle:"Search",l_InstallingCustomFunctionsErrorStatusBarMsg:"Error installing functions",l_InstallingCustomFunctionsErrorCalloutMsg:"One or more add-ins failed to install or load custom functions.",l_SensitivityApplicationErrorBusinessBarMessage:"Please try again later.",l_SensitivityApplicationErrorBusinessBarTitle:"We couldn't apply your label at this time.",l_SensitivityQuickApplicationErrorMessage:"This document's sensitivity is currently updating. Please try again in a moment.",l_SensitivityCoauthApplicationErrorMessage:"You can't apply this label to a document while others are editing it.",l_SensitivityApplicationDialogErrorTitle:"Problem with Sensitivity",L_ZoomInTooltip:"Zoom In",L_ZoomOutTooltip:"Zoom Out",l_SensitivityJustificationTitle:"Justification Required",l_SensitivityJustificationMessage:"Your organization requires justification to change this label.",l_SensitivityJustificationNoLongerApplies:"Previous label no longer applies",l_SensitivityJustificationIncorrect:"Previous label was incorrect",l_SensitivityJustificationOther:"Other (explain)",l_SensitivityJustificationPlaceholder:"Explain why you're changing this label.",l_SensitivitySaveDocumentError:"Sorry, we don't yet support saving a copy of a file that's protected with a sensitivity label.",l_SensitivityDownloadDocumentError:"Sorry, we don't yet support downloading a file that's protected with a sensitivity label.",l_Excel_NSV_Prompt:"We'd love your feedback on Excel sheet views.",l_Excel_NSV_Overview_Question:"We noticed you created a sheet view. Please rate your experience using it.",l_Excel_Rating_1_Satisfied:"1 - Extremely dissatisfied",l_Excel_Rating_2_Satisfied:"2 - Somewhat dissatisfied",l_Excel_Rating_3_Satisfied:"3 - Neither satisfied nor dissatisfied",l_Excel_Rating_4_Satisfied:"4 - Somewhat satisfied",l_Excel_Rating_5_Satisfied:"5 - Extremely satisfied",l_Excel_NSV_Timed_Feedback_Freeform_Question:"Tell us more about your experience using sheet views.",l_Title_For_NSV_Floodgate_Prompt:"Tell us more about your experience using sheet views.",l_NSV_Didnt_Create_NSV_Survey_Question:"You recently sorted or filtered, and chose to show it to everyone in the file. Can you tell us why you did that?",l_NSV_Didnt_Create_NSV_Option_4:"I wanted everyone to see it.",l_NSV_Didnt_Create_NSV_Option_3:"I didn't want to create a sheet view.",l_NSV_Didnt_Create_NSV_Option_2:"Actually, I'm the only one in this file.",l_NSV_Didnt_Create_NSV_Option_1:"I don't know why I did that.",l_NSV_Freeform_Reason_Didnt_Create_SheetView:"Anything else you'd like to tell us about sorting, filtering, or sheet views?",l_NSV_Didnt_Create_SheetView_Prompt:"We'd love your feedback on sorting and filtering.",l_NSV_PromptQuestion:"We have just two questions.",l_WordGraphicsEditorDialogTitle:"Illustrations",l_TranslatorIntelligentSuggestionsDialogBoxTitle:"Translate document to: {0}?",l_TranslatorIntelligentSuggestionsDialogBoxMessage:"Create a translated copy of the document with Microsoft Translator service. You can set your preference for translation suggestions under",l_TranslatorIntelligentSuggestionsDialogBoxPrefPath:"Review > Translate > Translator Preferences",l_TranslatorIntelligentSuggestionsDialogBoxMessagePeriod:".",l_TranslatorIntelligentSuggestionsDialogBoxNeverFrom:"Never translate from: {0}",l_TranslatorIntelligentSuggestionsDialogBoxTranslate:"Translate",l_TranslatorIntelligentSuggestionsDialogBoxTranslateIconAltText:"Microsoft Translator Icon",l_AnonymousUserName:"Anonymous user",l_GuestUserName:"Guest user",l_CapitalizeEachWordKeytip:"C",l_LowerCaseKeytip:"L",l_SentenceCaseKeytip:"S",l_ToggleCaseKeytip:"T",l_UpperCaseKeytip:"U",l_PictureBordersKeytip:"PB",l_WAC_CatchUpFPS_Title:"Share your feedback on staying aware of changes from others",l_WAC_CatchUpFPS_Question:"We have two questions for you.",l_WAC_CatchUpFPS_YesLabel:"Sure",l_WAC_CatchUpFPS_NoLabel:"Not now",l_WAC_CatchUpFPS_RatingQuestion:"How do you feel about your overall awareness of changes made by others?",l_WAC_CatchUpFPS_RatingValue_1:"1 - Always uncertain about changes",l_WAC_CatchUpFPS_RatingValue_2:"2",l_WAC_CatchUpFPS_RatingValue_3:"3",l_WAC_CatchUpFPS_RatingValue_4:"4",l_WAC_CatchUpFPS_RatingValue_5:"5 - Always aware of changes",l_WAC_CatchUpFPS_WhyQuestion:"Can you describe and provide examples of why you chose that answer?",l_FindInDocumentResultsText:"{0} results",l_FindInDocumentResultText:"{0} result",l_IdeasKeytip:"SU",l_RemovedAuthorName:"Author",l_HelpButtonTitle:"Get Help on",l_TellMeCommandProviderTitle:"Actions",l_TellMeFindInDocProviderTitle:"Find in Document"};