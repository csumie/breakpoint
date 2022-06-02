Type.registerNamespace('Box4Intl');

Box4Intl.Box4Strings = function Box4Intl_Box4Strings() {
    /// <summary>
    /// Contains the localizable strings for the Box4 application. All Ribbon strings need [PreserveCase]
    /// All string will be formatted with the following substitutions:
    /// {webappfull} is the long name of the Web client application; e.g., "Microsoft OneNote Web App"
    /// {webappshort} is the short name of the Web client application; e.g. "OneNote Web App")
    /// {appshort} is the short name of the application (e.g. "OneNote")
    /// {richclientfull} is the name of the equivalent rich client (e.g. "Microsoft OneNote")
    /// {doctype} is the friendly name of the file/document type (e.g. "document", "presentation")
    /// {doctypetitlecase} is the friendly name of the file/document type in title case (e.g. "Document", "Presentation")
    /// {doctypeplural} is the plural form of {doctype} (e.g. "documents", "presentations").
    /// </summary>
    /// <field name="l_OutlineResizeAlt" type="String" static="true">
    /// </field>
    /// <field name="l_NavigationPaneContentsLabel" type="String" static="true">
    /// </field>
    /// <field name="l_UntitledPageText" type="String" static="true">
    /// </field>
    /// <field name="l_UntitledSection" type="String" static="true">
    /// </field>
    /// <field name="l_NotebookPagesSection" type="String" static="true">
    /// </field>
    /// <field name="l_ProtoButtonText" type="String" static="true">
    /// </field>
    /// <field name="l_SectionGroupAltText" type="String" static="true">
    /// </field>
    /// <field name="l_SectionGroupArrowAltText" type="String" static="true">
    /// </field>
    /// <field name="l_DefaultUserName" type="String" static="true">
    /// The default text to show when we're not passed a username.
    /// </field>
    /// <field name="l_UserInitialsDelimeter" type="String" static="true">
    /// The string to insert between multiple user initials when displaying multiple authors (say, in a table row).
    /// </field>
    /// <field name="l_PageLoadingText" type="String" static="true">
    /// </field>
    /// <field name="l_OreoSpinnerText" type="String" static="true">
    /// </field>
    /// <field name="l_ConflictPage" type="String" static="true">
    /// </field>
    /// <field name="l_PageAccessibilityContext" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is a number.
    /// </field>
    /// <field name="l_PageWithSearchResultsAccessibilityContext" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is a number.
    /// </field>
    /// <field name="l_ConflictPageAccessibilityContext" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is the title of a page
    /// </field>
    /// <field name="l_VersionHistoryPageAccessibilityContext" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is the title of a page
    /// </field>
    /// <field name="l_SectionAccessibilityContext" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is the title of a section
    /// </field>
    /// <field name="l_SectionGroupAccessibilityContext" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is the title of a section group
    /// </field>
    /// <field name="l_ImageUploadFileError" type="String" static="true">
    /// Error message when uploading an image.
    /// </field>
    /// <field name="l_ImageUploadFailedMsg" type="String" static="true">
    /// </field>
    /// <field name="l_ImageUploadFailedMsgWord" type="String" static="true">
    /// </field>
    /// <field name="l_ImageUploading" type="String" static="true">
    /// </field>
    /// <field name="l_ImageCantDisplay" type="String" static="true">
    /// </field>
    /// <field name="l_ImageUploadSizeError" type="String" static="true">
    /// </field>
    /// <field name="l_ImageLoading" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is the name of one of many different types of content, like L_UnsupportedFootnoteRef or L_UnsupportedSDT
    /// </field>
    /// <field name="l_ImageLoadingFailed" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is the name of one of many different types of content, like L_UnsupportedFootnoteRef or L_UnsupportedSDT
    /// </field>
    /// <field name="l_ImageUpdating" type="String" static="true">
    /// </field>
    /// <field name="l_ImageDefaultAltText" type="String" static="true">
    /// </field>
    /// <field name="l_Picture" type="String" static="true">
    /// Localized "Picture" that used for the "name" attribute of a picture in OpenXML
    /// </field>
    /// <field name="l_PictureStyleErrorTitle" type="String" static="true">
    /// </field>
    /// <field name="l_PictureStyleError" type="String" static="true">
    /// An error occurred formatting a picture with a picture style.
    /// </field>
    /// <field name="l_ClipartSearchButtonText" type="String" static="true">
    /// </field>
    /// <field name="l_ClipartUploadButtonText" type="String" static="true">
    /// </field>
    /// <field name="l_ClipartUploadDialogTitle" type="String" static="true">
    /// </field>
    /// <field name="l_ClipartDefaultText" type="String" static="true">
    /// </field>
    /// <field name="l_ClipartNoResultsFound" type="String" static="true">
    /// </field>
    /// <field name="l_ClipartSeeSimilarLink" type="String" static="true">
    /// </field>
    /// <field name="l_ClipartRating" type="String" static="true">
    /// </field>
    /// <field name="l_ClipartRatingVotes" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is a number
    /// </field>
    /// <field name="l_ClipartProvidedBy" type="String" static="true">
    /// </field>
    /// <field name="l_ClipartKeywords" type="String" static="true">
    /// </field>
    /// <field name="l_ClipartDimensionsDisplay" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}Placeholders 0 and 1 are number, the pixel dimensions of an image
    /// </field>
    /// <field name="l_ClipartFileSizeDisplay" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is a number.  kb is the abbreviation for kilobytes
    /// </field>
    /// <field name="l_ClipartResolutionDisplay" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is a number.  dpi is the abbreviation for Dots Per Inch, referring to the resolution of an image
    /// </field>
    /// <field name="l_ClipartSearching" type="String" static="true">
    /// </field>
    /// <field name="l_ClipartProvidedByMicrosoft" type="String" static="true">
    /// </field>
    /// <field name="l_ClipartProvidedByCommunity" type="String" static="true">
    /// </field>
    /// <field name="l_ClipartImageAltNoCaption" type="String" static="true">
    /// </field>
    /// <field name="l_ClipartPreviewAltWithCaption" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is the text caption of an image
    /// </field>
    /// <field name="l_ClipartPreviewAltNoCaption" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is a comma separated list of keywords describing the clipart
    /// </field>
    /// <field name="l_ClipartCannotConnect" type="String" static="true">
    /// {Placeholder="{webappshort}"}
    /// </field>
    /// <field name="l_ClipartCannotDownload" type="String" static="true">
    /// {Placeholder="{webappshort}"}
    /// </field>
    /// <field name="L_LineSpacingOptions" type="String" static="true">
    /// Option text in the line spacing flyout.
    /// </field>
    /// <field name="L_ParagraphSpacingOptions" type="String" static="true">
    /// Option text in the line spacing flyout.
    /// </field>
    /// <field name="L_ParagraphSpacing" type="String" static="true">
    /// The line spacing flyout label.
    /// </field>
    /// <field name="l_ParagraphDialogTitle" type="String" static="true">
    /// Paragraph Dialog: Dialog title
    /// </field>
    /// <field name="l_ParagraphDialogGeneral" type="String" static="true">
    /// Paragraph Dialog: Group title of the "General" section.
    /// </field>
    /// <field name="l_ParagraphDialogAlignment" type="String" static="true">
    /// Paragraph Dialog: Label for the alignment drop down box.
    /// </field>
    /// <field name="l_ParagraphDialogAlignmentAlt" type="String" static="true">
    /// Paragraph Dialog: Alt text for the alignment drop down box.
    /// </field>
    /// <field name="l_ParagraphDialogAlignLeft" type="String" static="true">
    /// Paragraph Dialog: "Left" option in the Alignment drop down box.
    /// </field>
    /// <field name="l_ParagraphDialogAlignCenter" type="String" static="true">
    /// Paragraph Dialog: "Center" option in the Alignment drop down box.
    /// </field>
    /// <field name="l_ParagraphDialogAlignRight" type="String" static="true">
    /// Paragraph Dialog: "Right" in the Alignment drop down box.
    /// </field>
    /// <field name="l_ParagraphDialogAlignJustified" type="String" static="true">
    /// Paragraph Dialog: "Justified" option in the Alignment drop down box.
    /// Makes text align on both the left and right margins by adjusting spaces between words.
    /// </field>
    /// <field name="l_ParagraphDialogAlignKashida" type="String" static="true">
    /// Paragraph Dialog: "Kashida" option in the Alignment drop down box.
    /// Makes text align on both the left and right margins by adjusting Kashida length in appropriate languages such as Arabic.
    /// </field>
    /// <field name="l_ParagraphDialogAlignDistributed" type="String" static="true">
    /// Paragraph Dialog: "Distributed" option in the Alignment drop down box.
    /// Makes text align on both the left and right margins by adjusting spaces between characters. Useful for languages like Chinese.
    /// </field>
    /// <field name="l_ParagraphDialogAlignThaiDistributed" type="String" static="true">
    /// Paragraph Dialog: "Thai Distributed" option in the Alignment drop down box.
    /// Makes text align on both the left and right margins by adjusting spaces between characters, optimized for Thai.
    /// </field>
    /// <field name="l_ParagraphDialogIndentation" type="String" static="true">
    /// Paragraph Dialog: Group title of the "Indentation" section.
    /// </field>
    /// <field name="l_ParagraphDialogIndentLeft" type="String" static="true">
    /// Paragraph Dialog: Label for the indent left spinner.
    /// </field>
    /// <field name="l_ParagraphDialogIndentLeftAlt" type="String" static="true">
    /// Paragraph Dialog: Alt text for the indent left spinner.
    /// </field>
    /// <field name="l_ParagraphDialogIndentRight" type="String" static="true">
    /// Paragraph Dialog: Label for the indent right spinner.
    /// </field>
    /// <field name="l_ParagraphDialogIndentRightAlt" type="String" static="true">
    /// Paragraph Dialog: Alt text for the indent right spinner.
    /// </field>
    /// <field name="l_ParagraphDialogSpecialIndentation" type="String" static="true">
    /// Paragraph Dialog: Label for the Special Indentation drop down box.
    /// </field>
    /// <field name="l_ParagraphDialogSpecialIndentationAlt" type="String" static="true">
    /// Paragraph Dialog: Alt text for the Special Indentation drop down box.
    /// </field>
    /// <field name="l_ParagraphDialogNoneIndent" type="String" static="true">
    /// Paragraph Dialog: "(none)" option in the Special Indentation drop down box.
    /// </field>
    /// <field name="l_ParagraphDialogFirstLineIndent" type="String" static="true">
    /// Paragraph Dialog: "First line" option in the Special Indentation drop down box.
    /// </field>
    /// <field name="l_ParagraphDialogHangingIndent" type="String" static="true">
    /// Paragraph Dialog: "Hanging" option in the Special Indentation drop down box.
    /// </field>
    /// <field name="l_ParagraphDialogSpecialIndentationBy" type="String" static="true">
    /// Paragraph Dialog: Label for the custom-special-indent-value spinner.
    /// </field>
    /// <field name="l_ParagraphDialogSpecialIndentationByAlt" type="String" static="true">
    /// Paragraph Dialog: Alt text for the custom-special-indent-value spinner.
    /// </field>
    /// <field name="l_ParagraphDialogSpacing" type="String" static="true">
    /// Paragraph Dialog: Group title of the "Spacing" section.
    /// </field>
    /// <field name="l_ParagraphDialogSpacingBefore" type="String" static="true">
    /// Paragraph Dialog: Label for the "spacing before" spinner.
    /// </field>
    /// <field name="l_ParagraphDialogSpacingBeforeAlt" type="String" static="true">
    /// Paragraph Dialog: Alt text for the "spacing before" spinner.
    /// </field>
    /// <field name="l_ParagraphDialogSpacingAfter" type="String" static="true">
    /// Paragraph Dialog: Label for the "spacing after" spinner.
    /// </field>
    /// <field name="l_ParagraphDialogSpacingAfterAlt" type="String" static="true">
    /// Paragraph Dialog: Alt text for the "spacing after" spinner.
    /// </field>
    /// <field name="l_ParagraphDialogLineSpacing" type="String" static="true">
    /// Paragraph Dialog: Label above the Line spacing dropdown.
    /// </field>
    /// <field name="l_ParagraphDialogLineSpacingAlt" type="String" static="true">
    /// Paragraph Dialog: Alt text for the the Line spacing dropdown.
    /// </field>
    /// <field name="l_ParagraphDialogLineSpacingSingle" type="String" static="true">
    /// Paragraph Dialog: Option in the line spacing dropdown.
    /// </field>
    /// <field name="l_ParagraphDialogLineSpacingOneAndHalf" type="String" static="true">
    /// Paragraph Dialog: Option in the line spacing dropdown.
    /// </field>
    /// <field name="l_ParagraphDialogLineSpacingDouble" type="String" static="true">
    /// Paragraph Dialog: Option in the line spacing dropdown.
    /// </field>
    /// <field name="l_ParagraphDialogLineSpacingMultiple" type="String" static="true">
    /// Paragraph Dialog: Option in the line spacing dropdown.
    /// </field>
    /// <field name="l_ParagraphDialogLineSpacingAt" type="String" static="true">
    /// Paragraph Dialog: Label above the custom-line-spacing-value spinner.
    /// </field>
    /// <field name="l_ParagraphDialogLineSpacingAtAlt" type="String" static="true">
    /// Paragraph Dialog: Alt text for the custom-line-spacing-value spinner.
    /// </field>
    /// <field name="l_ParaIndentSetFailedMessage" type="String" static="true">
    /// </field>
    /// <field name="l_PastedImageLoading" type="String" static="true">
    /// </field>
    /// <field name="l_MaxPicturesExceededMessage" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is a number, probably a large one
    /// </field>
    /// <field name="l_MaxPicturesExceededTitle" type="String" static="true">
    /// </field>
    /// <field name="l_PastedImageFailed" type="String" static="true">
    /// </field>
    /// <field name="l_PastedImageFailedWithInvalidUrl" type="String" static="true">
    /// </field>
    /// <field name="l_WaitingForPastedImages" type="String" static="true">
    /// </field>
    /// <field name="l_WaitingForSinglePastedImage" type="String" static="true">
    /// </field>
    /// <field name="l_SignInToPasteImages" type="String" static="true">
    /// </field>
    /// <field name="l_ErrorSavingOnExit" type="String" static="true">
    /// </field>
    /// <field name="l_NavigateAway" type="String" static="true">
    /// </field>
    /// <field name="L_MathSelectionBox" type="String" static="true">
    /// Used as explanation for math recognizer correction scenario
    /// </field>
    /// <field name="l_InsertLinkButtonText" type="String" static="true">
    /// </field>
    /// <field name="l_InsertLinkTitle" type="String" static="true">
    /// </field>
    /// <field name="l_InsertLinkAddress" type="String" static="true">
    /// </field>
    /// <field name="l_InsertLinkDisplayText" type="String" static="true">
    /// </field>
    /// <field name="l_InsertOneDriveFile" type="String" static="true">
    /// </field>
    /// <field name="l_LinkToolTipWindows" type="String" static="true">
    /// {Placeholder="{0}"}In edit mode we show the below tooltip to links. Placeholder 0 is the address of a hyperlink.
    /// </field>
    /// <field name="l_LinkToolTipMac" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is the address of a hyperlink.
    /// </field>
    /// <field name="l_LinkToolTipNoCtrl" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is the address of a hyperlink.
    /// </field>
    /// <field name="l_LinkOpenError" type="String" static="true">
    /// When we cannot open an internal link we show this message. {Placeholder="{webappshort}"}
    /// </field>
    /// <field name="l_OpenCrossSectionLinkError" type="String" static="true">
    /// When we cannot open an internal link in another section or section group because we are not in NotebookMode, we show this error message
    /// </field>
    /// <field name="l_DeadWordLink" type="String" static="true">
    /// </field>
    /// <field name="l_BookmarkCurrentDocumentLink" type="String" static="true">
    /// When we cannot open an internal link in another section or section group because we are not in NotebookMode, we show this error message
    /// </field>
    /// <field name="l_GetPageUrlOptionText" type="String" static="true">
    /// </field>
    /// <field name="l_GetPageUrlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_GetPageUrlTextPrompt" type="String" static="true">
    /// </field>
    /// <field name="l_GetPageUrlCloseButton" type="String" static="true">
    /// </field>
    /// <field name="l_Language" type="String" static="true">
    /// </field>
    /// <field name="l_MarkSelectedText" type="String" static="true">
    /// </field>
    /// <field name="l_SpellingWillUseLanguage" type="String" static="true">
    /// </field>
    /// <field name="l_DoNotCheckSpelling" type="String" static="true">
    /// </field>
    /// <field name="L_LanguageButtonTooltip" type="String" static="true">
    /// Tooltip string for language button on Status Bar. Requires PreserveCase.
    /// </field>
    /// <field name="l_ProofingCompleteNoErrors" type="String" static="true">
    /// </field>
    /// <field name="l_ProofingCompleteNoErrorsWithIgnoredRanges" type="String" static="true">
    /// Text "Don't check spelling" must match L_DoNotCheckSpelling
    /// </field>
    /// <field name="l_ProofingInProgress" type="String" static="true">
    /// </field>
    /// <field name="L_EditorSettingsTellMeProofing" type="String" static="true">
    /// </field>
    /// <field name="L_EditorSettingsTellMeProofreading" type="String" static="true">
    /// </field>
    /// <field name="L_EditorSettingsTellMeGrammar" type="String" static="true">
    /// </field>
    /// <field name="L_EditorSettingsTellMeSpelling" type="String" static="true">
    /// </field>
    /// <field name="L_EditorSettingsTellMeSpellingSettings" type="String" static="true">
    /// </field>
    /// <field name="L_EditorSettingsTellMeSpellingAndGrammar" type="String" static="true">
    /// </field>
    /// <field name="L_EditorSettingsTellMeWriting" type="String" static="true">
    /// </field>
    /// <field name="L_EditorSettingsTellMeWritingStyles" type="String" static="true">
    /// </field>
    /// <field name="l_CaptureImageButton" type="String" static="true">
    /// Used as Button text for the Capture option in the dialog for image capturing.
    /// </field>
    /// <field name="l_CameraSwitchButton" type="String" static="true">
    /// Used as Button text for the Camera Switch option in the dialog for image capturing.
    /// </field>
    /// <field name="l_RetakeImageButton" type="String" static="true">
    /// Used as Button text for the Retake option in the dialog for image capturing.
    /// </field>
    /// <field name="l_RetakeImageButtonTooltip" type="String" static="true">
    /// Used as Tooltip for the Retake option in the dialog for image capturing.
    /// </field>
    /// <field name="l_CameraDeniedPermissionsTitle" type="String" static="true">
    /// Used as error dialog title when camera permission is denied.
    /// </field>
    /// <field name="l_CameraDeniedPermissions" type="String" static="true">
    /// Used as error message in dialog when camera permission is denied.
    /// </field>
    /// <field name="l_CameraDeviceNotFoundTitle" type="String" static="true">
    /// Used as error dialog title when camera is not found.
    /// </field>
    /// <field name="l_CameraDeviceNotFound" type="String" static="true">
    /// Used as error message in dialog when camera is not found.
    /// </field>
    /// <field name="l_CameraAlreadyInUseTitle" type="String" static="true">
    /// Used as error dialog title when camera permission is denied.
    /// </field>
    /// <field name="l_CameraAlreadyInUse" type="String" static="true">
    /// Used as error message in dialog when camera permission is denied.
    /// </field>
    /// <field name="l_CameraUnknownErrorTitle" type="String" static="true">
    /// Used as error dialog title when unknown error is encountered while opening camera.
    /// </field>
    /// <field name="l_CameraUnknownError" type="String" static="true">
    /// Used as error message in dialog when unknown error is encountered while opening camera.
    /// </field>
    /// <field name="l_CameraUnsupportedBrowserTitle" type="String" static="true">
    /// Used as error dialog title when camera option to insert picture is selected on an unsupported browser.
    /// </field>
    /// <field name="l_CameraUnsupportedBrowser" type="String" static="true">
    /// Used as error dialog message when camera option to insert picture is selected on an unsupported browser.
    /// </field>
    /// <field name="l_AutoCorrectOptions" type="String" static="true">
    /// This is the autocorrect options setting dialog title
    /// </field>
    /// <field name="l_AutoCorrectFormat" type="String" static="true">
    /// This is the autoformat group title
    /// </field>
    /// <field name="l_AutoCorrectCorrectAndCapitalize" type="String" static="true">
    /// </field>
    /// <field name="l_ReplaceTextAsYouTypeTooltip" type="String" static="true">
    /// </field>
    /// <field name="l_ReplaceTextAsYouType" type="String" static="true">
    /// </field>
    /// <field name="l_CapitalizeFirstLetterOfSentences" type="String" static="true">
    /// </field>
    /// <field name="l_ReplaceOrdianalsWithSuperscript" type="String" static="true">
    /// </field>
    /// <field name="l_ReplaceHyphensWithDash" type="String" static="true">
    /// </field>
    /// <field name="l_ReplaceFractionsWithFractionCharacter" type="String" static="true">
    /// </field>
    /// <field name="l_ReplaceQuoteWithSmartQuote" type="String" static="true">
    /// </field>
    /// <field name="L_AutoCorrectOptionsMenu" type="String" static="true">
    /// This is the autocorrect options button title under review tab
    /// </field>
    /// <field name="l_BusinessBarMergeConflictPresent" type="String" static="true">
    /// Shown when the current page has conflicts
    /// </field>
    /// <field name="l_BusinessBarMergeConflictPresentAndVisible" type="String" static="true">
    /// Shown when the current page has conflicts and they are currently visible in the page tab UI
    /// </field>
    /// <field name="l_BusinessBarConflictPageInfo" type="String" static="true">
    /// Provides instructions on how to resolve conflicts
    /// </field>
    /// <field name="l_BusinessBarConflictPageInfoNoCopy" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarContainsMalformedHyperlinkUris" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarVersionInfo" type="String" static="true">
    /// Shown when the current page is a page version
    /// </field>
    /// <field name="l_BusinessBarVersionInfoNoCopy" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarReadonlyOldContent" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarReadonlyFutureContent" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarReadonlyCorruptContent" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarReadonlyPageLocked" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarSigned" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBardReadOnlyDocument" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarMarkedAsFinal" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarCompatTitle" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarCompatMessage" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarQuotaExceeded" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarFileSizeExceeded" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarFileSizeExceededNoCopy" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarMinorVersionLimitExceeded" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarVirus" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarVirusNoCopy" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarWriteAccessDenied" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarReadOnlyRecommended" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarReadOnlyRecommendedNewDesign" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarReadOnlyRecommendedTitle" type="String" static="true">
    /// </field>
    /// <field name="l_BusinessBarReadOnlyTitle" type="String" static="true">
    /// </field>
    /// <field name="l_ReadOnlyRecommendedEditAnyWay" type="String" static="true">
    /// </field>
    /// <field name="l_ReadOnlyRecommendedEditAnywayButtonAccessibilityText" type="String" static="true">
    /// The text used to describe the button name "Edit anyway" is exactly same as the text specified by L_ReadOnlyRecommendedEditAnyWay. This is a constraint for all Localized strings
    /// </field>
    /// <field name="l_BusinessBarODTDocumentTitle" type="String" static="true">
    /// Notification to the user that there are compatibility issues when the user edits an ODF document.
    /// </field>
    /// <field name="l_BusinessBarODTDocument" type="String" static="true">
    /// Notification shown when the user edits an ODT document.
    /// </field>
    /// <field name="l_BusinessBarODTDocumentDetailsLink" type="String" static="true">
    /// Text of a hyperlink used with L_BusinessBarODTDocument to get details about the error message.
    /// </field>
    /// <field name="l_SectionLockedInfoText" type="String" static="true">
    /// </field>
    /// <field name="l_CanvasSizeExceededTitle" type="String" static="true">
    /// Text of the title used when displaying a businessbar notification about canvas size exceeding limits
    /// </field>
    /// <field name="l_CanvasSizeExceededMessage" type="String" static="true">
    /// Text of the message used when displaying a businessbar notification about canvas size exceeding limits
    /// </field>
    /// <field name="l_ApplyStylesCommand" type="String" static="true">
    /// </field>
    /// <field name="l_CreateNewStyleCommand" type="String" static="true">
    /// Text shown on create new style button in the ribbon's style gallery dropdown menu - used to create a new style from user selected text
    /// </field>
    /// <field name="l_BusinessBarUnsupportedObjectsOnPage" type="String" static="true">
    /// {Placeholder="{richclientfull}", "{webappshort}"}
    /// </field>
    /// <field name="l_NotificationBarProofingUnavailave" type="String" static="true">
    /// </field>
    /// <field name="l_NotificationBarCtrlF6Loop" type="String" static="true">
    /// {Placeholder="{webappshort}"}
    /// </field>
    /// <field name="l_EmptyNotebookFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_EmptyNotebookFishbowlText_EditMode" type="String" static="true">
    /// </field>
    /// <field name="l_EmptyNotebookFishbowlText_ReadingMode" type="String" static="true">
    /// </field>
    /// <field name="l_EmptySectionGroupFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_EmptySectionFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_EmptySectionFishbowlText_EditMode" type="String" static="true">
    /// </field>
    /// <field name="l_EmptySectionFishbowlText_ReadingMode" type="String" static="true">
    /// </field>
    /// <field name="l_NoSectionGroupSelectedFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_NoSectionGroupSelectedFishbowlText_EditMode" type="String" static="true">
    /// </field>
    /// <field name="l_NoSectionGroupSelectedFishbowlText_ReadingMode" type="String" static="true">
    /// </field>
    /// <field name="l_OldSectionFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_OldSectionFishbowlText" type="String" static="true">
    /// </field>
    /// <field name="l_FutureSectionFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_FutureSectionFishbowlText" type="String" static="true">
    /// </field>
    /// <field name="l_FuturePageFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_FuturePageFishbowlText" type="String" static="true">
    /// </field>
    /// <field name="l_CorruptSectionFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_CorruptSectionFishbowlText" type="String" static="true">
    /// {Placeholder="{webappshort}", "{richclientfull}"}
    /// </field>
    /// <field name="l_CorruptPageFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_CorruptPageFishbowlText" type="String" static="true">
    /// {Placeholder="{webappshort}", "{richclientfull}"}
    /// </field>
    /// <field name="l_PasswordProtectedSectionFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_PasswordProtectedSectionFishbowlUnlockText" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedPasswordProtectedSectionFishbowlText" type="String" static="true">
    /// </field>
    /// <field name="l_PermissionDeniedSectionFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_PermissionDeniedSectionFishbowlText" type="String" static="true">
    /// </field>
    /// <field name="l_PermissionDeniedFolderFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_PermissionDeniedFolderFishbowlText" type="String" static="true">
    /// </field>
    /// <field name="l_PageContentUnavailableFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_PageContentUnavailableFishbowlText" type="String" static="true">
    /// </field>
    /// <field name="l_GenericErrorFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_GenericErrorFishbowlText" type="String" static="true">
    /// </field>
    /// <field name="l_ResponseTooLargeFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_ResponseTooLargeFishbowlText" type="String" static="true">
    /// {Placeholder="{webappshort}", "{richclientfull}"}
    /// </field>
    /// <field name="l_PageIsBeingDeletedFishbowlTitle" type="String" static="true">
    /// </field>
    /// <field name="l_PageIsBeingDeletedFishbowlText" type="String" static="true">
    /// </field>
    /// <field name="l_OneNoteSectionUpgradeNotSupportedFishbowlTitle" type="String" static="true">
    /// Fishbowl OneNoteSectionUpgradeNotSupport error title when file format is not supported.
    /// </field>
    /// <field name="l_OneNoteSectionUpgradeNotSupportedFishbowlText" type="String" static="true">
    /// Fishbowl OneNoteSectionUpgradeNotSupport error text when file format is not supported.
    /// </field>
    /// <field name="l_PasswordProtectedSectionLockButton" type="String" static="true">
    /// </field>
    /// <field name="l_PasswordProtectedSectionNoLockButton" type="String" static="true">
    /// </field>
    /// <field name="l_PasswordProtectedSectionLockWarningMessage" type="String" static="true">
    /// </field>
    /// <field name="l_DeletePageConflictDialogText" type="String" static="true">
    /// {Placeholder="{0}"}Dialog shown when we've failed to save a page delete because another user has made changes to the same page.  Placeholder 0: Page title
    /// </field>
    /// <field name="l_DeletePageUnknownErrorDialogText" type="String" static="true">
    /// {Placeholder="{0}", "{richclientfull}"}Dialog shown when we've failed to save a page delete for an unknown reason.  Placeholder 0: Page title
    /// </field>
    /// <field name="l_EditingSurfaceScreenReaderTitleMessage" type="String" static="true">
    /// Lets accessibility users know that they've navigated to the editing surface and that
    /// they need to use Ctrl+F6 to leave it.
    /// </field>
    /// <field name="l_ReviewingSurfaceScreenReaderTitleMessage" type="String" static="true">
    /// Lets accessibility users know that they've navigated to the review surface and that
    /// they need to use Ctrl+F6 to leave it.
    /// </field>
    /// <field name="l_ReadingSurfaceScreenReaderTitleMessage" type="String" static="true">
    /// Lets accessibility users know that they've navigated to the reading surface and that
    /// they need to use Ctrl+F6 to leave it.  This is the same as the editing area, but for
    /// read-only customers.
    /// </field>
    /// <field name="l_EditingSurfaceScreenReaderDescribedByMessage" type="String" static="true">
    /// Lets accessibility users know that they've navigated to the editing surface and that
    /// they need to use Ctrl+F6 to leave it.
    /// </field>
    /// <field name="l_EditingSurfaceF2ScreenReaderDescribedByMessage" type="String" static="true">
    /// Lets accessibility users know that they've navigated to the editing surface and that
    /// they need to use F2 to leave it. Used in PowerPoint
    /// </field>
    /// <field name="l_ScreenReaderBlockEditing" type="String" static="true">
    /// {Placeholder="{0}"}Read by screen reader when the user tries to edit in a locked region.  Placeholder 0: Name of the user who has this section locked.
    /// </field>
    /// <field name="l_DeletePage" type="String" static="true">
    /// Displayed on the conflict page actions (accessible via the business bar).
    /// </field>
    /// <field name="l_HideConflictPages" type="String" static="true">
    /// Displayed on the conflict page actions (accessible via the business bar).
    /// </field>
    /// <field name="l_ConflictPageTitleFormat" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}Used to format the conflict page author and creation date into a title string for the nav pane display. Placeholder 0 is a date in the user's languge format.  Placeholder 1 is the user's name.
    /// </field>
    /// <field name="l_HideVersions" type="String" static="true">
    /// Displayed on the page version actions (accessible via the business bar).
    /// </field>
    /// <field name="l_RestoreVersion" type="String" static="true">
    /// Displayed on the page version actions (accessible via the business bar).
    /// </field>
    /// <field name="l_PageVersionTitleFormat" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}Used to format the version creation date and author into a title string for page versions.Placeholder 0 is a date in the user's languge format.  Placeholder 1 is the user's name.
    /// </field>
    /// <field name="l_UnknownAuthorInformation" type="String" static="true">
    /// Displayed as the author name when no author info has been set in the document and author info is displayed.
    /// </field>
    /// <field name="l_AuthorInfoScreenReaderText" type="String" static="true">
    /// {Placeholder="{0}"}Gives context to author info display for screen readers.  Placeholder 0 is a user's name
    /// </field>
    /// <field name="l_ConflictingPassageScreenReaderText" type="String" static="true">
    /// Description of conflicts for screen readers
    /// </field>
    /// <field name="l_ShapeObjectScreenReaderText" type="String" static="true">
    /// Word-specific screen reader text for Shape object."
    /// </field>
    /// <field name="l_TextboxObjectScreenReaderText" type="String" static="true">
    /// Word-specific screen reader text for TextBox object."
    /// </field>
    /// <field name="l_WordArtObjectScreenReaderText" type="String" static="true">
    /// Word-specific screen reader text for WordArt object."
    /// </field>
    /// <field name="l_InkObjectScreenReaderText" type="String" static="true">
    /// Word-specific screen reader text for Ink object."
    /// </field>
    /// <field name="l_ShapeObjectWithAltTextScreenReaderText" type="String" static="true">
    /// {Placeholder="{0}Word-specific screen reader text for Shape object. Placeholder 0 is for alt-text if present in object or empty string otherwise."
    /// </field>
    /// <field name="l_TextboxObjectWithAltTextScreenReaderText" type="String" static="true">
    /// {Placeholder="{0}Word-specific screen reader text for TextBox object. Placeholder 0 is for alt-text if present in object or empty string otherwise."
    /// </field>
    /// <field name="l_WordArtObjectWithAltTextScreenReaderText" type="String" static="true">
    /// {Placeholder="{0}Word-specific screen reader text for WordArt object. Placeholder 0 is for alt-text if present in object or empty string otherwise."
    /// </field>
    /// <field name="l_UnsupportedInkDisplayText" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedAudioDisplayText" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedEmbeddedFileDisplayText" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedMathDisplayText" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedUnkownDisplayText" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedLineBreak" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedPicture" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedSmartArt" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedChart" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedOle" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedActiveX" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedDrawing" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedGroupDrawing" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedTextbox" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedSDT" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedField" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedFieldBegin" type="String" static="true">
    /// {Locked=!@RTLLangs@} {ValidStrings=@RTLLangs@; ']'}
    /// </field>
    /// <field name="l_UnsupportedFieldSeparator" type="String" static="true">
    /// {Locked}
    /// </field>
    /// <field name="l_UnsupportedFieldEnd" type="String" static="true">
    /// {Locked=!@RTLLangs@} {ValidStrings=@RTLLangs@; '['}
    /// </field>
    /// <field name="l_UnsupportedColumnBreak" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedPageBreak" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedTextWrappingBreak" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedSoftBreak" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedSectionBreak" type="String" static="true">
    /// </field>
    /// <field name="l_SectionBreak" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedSymbol" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedEndnoteRef" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedFootnoteRef" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedRuby" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedServerDeletedContent" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedClientDeletedContent" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedTooltip" type="String" static="true">
    /// {Placeholder="{richclientfull}", "{webappshort}"}
    /// </field>
    /// <field name="l_UnsupportedNodeCutWarning" type="String" static="true">
    /// {Placeholder="{webappshort}"}
    /// </field>
    /// <field name="l_UnsupportedNodeCutWarningNoCopy" type="String" static="true">
    /// </field>
    /// <field name="l_WebEditingDisabled" type="String" static="true">
    /// {Placeholder="{webappshort}"}
    /// </field>
    /// <field name="l_OldSectionText" type="String" static="true">
    /// </field>
    /// <field name="l_GhostCellTooltip" type="String" static="true">
    /// {Placeholder="{webappshort}"}
    /// </field>
    /// <field name="l_EmptyEquationText" type="String" static="true">
    /// </field>
    /// <field name="l_LoadingEquationText" type="String" static="true">
    /// </field>
    /// <field name="l_EnterSectionName" type="String" static="true">
    /// </field>
    /// <field name="l_BlankSectionNameAlert" type="String" static="true">
    /// </field>
    /// <field name="l_SectionNameTooLongAlert" type="String" static="true">
    /// </field>
    /// <field name="l_SectionNameInUseAlert" type="String" static="true">
    /// </field>
    /// <field name="l_SectionNameInvalidCharactersAlert" type="String" static="true">
    /// </field>
    /// <field name="l_ConsecutivePeriodsAlert" type="String" static="true">
    /// </field>
    /// <field name="l_LeadingPeriodAlert" type="String" static="true">
    /// </field>
    /// <field name="l_TrailingPeriodAlert" type="String" static="true">
    /// </field>
    /// <field name="l_InvalidFileNameAlert" type="String" static="true">
    /// </field>
    /// <field name="l_NameSectionTitle" type="String" static="true">
    /// </field>
    /// <field name="l_RenameSectionTitle" type="String" static="true">
    /// </field>
    /// <field name="l_Rename" type="String" static="true">
    /// </field>
    /// <field name="l_DeleteSection" type="String" static="true">
    /// </field>
    /// <field name="l_SectionColor" type="String" static="true">
    /// </field>
    /// <field name="l_LockSection" type="String" static="true">
    /// </field>
    /// <field name="l_DeleteSectionConfirmation" type="String" static="true">
    /// </field>
    /// <field name="l_DeletePageConfirmation" type="String" static="true">
    /// </field>
    /// <field name="l_DeletePageWithConflictsConfirmation" type="String" static="true">
    /// </field>
    /// <field name="l_MovePageToNewSectionConfirmation" type="String" static="true">
    /// </field>
    /// <field name="l_DownloadEmbeddedFileTitle" type="String" static="true">
    /// </field>
    /// <field name="l_DownloadEmbeddedFileMessage" type="String" static="true">
    /// </field>
    /// <field name="l_DownloadEmbeddedFileYesButton" type="String" static="true">
    /// </field>
    /// <field name="l_DownloadEmbeddedFileNoButton" type="String" static="true">
    /// </field>
    /// <field name="l_CoAuthPlaceholderNeedRefresh" type="String" static="true">
    /// </field>
    /// <field name="l_CoAuthLockedParagraphContext" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is a user's name.
    /// </field>
    /// <field name="l_CoAuthLockedTableContext" type="String" static="true">
    /// {Placeholder="{0}"}Placeholder 0 is a user's name.
    /// </field>
    /// <field name="l_EditorsToastEnteredPage" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when a new coauthor enters the page. Placeholder 0 is a user's name.
    /// </field>
    /// <field name="l_EditorsToastExitedPage" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when a coauthor leaves the page. Placeholder 0 is a user's name.
    /// </field>
    /// <field name="l_EditorsToastArriving" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when a new coauthor (with edit permissions) enters the session. Placeholder 0 is a user's name.
    /// </field>
    /// <field name="l_EditorsToastLeaving" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when a coauthor (with edit permissions) leaves the session. Placeholder 0 is a user's name.
    /// </field>
    /// <field name="l_ViewersToastArriving" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when a new coauthor (without edit permissions) enters the session. Placeholder 0 is a user's name.
    /// </field>
    /// <field name="l_ViewersToastLeaving" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when a coauthor (without edit permissions) leaves the session. Placeholder 0 is a user's name.
    /// </field>
    /// <field name="l_EditorsToastGeneralOpen" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when multiple new coauthors enter the editing session; only on open. Placeholder 0 is number greater than one.
    /// </field>
    /// <field name="l_EditorsToastMultiEnter" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when multiple coauthors arrive but no one has left. Placeholder 0 is number greater than one.
    /// </field>
    /// <field name="l_EditorsToastMultiEnterPage" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when multiple coauthors arrive in the page but no one has left. Placeholder 0 is number greater than one.
    /// </field>
    /// <field name="l_EditorsToastMultiLeave" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when multiple coauthors left but no one has arrived. Placeholder 0 is number greater than one.
    /// </field>
    /// <field name="l_EditorsToastMultiLeavePage" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when multiple coauthors leave the page but no one has arrived. Placeholder 0 is number greater than one.
    /// </field>
    /// <field name="l_EditorsToastOneEnterAndMultiLeave" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when multiple coauthors leave and one coauthor arrives. Placeholder 0 is number greater than one. The translation for "persons" can be substituted for "people" if necessary.
    /// </field>
    /// <field name="l_EditorsToastOneEnterAndMultiLeavePage" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when multiple coauthors leave the page and one coauthor arrives on page. Placeholder 0 is number greater than one. The translation for "persons" can be substituted for "people" if necessary.
    /// </field>
    /// <field name="l_EditorsToastMultiEnterAndOneLeave" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when one coauthor leaves and multiple coauthors arrive. Placeholder 0 is number greater than one. The translation for "persons" can be substituted for "people" if necessary.
    /// </field>
    /// <field name="l_EditorsToastMultiEnterAndOneLeavePage" type="String" static="true">
    /// {Placeholder="{0}"}Message shown when one coauthor leaves the page and multiple coauthors arrive on page. Placeholder 0 is number greater than one. The translation for "persons" can be substituted for "people" if necessary.
    /// </field>
    /// <field name="l_EditorsToastMultiEnterAndLeave" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}Message shown when multiple coauthors left and multiple coauthrs have arrived. Placeholders 0 and 1 are numbers.
    /// </field>
    /// <field name="l_EditorsToastMultiEnterAndLeavePage" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}Message shown when multiple coauthors leave the page and multiple coauthors have arrived on page. Placeholders 0 and 1 are numbers
    /// </field>
    /// <field name="l_Refresh" type="String" static="true">
    /// When we fail to save (background or explicit) this is the BusinessBar's button's text
    /// </field>
    /// <field name="l_ExtendSession" type="String" static="true">
    /// When the secure access token required to talk to the host expires, this is the BusinessBar's button's text.
    /// </field>
    /// <field name="l_Reconnect" type="String" static="true">
    /// When we fail to save (background or explicit) without unsaved changes this is the BusinessBar's button's text
    /// </field>
    /// <field name="l_Reload" type="String" static="true">
    /// When we fail to save (background or explicit) and there are unsaved changes this is the BusinessBar's button's text
    /// </field>
    /// <field name="L_SessionExtensionMessageTitle" type="String" static="true">
    /// The title (bold part) of the business bar after your session expires.
    /// </field>
    /// <field name="L_SessionExtensionMessageDescription" type="String" static="true">
    /// The description (non-bold part) of the business bar after your session expires.
    /// </field>
    /// <field name="L_SessionExpiredMessageTitle" type="String" static="true">
    /// The title (bold part) of the business bar after your session expires.
    /// </field>
    /// <field name="L_SessionExpiredMessageDescription" type="String" static="true">
    /// The description (non-bold part) of the business bar after your session expires.
    /// </field>
    /// <field name="l_SearchHiddenLabel" type="String" static="true">
    /// </field>
    /// <field name="l_SearchScopeDefault" type="String" static="true">
    /// Replace "(Ctrl+E)" with shortcut devised from L_HK_Search
    /// </field>
    /// <field name="l_SearchScopeIpad" type="String" static="true">
    /// </field>
    /// <field name="l_SearchScopeMac" type="String" static="true">
    /// Replace "(Cmd+E)" with shortcut devised from L_HK_Search
    /// </field>
    /// <field name="l_FindScopeDefault" type="String" static="true">
    /// Replace "(Ctrl+F)" with shortcut devised from L_HK_Find
    /// </field>
    /// <field name="l_FindScopeIpad" type="String" static="true">
    /// </field>
    /// <field name="l_FindScopeMac" type="String" static="true">
    /// Replace "(Cmd+F)" with shortcut devised from L_HK_Find
    /// </field>
    /// <field name="l_PreviousButtonAltText" type="String" static="true">
    /// </field>
    /// <field name="l_NextButtonAltText" type="String" static="true">
    /// </field>
    /// <field name="l_Searching" type="String" static="true">
    /// </field>
    /// <field name="l_SearchTooltip" type="String" static="true">
    /// </field>
    /// <field name="l_SearchCancelTooltip" type="String" static="true">
    /// </field>
    /// <field name="l_NoMatchesFind" type="String" static="true">
    /// </field>
    /// <field name="l_MatchesTextFind" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}Placeholders 0 and 1 are numbers.
    /// </field>
    /// <field name="l_NoMatchesSearchingOther" type="String" static="true">
    /// </field>
    /// <field name="l_MatchesTextSearchingOther" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}Placeholders 0 and 1 are numbers.
    /// </field>
    /// <field name="l_NoMatchesSearch" type="String" static="true">
    /// </field>
    /// <field name="l_MatchesOtherPage" type="String" static="true">
    /// </field>
    /// <field name="l_MatchesMultiPages" type="String" static="true">
    /// </field>
    /// <field name="l_MatchesTextSearch" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}Placeholders 0 and 1 are numbers.
    /// </field>
    /// <field name="l_MatchesTextWithOtherPage" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}Placeholders 0 and 1 are numbers.
    /// </field>
    /// <field name="l_MatchesTextWithMultiOtherPages" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}Placeholders 0 and 1 are numbers.
    /// </field>
    /// <field name="L_MenuStandardColors" type="String" static="true">
    /// </field>
    /// <field name="L_Automatic" type="String" static="true">
    /// </field>
    /// <field name="L_ClearFormatting" type="String" static="true">
    /// </field>
    /// <field name="L_Copy" type="String" static="true">
    /// </field>
    /// <field name="L_Cut" type="String" static="true">
    /// </field>
    /// <field name="L_DecreaseIndent" type="String" static="true">
    /// </field>
    /// <field name="L_Delete" type="String" static="true">
    /// </field>
    /// <field name="L_EditInWord" type="String" static="true">
    /// </field>
    /// <field name="L_ProtectDocument" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorBlue" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorDarkBlue" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorDarkGreen" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorDarkRed" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorLightBlue" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorLightGreen" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorOrange" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorPurple" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorRed" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorYellow" type="String" static="true">
    /// </field>
    /// <field name="L_FormatPainter" type="String" static="true">
    /// </field>
    /// <field name="L_IncreaseIndent" type="String" static="true">
    /// </field>
    /// <field name="L_OpenInWord" type="String" static="true">
    /// </field>
    /// <field name="L_OpenInReadingView" type="String" static="true">
    /// </field>
    /// <field name="L_Paste" type="String" static="true">
    /// </field>
    /// <field name="L_PasteWithSourceTheme" type="String" static="true">
    /// </field>
    /// <field name="L_PasteWithDestinationTheme" type="String" static="true">
    /// </field>
    /// <field name="L_PasteOptions" type="String" static="true">
    /// Label used by the "Paste Options" menu section title.
    /// </field>
    /// <field name="L_PasteOptionsWithCtrl" type="String" static="true">
    /// </field>
    /// <field name="L_PasteTextOnly" type="String" static="true">
    /// Label and tooltip used by the "Paste Text Only" button in the "Paste Options" gallery.
    /// </field>
    /// <field name="L_PasteWithMergedFormatting" type="String" static="true">
    /// Label and tooltip used by the "Paste with Merged Formatting" button in the "Paste Options" gallery.
    /// </field>
    /// <field name="L_SetLanguageMenu" type="String" static="true">
    /// </field>
    /// <field name="L_ShowVersionsContextMenu" type="String" static="true">
    /// </field>
    /// <field name="L_StyleHeading1" type="String" static="true">
    /// </field>
    /// <field name="L_StyleHeading2" type="String" static="true">
    /// </field>
    /// <field name="L_StyleHeading3" type="String" static="true">
    /// </field>
    /// <field name="L_StyleHeading4" type="String" static="true">
    /// </field>
    /// <field name="L_StyleHeading5" type="String" static="true">
    /// </field>
    /// <field name="L_StyleHeading6" type="String" static="true">
    /// </field>
    /// <field name="L_StyleCitation" type="String" static="true">
    /// </field>
    /// <field name="L_StyleCode" type="String" static="true">
    /// </field>
    /// <field name="L_StyleQuote" type="String" static="true">
    /// </field>
    /// <field name="L_StyleNormal" type="String" static="true">
    /// </field>
    /// <field name="L_StyleTitle" type="String" static="true">
    /// </field>
    /// <field name="L_StyleDateTime" type="String" static="true">
    /// </field>
    /// <field name="L_StylePreviewSampleText" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordDefaultParagraphFont" type="String" static="true">
    /// </field>
    /// <field name="L_NoStyles" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordNormal" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordHeading1" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordHeading2" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordHeading3" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordHeading4" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordHeading5" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordHeading6" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordHeading7" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordHeading8" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordHeading9" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordTitle" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordSubtitle" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordSubtleEmphasis" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordEmphasis" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordIntenseEmphasis" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordStrong" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordQuote" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordIntenseQuote" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordSubtleReference" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordIntenseReference" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordBookTitle" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordListParagraph" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordHyperlink" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordNoSpacing" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordEndnoteReference" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordEndnoteText" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordFooter" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordFootnoteReference" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordFootnoteText" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordHeader" type="String" static="true">
    /// </field>
    /// <field name="L_StyleWordMention" type="String" static="true">
    /// </field>
    /// <field name="L_LearnMore" type="String" static="true">
    /// </field>
    /// <field name="L_SpinnerAuto" type="String" static="true">
    /// "Auto" text in the spinner
    /// </field>
    /// <field name="L_RibbonOptionTextDirection" type="String" static="true">
    /// {Locked=!@RTLLangs@} {ValidStrings=@RTLLangs@; 'rtl'}
    /// </field>
    /// <field name="L_BtnClearShading" type="String" static="true">
    /// Label on the button for Clear shading
    /// </field>
    /// <field name="L_MenuShadingColor" type="String" static="true">
    /// Label on the button for Shading
    /// </field>
    /// <field name="L_GroupShading" type="String" static="true">
    /// Label on the group for Shading
    /// </field>
    /// <field name="L_Activity" type="String" static="true">
    /// Title for the activity feed task pane. This is a compound noun, as in "the Edit Activity", NOT that we're "editing an activity".
    /// </field>
    /// <field name="L_ShowActivity" type="String" static="true">
    /// Label for the ribbon button to show the activity feed task pane.  This is a compound noun, as in "the Edit Activity", NOT that we're "editing an activity".
    /// </field>
    /// <field name="L_ActivityFeed_BootPlaceholder" type="String" static="true">
    /// This will be the text user sees in activity feed task pane when there are 0 activities loaded
    /// </field>
    /// <field name="L_ActivityFeed_Error" type="String" static="true">
    /// This will be the text user sees in activity feed task pane when there is an error loading activitygroups
    /// </field>
    /// <field name="L_ActivityFeedTimeElementFormat" type="String" static="true">
    /// Format for ActivityGroupViewElement timeElement, 0 = ShortDateFormat, 1 = ShortTimeFormat
    /// </field>
    /// <field name="L_ActivityFeedInfo" type="String" static="true">
    /// This will be the text user sees in activity feed task pane when activities are shown
    /// </field>
    /// <field name="L_ActivityNavigationInfo" type="String" static="true">
    /// This will be the text read by the screen reader and not displayed to the user
    /// </field>
    /// <field name="L_ParagraphEdited" type="String" static="true">
    /// {Placeholder="{0}"} Placeholder 0 is replaced by a name.
    /// Example: Kat Holmes made changes.
    /// </field>
    /// <field name="L_CommentAdded" type="String" static="true">
    /// {Placeholder="{0}"} Placeholder 0 is replaced by a name.
    /// Example: Kat Holmes made a comment.
    /// </field>
    /// <field name="L_CommentEdited" type="String" static="true">
    /// {Placeholder="{0}"} Placeholder 0 is replaced by a name.
    /// Example: Kat Holmes edited a comment.
    /// </field>
    /// <field name="L_CommentDeleted" type="String" static="true">
    /// {Placeholder="{0}"} Placeholder 0 is replaced by a name.
    /// Example: Kat Holmes deleted a comment.
    /// </field>
    /// <field name="L_ImageAdded" type="String" static="true">
    /// {Placeholder="{0}"} Placeholder 0 is replaced by a name.
    /// Example: Kat Holmes added a picture.
    /// </field>
    /// <field name="L_ImageDeleted" type="String" static="true">
    /// {Placeholder="{0}"} Placeholder 0 is replaced by a name.
    /// Example: Kat Holmes deleted a picture.
    /// </field>
    /// <field name="L_TableAdded" type="String" static="true">
    /// {Placeholder="{0}"} Placeholder 0 is replaced by a name.
    /// Example: Kat Holmes added a table.
    /// </field>
    /// <field name="L_TableEdited" type="String" static="true">
    /// {Placeholder="{0}"} Placeholder 0 is replaced by a name.
    /// Example: Kat Holmes edited a table.
    /// </field>
    /// <field name="L_TableDeleted" type="String" static="true">
    /// {Placeholder="{0}"} Placeholder 0 is replaced by a name.
    /// Example: Kat Holmes deleted a table.
    /// </field>
    /// <field name="L_ParagraphEditedBy2" type="String" static="true">
    /// {Placeholder="{0}, {1}"} Placeholder 0 and 1 is replaced by a name
    /// Example: Kat Holmes and Frank Johnson made changes.
    /// </field>
    /// <field name="L_TableEditedBy2" type="String" static="true">
    /// {Placeholder="{0}, {1}"} Placeholder 0 and 1 is replaced by a name
    /// Example: Kat Holmes and Frank Johnson edited a table.
    /// </field>
    /// <field name="L_ParagraphEditedByMany" type="String" static="true">
    /// {Placeholder="{0}, {1}"} Placeholder 0 is replaced by a name. Placeholder 1 is replaced by a number.
    /// Example: Kat Holmes and 2 others made changes.
    /// </field>
    /// <field name="L_TableEditedByMany" type="String" static="true">
    /// {Placeholder="{0}, {1}"} Placeholder 0 is replaced by a name. Placeholder 1 is replaced by a number.
    /// Example: Kat Holmes and 2 others edited a table.
    /// </field>
    /// <field name="L_OpenAccessibilityCheckerPane" type="String" static="true">
    /// </field>
    /// <field name="L_Accessibility" type="String" static="true">
    /// </field>
    /// <field name="l_RecycleBinSectionName" type="String" static="true">
    /// </field>
    /// <field name="l_ThemeLabel1" type="String" static="true">
    /// Same as msoidsOSSThemeLabel1
    /// </field>
    /// <field name="l_ThemeLabel2" type="String" static="true">
    /// Same as msoidsOSSThemeLabel2
    /// </field>
    /// <field name="l_ThemeLabel3" type="String" static="true">
    /// Same as msoidsOSSThemeLabel3
    /// </field>
    /// <field name="l_ThemeLabel4" type="String" static="true">
    /// Same as msoidsOSSThemeLabel4
    /// </field>
    /// <field name="l_ThemeLabel5" type="String" static="true">
    /// Same as msoidsOSSThemeLabel5
    /// </field>
    /// <field name="l_ThemeLabel6" type="String" static="true">
    /// Same as msoidsOSSThemeLabel6
    /// </field>
    /// <field name="l_ThemeLabel7" type="String" static="true">
    /// Same as msoidsOSSThemeLabel7
    /// </field>
    /// <field name="l_ThemeLabel8" type="String" static="true">
    /// Same as msoidsOSSThemeLabel8
    /// </field>
    /// <field name="l_ThemeLabel9" type="String" static="true">
    /// Same as msoidsOSSThemeLabel9
    /// </field>
    /// <field name="l_ThemeLabel10" type="String" static="true">
    /// Same as msoidsOSSThemeLabel10
    /// </field>
    /// <field name="l_ColorPickerTooltipBase" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}Same as msoidsColorPickerTootltipWithColorName.
    /// </field>
    /// <field name="l_ColorPickerTooltipTint" type="String" static="true">
    /// {Placeholder="{0}", "{1}", "{2}"}Like msoidsColorGalleryTint.
    /// </field>
    /// <field name="l_ColorPickerTooltipShade" type="String" static="true">
    /// {Placeholder="{0}", "{1}", "{2}"}Like msoidsColorGalleryShade.
    /// </field>
    /// <field name="l_NotebookColorNone" type="String" static="true">
    /// </field>
    /// <field name="l_NotebookColorBlue" type="String" static="true">
    /// Same as IDS_COLORPALETTE_Blue
    /// </field>
    /// <field name="l_NotebookColorYellow" type="String" static="true">
    /// Same as IDS_COLORPALETTE_Yellow
    /// </field>
    /// <field name="l_NotebookColorGreen" type="String" static="true">
    /// Same as IDS_COLORPALETTE_Green
    /// </field>
    /// <field name="l_NotebookColorRed" type="String" static="true">
    /// Same as IDS_COLORPALETTE_Red
    /// </field>
    /// <field name="l_NotebookColorPurple" type="String" static="true">
    /// Same as IDS_COLORPALETTE_Purple
    /// </field>
    /// <field name="l_NotebookColorCyan" type="String" static="true">
    /// Same as IDS_COLORPALETTE_Cyan
    /// </field>
    /// <field name="l_NotebookColorOrange" type="String" static="true">
    /// Same as IDS_COLORPALETTE_Orange
    /// </field>
    /// <field name="l_NotebookColorMagenta" type="String" static="true">
    /// Same as IDS_COLORPALETTE_Magenta
    /// </field>
    /// <field name="l_NotebookColorBlueMist" type="String" static="true">
    /// Same as IDS_COLORPALETTE_BlueMist
    /// </field>
    /// <field name="l_NotebookColorPurpleMist" type="String" static="true">
    /// Same as IDS_COLORPALETTE_PurpleMist
    /// </field>
    /// <field name="l_NotebookColorTan" type="String" static="true">
    /// Same as IDS_COLORPALETTE_Tan
    /// </field>
    /// <field name="l_NotebookColorLemon" type="String" static="true">
    /// Same as IDS_COLORPALETTE_Lemon
    /// </field>
    /// <field name="l_NotebookColorApple" type="String" static="true">
    /// Same as IDS_COLORPALETTE_Apple
    /// </field>
    /// <field name="l_NotebookColorTeal" type="String" static="true">
    /// Same as IDS_COLORPALETTE_Teal
    /// </field>
    /// <field name="l_NotebookColorRedChalk" type="String" static="true">
    /// Same as IDS_COLORPALETTE_RedChalk
    /// </field>
    /// <field name="l_NotebookColorSilver" type="String" static="true">
    /// Same as IDS_COLORPALETTE_Silver
    /// </field>
    /// <field name="l_DeleteRepeatedWord" type="String" static="true">
    /// </field>
    /// <field name="l_NoSuggestions" type="String" static="true">
    /// This string appears in Word Editor context menu when there are no spelling suggestions for a misspelled word.
    /// </field>
    /// <field name="l_SuggestionsNotInDictionaryAriaLabelFormat" type="String" static="true">
    /// Used by the narrator to read the suggestion and Not In Dictionary piece
    /// {Placeholder="{0}", "{1}"}
    /// Placeholder "0" is the error text
    /// Placeholder "1" is the error text separated by commas
    /// </field>
    /// <field name="l_SuggestionsAriaLabelFormat" type="String" static="true">
    /// Used by the narrator to read the suggestion item
    /// {Placeholder="{0}", "{1}"} Placeholder "0" is proofing critique title, such as "Possible Word Choice Error". Placeholder "1" is replaced by the error suggestion.
    /// </field>
    /// <field name="l_SuggestionsAriaLabelFormatForSuggestionDescriptions" type="String" static="true">
    /// Used by the narrator to read the suggestion item
    /// {Placeholder="{0}", "{1}"}
    /// Placeholder "0" is proofing critique title, such as "Possible Word Choice Error". Placeholder "1" is replaced by the error suggestion.
    /// </field>
    /// <field name="l_SuggestionDescriptionAriaDescribedByFormat" type="String" static="true">
    /// Used by the narrator to read the text between the suggestion item and description
    /// </field>
    /// <field name="l_SuggestionsMenuAriaRoleDescription" type="String" static="true">
    /// Used by the narrator to read out the submenu role for the proofing menus
    /// </field>
    /// <field name="l_NoReferenceInformation" type="String" static="true">
    /// String displayed when empty Suggestion Description string is returned by Editor Service
    /// </field>
    /// <field name="l_IgnoreSpellingError" type="String" static="true">
    /// </field>
    /// <field name="l_IgnoreOnceSpellingError" type="String" static="true">
    /// </field>
    /// <field name="l_IgnoreAllSpellingErrors" type="String" static="true">
    /// </field>
    /// <field name="l_DoNotCheckForThisIssue" type="String" static="true">
    /// </field>
    /// <field name="l_GrammarOptions" type="String" static="true">
    /// </field>
    /// <field name="l_TableInsertSubMenu" type="String" static="true">
    /// </field>
    /// <field name="l_TableInsertDialog" type="String" static="true">
    /// </field>
    /// <field name="l_TableDeleteSubMenu" type="String" static="true">
    /// </field>
    /// <field name="l_TableSelectSubMenu" type="String" static="true">
    /// </field>
    /// <field name="l_TableAltText" type="String" static="true">
    /// </field>
    /// <field name="l_TableInsertColumnLeftMenuItem" type="String" static="true">
    /// </field>
    /// <field name="l_TableInsertColumnRightMenuItem" type="String" static="true">
    /// </field>
    /// <field name="l_TableInsertRowAboveMenuItem" type="String" static="true">
    /// </field>
    /// <field name="l_TableInsertRowBelowMenuItem" type="String" static="true">
    /// </field>
    /// <field name="l_TableDeleteTableMenuItem" type="String" static="true">
    /// </field>
    /// <field name="l_TableDeleteColumnMenuItem" type="String" static="true">
    /// </field>
    /// <field name="l_TableDeleteRowMenuItem" type="String" static="true">
    /// </field>
    /// <field name="l_TableSelectCellMenuItem" type="String" static="true">
    /// </field>
    /// <field name="l_TableSelectColumnMenuItem" type="String" static="true">
    /// </field>
    /// <field name="l_TableSelectRowMenuItem" type="String" static="true">
    /// </field>
    /// <field name="l_TableSelectTableMenuItem" type="String" static="true">
    /// </field>
    /// <field name="L_TableMergeSplit" type="String" static="true">
    /// </field>
    /// <field name="L_MergeCells" type="String" static="true">
    /// </field>
    /// <field name="L_SplitCells" type="String" static="true">
    /// </field>
    /// <field name="l_TableSizeHoverMessage" type="String" static="true">
    /// </field>
    /// <field name="l_TableOverSizeWarningMessage" type="String" static="true">
    /// </field>
    /// <field name="l_TableNonNegUnderSizeWarningMessage" type="String" static="true">
    /// </field>
    /// <field name="l_TableNegUnderSizeWarningMessage" type="String" static="true">
    /// </field>
    /// <field name="l_TableNonNumericWarningMessage" type="String" static="true">
    /// </field>
    /// <field name="l_TableNotMultipleOrFactorOfSpanWarningMessage" type="String" static="true">
    /// </field>
    /// <field name="l_TableDialogColumnLabelText" type="String" static="true">
    /// </field>
    /// <field name="l_TableDialogRowLabelText" type="String" static="true">
    /// </field>
    /// <field name="l_HyperlinkContextMenuItem" type="String" static="true">
    /// </field>
    /// <field name="l_EditHyperlink" type="String" static="true">
    /// </field>
    /// <field name="l_SelectHyperlink" type="String" static="true">
    /// </field>
    /// <field name="l_OpenHyperlink" type="String" static="true">
    /// </field>
    /// <field name="l_CopyHyperlink" type="String" static="true">
    /// </field>
    /// <field name="l_RemoveHyperlink" type="String" static="true">
    /// </field>
    /// <field name="l_OutlineMove" type="String" static="true">
    /// </field>
    /// <field name="l_OutlineResize" type="String" static="true">
    /// </field>
    /// <field name="l_StartNewList" type="String" static="true">
    /// </field>
    /// <field name="l_ContinueNumberingList" type="String" static="true">
    /// </field>
    /// <field name="l_SetNumberingValueList" type="String" static="true">
    /// </field>
    /// <field name="l_StartNewListDialog" type="String" static="true">
    /// </field>
    /// <field name="l_ContinueFromPreviousList" type="String" static="true">
    /// </field>
    /// <field name="l_SetValueTo" type="String" static="true">
    /// </field>
    /// <field name="l_ListValueTooSmall" type="String" static="true">
    /// </field>
    /// <field name="l_UseLargerListValue" type="String" static="true">
    /// </field>
    /// <field name="L_SelectAllButton" type="String" static="true">
    /// The text on the button which selects all content in the open document.
    /// </field>
    /// <field name="L_GroupShapesUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell.
    /// </field>
    /// <field name="L_SpellCheckDictUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell.
    /// </field>
    /// <field name="L_InsertAudioUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell.
    /// </field>
    /// <field name="L_WordArtUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell.
    /// </field>
    /// <field name="L_InsertChartUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell.
    /// </field>
    /// <field name="L_DesktopFeature" type="String" static="true">
    /// String used in TellMe for Desktop app up sell.
    /// </field>
    /// <field name="L_OpenInDesktopPowerPoint" type="String" static="true">
    /// Label used by TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_OpenInDesktopDescription" type="String" static="true">
    /// Description used by TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_DesktopUpSellTitle" type="String" static="true">
    /// Description used by TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_DesktopUpSellDescription" type="String" static="true">
    /// Description used by TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_ThemeFontIndicatorMinor" type="String" static="true">
    /// {Placeholder="{0}"}
    /// In Word, when a theme font is displayed in the font dropdown or font combobox,
    /// an indicator is added to distinguish the theme font from a normal font. Please
    /// translate these the same way the Word rich-client does.
    /// For example, if the app language is English, the Calibri minor theme font will be
    /// displayed as "Calibri (Body)".
    /// </field>
    /// <field name="L_ThemeFontIndicatorMajor" type="String" static="true">
    /// {Placeholder="{0}"}See the translation comments for L_ThemeFontIndicatorMinor
    /// </field>
    /// <field name="l_HK_Bold" type="String" static="true">
    /// Bold - Ctrl+B
    /// </field>
    /// <field name="l_HK_Bold_Mac" type="String" static="true">
    /// Bold for Mac - Command+B
    /// </field>
    /// <field name="l_HK_Italic" type="String" static="true">
    /// Italic - Ctrl+I
    /// </field>
    /// <field name="l_HK_Italic_Mac" type="String" static="true">
    /// Italic for Mac - Command+I
    /// </field>
    /// <field name="l_HK_Underline" type="String" static="true">
    /// Underline - Ctrl+U
    /// </field>
    /// <field name="l_HK_Underline_Mac" type="String" static="true">
    /// Underline for Mac - Command+U
    /// </field>
    /// <field name="l_HK_LeftJustify" type="String" static="true">
    /// Left Justification (Windows) - Ctrl+L
    /// </field>
    /// <field name="l_HK_LeftJustify_Mac" type="String" static="true">
    /// Left Justification (Mac) - Command+Shift+L
    /// </field>
    /// <field name="l_HK_CenterJustify" type="String" static="true">
    /// Center Justification - Ctrl+E
    /// </field>
    /// <field name="l_HK_RightJustify" type="String" static="true">
    /// Right Justification (Windows) - Ctrl+R
    /// </field>
    /// <field name="l_HK_RightJustify_Mac" type="String" static="true">
    /// Right Justification (Mac) - Command+Shift+R
    /// </field>
    /// <field name="l_HK_Undo" type="String" static="true">
    /// Undo - Ctrl+Z
    /// </field>
    /// <field name="l_HK_Redo" type="String" static="true">
    /// Redo - Ctrl+Y
    /// </field>
    /// <field name="l_HK_SelectAll" type="String" static="true">
    /// Select All - Ctrl+A
    /// </field>
    /// <field name="l_HK_ClearFormatting" type="String" static="true">
    /// Clear Formatting = Ctrl+Shift+0
    /// </field>
    /// <field name="l_HK_Hyperlink" type="String" static="true">
    /// Hyperlink - Ctrl+K
    /// </field>
    /// <field name="l_HK_Save" type="String" static="true">
    /// Save - Ctrl+S
    /// </field>
    /// <field name="l_HK_Search" type="String" static="true">
    /// Search - Ctrl+E
    /// </field>
    /// <field name="l_HK_Find" type="String" static="true">
    /// Find - Ctrl+F
    /// </field>
    /// <field name="l_HK_GoTo" type="String" static="true">
    /// Go To - Ctrl+G
    /// </field>
    /// <field name="l_HK_TellMe" type="String" static="true">
    /// TellMe - Alt+Q. This should match the desktop hotkey defined in msoidscTellMe.
    /// </field>
    /// <field name="l_LoadingFullDocument" type="String" static="true">
    /// </field>
    /// <field name="l_DocumentFinishedLoading" type="String" static="true">
    /// </field>
    /// <field name="l_DocumentFinishedLoadingDialogTitle" type="String" static="true">
    /// </field>
    /// <field name="l_LoadingAdditionalContent" type="String" static="true">
    /// </field>
    /// <field name="l_UserJoiningParagraph" type="String" static="true">
    /// Used by the narrator to read the name of the person joining the paragraph user is currently editing.
    /// Example: John Doe is now editing this paragraph
    /// </field>
    /// <field name="l_UserLeavingParagraph" type="String" static="true">
    /// Used by the narrator to read the name of the person leaving the paragraph user is currently editing.
    /// Example: John Doe is no longer editing this paragraph
    /// </field>
    /// <field name="l_OtherUsersEditingParagraphMany" type="String" static="true">
    /// Used by the narrator to announce the names of the people editing the paragraph user just moved to.
    /// Example: John Doe and John Smith are editing this paragraph
    /// </field>
    /// <field name="l_OtherUsersEditingParagraphSingle" type="String" static="true">
    /// Used by the narrator to announce the name of the only other person editing the paragraph user just moved to.
    /// Example: John Doe is editing this paragraph
    /// </field>
    /// <field name="l_DisplayNameSeparator" type="String" static="true">
    /// Will be used to create an enumeration of user names such as 'John and Patrick and Mary'.
    /// Example: John Doe and John Smith are editing this paragraph
    /// </field>
    /// <field name="l_IntentSuggestion" type="String" static="true">
    /// Used by the narrator to announce the name of intent suggestion in canvas
    /// </field>
    /// <field name="l_ContentTypeLeavingNotificationFormat" type="String" static="true">
    /// Notification format for cursoring out of rich document content regions.
    /// {Placeholder="{0}"} Placeholder 0 is replaced by the descriptive name of an object or region in the UI, such as "Spelling Error", "Image", "Link", "Find Hit", etc.
    /// e.g. "Leaving Spelling Error."
    /// </field>
    /// <field name="l_ContentDeleteNotificationFormat" type="String" static="true">
    /// Notification format for deleting rich document content.
    /// {{Placeholder="{0}"} Placeholder 0 is replaced by the descriptive name of an object, such as "Image".
    /// e.g. "Image Deleted."
    /// </field>
    /// <field name="l_ContentTypeEnteringNotificationFormat" type="String" static="true">
    /// Notification format for cursoring into rich document content regions.
    /// {Placeholder="{0}"} Placeholder "0" is replaced by string L_AccessibleContentDetailsFormat,
    /// e.g. "Puppies Image."
    /// </field>
    /// <field name="l_AccessibleContentDetailsFormat" type="String" static="true">
    /// Message format for fully describing a document object or region.
    /// {Placeholder="{0}", "{1}"} Placeholder 0 is replaced by details of an object or region, such as "Puppies", if that's the alt text of an image. Placeholder 1 is replaced by the descriptive name of that object or region, such as "Image".
    /// e.g. "Puppies Image."
    /// </field>
    /// <field name="l_CharacterFormattingContentTitle" type="String" static="true">
    /// Screen reader text for when cursoring into/out of a formatted text style region.
    /// Used as part of template messages like L_ContentTypeLeavingNotificationFormat.
    /// e.g. "Leaving Style."
    /// </field>
    /// <field name="l_HyperlinkContentTitle" type="String" static="true">
    /// Screen reader text for when cursoring into/out of a link region.
    /// Used as part of template messages like L_ContentTypeLeavingNotificationFormat.
    /// e.g. "Leaving Link."
    /// </field>
    /// <field name="l_EquationContentTitle" type="String" static="true">
    /// Screen reader text used when cursoring into/out of an equation object.
    /// Used as part of template messages like L_ContentTypeLeavingNotificationFormat.
    /// e.g. "Leaving Equation."
    /// </field>
    /// <field name="l_ImageContentTitle" type="String" static="true">
    /// Screen reader text for when cursoring into/out of an image object.
    /// Used as part of template messages like L_ContentTypeLeavingNotificationFormat.
    /// e.g. "Leaving Image."
    /// </field>
    /// <field name="l_SpellingErrorContentTitle" type="String" static="true">
    /// Screen reader text for when cursoring into/out of a spelling error region.
    /// Used as part of template messages like L_ContentTypeLeavingNotificationFormat.
    /// e.g. "Leaving Spelling Error."
    /// </field>
    /// <field name="l_GrammaticalErrorContentTitle" type="String" static="true">
    /// Screen reader text for when cursoring into/out of a contextual spelling or grammar error region.
    /// Used as part of template messages like L_ContentTypeLeavingNotificationFormat.
    /// e.g. "Leaving Grammatical Error."
    /// </field>
    /// <field name="l_AdvancedProofingIssueContentTitle" type="String" static="true">
    /// Screen reader text for when cursoring into/out of an advanced proofing issue region.
    /// Used as part of template messages like L_ContentTypeLeavingNotificationFormat.
    /// e.g. "Leaving Advanced Proofing Issue."
    /// </field>
    /// <field name="l_TableContentTitle" type="String" static="true">
    /// Screen reader text for when cursoring out of a table.
    /// Used as part of template messages like L_ContentTypeLeavingNotificationFormat.
    /// e.g. "Leaving Table."
    /// </field>
    /// <field name="l_TableContentDetailsFormat" type="String" static="true">
    /// Screen reader text for when cursoring into a table.
    /// Used as part of template messages like L_ContentTypeEnteringNotificationFormat.
    /// {Placeholder="{0}", "{1}"} Placeholder 0 and 1 are replaced by integer numbers. Placeholder 0 is replaced by number of columns in the table. Placeholder 1 is replaced by the number of rows in the table.
    /// e.g. "Table 2 by 3."
    /// </field>
    /// <field name="l_TableContentDetailsColumnFormat" type="String" static="true">
    /// Screen reader text for when cursoring to a different column, on the same row of a table.
    /// Used as part of template messages like L_ContentTypeEnteringNotificationFormat.
    /// {Placeholder="{0}"} Placeholder 0 is replaced by an integer number. Placeholder 0 is replaced by the index of the column the user is in.
    /// e.g. "Column 2."
    /// </field>
    /// <field name="l_TableContentDetailsRowFormat" type="String" static="true">
    /// Screen reader text for when cursoring to a different row, on the same column of a table.
    /// Used as part of template messages like L_ContentTypeEnteringNotificationFormat.
    /// {Placeholder="{0}"} Placeholder 0 is replaced by an integer number. Placeholder 0 is replaced by the index of the column the user is in.
    /// e.g. "Column 2."
    /// </field>
    /// <field name="l_ListContentTitle" type="String" static="true">
    /// Screen reader text for when cursoring into/out of a list.
    /// Used as part of template messages like L_ContentTypeLeavingNotificationFormat.
    /// e.g. "Leaving List."
    /// </field>
    /// <field name="l_ListContentDetailsItemFormat" type="String" static="true">
    /// Screen reader text for when cursoring to a different item of the same list.
    /// Used as part of template messages like L_ContentTypeEnteringNotificationFormat.
    /// {Placeholder="{0}"} Placeholder 0 is replaced by an integer number. Placeholder 0 is replaced by the index of the item in the list.
    /// e.g. "Item 1."
    /// </field>
    /// <field name="l_ListContentDetailsLevelFormat" type="String" static="true">
    /// Screen reader text for when cursoring to an indented/outdented item (to a parent/child list).
    /// Used as part of template messages like L_ContentTypeEnteringNotificationFormat.
    /// {Placeholder="{0}"} Placeholder 0 is replaced by an integer number. Placeholder 0 is replaced by the index of the item in the list.
    /// e.g. "Level 2."
    /// </field>
    /// <field name="L_EmojiPlural" type="String" static="true">
    /// Group title in the insert ribbon.
    /// </field>
    /// <field name="L_EmojiSingle" type="String" static="true">
    /// label for Emoji Button in the Emojis group.
    /// </field>
    /// <field name="L_InsertMoreEmojis" type="String" static="true">
    /// More Emojis button in the Emoji dropdown.
    /// </field>
    /// <field name="L_InsertSymbolFriendlyName" type="String" static="true">
    /// insert symbols flyout title when shown in OZ box.
    /// </field>
    /// <field name="L_SymbolPlural" type="String" static="true">
    /// Group title in the insert ribbon.
    /// </field>
    /// <field name="L_SymbolSingle" type="String" static="true">
    /// label for Symbol Button in the symbols group.
    /// </field>
    /// <field name="L_InsertMoreSymbols" type="String" static="true">
    /// More Symbols button in the Symbol dropdown.
    /// </field>
    /// <field name="L_SymbolUnicodeNameLabel" type="String" static="true">
    /// Unicode name label in the Insert More Symbols dialog.
    /// </field>
    /// <field name="L_SymbolInsertButtonText" type="String" static="true">
    /// Insert button in the Insert More Symbols dialog.
    /// </field>
    /// <field name="L_RequestNewSymbol" type="String" static="true">
    /// Label in the Symbol drop-down that the user can click to invoke the Office feedback tool
    /// </field>
    /// <field name="L_Bullet" type="String" static="true">
    /// Tooltip for the 'Bullet' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_FontName" type="String" static="true">
    /// The string for the 'Font Name' option in the Bullets/Numbering drop-down.
    /// </field>
    /// <field name="L_ListStyleNone" type="String" static="true">
    /// The string for the 'None' option in the Bullets/Numbering drop-down.
    /// </field>
    /// <field name="L_ListLibraryTitle" type="String" static="true">
    /// The string for the 'List Library' option in the Multilevel list drop-down.
    /// </field>
    /// <field name="L_BulletsLibraryTitle" type="String" static="true">
    /// The string for the 'Bullet Library' option in the Bullets/Numbering drop-down.
    /// </field>
    /// <field name="L_NumberingLibraryTitle" type="String" static="true">
    /// The string for the 'Numbering Library' option in the Bullets/Numbering drop-down.
    /// </field>
    /// <field name="L_BulletsInDocumentTitle" type="String" static="true">
    /// The string for the 'Document Bullets' option in the Bullets/Numbering drop-down.
    /// </field>
    /// <field name="L_NumberingInDocumentTitle" type="String" static="true">
    /// The string for the 'Document Number Formats' option in the Bullets/Numbering drop-down.
    /// </field>
    /// <field name="L_MultilevelInDocumentTitle" type="String" static="true">
    /// The string for the 'Lists in Current Document' option in the Multilevel list drop-down.
    /// </field>
    /// <field name="L_MultilevelListLabelNumericalStyle" type="String" static="true">
    /// The label for a multilevel list style using digits. Level order should stay the same. Markers such as '1.1.' should not be localized.
    /// </field>
    /// <field name="L_MultilevelListLabelAlphanumericalStyle" type="String" static="true">
    /// The label for a multilevel list style using characters and digits. Level order should stay the same. Markers such as 'a' or 'i' should not be localized.
    /// </field>
    /// <field name="L_MultilevelListLabelBulletedStyle" type="String" static="true">
    /// The label for a multilevel list style using bullets. Level order should stay the same.
    /// </field>
    /// <field name="L_DefineNewBullet" type="String" static="true">
    /// The string for the 'Define New Bullet ...' option in the Bullets drop-down.
    /// </field>
    /// <field name="L_DefineNewBulletFont" type="String" static="true">
    /// The string for the 'Font:' option in the Bullets drop-down.
    /// </field>
    /// <field name="L_DefineNewBulletCharacterCode" type="String" static="true">
    /// The string for the Define New Bullet Dialog 'Character code (hex):' text in the define new bullet dialog.
    /// </field>
    /// <field name="L_EuroSign" type="String" static="true">
    /// Tooltip for the 'Euro' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_PoundSign" type="String" static="true">
    /// Tooltip for the 'Pound' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_YenSign" type="String" static="true">
    /// Tooltip for the 'Yen' sign in the Symbol drop-down
    /// </field>
    /// <field name="L_CopyrightSign" type="String" static="true">
    /// Tooltip for the 'Copyright' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_RegisteredSign" type="String" static="true">
    /// Tooltip for the 'Registered' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_TradeMarkSign" type="String" static="true">
    /// Tooltip for the 'Trademark' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_PlusMinusSign" type="String" static="true">
    /// Tooltip for the 'Plus-Minus' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_NotEqualTo" type="String" static="true">
    /// Tooltip for the 'Not Equal To' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LessThanOrEqualTo" type="String" static="true">
    /// Tooltip for the 'Less Than Or Equal To' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_GreaterThanOrEqualTo" type="String" static="true">
    /// Tooltip for the 'Greater Than Or Equal To' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_DivisionSign" type="String" static="true">
    /// Tooltip for the 'Division' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_MultiplicationSign" type="String" static="true">
    /// Tooltip for the 'Multiplication' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_Infinity" type="String" static="true">
    /// Tooltip for the 'Infinity' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_MicroSign" type="String" static="true">
    /// Tooltip for the 'Micro' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_GreekSmallLetterAlpha" type="String" static="true">
    /// Tooltip for the 'Greek Small Letter Alpha' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_GreekSmallLetterBeta" type="String" static="true">
    /// Tooltip for the 'Greek Small Letter Beta' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_GreekSmallLetterPi" type="String" static="true">
    /// Tooltip for the 'Greek Small Letter Pi' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_OhmSign" type="String" static="true">
    /// Tooltip for the 'Ohm' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_NArySummation" type="String" static="true">
    /// Tooltip for the 'N-Ary Summation' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_DegreeSign" type="String" static="true">
    /// Tooltip for the 'degree' sign that represents temprature in the Symbol drop-down.
    /// </field>
    /// <field name="L_CapitalLetterDelta" type="String" static="true">
    /// Tooltip for the 'Capital Letter Delta' sign which resembles a triagnle in the Symbol drop-down.
    /// </field>
    /// <field name="L_WhiteSmilingFace" type="String" static="true">
    /// Tooltip for the 'white smiling face' sign in the Symbol drop-down. this can be acheived on windows using Left Alt + 1 on the num pad
    /// </field>
    /// <field name="L_BlackHeartSuit" type="String" static="true">
    /// Tooltip for the 'Black Heart Suit' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_IndianRupeeSign" type="String" static="true">
    /// Tooltip for the 'Indian Rupee Sign' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_InvertedQuestionMark" type="String" static="true">
    /// Tooltip for the 'Inverted Question Mark' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_InvertedExclamationMark" type="String" static="true">
    /// Tooltip for the 'Inverted Exclamation Mark' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_EmDash" type="String" static="true">
    /// Tooltip for the 'Em Dash' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_HorizontalEllipsis" type="String" static="true">
    /// Tooltip for the 'Horizontal Ellipsis' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterAWithGrave" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter A With Grave' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterAWithAcute" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter A With Acute' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterAWithCircumflex" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter A With Circumflex' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterAWithTilde" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter A With Tilde' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterAWithDiaeresis" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter A With Diaeresis' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterAWithRingAbove" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter A With Ring Above' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterAe" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter Ae' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterCWithCedilla" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter C With Cedilla' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterEWithGrave" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter E With Grave' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterEWithAcute" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter E With Acute' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterEWithCircumflex" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter E With Circumflex' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterEWithDiaeresis" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter E With Diaeresis' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterIWithGrave" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter I With Grave' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterIWithAcute" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter I With Acute' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterIWithCircumflex" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter I With Circumflex' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterIWithDiaeresis" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter I With Diaeresis' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterNWithTilde" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter N With Tilde' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterOWithGrave" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter O With Grave' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterOWithAcute" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter O With Acute' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterOWithCircumflex" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter O With Circumflex' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterOWithTilde" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter O With Tilde' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterOWithDiaeresis" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter O With Diaeresis' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterUWithGrave" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter U With Grave' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterUWithAcute" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter U With Acute' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterUWithCircumflex" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter U With Circumflex' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterUWithDiaeresis" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter U With Diaeresis' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterSharpS" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter Sharp S' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterAWithGrave" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter A With Grave' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterAWithAcute" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter A With Acute' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterAWithCircumflex" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter A With Circumflex' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterAWithTilde" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter A With Tilde' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterAWithDiaeresis" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter A With Diaeresis' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterAWithRingAbove" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter A With Ring Above' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterAe" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter Ae' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterCWithCedilla" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter C With Cedilla' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterEWithGrave" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter E With Grave' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterEWithAcute" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter E With Acute' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterEWithCircumflex" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter E With Circumflex' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterEWithDiaeresis" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter E With Diaeresis' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterIWithGrave" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter I With Grave' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterIWithAcute" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter I With Acute' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterIWithCircumflex" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter I With Circumflex' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterIWithDiaeresis" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter I With Diaeresis' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterNWithTilde" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter N With Tilde' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterOWithGrave" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter O With Grave' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterOWithAcute" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter O With Acute' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterOWithCircumflex" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter O With Circumflex' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterOWithTilde" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter O With Tilde' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterOWithDiaeresis" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter O With Diaeresis' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterUWithGrave" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter U With Grave' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterUWithAcute" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter U With Acute' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterUWithCircumflex" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter U With Circumflex' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterUWithDiaeresis" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter U With Diaeresis' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterYWithDiaeresis" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter Y With Diaeresis' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterGWithBreve" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter G With Breve' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterGWithBreve" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter G With Breve' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterIWithDotAbove" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter I With Dot Above' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterDotlessI" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter Dotless I' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLigatureOe" type="String" static="true">
    /// Tooltip for the 'Latin Capital Ligature Oe' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLigatureOe" type="String" static="true">
    /// Tooltip for the 'Latin Small Ligature Oe' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterSWithCedilla" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter S With Cedilla' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinSmallLetterSWithCedilla" type="String" static="true">
    /// Tooltip for the 'Latin Small Letter S With Cedilla' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_LatinCapitalLetterYWithDiaeresis" type="String" static="true">
    /// Tooltip for the 'Latin Capital Letter Y With Diaeresis' sign in the Symbol drop-down.
    /// </field>
    /// <field name="L_InlineContentControlAccessibilityDescribedByText" type="String" static="true">
    /// Screen Reader Text to read when focus comes to inline content control.
    /// </field>
    /// <field name="L_BlockContentControlAccessibilityDescribedByText" type="String" static="true">
    /// Screen Reader Text to read when focus comes to some paragraph among a block content control.
    /// </field>
    /// <field name="l_StyleDefinitionNormalFontSizeInHalfpoints" type="String" static="true">
    /// Normal style.
    /// </field>
    /// <field name="l_StyleDefinitionNormalColor" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionNormalBold" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionNormalItalic" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionNormalUnderline" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionNormalNextStyle" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionNormalSpaceBefore" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionNormalSpaceAfter" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionNormalLineSpacing" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionNormalFont" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionTitleFontSizeInHalfpoints" type="String" static="true">
    /// Title style.
    /// </field>
    /// <field name="l_StyleDefinitionTitleColor" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionTitleBold" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionTitleItalic" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionTitleUnderline" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionTitleNextStyle" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionTitleSpaceBefore" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionTitleSpaceAfter" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionTitleLineSpacing" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionTitleFont" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionDateTimeFontSizeInHalfpoints" type="String" static="true">
    /// DateTime style.
    /// </field>
    /// <field name="l_StyleDefinitionDateTimeColor" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionDateTimeBold" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionDateTimeItalic" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionDateTimeUnderline" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionDateTimeNextStyle" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionDateTimeSpaceBefore" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionDateTimeSpaceAfter" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionDateTimeLineSpacing" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionDateTimeFont" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading1FontSizeInHalfpoints" type="String" static="true">
    /// Heading1 style.
    /// </field>
    /// <field name="l_StyleDefinitionHeading1Color" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading1Bold" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading1Italic" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading1Underline" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading1NextStyle" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading1SpaceBefore" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading1SpaceAfter" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading1LineSpacing" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading1Font" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading2FontSizeInHalfpoints" type="String" static="true">
    /// Heading2 style.
    /// </field>
    /// <field name="l_StyleDefinitionHeading2Color" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading2Bold" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading2Italic" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading2Underline" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading2NextStyle" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading2SpaceBefore" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading2SpaceAfter" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading2LineSpacing" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading2Font" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading3FontSizeInHalfpoints" type="String" static="true">
    /// Heading3 style.
    /// </field>
    /// <field name="l_StyleDefinitionHeading3Color" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading3Bold" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading3Italic" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading3Underline" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading3NextStyle" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading3SpaceBefore" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading3SpaceAfter" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading3LineSpacing" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading3Font" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading4FontSizeInHalfpoints" type="String" static="true">
    /// Heading4 style.
    /// </field>
    /// <field name="l_StyleDefinitionHeading4Color" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading4Bold" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading4Italic" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading4Underline" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading4NextStyle" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading4SpaceBefore" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading4SpaceAfter" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading4LineSpacing" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading4Font" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading5FontSizeInHalfpoints" type="String" static="true">
    /// Heading5 style.
    /// </field>
    /// <field name="l_StyleDefinitionHeading5Color" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading5Bold" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading5Italic" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading5Underline" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading5NextStyle" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading5SpaceBefore" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading5SpaceAfter" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading5LineSpacing" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading5Font" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading6FontSizeInHalfpoints" type="String" static="true">
    /// Heading6 style.
    /// </field>
    /// <field name="l_StyleDefinitionHeading6Color" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading6Bold" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading6Italic" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading6Underline" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading6NextStyle" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading6SpaceBefore" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading6SpaceAfter" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading6LineSpacing" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionHeading6Font" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionQuoteFontSizeInHalfpoints" type="String" static="true">
    /// Quote style.
    /// </field>
    /// <field name="l_StyleDefinitionQuoteColor" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionQuoteBold" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionQuoteItalic" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionQuoteUnderline" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionQuoteNextStyle" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionQuoteSpaceBefore" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionQuoteSpaceAfter" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionQuoteLineSpacing" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionQuoteFont" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCitationFontSizeInHalfpoints" type="String" static="true">
    /// Citation style.
    /// </field>
    /// <field name="l_StyleDefinitionCitationColor" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCitationBold" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCitationItalic" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCitationUnderline" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCitationNextStyle" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCitationSpaceBefore" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCitationSpaceAfter" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCitationLineSpacing" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCitationFont" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCodeFontSizeInHalfpoints" type="String" static="true">
    /// Code style.
    /// </field>
    /// <field name="l_StyleDefinitionCodeColor" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCodeBold" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCodeItalic" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCodeUnderline" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCodeNextStyle" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCodeSpaceBefore" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCodeSpaceAfter" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCodeLineSpacing" type="String" static="true">
    /// </field>
    /// <field name="l_StyleDefinitionCodeFont" type="String" static="true">
    /// </field>
    /// <field name="L_Dictation" type="String" static="true">
    /// Text for Dictation button label
    /// </field>
    /// <field name="L_DictationRibbonLabel" type="String" static="true">
    /// </field>
    /// <field name="L_DictationKeytip" type="String" static="true">
    /// </field>
    /// <field name="L_DictationPreviewLanguages" type="String" static="true">
    /// Preview(property) Languages Section title
    /// </field>
    /// <field name="L_DictationErrorDialogTitle" type="String" static="true">
    /// Dictation Error Messages
    /// </field>
    /// <field name="L_DictationAccessDeniedErrorMessage" type="String" static="true">
    /// </field>
    /// <field name="L_DictationFailedToConnectErrorMessage" type="String" static="true">
    /// </field>
    /// <field name="L_DictationMicrophoneErrorMessage" type="String" static="true">
    /// </field>
    /// <field name="L_DictationMicrophoneNotFoundMessage" type="String" static="true">
    /// </field>
    /// <field name="L_DictationMicrophoneAccessDeniedMessage" type="String" static="true">
    /// </field>
    /// <field name="L_DictationMicrophoneInUseMessage" type="String" static="true">
    /// </field>
    /// <field name="L_DictationUnknownErrorMessage" type="String" static="true">
    /// </field>
    /// <field name="L_DictationSilenceBusinessBarTitle" type="String" static="true">
    /// </field>
    /// <field name="L_DictationSilenceBusinessBarMessage" type="String" static="true">
    /// </field>
    /// <field name="L_DictationCorrectionsIgnoreSuggetion" type="String" static="true">
    /// Dictation Corrections
    /// </field>
    /// <field name="L_DictationCorrectionsGroupTitle" type="String" static="true">
    /// </field>
    /// <field name="L_DictationCorrectionsFlyoutTitle" type="String" static="true">
    /// </field>
}


