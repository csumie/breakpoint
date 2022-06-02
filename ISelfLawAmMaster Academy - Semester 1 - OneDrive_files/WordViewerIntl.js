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