Box4Intl.Box4Strings.registerClass('Box4Intl.Box4Strings');
Box4Intl.Box4Strings.l_OutlineResizeAlt = 'Resize the Outline';
Box4Intl.Box4Strings.l_NavigationPaneContentsLabel = 'Notebook Contents';
Box4Intl.Box4Strings.l_UntitledPageText = 'Untitled Page';
Box4Intl.Box4Strings.l_UntitledSection = 'Untitled Section';
Box4Intl.Box4Strings.l_NotebookPagesSection = 'General Pages';
Box4Intl.Box4Strings.l_ProtoButtonText = 'New Page';
Box4Intl.Box4Strings.l_SectionGroupAltText = 'Section Group';
Box4Intl.Box4Strings.l_SectionGroupArrowAltText = 'Navigate Up';
Box4Intl.Box4Strings.l_DefaultUserName = 'Unknown User';
Box4Intl.Box4Strings.l_UserInitialsDelimeter = '; ';
Box4Intl.Box4Strings.l_PageLoadingText = 'Loading...';
Box4Intl.Box4Strings.l_OreoSpinnerText = 'Loading Page...';
Box4Intl.Box4Strings.l_ConflictPage = 'Conflict Page';
Box4Intl.Box4Strings.l_PageAccessibilityContext = 'Page {0}';
Box4Intl.Box4Strings.l_PageWithSearchResultsAccessibilityContext = 'Page {0} contains search results';
Box4Intl.Box4Strings.l_ConflictPageAccessibilityContext = 'Conflict Page {0}';
Box4Intl.Box4Strings.l_VersionHistoryPageAccessibilityContext = 'Version History Page {0}';
Box4Intl.Box4Strings.l_SectionAccessibilityContext = 'Section {0}';
Box4Intl.Box4Strings.l_SectionGroupAccessibilityContext = 'Section Group {0}';
Box4Intl.Box4Strings.l_ImageUploadFileError = 'There\'s a problem with the file. Please check it and try again.';
Box4Intl.Box4Strings.l_ImageUploadFailedMsg = 'Sorry, there was a problem inserting this picture.  Please delete this placeholder and try again.';
Box4Intl.Box4Strings.l_ImageUploadFailedMsgWord = 'Sorry, there was a problem inserting this picture.';
Box4Intl.Box4Strings.l_ImageUploading = 'Inserting Picture...';
Box4Intl.Box4Strings.l_ImageCantDisplay = 'Can\'t display image';
Box4Intl.Box4Strings.l_ImageUploadSizeError = 'Sorry, your image is too large for us to insert. Please try again with a smaller image.';
Box4Intl.Box4Strings.l_ImageLoading = 'Loading {0}';
Box4Intl.Box4Strings.l_ImageLoadingFailed = 'Error loading {0}';
Box4Intl.Box4Strings.l_ImageUpdating = 'Updating picture...';
Box4Intl.Box4Strings.l_ImageDefaultAltText = 'Image';
Box4Intl.Box4Strings.l_Picture = 'Picture';
Box4Intl.Box4Strings.l_PictureStyleErrorTitle = '{webappshort}';
Box4Intl.Box4Strings.l_PictureStyleError = 'Sorry, we had a problem formatting your picture. Please try again.';
Box4Intl.Box4Strings.l_ClipartSearchButtonText = 'Search';
Box4Intl.Box4Strings.l_ClipartUploadButtonText = 'Insert';
Box4Intl.Box4Strings.l_ClipartUploadDialogTitle = 'Insert Clip Art';
Box4Intl.Box4Strings.l_ClipartDefaultText = 'Search for images in Microsoft\'s Clip Art collection.';
Box4Intl.Box4Strings.l_ClipartNoResultsFound = '(No Results Found)';
Box4Intl.Box4Strings.l_ClipartSeeSimilarLink = 'Search for more like this';
Box4Intl.Box4Strings.l_ClipartRating = 'Rating:';
Box4Intl.Box4Strings.l_ClipartRatingVotes = '({0})';
Box4Intl.Box4Strings.l_ClipartProvidedBy = 'Provided by:';
Box4Intl.Box4Strings.l_ClipartKeywords = 'Keywords: ';
Box4Intl.Box4Strings.l_ClipartDimensionsDisplay = '{0} (w) x {1} (h)';
Box4Intl.Box4Strings.l_ClipartFileSizeDisplay = '{0} kb';
Box4Intl.Box4Strings.l_ClipartResolutionDisplay = '{0} dpi';
Box4Intl.Box4Strings.l_ClipartSearching = 'Searching...';
Box4Intl.Box4Strings.l_ClipartProvidedByMicrosoft = 'Microsoft';
Box4Intl.Box4Strings.l_ClipartProvidedByCommunity = 'Community Member';
Box4Intl.Box4Strings.l_ClipartImageAltNoCaption = 'Click for details about this content';
Box4Intl.Box4Strings.l_ClipartPreviewAltWithCaption = 'Image caption: {0}';
Box4Intl.Box4Strings.l_ClipartPreviewAltNoCaption = 'Keywords for this image include: {0}';
Box4Intl.Box4Strings.l_ClipartCannotConnect = 'Sorry, {webappshort} is having trouble connecting to the service. Please try again later.';
Box4Intl.Box4Strings.l_ClipartCannotDownload = 'Sorry, {webappshort} ran into a problem downloading the image. Please try again later.';
Box4Intl.Box4Strings.L_LineSpacingOptions = 'Line Spacing Options...';
Box4Intl.Box4Strings.L_ParagraphSpacingOptions = 'Paragraph Spacing Options...';
Box4Intl.Box4Strings.L_ParagraphSpacing = 'Paragraph Spacing';
Box4Intl.Box4Strings.l_ParagraphDialogTitle = 'Paragraph';
Box4Intl.Box4Strings.l_ParagraphDialogGeneral = 'General';
Box4Intl.Box4Strings.l_ParagraphDialogAlignment = 'Alignment:';
Box4Intl.Box4Strings.l_ParagraphDialogAlignmentAlt = 'Alignment';
Box4Intl.Box4Strings.l_ParagraphDialogAlignLeft = 'Left';
Box4Intl.Box4Strings.l_ParagraphDialogAlignCenter = 'Center';
Box4Intl.Box4Strings.l_ParagraphDialogAlignRight = 'Right';
Box4Intl.Box4Strings.l_ParagraphDialogAlignJustified = 'Justified';
Box4Intl.Box4Strings.l_ParagraphDialogAlignKashida = 'Kashida';
Box4Intl.Box4Strings.l_ParagraphDialogAlignDistributed = 'Distributed';
Box4Intl.Box4Strings.l_ParagraphDialogAlignThaiDistributed = 'Thai Distributed';
Box4Intl.Box4Strings.l_ParagraphDialogIndentation = 'Indentation';
Box4Intl.Box4Strings.l_ParagraphDialogIndentLeft = 'Before text:';
Box4Intl.Box4Strings.l_ParagraphDialogIndentLeftAlt = 'Indentation Before Text';
Box4Intl.Box4Strings.l_ParagraphDialogIndentRight = 'After text:';
Box4Intl.Box4Strings.l_ParagraphDialogIndentRightAlt = 'Indentation After Text';
Box4Intl.Box4Strings.l_ParagraphDialogSpecialIndentation = 'Special:';
Box4Intl.Box4Strings.l_ParagraphDialogSpecialIndentationAlt = 'Special Indentation';
Box4Intl.Box4Strings.l_ParagraphDialogNoneIndent = '(none)';
Box4Intl.Box4Strings.l_ParagraphDialogFirstLineIndent = 'First line';
Box4Intl.Box4Strings.l_ParagraphDialogHangingIndent = 'Hanging';
Box4Intl.Box4Strings.l_ParagraphDialogSpecialIndentationBy = 'By:';
Box4Intl.Box4Strings.l_ParagraphDialogSpecialIndentationByAlt = 'Special Indentation Value';
Box4Intl.Box4Strings.l_ParagraphDialogSpacing = 'Spacing';
Box4Intl.Box4Strings.l_ParagraphDialogSpacingBefore = 'Before:';
Box4Intl.Box4Strings.l_ParagraphDialogSpacingBeforeAlt = 'Spacing Before';
Box4Intl.Box4Strings.l_ParagraphDialogSpacingAfter = 'After:';
Box4Intl.Box4Strings.l_ParagraphDialogSpacingAfterAlt = 'Spacing After';
Box4Intl.Box4Strings.l_ParagraphDialogLineSpacing = 'Line spacing:';
Box4Intl.Box4Strings.l_ParagraphDialogLineSpacingAlt = 'Line Spacing';
Box4Intl.Box4Strings.l_ParagraphDialogLineSpacingSingle = 'Single';
Box4Intl.Box4Strings.l_ParagraphDialogLineSpacingOneAndHalf = '1.5 lines';
Box4Intl.Box4Strings.l_ParagraphDialogLineSpacingDouble = 'Double';
Box4Intl.Box4Strings.l_ParagraphDialogLineSpacingMultiple = 'Multiple';
Box4Intl.Box4Strings.l_ParagraphDialogLineSpacingAt = 'At:';
Box4Intl.Box4Strings.l_ParagraphDialogLineSpacingAtAlt = 'Line Spacing at';
Box4Intl.Box4Strings.l_ParaIndentSetFailedMessage = 'The indentations are too large for the current page size. Try making them a bit smaller.';
Box4Intl.Box4Strings.l_PastedImageLoading = 'Inserting image...';
Box4Intl.Box4Strings.l_MaxPicturesExceededMessage = 'You tried to paste a lot of pictures but we can only paste the first {0}.';
Box4Intl.Box4Strings.l_MaxPicturesExceededTitle = '{webappfull}';
Box4Intl.Box4Strings.l_PastedImageFailed = 'Image download failed.';
Box4Intl.Box4Strings.l_PastedImageFailedWithInvalidUrl = 'We can\'t paste this image from the Clipboard, but you can save it to your computer and insert it from there.';
Box4Intl.Box4Strings.l_WaitingForPastedImages = 'Pasting images...';
Box4Intl.Box4Strings.l_WaitingForSinglePastedImage = 'Pasting image...';
Box4Intl.Box4Strings.l_SignInToPasteImages = 'You must be signed in to paste pictures from the internet.';
Box4Intl.Box4Strings.l_ErrorSavingOnExit = 'We weren\'t able to save some of your changes.  Are you sure you want to exit?';
Box4Intl.Box4Strings.l_NavigateAway = 'You\'ve made changes to your {doctype} that haven\'t been saved. Are you sure you want to discard them?';
Box4Intl.Box4Strings.L_MathSelectionBox = 'Select the part of the equation you want to fix.';
Box4Intl.Box4Strings.l_InsertLinkButtonText = 'Insert';
Box4Intl.Box4Strings.l_InsertLinkTitle = 'Link';
Box4Intl.Box4Strings.l_InsertLinkAddress = 'Address:';
Box4Intl.Box4Strings.l_InsertLinkDisplayText = 'Display text:';
Box4Intl.Box4Strings.l_InsertOneDriveFile = 'Insert OneDrive File';
Box4Intl.Box4Strings.l_LinkToolTipWindows = '{0} \nCtrl+Click to follow link';
Box4Intl.Box4Strings.l_LinkToolTipMac = '{0} \nCommand+Click to follow link';
Box4Intl.Box4Strings.l_LinkToolTipNoCtrl = '{0} \nClick to follow link';
Box4Intl.Box4Strings.l_LinkOpenError = 'Sorry, {webappshort} can\'t open this link.';
Box4Intl.Box4Strings.l_OpenCrossSectionLinkError = 'Sorry, {webappshort} can\'t open a link to another section or section group. Please try to open the whole notebook.';
Box4Intl.Box4Strings.l_DeadWordLink = 'Sorry, {webappshort} can\'t open this link in a browser. To go to this link, please open this document in the desktop version of {richclientfull}.';
Box4Intl.Box4Strings.l_BookmarkCurrentDocumentLink = 'Current Document';
Box4Intl.Box4Strings.l_GetPageUrlOptionText = 'Copy Link to this Page...';
Box4Intl.Box4Strings.l_GetPageUrlTitle = 'Copy Link';
Box4Intl.Box4Strings.l_GetPageUrlTextPrompt = 'Please use the keyboard shortcut to copy the link.';
Box4Intl.Box4Strings.l_GetPageUrlCloseButton = 'Close';
Box4Intl.Box4Strings.l_Language = 'Language';
Box4Intl.Box4Strings.l_MarkSelectedText = 'Mark selected text as:';
Box4Intl.Box4Strings.l_SpellingWillUseLanguage = 'The speller automatically uses dictionaries of the selected language, if available.';
Box4Intl.Box4Strings.l_DoNotCheckSpelling = 'Don\'t check spelling';
Box4Intl.Box4Strings.L_LanguageButtonTooltip = 'Set Language';
Box4Intl.Box4Strings.l_ProofingCompleteNoErrors = 'Spelling and grammar check is complete. No mistakes were found.';
Box4Intl.Box4Strings.l_ProofingCompleteNoErrorsWithIgnoredRanges = 'Spelling and grammar check is complete. Any text marked with \"Don\'t check spelling\" was skipped.';
Box4Intl.Box4Strings.l_ProofingInProgress = 'Spelling and grammar check is in progress.';
Box4Intl.Box4Strings.L_EditorSettingsTellMeProofing = 'Proofing';
Box4Intl.Box4Strings.L_EditorSettingsTellMeProofreading = 'Proofreading';
Box4Intl.Box4Strings.L_EditorSettingsTellMeGrammar = 'Grammar';
Box4Intl.Box4Strings.L_EditorSettingsTellMeSpelling = 'Spelling';
Box4Intl.Box4Strings.L_EditorSettingsTellMeSpellingSettings = 'Spelling Settings';
Box4Intl.Box4Strings.L_EditorSettingsTellMeSpellingAndGrammar = 'Spelling and Grammar';
Box4Intl.Box4Strings.L_EditorSettingsTellMeWriting = 'Writing';
Box4Intl.Box4Strings.L_EditorSettingsTellMeWritingStyles = 'Writing Styles';
Box4Intl.Box4Strings.l_CaptureImageButton = 'Take Photo';
Box4Intl.Box4Strings.l_CameraSwitchButton = 'Change Camera';
Box4Intl.Box4Strings.l_RetakeImageButton = 'Retake';
Box4Intl.Box4Strings.l_RetakeImageButtonTooltip = 'Retake picture';
Box4Intl.Box4Strings.l_CameraDeniedPermissionsTitle = 'Allow camera access?';
Box4Intl.Box4Strings.l_CameraDeniedPermissions = '{appshort} couldn\u2019t access your camera. Click the camera error or lock icon in your browser\u2019s address bar and adjust your permissions.';
Box4Intl.Box4Strings.l_CameraDeviceNotFoundTitle = 'No camera found';
Box4Intl.Box4Strings.l_CameraDeviceNotFound = '{appshort} couldn\u2019t find a camera. Make sure that your camera is connected and properly installed.';
Box4Intl.Box4Strings.l_CameraAlreadyInUseTitle = 'Camera already in use';
Box4Intl.Box4Strings.l_CameraAlreadyInUse = 'Your camera is currently being used by another app. Close any apps that might be using your camera and then try again.';
Box4Intl.Box4Strings.l_CameraUnknownErrorTitle = 'An error has occurred';
Box4Intl.Box4Strings.l_CameraUnknownError = '{appshort} can\u2019t communicate with your camera. Refresh your browser to try again.';
Box4Intl.Box4Strings.l_CameraUnsupportedBrowserTitle = 'Browser not supported';
Box4Intl.Box4Strings.l_CameraUnsupportedBrowser = 'Your current browser doesn\u2019t support inserting pictures from a camera. Consider switching to a modern browser, such as Microsoft Edge, Chrome, or Firefox.';
Box4Intl.Box4Strings.l_AutoCorrectOptions = 'AutoCorrect Options';
Box4Intl.Box4Strings.l_AutoCorrectFormat = 'AutoFormat';
Box4Intl.Box4Strings.l_AutoCorrectCorrectAndCapitalize = 'Correct and Capitalize';
Box4Intl.Box4Strings.l_ReplaceTextAsYouTypeTooltip = 'Automatically correct misspelled words and replace text with symbols';
Box4Intl.Box4Strings.l_ReplaceTextAsYouType = 'Replace text as you type';
Box4Intl.Box4Strings.l_CapitalizeFirstLetterOfSentences = 'Capitalize first letter of sentences';
Box4Intl.Box4Strings.l_ReplaceOrdianalsWithSuperscript = 'Replace ordinals (1st) with superscript';
Box4Intl.Box4Strings.l_ReplaceHyphensWithDash = 'Replace hyphens (--) with dash (\u2014)';
Box4Intl.Box4Strings.l_ReplaceFractionsWithFractionCharacter = 'Replace fractions (1/2) with fraction character (\u00bd)';
Box4Intl.Box4Strings.l_ReplaceQuoteWithSmartQuote = '\"Straight quotes\" with \u201csmart quotes\u201d';
Box4Intl.Box4Strings.L_AutoCorrectOptionsMenu = 'AutoCorrect Options...';
Box4Intl.Box4Strings.l_BusinessBarMergeConflictPresent = 'This page contains conflicting changes. Click here to show versions of the page with unmerged changes.';
Box4Intl.Box4Strings.l_BusinessBarMergeConflictPresentAndVisible = 'This page contains changes that couldn\'t be merged. Click here to hide versions of the page with unmerged changes.';
Box4Intl.Box4Strings.l_BusinessBarConflictPageInfo = 'We\'ve highlighted conflicting changes in red. This page can\'t be edited, but you can copy changes to the main page. Click here for more options.';
Box4Intl.Box4Strings.l_BusinessBarConflictPageInfoNoCopy = 'We\'ve highlighted conflicting changes in red. This page can\'t be edited. Click here for more options.';
Box4Intl.Box4Strings.l_BusinessBarContainsMalformedHyperlinkUris = 'This document contains malformed hyperlink URIs. Editing this document will cause those hyperlinks to be removed.';
Box4Intl.Box4Strings.l_BusinessBarVersionInfo = 'Version {0} (read-only): You can restore or delete this version or copy content to the main page.  Click here for more options.';
Box4Intl.Box4Strings.l_BusinessBarVersionInfoNoCopy = 'Version {0} (read-only): You can restore or delete this version.  Click here for more options.';
Box4Intl.Box4Strings.l_BusinessBarReadonlyOldContent = 'This page is read-only because it is from an older version of {richclientfull}. To resolve this, please open this {doctype} in {richclientfull14}.';
Box4Intl.Box4Strings.l_BusinessBarReadonlyFutureContent = 'This page is read-only because it is from an unsupported version of {richclientfull}.';
Box4Intl.Box4Strings.l_BusinessBarReadonlyCorruptContent = 'This page can\'t be edited because it is damaged. To fix the problem, please open this {doctype} in {richclientfull}.';
Box4Intl.Box4Strings.l_BusinessBarReadonlyPageLocked = 'This page is locked and can\'t be edited at this time.';
Box4Intl.Box4Strings.l_BusinessBarSigned = 'This {doctype} was digitally signed. Saving changes will invalidate the digital signature.';
Box4Intl.Box4Strings.l_BusinessBardReadOnlyDocument = 'You don\'t have permission to edit this file.';
Box4Intl.Box4Strings.l_BusinessBarMarkedAsFinal = 'This {doctype} has been marked as final. Saving changes will remove that status.';
Box4Intl.Box4Strings.l_BusinessBarCompatTitle = 'Compatibility Mode';
Box4Intl.Box4Strings.l_BusinessBarCompatMessage = 'Functionality is currently limited.';
Box4Intl.Box4Strings.l_BusinessBarQuotaExceeded = 'Changes to this section can\'t be saved. Please free up some space to save your changes.';
Box4Intl.Box4Strings.l_BusinessBarFileSizeExceeded = 'This section has grown too large. To save, please copy your recent changes to another section.';
Box4Intl.Box4Strings.l_BusinessBarFileSizeExceededNoCopy = 'This section has grown too large. To continue, please use another section.';
Box4Intl.Box4Strings.l_BusinessBarMinorVersionLimitExceeded = 'Changes can\'t be saved because of versioning requirements. Please use the document library to publish a major version before editing the {doctype}.';
Box4Intl.Box4Strings.l_BusinessBarVirus = 'Changes can\'t be saved because there might be a virus in this section. Please copy your changes to a clean section and delete the original file.';
Box4Intl.Box4Strings.l_BusinessBarVirusNoCopy = 'Changes can\'t be saved because there might be a virus in this section. Please delete this section.';
Box4Intl.Box4Strings.l_BusinessBarWriteAccessDenied = 'You don\'t have permission to write to this section.';
Box4Intl.Box4Strings.l_BusinessBarReadOnlyRecommended = 'The author of this {doctype} suggests that you don\'t edit it.';
Box4Intl.Box4Strings.l_BusinessBarReadOnlyRecommendedNewDesign = 'To prevent accidental changes, the author has set this file to open as read-only.';
Box4Intl.Box4Strings.l_BusinessBarReadOnlyRecommendedTitle = 'READ-ONLY';
Box4Intl.Box4Strings.l_BusinessBarReadOnlyTitle = 'READ-ONLY';
Box4Intl.Box4Strings.l_ReadOnlyRecommendedEditAnyWay = 'Edit Anyway';
Box4Intl.Box4Strings.l_ReadOnlyRecommendedEditAnywayButtonAccessibilityText = 'Click the edit anyway button if you would like to edit';
Box4Intl.Box4Strings.l_BusinessBarODTDocumentTitle = 'ODT Document';
Box4Intl.Box4Strings.l_BusinessBarODTDocument = 'Some compatibility issues could occur if you edit this file.';
Box4Intl.Box4Strings.l_BusinessBarODTDocumentDetailsLink = 'Details...';
Box4Intl.Box4Strings.l_SectionLockedInfoText = 'This section is read-only.';
Box4Intl.Box4Strings.l_CanvasSizeExceededTitle = 'This page exceeds the drawing dimensions.';
Box4Intl.Box4Strings.l_CanvasSizeExceededMessage = 'Please draw only within the border.';
Box4Intl.Box4Strings.l_ApplyStylesCommand = 'Apply Styles\u2026';
Box4Intl.Box4Strings.l_CreateNewStyleCommand = 'Create New Style from Formatting\u2026';
Box4Intl.Box4Strings.l_BusinessBarUnsupportedObjectsOnPage = 'This {subdoctype} contains items that can\'t be displayed in {webappshort} in a browser.  Open this {doctype} in the desktop version of {richclientfull} to see all content.';
Box4Intl.Box4Strings.l_NotificationBarProofingUnavailave = 'Spell Checking Unavailable';
Box4Intl.Box4Strings.l_NotificationBarCtrlF6Loop = 'Press CTRL+F6 to move around {webappshort}. Press Alt Shift A for Accessibility Help.';
Box4Intl.Box4Strings.l_EmptyNotebookFishbowlTitle = 'This notebook is empty.';
Box4Intl.Box4Strings.l_EmptyNotebookFishbowlText_EditMode = 'Click here or press ENTER to create a new section.';
Box4Intl.Box4Strings.l_EmptyNotebookFishbowlText_ReadingMode = 'Edit this notebook to create a new section.';
Box4Intl.Box4Strings.l_EmptySectionGroupFishbowlTitle = 'This section group is empty.';
Box4Intl.Box4Strings.l_EmptySectionFishbowlTitle = 'This section is empty.';
Box4Intl.Box4Strings.l_EmptySectionFishbowlText_EditMode = 'Click here or press ENTER to create a new page.';
Box4Intl.Box4Strings.l_EmptySectionFishbowlText_ReadingMode = 'Edit this notebook to create a new page.';
Box4Intl.Box4Strings.l_NoSectionGroupSelectedFishbowlTitle = 'No section group selected.';
Box4Intl.Box4Strings.l_NoSectionGroupSelectedFishbowlText_EditMode = 'Select a section group to open it. Or, click here or press ENTER to create a new section.';
Box4Intl.Box4Strings.l_NoSectionGroupSelectedFishbowlText_ReadingMode = 'Select a section group to open it, or edit this notebook to create a new section.';
Box4Intl.Box4Strings.l_OldSectionFishbowlTitle = 'Can\'t Open File';
Box4Intl.Box4Strings.l_OldSectionFishbowlText = 'Sorry, {webappshort} can\'t open this file in a browser because it was created in an older desktop version of {richclientfull}. Click here or press ENTER to open this file in the desktop version of {richclientfull}.';
Box4Intl.Box4Strings.l_FutureSectionFishbowlTitle = 'Can\'t Open File';
Box4Intl.Box4Strings.l_FutureSectionFishbowlText = 'Sorry, {webappshort} can\'t open this file in a browser because it was created in a later desktop version of {richclientfull}. Click here or press ENTER to open this file in the desktop version of {richclientfull}.';
Box4Intl.Box4Strings.l_FuturePageFishbowlTitle = 'Can\'t View Page';
Box4Intl.Box4Strings.l_FuturePageFishbowlText = 'Sorry, {webappshort} can\'t view this page in a browser because it was created in a later desktop version of {richclientfull}. Click here or press ENTER to open this file in the desktop version of {richclientfull}.';
Box4Intl.Box4Strings.l_CorruptSectionFishbowlTitle = 'Corrupt Section';
Box4Intl.Box4Strings.l_CorruptSectionFishbowlText = 'This section appears to be corrupt and can\'t be opened in {webappshort} in a browser. Click here or press ENTER to open this section in the desktop version of {richclientfull} which might be able to repair it.';
Box4Intl.Box4Strings.l_CorruptPageFishbowlTitle = 'Corrupt Page';
Box4Intl.Box4Strings.l_CorruptPageFishbowlText = 'This page appears to be corrupt and can\'t be opened in {webappshort} in a browser. Click here or press ENTER to open this page in the desktop version of {richclientfull} which might be able to repair it.';
Box4Intl.Box4Strings.l_PasswordProtectedSectionFishbowlTitle = 'Section Password Protected';
Box4Intl.Box4Strings.l_PasswordProtectedSectionFishbowlUnlockText = 'This section is password protected. Click here or press ENTER to unlock it.';
Box4Intl.Box4Strings.l_UnsupportedPasswordProtectedSectionFishbowlText = 'Sorry, {webappshort} can\'t open this password-protected section in a browser. Click here or press ENTER to open this section in the desktop version of {richclientfull}.';
Box4Intl.Box4Strings.l_PermissionDeniedSectionFishbowlTitle = 'Permission Required';
Box4Intl.Box4Strings.l_PermissionDeniedSectionFishbowlText = 'You don\'t have permission to read this section.';
Box4Intl.Box4Strings.l_PermissionDeniedFolderFishbowlTitle = 'Permission Required';
Box4Intl.Box4Strings.l_PermissionDeniedFolderFishbowlText = 'Sorry, the notebook couldn\'t be loaded because of a problem with permissions.';
Box4Intl.Box4Strings.l_PageContentUnavailableFishbowlTitle = 'Content Not Yet Available';
Box4Intl.Box4Strings.l_PageContentUnavailableFishbowlText = 'Sorry, it looks like this page was added from another computer and hasn\'t synced yet.  Click here or press ENTER to reload this page.';
Box4Intl.Box4Strings.l_GenericErrorFishbowlTitle = 'We\'re Sorry';
Box4Intl.Box4Strings.l_GenericErrorFishbowlText = 'Something went wrong and we couldn\'t load this content.  Refreshing the browser may fix the problem.';
Box4Intl.Box4Strings.l_ResponseTooLargeFishbowlTitle = 'Can\'t Open File';
Box4Intl.Box4Strings.l_ResponseTooLargeFishbowlText = 'Sorry, {webappshort} can\'t open this {doctype} in a browser because its file size is too big. Click here or press ENTER to open this {doctype} in the desktop version of {richclientfull}.';
Box4Intl.Box4Strings.l_PageIsBeingDeletedFishbowlTitle = 'Page Deleted';
Box4Intl.Box4Strings.l_PageIsBeingDeletedFishbowlText = 'This page has been deleted on another computer that hasn\'t synced yet. It will be removed once the sync is done.';
Box4Intl.Box4Strings.l_OneNoteSectionUpgradeNotSupportedFishbowlTitle = 'This section was originally created in an older version of OneNote.';
Box4Intl.Box4Strings.l_OneNoteSectionUpgradeNotSupportedFishbowlText = 'To convert and view its contents, download and then open the section as a local file using OneNote app.';
Box4Intl.Box4Strings.l_PasswordProtectedSectionLockButton = 'Lock';
Box4Intl.Box4Strings.l_PasswordProtectedSectionNoLockButton = 'Don\'t Lock';
Box4Intl.Box4Strings.l_PasswordProtectedSectionLockWarningMessage = 'Sorry, we couldn\'t save some of your changes. Locking this section will discard those changes. Are you sure you want to continue?';
Box4Intl.Box4Strings.l_DeletePageConflictDialogText = 'We couldn\'t delete {0} because someone else is editing it. To avoid accidentally deleting their content, please review the changes before trying to delete the page again.';
Box4Intl.Box4Strings.l_DeletePageUnknownErrorDialogText = 'Sorry, there was a problem when we tried to delete {0}. Please try to delete it again, or open the notebook in {richclientfull}.';
Box4Intl.Box4Strings.l_EditingSurfaceScreenReaderTitleMessage = 'Editing Area';
Box4Intl.Box4Strings.l_ReviewingSurfaceScreenReaderTitleMessage = 'Review Area';
Box4Intl.Box4Strings.l_ReadingSurfaceScreenReaderTitleMessage = 'Reading Area';
Box4Intl.Box4Strings.l_EditingSurfaceScreenReaderDescribedByMessage = 'Press Ctrl F6 to Leave. Press Alt Shift A for Accessibility Help.';
Box4Intl.Box4Strings.l_EditingSurfaceF2ScreenReaderDescribedByMessage = 'Press F2 to Leave.';
Box4Intl.Box4Strings.l_ScreenReaderBlockEditing = '{0} is editing this now. You can edit here as soon as {0} is finished.';
Box4Intl.Box4Strings.l_DeletePage = 'Delete...';
Box4Intl.Box4Strings.l_HideConflictPages = 'Hide Conflict Pages';
Box4Intl.Box4Strings.l_ConflictPageTitleFormat = '{0} {1}';
Box4Intl.Box4Strings.l_HideVersions = 'Hide versions';
Box4Intl.Box4Strings.l_RestoreVersion = 'Restore';
Box4Intl.Box4Strings.l_PageVersionTitleFormat = '{0} {1}';
Box4Intl.Box4Strings.l_UnknownAuthorInformation = 'Unknown author';
Box4Intl.Box4Strings.l_AuthorInfoScreenReaderText = 'Authored by {{0}}';
Box4Intl.Box4Strings.l_ConflictingPassageScreenReaderText = 'Conflicting change.';
Box4Intl.Box4Strings.l_ShapeObjectScreenReaderText = 'Shape';
Box4Intl.Box4Strings.l_TextboxObjectScreenReaderText = 'Text Box';
Box4Intl.Box4Strings.l_WordArtObjectScreenReaderText = 'WordArt';
Box4Intl.Box4Strings.l_InkObjectScreenReaderText = 'Ink';
Box4Intl.Box4Strings.l_ShapeObjectWithAltTextScreenReaderText = 'Shape {0}';
Box4Intl.Box4Strings.l_TextboxObjectWithAltTextScreenReaderText = 'Text Box {0}';
Box4Intl.Box4Strings.l_WordArtObjectWithAltTextScreenReaderText = 'WordArt {0}';
Box4Intl.Box4Strings.l_UnsupportedInkDisplayText = '[Drawing or Handwriting]';
Box4Intl.Box4Strings.l_UnsupportedAudioDisplayText = '[Audio]';
Box4Intl.Box4Strings.l_UnsupportedEmbeddedFileDisplayText = '[File]';
Box4Intl.Box4Strings.l_UnsupportedMathDisplayText = '[Equation]';
Box4Intl.Box4Strings.l_UnsupportedUnkownDisplayText = '[Unknown Object]';
Box4Intl.Box4Strings.l_UnsupportedLineBreak = '[Line Break]';
Box4Intl.Box4Strings.l_UnsupportedPicture = '[Picture]';
Box4Intl.Box4Strings.l_UnsupportedSmartArt = '[SmartArt]';
Box4Intl.Box4Strings.l_UnsupportedChart = '[Chart]';
Box4Intl.Box4Strings.l_UnsupportedOle = '[OLE Object]';
Box4Intl.Box4Strings.l_UnsupportedActiveX = '[Control]';
Box4Intl.Box4Strings.l_UnsupportedDrawing = '[Drawing]';
Box4Intl.Box4Strings.l_UnsupportedGroupDrawing = '[GroupDrawing]';
Box4Intl.Box4Strings.l_UnsupportedTextbox = '[Text Box]';
Box4Intl.Box4Strings.l_UnsupportedSDT = '[Content Control]';
Box4Intl.Box4Strings.l_UnsupportedField = '[Field]';
Box4Intl.Box4Strings.l_UnsupportedFieldBegin = '[';
Box4Intl.Box4Strings.l_UnsupportedFieldSeparator = '|';
Box4Intl.Box4Strings.l_UnsupportedFieldEnd = ']';
Box4Intl.Box4Strings.l_UnsupportedColumnBreak = 'Column Break';
Box4Intl.Box4Strings.l_UnsupportedPageBreak = 'Page Break';
Box4Intl.Box4Strings.l_UnsupportedTextWrappingBreak = '[Text Wrapping Break]';
Box4Intl.Box4Strings.l_UnsupportedSoftBreak = '[Soft Break]';
Box4Intl.Box4Strings.l_UnsupportedSectionBreak = 'Section Break';
Box4Intl.Box4Strings.l_SectionBreak = 'Section Break';
Box4Intl.Box4Strings.l_UnsupportedSymbol = '[Symbol]';
Box4Intl.Box4Strings.l_UnsupportedEndnoteRef = '[Endnote]';
Box4Intl.Box4Strings.l_UnsupportedFootnoteRef = '[Footnote]';
Box4Intl.Box4Strings.l_UnsupportedRuby = '[Ruby]';
Box4Intl.Box4Strings.l_UnsupportedServerDeletedContent = '[Another author deleted this content.]';
Box4Intl.Box4Strings.l_UnsupportedClientDeletedContent = '[You deleted this content.]';
Box4Intl.Box4Strings.l_UnsupportedTooltip = 'Sorry, {webappshort} can\'t display this item in a browser. To view and edit this object, please open this {doctype} in the desktop version of {richclientfull}.';
Box4Intl.Box4Strings.l_UnsupportedNodeCutWarning = 'Sorry, {webappshort} can\'t cut this content.  Please try copying it instead.';
Box4Intl.Box4Strings.l_UnsupportedNodeCutWarningNoCopy = 'Sorry, {webappshort} can\'t cut this content.';
Box4Intl.Box4Strings.l_WebEditingDisabled = 'Sorry, you don\'t have a license to edit {doctypeplural} with {webappshort}. Please get in touch with your helpdesk.';
Box4Intl.Box4Strings.l_OldSectionText = 'Sorry, {webappshort} can\'t open this section in a browser because it was created in a desktop version of {richclientfull} older than {richclientfull14}. To view this section in {webappshort} in a browser, please open it in the desktop version of {richclientfull} and upgrade it to the latest file format.';
Box4Intl.Box4Strings.l_GhostCellTooltip = 'Sorry, these cells contain content that can\'t be displayed in {webappshort}';
Box4Intl.Box4Strings.l_EmptyEquationText = 'Type your equation here.';
Box4Intl.Box4Strings.l_LoadingEquationText = 'Loading...';
Box4Intl.Box4Strings.l_EnterSectionName = 'Enter a section name:';
Box4Intl.Box4Strings.l_BlankSectionNameAlert = 'Section names can\'t be blank.';
Box4Intl.Box4Strings.l_SectionNameTooLongAlert = 'This section name is too long.  Section names can\'t be more than 50 characters long.';
Box4Intl.Box4Strings.l_SectionNameInUseAlert = 'This notebook already has a section with that name.';
Box4Intl.Box4Strings.l_SectionNameInvalidCharactersAlert = 'Section names can\'t contain any of the following characters: ~ # % & * { } | \\ : \" < > ? / ^';
Box4Intl.Box4Strings.l_ConsecutivePeriodsAlert = 'Section names can\'t contain consecutive periods.';
Box4Intl.Box4Strings.l_LeadingPeriodAlert = 'Section names can\'t start with a period.';
Box4Intl.Box4Strings.l_TrailingPeriodAlert = 'Section names can\'t end with a period.';
Box4Intl.Box4Strings.l_InvalidFileNameAlert = 'The section name you chose is a protected file name. Please choose another name.';
Box4Intl.Box4Strings.l_NameSectionTitle = 'Section Name';
Box4Intl.Box4Strings.l_RenameSectionTitle = 'Section Name';
Box4Intl.Box4Strings.l_Rename = 'Rename...';
Box4Intl.Box4Strings.l_DeleteSection = 'Delete...';
Box4Intl.Box4Strings.l_SectionColor = 'Section Color';
Box4Intl.Box4Strings.l_LockSection = 'Lock Section';
Box4Intl.Box4Strings.l_DeleteSectionConfirmation = 'Be careful! Deleting a section can\'t be undone. Are you sure you want to permanently delete this section and all of its pages?';
Box4Intl.Box4Strings.l_DeletePageConfirmation = 'Be careful! Deleting a page can\'t be undone. Are you sure you want to permanently delete this page?';
Box4Intl.Box4Strings.l_DeletePageWithConflictsConfirmation = 'Be careful! Deleting a page cannot be undone. Are you sure you want to delete this page and all of its conflict pages?';
Box4Intl.Box4Strings.l_MovePageToNewSectionConfirmation = 'Be careful! Moving a page to a new section will delete version and conflict information. Do you want to continue?';
Box4Intl.Box4Strings.l_DownloadEmbeddedFileTitle = 'Download File';
Box4Intl.Box4Strings.l_DownloadEmbeddedFileMessage = 'We can\'t open this file from {webappshort}. Would you like to download a copy?';
Box4Intl.Box4Strings.l_DownloadEmbeddedFileYesButton = 'Download';
Box4Intl.Box4Strings.l_DownloadEmbeddedFileNoButton = 'Cancel';
Box4Intl.Box4Strings.l_CoAuthPlaceholderNeedRefresh = 'Updates are available. Please save your document to refresh this area.';
Box4Intl.Box4Strings.l_CoAuthLockedParagraphContext = 'Paragraph locked by {0}';
Box4Intl.Box4Strings.l_CoAuthLockedTableContext = 'Table locked by {0}';
Box4Intl.Box4Strings.l_EditorsToastEnteredPage = '{0} has entered this page.';
Box4Intl.Box4Strings.l_EditorsToastExitedPage = '{0} has exited this page.';
Box4Intl.Box4Strings.l_EditorsToastArriving = '{0} is editing this {doctype}.';
Box4Intl.Box4Strings.l_EditorsToastLeaving = '{0} is no longer editing this {doctype}.';
Box4Intl.Box4Strings.l_ViewersToastArriving = '{0} is viewing this {doctype}.';
Box4Intl.Box4Strings.l_ViewersToastLeaving = '{0} is no longer viewing this {doctype}.';
Box4Intl.Box4Strings.l_EditorsToastGeneralOpen = '{0} other people are editing this {doctype}.';
Box4Intl.Box4Strings.l_EditorsToastMultiEnter = '{0} people entered the {doctype}.';
Box4Intl.Box4Strings.l_EditorsToastMultiEnterPage = '{0} people entered the page.';
Box4Intl.Box4Strings.l_EditorsToastMultiLeave = '{0} people left the {doctype}.';
Box4Intl.Box4Strings.l_EditorsToastMultiLeavePage = '{0} people left the page.';
Box4Intl.Box4Strings.l_EditorsToastOneEnterAndMultiLeave = '1 person entered and {0} people left.';
Box4Intl.Box4Strings.l_EditorsToastOneEnterAndMultiLeavePage = '1 person entered this page and {0} people left this page.';
Box4Intl.Box4Strings.l_EditorsToastMultiEnterAndOneLeave = '{0} people entered and 1 person left.';
Box4Intl.Box4Strings.l_EditorsToastMultiEnterAndOneLeavePage = '{0} people entered this page and 1 person left this page.';
Box4Intl.Box4Strings.l_EditorsToastMultiEnterAndLeave = '{0} people entered and {1} people left.';
Box4Intl.Box4Strings.l_EditorsToastMultiEnterAndLeavePage = '{0} people entered this page and {1} people left this page.';
Box4Intl.Box4Strings.l_Refresh = 'Refresh';
Box4Intl.Box4Strings.l_ExtendSession = 'Refresh';
Box4Intl.Box4Strings.l_Reconnect = 'Reconnect';
Box4Intl.Box4Strings.l_Reload = 'Reload';
Box4Intl.Box4Strings.L_SessionExtensionMessageTitle = 'Sorry, your session expired.';
Box4Intl.Box4Strings.L_SessionExtensionMessageDescription = 'Please refresh the page to continue.';
Box4Intl.Box4Strings.L_SessionExpiredMessageTitle = 'Sorry, your session expired.';
Box4Intl.Box4Strings.L_SessionExpiredMessageDescription = 'Please refresh the page to continue.';
Box4Intl.Box4Strings.l_SearchHiddenLabel = 'Search';
Box4Intl.Box4Strings.l_SearchScopeDefault = 'Search this Section (Ctrl+E)';
Box4Intl.Box4Strings.l_SearchScopeIpad = 'Search this Section';
Box4Intl.Box4Strings.l_SearchScopeMac = 'Search this Section (Cmd+E)';
Box4Intl.Box4Strings.l_FindScopeDefault = 'Find on this Page (Ctrl+F)';
Box4Intl.Box4Strings.l_FindScopeIpad = 'Find on this Page';
Box4Intl.Box4Strings.l_FindScopeMac = 'Find on this Page (Cmd+F)';
Box4Intl.Box4Strings.l_PreviousButtonAltText = 'Previous Match (Shift+F3)';
Box4Intl.Box4Strings.l_NextButtonAltText = 'Next Match (F3)';
Box4Intl.Box4Strings.l_Searching = 'Searching';
Box4Intl.Box4Strings.l_SearchTooltip = 'Search';
Box4Intl.Box4Strings.l_SearchCancelTooltip = 'Cancel Search';
Box4Intl.Box4Strings.l_NoMatchesFind = 'No matches';
Box4Intl.Box4Strings.l_MatchesTextFind = 'Match {0} of {1}';
Box4Intl.Box4Strings.l_NoMatchesSearchingOther = 'Not found on this page. Searching more pages.';
Box4Intl.Box4Strings.l_MatchesTextSearchingOther = 'Found in {0} of {1} places on this page. Searching more pages.';
Box4Intl.Box4Strings.l_NoMatchesSearch = 'Not found in this section.';
Box4Intl.Box4Strings.l_MatchesOtherPage = 'Found on highlighted page.';
Box4Intl.Box4Strings.l_MatchesMultiPages = 'Found on highlighted pages.';
Box4Intl.Box4Strings.l_MatchesTextSearch = 'Found in {0} of {1} places on this page.';
Box4Intl.Box4Strings.l_MatchesTextWithOtherPage = 'Found in {0} of {1} places on this page and found on highlighted page.';
Box4Intl.Box4Strings.l_MatchesTextWithMultiOtherPages = 'Found in {0} of {1} places on this page and found on highlighted pages.';
Box4Intl.Box4Strings.L_MenuStandardColors = 'Standard Colors';
Box4Intl.Box4Strings.L_Automatic = 'Automatic';
Box4Intl.Box4Strings.L_ClearFormatting = 'Clear Formatting';
Box4Intl.Box4Strings.L_Copy = 'Copy';
Box4Intl.Box4Strings.L_Cut = 'Cut';
Box4Intl.Box4Strings.L_DecreaseIndent = 'Decrease Indent';
Box4Intl.Box4Strings.L_Delete = 'Delete';
Box4Intl.Box4Strings.L_EditInWord = 'Open in Desktop App';
Box4Intl.Box4Strings.L_ProtectDocument = 'Protect Document';
Box4Intl.Box4Strings.L_FontColorBlue = 'Blue';
Box4Intl.Box4Strings.L_FontColorDarkBlue = 'Dark Blue';
Box4Intl.Box4Strings.L_FontColorDarkGreen = 'Dark Green';
Box4Intl.Box4Strings.L_FontColorDarkRed = 'Dark Red';
Box4Intl.Box4Strings.L_FontColorLightBlue = 'Light Blue';
Box4Intl.Box4Strings.L_FontColorLightGreen = 'Light Green';
Box4Intl.Box4Strings.L_FontColorOrange = 'Orange';
Box4Intl.Box4Strings.L_FontColorPurple = 'Purple';
Box4Intl.Box4Strings.L_FontColorRed = 'Red';
Box4Intl.Box4Strings.L_FontColorYellow = 'Yellow';
Box4Intl.Box4Strings.L_FormatPainter = 'Format Painter';
Box4Intl.Box4Strings.L_IncreaseIndent = 'Increase Indent';
Box4Intl.Box4Strings.L_OpenInWord = 'Open in Desktop App';
Box4Intl.Box4Strings.L_OpenInReadingView = 'Open in Reading View';
Box4Intl.Box4Strings.L_Paste = 'Paste';
Box4Intl.Box4Strings.L_PasteWithSourceTheme = 'Keep Source Formatting';
Box4Intl.Box4Strings.L_PasteWithDestinationTheme = 'Use Destination Theme';
Box4Intl.Box4Strings.L_PasteOptions = 'Paste Options:';
Box4Intl.Box4Strings.L_PasteOptionsWithCtrl = 'Paste Options (Ctrl)';
Box4Intl.Box4Strings.L_PasteTextOnly = 'Paste Text Only';
Box4Intl.Box4Strings.L_PasteWithMergedFormatting = 'Merge Formatting';
Box4Intl.Box4Strings.L_SetLanguageMenu = 'Set Proofing Language...';
Box4Intl.Box4Strings.L_ShowVersionsContextMenu = 'Show Versions';
Box4Intl.Box4Strings.L_StyleHeading1 = 'Heading 1';
Box4Intl.Box4Strings.L_StyleHeading2 = 'Heading 2';
Box4Intl.Box4Strings.L_StyleHeading3 = 'Heading 3';
Box4Intl.Box4Strings.L_StyleHeading4 = 'Heading 4';
Box4Intl.Box4Strings.L_StyleHeading5 = 'Heading 5';
Box4Intl.Box4Strings.L_StyleHeading6 = 'Heading 6';
Box4Intl.Box4Strings.L_StyleCitation = 'Citation';
Box4Intl.Box4Strings.L_StyleCode = 'Code';
Box4Intl.Box4Strings.L_StyleQuote = 'Quote';
Box4Intl.Box4Strings.L_StyleNormal = 'Normal';
Box4Intl.Box4Strings.L_StyleTitle = 'Title';
Box4Intl.Box4Strings.L_StyleDateTime = 'DateTime';
Box4Intl.Box4Strings.L_StylePreviewSampleText = 'AaBbCc';
Box4Intl.Box4Strings.L_StyleWordDefaultParagraphFont = 'Default Paragraph Font';
Box4Intl.Box4Strings.L_NoStyles = 'No Styles';
Box4Intl.Box4Strings.L_StyleWordNormal = 'Normal';
Box4Intl.Box4Strings.L_StyleWordHeading1 = 'Heading 1';
Box4Intl.Box4Strings.L_StyleWordHeading2 = 'Heading 2';
Box4Intl.Box4Strings.L_StyleWordHeading3 = 'Heading 3';
Box4Intl.Box4Strings.L_StyleWordHeading4 = 'Heading 4';
Box4Intl.Box4Strings.L_StyleWordHeading5 = 'Heading 5';
Box4Intl.Box4Strings.L_StyleWordHeading6 = 'Heading 6';
Box4Intl.Box4Strings.L_StyleWordHeading7 = 'Heading 7';
Box4Intl.Box4Strings.L_StyleWordHeading8 = 'Heading 8';
Box4Intl.Box4Strings.L_StyleWordHeading9 = 'Heading 9';
Box4Intl.Box4Strings.L_StyleWordTitle = 'Title';
Box4Intl.Box4Strings.L_StyleWordSubtitle = 'Subtitle';
Box4Intl.Box4Strings.L_StyleWordSubtleEmphasis = 'Subtle Emphasis';
Box4Intl.Box4Strings.L_StyleWordEmphasis = 'Emphasis';
Box4Intl.Box4Strings.L_StyleWordIntenseEmphasis = 'Intense Emphasis';
Box4Intl.Box4Strings.L_StyleWordStrong = 'Strong';
Box4Intl.Box4Strings.L_StyleWordQuote = 'Quote';
Box4Intl.Box4Strings.L_StyleWordIntenseQuote = 'Intense Quote';
Box4Intl.Box4Strings.L_StyleWordSubtleReference = 'Subtle Reference';
Box4Intl.Box4Strings.L_StyleWordIntenseReference = 'Intense Reference';
Box4Intl.Box4Strings.L_StyleWordBookTitle = 'Book Title';
Box4Intl.Box4Strings.L_StyleWordListParagraph = 'List Paragraph';
Box4Intl.Box4Strings.L_StyleWordHyperlink = 'Hyperlink';
Box4Intl.Box4Strings.L_StyleWordNoSpacing = 'No Spacing';
Box4Intl.Box4Strings.L_StyleWordEndnoteReference = 'Endnote Reference';
Box4Intl.Box4Strings.L_StyleWordEndnoteText = 'Endnote Text';
Box4Intl.Box4Strings.L_StyleWordFooter = 'Footer';
Box4Intl.Box4Strings.L_StyleWordFootnoteReference = 'Footnote Reference';
Box4Intl.Box4Strings.L_StyleWordFootnoteText = 'Footnote Text';
Box4Intl.Box4Strings.L_StyleWordHeader = 'Header';
Box4Intl.Box4Strings.L_StyleWordMention = 'Mention';
Box4Intl.Box4Strings.L_LearnMore = 'Learn More';
Box4Intl.Box4Strings.L_SpinnerAuto = 'Auto';
Box4Intl.Box4Strings.L_RibbonOptionTextDirection = 'ltr';
Box4Intl.Box4Strings.L_BtnClearShading = 'No Color';
Box4Intl.Box4Strings.L_MenuShadingColor = 'Cell Shading';
Box4Intl.Box4Strings.L_GroupShading = 'Shading';
Box4Intl.Box4Strings.L_Activity = 'Edit Activity';
Box4Intl.Box4Strings.L_ShowActivity = 'Show Edit Activity';
Box4Intl.Box4Strings.L_ActivityFeed_BootPlaceholder = 'See who\u2019s been doing what in this {doctype}. No activities to show yet.';
Box4Intl.Box4Strings.L_ActivityFeed_Error = 'Sorry, we can\u2019t keep track of activities anymore.';
Box4Intl.Box4Strings.L_ActivityFeedTimeElementFormat = '{0} - {1}';
Box4Intl.Box4Strings.L_ActivityFeedInfo = 'See who\u2019s been doing what in this {doctype}. The list of activities starts over when the {doctype} is closed.';
Box4Intl.Box4Strings.L_ActivityNavigationInfo = 'Use the up and down arrow keys to navigate.';
Box4Intl.Box4Strings.L_ParagraphEdited = '{0} made changes.';
Box4Intl.Box4Strings.L_CommentAdded = '{0} made a comment.';
Box4Intl.Box4Strings.L_CommentEdited = '{0} edited a comment.';
Box4Intl.Box4Strings.L_CommentDeleted = '{0} deleted a comment.';
Box4Intl.Box4Strings.L_ImageAdded = '{0} added a picture.';
Box4Intl.Box4Strings.L_ImageDeleted = '{0} deleted a picture.';
Box4Intl.Box4Strings.L_TableAdded = '{0} added a table.';
Box4Intl.Box4Strings.L_TableEdited = '{0} edited a table.';
Box4Intl.Box4Strings.L_TableDeleted = '{0} deleted a table.';
Box4Intl.Box4Strings.L_ParagraphEditedBy2 = '{0} and {1} made changes.';
Box4Intl.Box4Strings.L_TableEditedBy2 = '{0} and {1} edited a table.';
Box4Intl.Box4Strings.L_ParagraphEditedByMany = '{0} and {1} others made changes.';
Box4Intl.Box4Strings.L_TableEditedByMany = '{0} and {1} others edited a table.';
Box4Intl.Box4Strings.L_OpenAccessibilityCheckerPane = 'Check Accessibility';
Box4Intl.Box4Strings.L_Accessibility = 'Accessibility';
Box4Intl.Box4Strings.l_RecycleBinSectionName = 'Recycle Bin';
Box4Intl.Box4Strings.l_ThemeLabel1 = 'Background 1';
Box4Intl.Box4Strings.l_ThemeLabel2 = 'Text 1';
Box4Intl.Box4Strings.l_ThemeLabel3 = 'Background 2';
Box4Intl.Box4Strings.l_ThemeLabel4 = 'Text 2';
Box4Intl.Box4Strings.l_ThemeLabel5 = 'Accent 1';
Box4Intl.Box4Strings.l_ThemeLabel6 = 'Accent 2';
Box4Intl.Box4Strings.l_ThemeLabel7 = 'Accent 3';
Box4Intl.Box4Strings.l_ThemeLabel8 = 'Accent 4';
Box4Intl.Box4Strings.l_ThemeLabel9 = 'Accent 5';
Box4Intl.Box4Strings.l_ThemeLabel10 = 'Accent 6';
Box4Intl.Box4Strings.l_ColorPickerTooltipBase = '{0}, {1}';
Box4Intl.Box4Strings.l_ColorPickerTooltipTint = '{0}, {1}, Lighter {2}%';
Box4Intl.Box4Strings.l_ColorPickerTooltipShade = '{0}, {1}, Darker {2}%';
Box4Intl.Box4Strings.l_NotebookColorNone = 'None';
Box4Intl.Box4Strings.l_NotebookColorBlue = 'Blue';
Box4Intl.Box4Strings.l_NotebookColorYellow = 'Yellow';
Box4Intl.Box4Strings.l_NotebookColorGreen = 'Green';
Box4Intl.Box4Strings.l_NotebookColorRed = 'Red';
Box4Intl.Box4Strings.l_NotebookColorPurple = 'Purple';
Box4Intl.Box4Strings.l_NotebookColorCyan = 'Cyan';
Box4Intl.Box4Strings.l_NotebookColorOrange = 'Orange';
Box4Intl.Box4Strings.l_NotebookColorMagenta = 'Magenta';
Box4Intl.Box4Strings.l_NotebookColorBlueMist = 'Blue Mist';
Box4Intl.Box4Strings.l_NotebookColorPurpleMist = 'Purple Mist';
Box4Intl.Box4Strings.l_NotebookColorTan = 'Tan';
Box4Intl.Box4Strings.l_NotebookColorLemon = 'Lemon Lime';
Box4Intl.Box4Strings.l_NotebookColorApple = 'Apple';
Box4Intl.Box4Strings.l_NotebookColorTeal = 'Teal';
Box4Intl.Box4Strings.l_NotebookColorRedChalk = 'Red Chalk';
Box4Intl.Box4Strings.l_NotebookColorSilver = 'Silver';
Box4Intl.Box4Strings.l_DeleteRepeatedWord = 'Delete Repeated Word';
Box4Intl.Box4Strings.l_NoSuggestions = 'No suggestions';
Box4Intl.Box4Strings.l_SuggestionsNotInDictionaryAriaLabelFormat = '{0}. {1}. Not in Dictionary. Suggestions ';
Box4Intl.Box4Strings.l_SuggestionsAriaLabelFormat = '{0} suggestions {1}';
Box4Intl.Box4Strings.l_SuggestionsAriaLabelFormatForSuggestionDescriptions = '{0} {1}';
Box4Intl.Box4Strings.l_SuggestionDescriptionAriaDescribedByFormat = ', Similar to: ';
Box4Intl.Box4Strings.l_SuggestionsMenuAriaRoleDescription = 'submenu';
Box4Intl.Box4Strings.l_NoReferenceInformation = '[No reference information]';
Box4Intl.Box4Strings.l_IgnoreSpellingError = 'Ignore';
Box4Intl.Box4Strings.l_IgnoreOnceSpellingError = 'Ignore Once';
Box4Intl.Box4Strings.l_IgnoreAllSpellingErrors = 'Ignore All';
Box4Intl.Box4Strings.l_DoNotCheckForThisIssue = 'Don\'t Check for This Issue';
Box4Intl.Box4Strings.l_GrammarOptions = 'Options';
Box4Intl.Box4Strings.l_TableInsertSubMenu = 'Insert';
Box4Intl.Box4Strings.l_TableInsertDialog = 'Insert Table';
Box4Intl.Box4Strings.l_TableDeleteSubMenu = 'Delete';
Box4Intl.Box4Strings.l_TableSelectSubMenu = 'Select';
Box4Intl.Box4Strings.l_TableAltText = 'Edit Alt Text...';
Box4Intl.Box4Strings.l_TableInsertColumnLeftMenuItem = 'Insert Column to the Left';
Box4Intl.Box4Strings.l_TableInsertColumnRightMenuItem = 'Insert Column to the Right';
Box4Intl.Box4Strings.l_TableInsertRowAboveMenuItem = 'Insert Row Above';
Box4Intl.Box4Strings.l_TableInsertRowBelowMenuItem = 'Insert Row Below';
Box4Intl.Box4Strings.l_TableDeleteTableMenuItem = 'Delete Table';
Box4Intl.Box4Strings.l_TableDeleteColumnMenuItem = 'Delete Column';
Box4Intl.Box4Strings.l_TableDeleteRowMenuItem = 'Delete Row';
Box4Intl.Box4Strings.l_TableSelectCellMenuItem = 'Select Cell';
Box4Intl.Box4Strings.l_TableSelectColumnMenuItem = 'Select Column';
Box4Intl.Box4Strings.l_TableSelectRowMenuItem = 'Select Row';
Box4Intl.Box4Strings.l_TableSelectTableMenuItem = 'Select Table';
Box4Intl.Box4Strings.L_TableMergeSplit = 'Merge';
Box4Intl.Box4Strings.L_MergeCells = 'Merge Cells';
Box4Intl.Box4Strings.L_SplitCells = 'Split Cells';
Box4Intl.Box4Strings.l_TableSizeHoverMessage = 'Enter a whole number from {0} to {1}';
Box4Intl.Box4Strings.l_TableOverSizeWarningMessage = 'The entry must be less than or equal to {0}';
Box4Intl.Box4Strings.l_TableNonNegUnderSizeWarningMessage = 'The entry must be greater or equal to {0}';
Box4Intl.Box4Strings.l_TableNegUnderSizeWarningMessage = 'The entry must be a positive number';
Box4Intl.Box4Strings.l_TableNonNumericWarningMessage = 'The entry cannot contain any characters that are not numeric';
Box4Intl.Box4Strings.l_TableNotMultipleOrFactorOfSpanWarningMessage = 'The entry must be a multiple or factor of {0}';
Box4Intl.Box4Strings.l_TableDialogColumnLabelText = 'Number of columns:';
Box4Intl.Box4Strings.l_TableDialogRowLabelText = 'Number of rows:';
Box4Intl.Box4Strings.l_HyperlinkContextMenuItem = 'Link...';
Box4Intl.Box4Strings.l_EditHyperlink = 'Edit Link...';
Box4Intl.Box4Strings.l_SelectHyperlink = 'Select Link';
Box4Intl.Box4Strings.l_OpenHyperlink = 'Open Link';
Box4Intl.Box4Strings.l_CopyHyperlink = 'Copy Link';
Box4Intl.Box4Strings.l_RemoveHyperlink = 'Remove Link';
Box4Intl.Box4Strings.l_OutlineMove = 'Move';
Box4Intl.Box4Strings.l_OutlineResize = 'Resize';
Box4Intl.Box4Strings.l_StartNewList = 'Start New List';
Box4Intl.Box4Strings.l_ContinueNumberingList = 'Continue Numbering';
Box4Intl.Box4Strings.l_SetNumberingValueList = 'Set Numbering Value';
Box4Intl.Box4Strings.l_StartNewListDialog = 'Start new list';
Box4Intl.Box4Strings.l_ContinueFromPreviousList = 'Continue from previous list';
Box4Intl.Box4Strings.l_SetValueTo = 'Set value to:';
Box4Intl.Box4Strings.l_ListValueTooSmall = 'This value is less than the previous entry in the list.';
Box4Intl.Box4Strings.l_UseLargerListValue = 'Use a value that is greater than the previous entry in the list.';
Box4Intl.Box4Strings.L_SelectAllButton = 'Select All';
Box4Intl.Box4Strings.L_GroupShapesUpSell = 'Looking for Group Shapes?';
Box4Intl.Box4Strings.L_SpellCheckDictUpSell = 'Looking for Spell Check?';
Box4Intl.Box4Strings.L_InsertAudioUpSell = 'Looking for Insert Audio?';
Box4Intl.Box4Strings.L_WordArtUpSell = 'Looking for WordArt?';
Box4Intl.Box4Strings.L_InsertChartUpSell = 'Looking for Charts?';
Box4Intl.Box4Strings.L_DesktopFeature = 'Feature available in PowerPoint';
Box4Intl.Box4Strings.L_OpenInDesktopPowerPoint = 'Open in PowerPoint';
Box4Intl.Box4Strings.L_OpenInDesktopDescription = 'Use the desktop version of Microsoft PowerPoint.';
Box4Intl.Box4Strings.L_DesktopUpSellTitle = 'Don\'t have PowerPoint?';
Box4Intl.Box4Strings.L_DesktopUpSellDescription = 'Get the latest version now - upgrade to Office 365!';
Box4Intl.Box4Strings.L_ThemeFontIndicatorMinor = '{0} (Body)';
Box4Intl.Box4Strings.L_ThemeFontIndicatorMajor = '{0} (Headings)';
Box4Intl.Box4Strings.l_HK_Bold = 'B:C';
Box4Intl.Box4Strings.l_HK_Bold_Mac = 'B:X';
Box4Intl.Box4Strings.l_HK_Italic = 'I:C';
Box4Intl.Box4Strings.l_HK_Italic_Mac = 'I:X';
Box4Intl.Box4Strings.l_HK_Underline = 'U:C';
Box4Intl.Box4Strings.l_HK_Underline_Mac = 'U:X';
Box4Intl.Box4Strings.l_HK_LeftJustify = 'L:C';
Box4Intl.Box4Strings.l_HK_LeftJustify_Mac = 'L:S:M';
Box4Intl.Box4Strings.l_HK_CenterJustify = 'E:X';
Box4Intl.Box4Strings.l_HK_RightJustify = 'R:C';
Box4Intl.Box4Strings.l_HK_RightJustify_Mac = 'R:S:M';
Box4Intl.Box4Strings.l_HK_Undo = 'Z:X';
Box4Intl.Box4Strings.l_HK_Redo = 'Y:X';
Box4Intl.Box4Strings.l_HK_SelectAll = 'A:X';
Box4Intl.Box4Strings.l_HK_ClearFormatting = '0:S:X';
Box4Intl.Box4Strings.l_HK_Hyperlink = 'K:X';
Box4Intl.Box4Strings.l_HK_Save = 'S:X';
Box4Intl.Box4Strings.l_HK_Search = 'E:X';
Box4Intl.Box4Strings.l_HK_Find = 'F:X';
Box4Intl.Box4Strings.l_HK_GoTo = 'G:X';
Box4Intl.Box4Strings.l_HK_TellMe = 'Q:A';
Box4Intl.Box4Strings.l_LoadingFullDocument = 'Loading Full Document';
Box4Intl.Box4Strings.l_DocumentFinishedLoading = 'Your document has finished loading. When you dismiss this message you will be returned to your document.';
Box4Intl.Box4Strings.l_DocumentFinishedLoadingDialogTitle = 'Document Loading Complete';
Box4Intl.Box4Strings.l_LoadingAdditionalContent = 'Loading additional document content';
Box4Intl.Box4Strings.l_UserJoiningParagraph = '{0} is now editing this paragraph';
Box4Intl.Box4Strings.l_UserLeavingParagraph = '{0} is no longer editing this paragraph';
Box4Intl.Box4Strings.l_OtherUsersEditingParagraphMany = '{0} are editing this paragraph';
Box4Intl.Box4Strings.l_OtherUsersEditingParagraphSingle = '{0} is editing this paragraph';
Box4Intl.Box4Strings.l_DisplayNameSeparator = ' and ';
Box4Intl.Box4Strings.l_IntentSuggestion = 'Intent Suggestion';
Box4Intl.Box4Strings.l_ContentTypeLeavingNotificationFormat = 'Leaving {0}.';
Box4Intl.Box4Strings.l_ContentDeleteNotificationFormat = '{0} Deleted.';
Box4Intl.Box4Strings.l_ContentTypeEnteringNotificationFormat = '{0}.';
Box4Intl.Box4Strings.l_AccessibleContentDetailsFormat = '{0} {1}';
Box4Intl.Box4Strings.l_CharacterFormattingContentTitle = 'Style';
Box4Intl.Box4Strings.l_HyperlinkContentTitle = 'Link';
Box4Intl.Box4Strings.l_EquationContentTitle = 'Equation';
Box4Intl.Box4Strings.l_ImageContentTitle = 'Image';
Box4Intl.Box4Strings.l_SpellingErrorContentTitle = 'Spelling Error';
Box4Intl.Box4Strings.l_GrammaticalErrorContentTitle = 'Grammatical Error';
Box4Intl.Box4Strings.l_AdvancedProofingIssueContentTitle = 'Advanced Proofing Issue';
Box4Intl.Box4Strings.l_TableContentTitle = 'Table';
Box4Intl.Box4Strings.l_TableContentDetailsFormat = 'Table {0} by {1}';
Box4Intl.Box4Strings.l_TableContentDetailsColumnFormat = 'Column {0}';
Box4Intl.Box4Strings.l_TableContentDetailsRowFormat = 'Row {0}';
Box4Intl.Box4Strings.l_ListContentTitle = 'List';
Box4Intl.Box4Strings.l_ListContentDetailsItemFormat = 'Item {0}';
Box4Intl.Box4Strings.l_ListContentDetailsLevelFormat = 'Level {0}';
Box4Intl.Box4Strings.L_EmojiPlural = 'Emojis';
Box4Intl.Box4Strings.L_EmojiSingle = 'Emoji';
Box4Intl.Box4Strings.L_InsertMoreEmojis = 'More Emojis...';
Box4Intl.Box4Strings.L_InsertSymbolFriendlyName = 'Insert Symbol';
Box4Intl.Box4Strings.L_SymbolPlural = 'Symbols';
Box4Intl.Box4Strings.L_SymbolSingle = 'Symbol';
Box4Intl.Box4Strings.L_InsertMoreSymbols = 'More Symbols...';
Box4Intl.Box4Strings.L_SymbolUnicodeNameLabel = 'Unicode name:';
Box4Intl.Box4Strings.L_SymbolInsertButtonText = 'Insert';
Box4Intl.Box4Strings.L_RequestNewSymbol = 'Request a New Symbol';
Box4Intl.Box4Strings.L_Bullet = 'Bullet';
Box4Intl.Box4Strings.L_FontName = 'Font Name';
Box4Intl.Box4Strings.L_ListStyleNone = 'None';
Box4Intl.Box4Strings.L_ListLibraryTitle = 'List Library';
Box4Intl.Box4Strings.L_BulletsLibraryTitle = 'Bullet Library';
Box4Intl.Box4Strings.L_NumberingLibraryTitle = 'Numbering Library';
Box4Intl.Box4Strings.L_BulletsInDocumentTitle = 'Document Bullets';
Box4Intl.Box4Strings.L_NumberingInDocumentTitle = 'Document Number Formats';
Box4Intl.Box4Strings.L_MultilevelInDocumentTitle = 'Lists in Current Document';
Box4Intl.Box4Strings.L_MultilevelListLabelNumericalStyle = 'Level 1, 1; Level 2, 1.1; Level 3, 1.1.1';
Box4Intl.Box4Strings.L_MultilevelListLabelAlphanumericalStyle = 'Level 1, 1; Level 2, a; Level 3, i';
Box4Intl.Box4Strings.L_MultilevelListLabelBulletedStyle = 'Level 1, bulleted four small diamonds; Level 2, bulleted hollow arrow; Level 3, bulleted solid square.';
Box4Intl.Box4Strings.L_DefineNewBullet = 'Define New Bullet\u2026';
Box4Intl.Box4Strings.L_DefineNewBulletFont = 'Font:';
Box4Intl.Box4Strings.L_DefineNewBulletCharacterCode = 'Character code (hex):';
Box4Intl.Box4Strings.L_EuroSign = 'Euro Sign';
Box4Intl.Box4Strings.L_PoundSign = 'Pound Sign';
Box4Intl.Box4Strings.L_YenSign = 'Yen Sign';
Box4Intl.Box4Strings.L_CopyrightSign = 'Copyright Sign';
Box4Intl.Box4Strings.L_RegisteredSign = 'Registered Sign';
Box4Intl.Box4Strings.L_TradeMarkSign = 'Trade Mark Sign';
Box4Intl.Box4Strings.L_PlusMinusSign = 'Plus-Minus Sign';
Box4Intl.Box4Strings.L_NotEqualTo = 'Not Equal To';
Box4Intl.Box4Strings.L_LessThanOrEqualTo = 'Less-Than Or Equal To';
Box4Intl.Box4Strings.L_GreaterThanOrEqualTo = 'Greater-Than Or Equal To';
Box4Intl.Box4Strings.L_DivisionSign = 'Division Sign';
Box4Intl.Box4Strings.L_MultiplicationSign = 'Multiplication Sign';
Box4Intl.Box4Strings.L_Infinity = 'Infinity';
Box4Intl.Box4Strings.L_MicroSign = 'Micro Sign';
Box4Intl.Box4Strings.L_GreekSmallLetterAlpha = 'Greek Small Letter Alpha';
Box4Intl.Box4Strings.L_GreekSmallLetterBeta = 'Greek Small Letter Beta';
Box4Intl.Box4Strings.L_GreekSmallLetterPi = 'Greek Small Letter Pi';
Box4Intl.Box4Strings.L_OhmSign = 'Ohm Sign';
Box4Intl.Box4Strings.L_NArySummation = 'N-Ary Summation';
Box4Intl.Box4Strings.L_DegreeSign = 'Degree Sign';
Box4Intl.Box4Strings.L_CapitalLetterDelta = 'Capital Letter Delta';
Box4Intl.Box4Strings.L_WhiteSmilingFace = 'White Smiling Face';
Box4Intl.Box4Strings.L_BlackHeartSuit = 'Black Heart Suit';
Box4Intl.Box4Strings.L_IndianRupeeSign = 'Indian Rupee Sign';
Box4Intl.Box4Strings.L_InvertedQuestionMark = 'Inverted Question Mark';
Box4Intl.Box4Strings.L_InvertedExclamationMark = 'Inverted Exclamation Mark';
Box4Intl.Box4Strings.L_EmDash = 'Em Dash';
Box4Intl.Box4Strings.L_HorizontalEllipsis = 'Horizontal Ellipsis';
Box4Intl.Box4Strings.L_LatinCapitalLetterAWithGrave = 'Latin Capital Letter A With Grave';
Box4Intl.Box4Strings.L_LatinCapitalLetterAWithAcute = 'Latin Capital Letter A With Acute';
Box4Intl.Box4Strings.L_LatinCapitalLetterAWithCircumflex = 'Latin Capital Letter A With Circumflex';
Box4Intl.Box4Strings.L_LatinCapitalLetterAWithTilde = 'Latin Capital Letter A With Tilde';
Box4Intl.Box4Strings.L_LatinCapitalLetterAWithDiaeresis = 'Latin Capital Letter A With Diaeresis';
Box4Intl.Box4Strings.L_LatinCapitalLetterAWithRingAbove = 'Latin Capital Letter A With Ring Above';
Box4Intl.Box4Strings.L_LatinCapitalLetterAe = 'Latin Capital Letter Ae';
Box4Intl.Box4Strings.L_LatinCapitalLetterCWithCedilla = 'Latin Capital Letter C With Cedilla';
Box4Intl.Box4Strings.L_LatinCapitalLetterEWithGrave = 'Latin Capital Letter E With Grave';
Box4Intl.Box4Strings.L_LatinCapitalLetterEWithAcute = 'Latin Capital Letter E With Acute';
Box4Intl.Box4Strings.L_LatinCapitalLetterEWithCircumflex = 'Latin Capital Letter E With Circumflex';
Box4Intl.Box4Strings.L_LatinCapitalLetterEWithDiaeresis = 'Latin Capital Letter E With Diaeresis';
Box4Intl.Box4Strings.L_LatinCapitalLetterIWithGrave = 'Latin Capital Letter I With Grave';
Box4Intl.Box4Strings.L_LatinCapitalLetterIWithAcute = 'Latin Capital Letter I With Acute';
Box4Intl.Box4Strings.L_LatinCapitalLetterIWithCircumflex = 'Latin Capital Letter I With Circumflex';
Box4Intl.Box4Strings.L_LatinCapitalLetterIWithDiaeresis = 'Latin Capital Letter I With Diaeresis';
Box4Intl.Box4Strings.L_LatinCapitalLetterNWithTilde = 'Latin Capital Letter N With Tilde';
Box4Intl.Box4Strings.L_LatinCapitalLetterOWithGrave = 'Latin Capital Letter O With Grave';
Box4Intl.Box4Strings.L_LatinCapitalLetterOWithAcute = 'Latin Capital Letter O With Acute';
Box4Intl.Box4Strings.L_LatinCapitalLetterOWithCircumflex = 'Latin Capital Letter O With Circumflex';
Box4Intl.Box4Strings.L_LatinCapitalLetterOWithTilde = 'Latin Capital Letter O With Tilde';
Box4Intl.Box4Strings.L_LatinCapitalLetterOWithDiaeresis = 'Latin Capital Letter O With Diaeresis';
Box4Intl.Box4Strings.L_LatinCapitalLetterUWithGrave = 'Latin Capital Letter U With Grave';
Box4Intl.Box4Strings.L_LatinCapitalLetterUWithAcute = 'Latin Capital Letter U With Acute';
Box4Intl.Box4Strings.L_LatinCapitalLetterUWithCircumflex = 'Latin Capital Letter U With Circumflex';
Box4Intl.Box4Strings.L_LatinCapitalLetterUWithDiaeresis = 'Latin Capital Letter U With Diaeresis';
Box4Intl.Box4Strings.L_LatinSmallLetterSharpS = 'Latin Small Letter Sharp S';
Box4Intl.Box4Strings.L_LatinSmallLetterAWithGrave = 'Latin Small Letter A With Grave';
Box4Intl.Box4Strings.L_LatinSmallLetterAWithAcute = 'Latin Small Letter A With Acute';
Box4Intl.Box4Strings.L_LatinSmallLetterAWithCircumflex = 'Latin Small Letter A With Circumflex';
Box4Intl.Box4Strings.L_LatinSmallLetterAWithTilde = 'Latin Small Letter A With Tilde';
Box4Intl.Box4Strings.L_LatinSmallLetterAWithDiaeresis = 'Latin Small Letter A With Diaeresis';
Box4Intl.Box4Strings.L_LatinSmallLetterAWithRingAbove = 'Latin Small Letter A With Ring Above';
Box4Intl.Box4Strings.L_LatinSmallLetterAe = 'Latin Small Letter Ae';
Box4Intl.Box4Strings.L_LatinSmallLetterCWithCedilla = 'Latin Small Letter C With Cedilla';
Box4Intl.Box4Strings.L_LatinSmallLetterEWithGrave = 'Latin Small Letter E With Grave';
Box4Intl.Box4Strings.L_LatinSmallLetterEWithAcute = 'Latin Small Letter E With Acute';
Box4Intl.Box4Strings.L_LatinSmallLetterEWithCircumflex = 'Latin Small Letter E With Circumflex';
Box4Intl.Box4Strings.L_LatinSmallLetterEWithDiaeresis = 'Latin Small Letter E With Diaeresis';
Box4Intl.Box4Strings.L_LatinSmallLetterIWithGrave = 'Latin Small Letter I With Grave';
Box4Intl.Box4Strings.L_LatinSmallLetterIWithAcute = 'Latin Small Letter I With Acute';
Box4Intl.Box4Strings.L_LatinSmallLetterIWithCircumflex = 'Latin Small Letter I With Circumflex';
Box4Intl.Box4Strings.L_LatinSmallLetterIWithDiaeresis = 'Latin Small Letter I With Diaeresis';
Box4Intl.Box4Strings.L_LatinSmallLetterNWithTilde = 'Latin Small Letter N With Tilde';
Box4Intl.Box4Strings.L_LatinSmallLetterOWithGrave = 'Latin Small Letter O With Grave';
Box4Intl.Box4Strings.L_LatinSmallLetterOWithAcute = 'Latin Small Letter O With Acute';
Box4Intl.Box4Strings.L_LatinSmallLetterOWithCircumflex = 'Latin Small Letter O With Circumflex';
Box4Intl.Box4Strings.L_LatinSmallLetterOWithTilde = 'Latin Small Letter O With Tilde';
Box4Intl.Box4Strings.L_LatinSmallLetterOWithDiaeresis = 'Latin Small Letter O With Diaeresis';
Box4Intl.Box4Strings.L_LatinSmallLetterUWithGrave = 'Latin Small Letter U With Grave';
Box4Intl.Box4Strings.L_LatinSmallLetterUWithAcute = 'Latin Small Letter U With Acute';
Box4Intl.Box4Strings.L_LatinSmallLetterUWithCircumflex = 'Latin Small Letter U With Circumflex';
Box4Intl.Box4Strings.L_LatinSmallLetterUWithDiaeresis = 'Latin Small Letter U With Diaeresis';
Box4Intl.Box4Strings.L_LatinSmallLetterYWithDiaeresis = 'Latin Small Letter Y With Diaeresis';
Box4Intl.Box4Strings.L_LatinCapitalLetterGWithBreve = 'Latin Capital Letter G With Breve';
Box4Intl.Box4Strings.L_LatinSmallLetterGWithBreve = 'Latin Small Letter G With Breve';
Box4Intl.Box4Strings.L_LatinCapitalLetterIWithDotAbove = 'Latin Capital Letter I With Dot Above';
Box4Intl.Box4Strings.L_LatinSmallLetterDotlessI = 'Latin Small Letter Dotless I';
Box4Intl.Box4Strings.L_LatinCapitalLigatureOe = 'Latin Capital Ligature Oe';
Box4Intl.Box4Strings.L_LatinSmallLigatureOe = 'Latin Small Ligature Oe';
Box4Intl.Box4Strings.L_LatinCapitalLetterSWithCedilla = 'Latin Capital Letter S With Cedilla';
Box4Intl.Box4Strings.L_LatinSmallLetterSWithCedilla = 'Latin Small Letter S With Cedilla';
Box4Intl.Box4Strings.L_LatinCapitalLetterYWithDiaeresis = 'Latin Capital Letter Y With Diaeresis';
Box4Intl.Box4Strings.L_InlineContentControlAccessibilityDescribedByText = 'Rich text content control';
Box4Intl.Box4Strings.L_BlockContentControlAccessibilityDescribedByText = 'Rich text content control paragraph';
Box4Intl.Box4Strings.l_StyleDefinitionNormalFontSizeInHalfpoints = '22';
Box4Intl.Box4Strings.l_StyleDefinitionNormalColor = '';
Box4Intl.Box4Strings.l_StyleDefinitionNormalBold = '';
Box4Intl.Box4Strings.l_StyleDefinitionNormalItalic = '';
Box4Intl.Box4Strings.l_StyleDefinitionNormalUnderline = '';
Box4Intl.Box4Strings.l_StyleDefinitionNormalNextStyle = '';
Box4Intl.Box4Strings.l_StyleDefinitionNormalSpaceBefore = '';
Box4Intl.Box4Strings.l_StyleDefinitionNormalSpaceAfter = '';
Box4Intl.Box4Strings.l_StyleDefinitionNormalLineSpacing = '';
Box4Intl.Box4Strings.l_StyleDefinitionNormalFont = '';
Box4Intl.Box4Strings.l_StyleDefinitionTitleFontSizeInHalfpoints = '40';
Box4Intl.Box4Strings.l_StyleDefinitionTitleColor = '';
Box4Intl.Box4Strings.l_StyleDefinitionTitleBold = '';
Box4Intl.Box4Strings.l_StyleDefinitionTitleItalic = '';
Box4Intl.Box4Strings.l_StyleDefinitionTitleUnderline = '';
Box4Intl.Box4Strings.l_StyleDefinitionTitleNextStyle = 'p';
Box4Intl.Box4Strings.l_StyleDefinitionTitleSpaceBefore = '';
Box4Intl.Box4Strings.l_StyleDefinitionTitleSpaceAfter = '';
Box4Intl.Box4Strings.l_StyleDefinitionTitleLineSpacing = '';
Box4Intl.Box4Strings.l_StyleDefinitionTitleFont = 'Calibri Light';
Box4Intl.Box4Strings.l_StyleDefinitionDateTimeFontSizeInHalfpoints = '20';
Box4Intl.Box4Strings.l_StyleDefinitionDateTimeColor = '666666';
Box4Intl.Box4Strings.l_StyleDefinitionDateTimeBold = '';
Box4Intl.Box4Strings.l_StyleDefinitionDateTimeItalic = '';
Box4Intl.Box4Strings.l_StyleDefinitionDateTimeUnderline = '';
Box4Intl.Box4Strings.l_StyleDefinitionDateTimeNextStyle = '';
Box4Intl.Box4Strings.l_StyleDefinitionDateTimeSpaceBefore = '';
Box4Intl.Box4Strings.l_StyleDefinitionDateTimeSpaceAfter = '';
Box4Intl.Box4Strings.l_StyleDefinitionDateTimeLineSpacing = '';
Box4Intl.Box4Strings.l_StyleDefinitionDateTimeFont = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading1FontSizeInHalfpoints = '32';
Box4Intl.Box4Strings.l_StyleDefinitionHeading1Color = '794E1E';
Box4Intl.Box4Strings.l_StyleDefinitionHeading1Bold = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading1Italic = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading1Underline = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading1NextStyle = 'p';
Box4Intl.Box4Strings.l_StyleDefinitionHeading1SpaceBefore = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading1SpaceAfter = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading1LineSpacing = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading1Font = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading2FontSizeInHalfpoints = '28';
Box4Intl.Box4Strings.l_StyleDefinitionHeading2Color = 'B5752E';
Box4Intl.Box4Strings.l_StyleDefinitionHeading2Bold = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading2Italic = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading2Underline = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading2NextStyle = 'p';
Box4Intl.Box4Strings.l_StyleDefinitionHeading2SpaceBefore = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading2SpaceAfter = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading2LineSpacing = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading2Font = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading3FontSizeInHalfpoints = '24';
Box4Intl.Box4Strings.l_StyleDefinitionHeading3Color = '63371f';
Box4Intl.Box4Strings.l_StyleDefinitionHeading3Bold = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading3Italic = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading3Underline = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading3NextStyle = 'p';
Box4Intl.Box4Strings.l_StyleDefinitionHeading3SpaceBefore = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading3SpaceAfter = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading3LineSpacing = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading3Font = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading4FontSizeInHalfpoints = '24';
Box4Intl.Box4Strings.l_StyleDefinitionHeading4Color = '96542f';
Box4Intl.Box4Strings.l_StyleDefinitionHeading4Bold = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading4Italic = '1';
Box4Intl.Box4Strings.l_StyleDefinitionHeading4Underline = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading4NextStyle = 'p';
Box4Intl.Box4Strings.l_StyleDefinitionHeading4SpaceBefore = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading4SpaceAfter = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading4LineSpacing = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading4Font = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading5FontSizeInHalfpoints = '22';
Box4Intl.Box4Strings.l_StyleDefinitionHeading5Color = 'B5752E';
Box4Intl.Box4Strings.l_StyleDefinitionHeading5Bold = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading5Italic = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading5Underline = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading5NextStyle = 'p';
Box4Intl.Box4Strings.l_StyleDefinitionHeading5SpaceBefore = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading5SpaceAfter = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading5LineSpacing = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading5Font = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading6FontSizeInHalfpoints = '22';
Box4Intl.Box4Strings.l_StyleDefinitionHeading6Color = 'B5752E';
Box4Intl.Box4Strings.l_StyleDefinitionHeading6Bold = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading6Italic = '1';
Box4Intl.Box4Strings.l_StyleDefinitionHeading6Underline = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading6NextStyle = 'p';
Box4Intl.Box4Strings.l_StyleDefinitionHeading6SpaceBefore = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading6SpaceAfter = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading6LineSpacing = '';
Box4Intl.Box4Strings.l_StyleDefinitionHeading6Font = '';
Box4Intl.Box4Strings.l_StyleDefinitionQuoteFontSizeInHalfpoints = '22';
Box4Intl.Box4Strings.l_StyleDefinitionQuoteColor = '595959';
Box4Intl.Box4Strings.l_StyleDefinitionQuoteBold = '';
Box4Intl.Box4Strings.l_StyleDefinitionQuoteItalic = '1';
Box4Intl.Box4Strings.l_StyleDefinitionQuoteUnderline = '';
Box4Intl.Box4Strings.l_StyleDefinitionQuoteNextStyle = '';
Box4Intl.Box4Strings.l_StyleDefinitionQuoteSpaceBefore = '';
Box4Intl.Box4Strings.l_StyleDefinitionQuoteSpaceAfter = '';
Box4Intl.Box4Strings.l_StyleDefinitionQuoteLineSpacing = '';
Box4Intl.Box4Strings.l_StyleDefinitionQuoteFont = '';
Box4Intl.Box4Strings.l_StyleDefinitionCitationFontSizeInHalfpoints = '18';
Box4Intl.Box4Strings.l_StyleDefinitionCitationColor = '595959';
Box4Intl.Box4Strings.l_StyleDefinitionCitationBold = '';
Box4Intl.Box4Strings.l_StyleDefinitionCitationItalic = '';
Box4Intl.Box4Strings.l_StyleDefinitionCitationUnderline = '';
Box4Intl.Box4Strings.l_StyleDefinitionCitationNextStyle = '';
Box4Intl.Box4Strings.l_StyleDefinitionCitationSpaceBefore = '';
Box4Intl.Box4Strings.l_StyleDefinitionCitationSpaceAfter = '';
Box4Intl.Box4Strings.l_StyleDefinitionCitationLineSpacing = '';
Box4Intl.Box4Strings.l_StyleDefinitionCitationFont = '';
Box4Intl.Box4Strings.l_StyleDefinitionCodeFontSizeInHalfpoints = '22';
Box4Intl.Box4Strings.l_StyleDefinitionCodeColor = '';
Box4Intl.Box4Strings.l_StyleDefinitionCodeBold = '';
Box4Intl.Box4Strings.l_StyleDefinitionCodeItalic = '';
Box4Intl.Box4Strings.l_StyleDefinitionCodeUnderline = '';
Box4Intl.Box4Strings.l_StyleDefinitionCodeNextStyle = '';
Box4Intl.Box4Strings.l_StyleDefinitionCodeSpaceBefore = '';
Box4Intl.Box4Strings.l_StyleDefinitionCodeSpaceAfter = '';
Box4Intl.Box4Strings.l_StyleDefinitionCodeLineSpacing = '';
Box4Intl.Box4Strings.l_StyleDefinitionCodeFont = 'Consolas';
Box4Intl.Box4Strings.L_Dictation = 'Dictation';
Box4Intl.Box4Strings.L_DictationRibbonLabel = 'Dictate';
Box4Intl.Box4Strings.L_DictationKeytip = 'D';
Box4Intl.Box4Strings.L_DictationPreviewLanguages = 'Preview Languages';
Box4Intl.Box4Strings.L_DictationErrorDialogTitle = 'Problem with Dictation';
Box4Intl.Box4Strings.L_DictationAccessDeniedErrorMessage = 'We failed to authenticate. Please sign in with your Office 365 account to use Dictation.';
Box4Intl.Box4Strings.L_DictationFailedToConnectErrorMessage = 'We failed to connect to the Microsoft Speech Service. Please try again.';
Box4Intl.Box4Strings.L_DictationMicrophoneErrorMessage = 'There is a problem with your microphone. Please check your audio settings.';
Box4Intl.Box4Strings.L_DictationMicrophoneNotFoundMessage = 'We can\u2019t detect your microphone. Please confirm your microphone is connected and working.';
Box4Intl.Box4Strings.L_DictationMicrophoneAccessDeniedMessage = 'We don\u2019t have access to your microphone. Please check that your browser has permission to use your microphone.';
Box4Intl.Box4Strings.L_DictationMicrophoneInUseMessage = 'Your microphone is being used by another app and can\u2019t be used by Dictation.';
Box4Intl.Box4Strings.L_DictationUnknownErrorMessage = 'We encountered a problem with Dictation. Please try again.';
Box4Intl.Box4Strings.L_DictationSilenceBusinessBarTitle = 'Dictation can\u2019t hear you';
Box4Intl.Box4Strings.L_DictationSilenceBusinessBarMessage = 'Please make sure your microphone is not muted.';
Box4Intl.Box4Strings.L_DictationCorrectionsIgnoreSuggetion = 'Ignore';
Box4Intl.Box4Strings.L_DictationCorrectionsGroupTitle = 'Did you say:';
Box4Intl.Box4Strings.L_DictationCorrectionsFlyoutTitle = 'Dictation Suggestions';
