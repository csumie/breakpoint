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
Type.registerNamespace('WordEditorIntl');

WordEditorIntl.WordEditorStrings = function WordEditorIntl_WordEditorStrings() {
    /// <summary>
    /// Contains the localizable strings for the Box4 application
    /// All string will be formatted with the following substitutions:
    /// {webappfull} is the long name of the Web client application; e.g., "Microsoft OneNote Online"
    /// {webappshort} is the short name of the Web client application; e.g. "OneNote Online")
    /// {richclientfull} is the name of the equivalent rich client (e.g. "Microsoft OneNote")
    /// {doctype} is the friendly name of the file/document type (e.g. "document", "presentation")
    /// {doctypetitlecase} is the friendly name of the file/document type in title case (e.g. "Document", "Presentation")
    /// {doctypeplural} is the plural form of {doctype} (e.g. "documents", "presentations").
    /// {onedrive} is the short name for OneDrive
    /// </summary>
    /// <field name="l_DocumentContentsLabel" type="String" static="true">
    /// </field>
    /// <field name="l_EditingSurfaceAccessibilityDescribedByText" type="String" static="true">
    /// </field>
    /// <field name="l_LearningToolsErrorMessage" type="String" static="true">
    /// </field>
    /// <field name="L_FormatPainter" type="String" static="true">
    /// Label used by the format painter button.
    /// </field>
    /// <field name="L_TabPageLayout" type="String" static="true">
    /// </field>
    /// <field name="L_BtnClearTableFormatting" type="String" static="true">
    /// Label on the button for Clear table formatting
    /// </field>
    /// <field name="L_BtnHeaderFooter" type="String" static="true">
    /// Text on the button to insert header/footer
    /// </field>
    /// <field name="L_PageNumbers" type="String" static="true">
    /// Label on flyout for PageNumbers in the ribbon
    /// </field>
    /// <field name="L_PageNumbersSectionHeaderForAdd" type="String" static="true">
    /// Header for the section which has elements for adding pagenumbers to the headers and footers
    /// </field>
    /// <field name="L_IncludePageCount" type="String" static="true">
    /// Label on the IncludePageCount button. This button when on will insert the PageCount
    /// along with the PageNumber in the header/footer
    /// </field>
    /// <field name="L_IncludePageCountAlt" type="String" static="true">
    /// Tooltip/Screen reader text for the IncludePageCount button. This button when on will insert the PageCount
    /// along with the PageNumber in the header/footer
    /// </field>
    /// <field name="L_RemovePageNumbers" type="String" static="true">
    /// Label on RemovePageNumbers button
    /// </field>
    /// <field name="L_RemovePageNumbersAlt" type="String" static="true">
    /// Tooltip/Screen reader text text on RemovePageNumbers button
    /// </field>
    /// <field name="L_PageNumbersOnTopLeftAlt" type="String" static="true">
    /// Tooltip/Screen reader text for different PageNumberPositions in the Position gallery
    /// </field>
    /// <field name="L_PageNumbersOnTopCenterAlt" type="String" static="true">
    /// </field>
    /// <field name="L_PageNumbersOnTopRightAlt" type="String" static="true">
    /// </field>
    /// <field name="L_PageNumbersOnBottomLeftAlt" type="String" static="true">
    /// </field>
    /// <field name="L_PageNumbersOnBottomCenterAlt" type="String" static="true">
    /// </field>
    /// <field name="L_PageNumbersOnBottomRightAlt" type="String" static="true">
    /// </field>
    /// <field name="L_PageNumbersCalloutText" type="String" static="true">
    /// Text that will appear in the callout which opens when page numbers place holder is clicked
    /// </field>
    /// <field name="L_PageNumbersInsertionNotificationMessage" type="String" static="true">
    /// Text that will appear in the notification bar when the pagenumber is inserted
    /// </field>
    /// <field name="L_PageNumbersPreviewText" type="String" static="true">
    /// Format of preview text seen in page positions gallery button
    /// </field>
    /// <field name="L_PageNumbersPreviewTextForIncludeCount" type="String" static="true">
    /// Format of preview text when include page count is on
    /// </field>
    /// <field name="L_Endnote" type="String" static="true">
    /// Text on the button to insert Endnote
    /// </field>
    /// <field name="L_Footnote" type="String" static="true">
    /// Text on the button to insert Footnote
    /// </field>
    /// <field name="L_NextFootnote" type="String" static="true">
    /// Text on the button to navigate to next Footnote
    /// </field>
    /// <field name="L_NextEndnote" type="String" static="true">
    /// Text on the button to navigate to next Endnote
    /// </field>
    /// <field name="L_PrevFootnote" type="String" static="true">
    /// Text on the button to navigate to previous Footnote
    /// </field>
    /// <field name="L_PrevEndnote" type="String" static="true">
    /// Text on the button to navigate to previous Endnote
    /// </field>
    /// <field name="L_ShowFootnoteEndnote" type="String" static="true">
    /// Text on the button to Show Notes
    /// </field>
    /// <field name="L_ShowFootnotes" type="String" static="true">
    /// Text on the button to Show Footnotes
    /// </field>
    /// <field name="L_ShowEndnotes" type="String" static="true">
    /// Text on the button to Show Endnotes
    /// </field>
    /// <field name="L_Endnotes" type="String" static="true">
    /// Text on the button to Show Endnotes in the View Tab
    /// </field>
    /// <field name="L_Comment" type="String" static="true">
    /// Text on the button to insert Comment inside the insert tab. This string is used as noun.
    /// </field>
    /// <field name="L_WheresTheSaveButton" type="String" static="true">
    /// Label used by control for where is the save button.
    /// </field>
    /// <field name="L_WheresTheSaveButtonDescription" type="String" static="true">
    /// Description used by control for  where is the save button.
    /// </field>
    /// <field name="L_DownloadDescription" type="String" static="true">
    /// Description for the "Download a Copy" button in the "Save As" menu
    /// </field>
    /// <field name="L_GoToFileOneDrive" type="String" static="true">
    /// {Placeholder="{onedrive}"}Label for the  "Go To File on OneDrive" button in the "Save As" menu
    /// </field>
    /// <field name="L_GoToFile" type="String" static="true">
    /// Label for the  "Go To File's Location" button in the "Save As" menu
    /// </field>
    /// <field name="L_GoToFileDescription" type="String" static="true">
    /// Description for the  "Go To File" button in the "Save As" menu
    /// </field>
    /// <field name="L_DownloadAsPDF" type="String" static="true">
    /// The label for the button in the jewel to download this document as a PDF file.
    /// </field>
    /// <field name="L_DownloadAsPDFDescription" type="String" static="true">
    /// The description for the download as PDF button.
    /// </field>
    /// <field name="L_DownloadAsODT" type="String" static="true">
    /// The label for the button in the jewel to download this document as an ODT file.
    /// </field>
    /// <field name="L_DownloadAsODTDescription" type="String" static="true">
    /// The description for the download as ODT button.
    /// </field>
    /// <field name="L_BtnEndnote" type="String" static="true">
    /// Text on the button to insert Endnote
    /// </field>
    /// <field name="L_EmailALink" type="String" static="true">
    /// </field>
    /// <field name="L_EmailALinkDescription" type="String" static="true">
    /// </field>
    /// <field name="L_Embed" type="String" static="true">
    /// </field>
    /// <field name="L_EmbedDescription" type="String" static="true">
    /// </field>
    /// <field name="L_Find" type="String" static="true">
    /// </field>
    /// <field name="L_FindInDocument" type="String" static="true">
    /// </field>
    /// <field name="L_FindTooltip" type="String" static="true">
    /// Text for Tooltip displayed over Find Button in Ribbon
    /// </field>
    /// <field name="L_Replace" type="String" static="true">
    /// </field>
    /// <field name="L_ReplaceTooltip" type="String" static="true">
    /// Text for Tooltip displayed over Replace Button in Ribbon
    /// </field>
    /// <field name="L_BtnFootnote" type="String" static="true">
    /// Text on the button to insert Footnote
    /// </field>
    /// <field name="L_FullJustify" type="String" static="true">
    /// </field>
    /// <field name="L_GroupDocumentViews" type="String" static="true">
    /// </field>
    /// <field name="L_GroupEditing" type="String" static="true">
    /// </field>
    /// <field name="L_GroupFont" type="String" static="true">
    /// </field>
    /// <field name="L_FileHistory" type="String" static="true">
    /// Text on the button to go to version history feature
    /// </field>
    /// <field name="L_FileHistoryDescription" type="String" static="true">
    /// </field>
    /// <field name="L_GroupFootnoteEndnote" type="String" static="true">
    /// Label at the bottom of the Footnote/Endnote Ribbon Group
    /// </field>
    /// <field name="L_GroupHeaderFooter" type="String" static="true">
    /// Label at the bottom of the Header/Footer Ribbon Group
    /// </field>
    /// <field name="L_GroupImageAdjust" type="String" static="true">
    /// picture Adjust chunk
    /// </field>
    /// <field name="L_GroupPageBreak" type="String" static="true">
    /// Label in the Page Break group on Insert Tab
    /// </field>
    /// <field name="L_GroupPageLayoutParagraph" type="String" static="true">
    /// </field>
    /// <field name="L_GroupPageSetup" type="String" static="true">
    /// </field>
    /// <field name="L_GroupParagraph" type="String" static="true">
    /// </field>
    /// <field name="L_GrowFontSize" type="String" static="true">
    /// Tooltip for the "Grow Font" button in the Word Editor Ribbon
    /// </field>
    /// <field name="L_LabelIndent" type="String" static="true">
    /// </field>
    /// <field name="L_LabelSpacing" type="String" static="true">
    /// Label above the paragraph spacing controls in the Ribbon
    /// </field>
    /// <field name="L_LabelSpacingAfter" type="String" static="true">
    /// Label for spacing after
    /// </field>
    /// <field name="L_LabelSpacingBefore" type="String" static="true">
    /// Label for spacing before.
    /// </field>
    /// <field name="L_LaunchParagraphDialogFromContextMenu" type="String" static="true">
    /// </field>
    /// <field name="L_LineSpacing" type="String" static="true">
    /// The line spacing flyout label.
    /// </field>
    /// <field name="L_MenuFootnotesEndnotes" type="String" static="true">
    /// Label on the button for Footnotes and Endnotes
    /// </field>
    /// <field name="L_PageA4" type="String" static="true">
    /// </field>
    /// <field name="L_PageA5" type="String" static="true">
    /// </field>
    /// <field name="L_RibbonInsertPageBreak" type="String" static="true">
    /// Label in the Page Break button on Insert Tab
    /// </field>
    /// <field name="L_PageCustomSizes" type="String" static="true">
    /// </field>
    /// <field name="L_PageCustomSizesDescription" type="String" static="true">
    /// </field>
    /// <field name="L_PageCustomMargins" type="String" static="true">
    /// </field>
    /// <field name="L_PageCustomMarginsDescription" type="String" static="true">
    /// </field>
    /// <field name="L_PageExecutive" type="String" static="true">
    /// </field>
    /// <field name="L_PageLandscape" type="String" static="true">
    /// </field>
    /// <field name="L_PageLegal" type="String" static="true">
    /// </field>
    /// <field name="L_PageLetter" type="String" static="true">
    /// </field>
    /// <field name="L_PageMargins" type="String" static="true">
    /// </field>
    /// <field name="L_PageModerate" type="String" static="true">
    /// </field>
    /// <field name="L_PageNarrow" type="String" static="true">
    /// </field>
    /// <field name="L_PageNormal" type="String" static="true">
    /// </field>
    /// <field name="L_PageOffice2003" type="String" static="true">
    /// </field>
    /// <field name="L_PageOrientation" type="String" static="true">
    /// </field>
    /// <field name="L_PagePortrait" type="String" static="true">
    /// </field>
    /// <field name="L_PageSize" type="String" static="true">
    /// </field>
    /// <field name="L_PageWide" type="String" static="true">
    /// </field>
    /// <field name="L_PreviousVersions" type="String" static="true">
    /// </field>
    /// <field name="L_PreviousVersionsDescription" type="String" static="true">
    /// </field>
    /// <field name="L_Print" type="String" static="true">
    /// </field>
    /// <field name="L_PrintToPdf" type="String" static="true">
    /// </field>
    /// <field name="L_PrintToPdfDescription" type="String" static="true">
    /// </field>
    /// <field name="L_QuickStyles" type="String" static="true">
    /// </field>
    /// <field name="L_ReplyWithChanges" type="String" static="true">
    /// </field>
    /// <field name="L_ReplyWithChangesDescription" type="String" static="true">
    /// </field>
    /// <field name="L_ResetPicture" type="String" static="true">
    /// </field>
    /// <field name="L_SaveAs" type="String" static="true">
    /// </field>
    /// <field name="L_ShrinkFontSize" type="String" static="true">
    /// Tooltip for the "Shrink Font" button in the Word Editor Ribbon
    /// </field>
    /// <field name="L_SpinnerSpacingAfter" type="String" static="true">
    /// Tooltip on the spinner for spacing after
    /// </field>
    /// <field name="L_SpinnerSpacingBefore" type="String" static="true">
    /// Tooltip on the spinner for spacing before
    /// </field>
    /// <field name="L_TextDirLTRTooltip" type="String" static="true">
    /// </field>
    /// <field name="L_TextDirRTLTooltip" type="String" static="true">
    /// </field>
    /// <field name="L_SpecialIndent" type="String" static="true">
    /// Label for Special Indent button in Home Tab
    /// </field>
    /// <field name="L_SpecialIndentTooltip" type="String" static="true">
    /// Tooltip for Special Indent button in Home Tab
    /// </field>
    /// <field name="L_SpecialIndentNone" type="String" static="true">
    /// "(none)" option in Special Indent menu
    /// </field>
    /// <field name="L_SpecialIndentFirstLine" type="String" static="true">
    /// "First line" option in Special Indent menu
    /// </field>
    /// <field name="L_SpecialIndentHanging" type="String" static="true">
    /// "Hanging" option in Special Indent menu
    /// </field>
    /// <field name="L_BevelEdgeRectangle" type="String" static="true">
    /// Word specific built-in picture style names.
    /// </field>
    /// <field name="L_BeveledMatteWhite" type="String" static="true">
    /// </field>
    /// <field name="L_BeveledOvalBlack" type="String" static="true">
    /// </field>
    /// <field name="L_BevelPerspective" type="String" static="true">
    /// </field>
    /// <field name="L_BevelPerspectiveLeftWhite" type="String" static="true">
    /// </field>
    /// <field name="L_CenterShadowRectangle" type="String" static="true">
    /// </field>
    /// <field name="L_CompoundFrameBlack" type="String" static="true">
    /// </field>
    /// <field name="L_DoubleFrameBlack" type="String" static="true">
    /// </field>
    /// <field name="L_DropShadowRectangle" type="String" static="true">
    /// </field>
    /// <field name="L_MetalFrame" type="String" static="true">
    /// </field>
    /// <field name="L_MetalOval" type="String" static="true">
    /// </field>
    /// <field name="L_MetalRoundedRectangle" type="String" static="true">
    /// </field>
    /// <field name="L_ModerateFrameBlack" type="String" static="true">
    /// </field>
    /// <field name="L_ModerateFrameWhite" type="String" static="true">
    /// </field>
    /// <field name="L_PerspectiveShadowWhite" type="String" static="true">
    /// </field>
    /// <field name="L_PictureStyles" type="String" static="true">
    /// </field>
    /// <field name="L_ReflectedBevelBlack" type="String" static="true">
    /// </field>
    /// <field name="L_ReflectedBevelWhite" type="String" static="true">
    /// </field>
    /// <field name="L_ReflectedPerspectiveRight" type="String" static="true">
    /// </field>
    /// <field name="L_ReflectedRoundedRectangle" type="String" static="true">
    /// </field>
    /// <field name="L_RelaxedPerspectiveWhite" type="String" static="true">
    /// </field>
    /// <field name="L_RotatedWhite" type="String" static="true">
    /// </field>
    /// <field name="L_RoundedDiagonalCornerWhite" type="String" static="true">
    /// </field>
    /// <field name="L_SimpleFrameBlack" type="String" static="true">
    /// </field>
    /// <field name="L_SimpleFrameWhite" type="String" static="true">
    /// </field>
    /// <field name="L_SnipDiagonalCornerWhite" type="String" static="true">
    /// </field>
    /// <field name="L_SoftEdgeOval" type="String" static="true">
    /// </field>
    /// <field name="L_SoftEdgeRectangle" type="String" static="true">
    /// </field>
    /// <field name="L_ThickMatteBlack" type="String" static="true">
    /// </field>
    /// <field name="L_TabReview" type="String" static="true">
    /// </field>
    /// <field name="L_ProofingSplitButton" type="String" static="true">
    /// </field>
    /// <field name="L_GrammarSettings" type="String" static="true">
    /// Menu item to open Grammar Settings dialog. In ribbon, it's under Review tab, Spelling Grammar split button.
    /// </field>
    /// <field name="L_EditorSettings" type="String" static="true">
    /// </field>
    /// <field name="L_NextProofingError" type="String" static="true">
    /// </field>
    /// <field name="L_Comments" type="String" static="true">
    /// </field>
    /// <field name="L_NewComment" type="String" static="true">
    /// </field>
    /// <field name="L_DeleteComment" type="String" static="true">
    /// </field>
    /// <field name="L_PreviousComment" type="String" static="true">
    /// </field>
    /// <field name="L_NextComment" type="String" static="true">
    /// </field>
    /// <field name="L_OpenCommentPane" type="String" static="true">
    /// </field>
    /// <field name="L_Tracking" type="String" static="true">
    /// </field>
    /// <field name="L_TrackChanges" type="String" static="true">
    /// </field>
    /// <field name="L_TrackChangesLabelText" type="String" static="true">
    /// Label Text displayed on top of the Track Change Dropdown list
    /// </field>
    /// <field name="L_TrackChangesKeytip" type="String" static="true">
    /// </field>
    /// <field name="L_TrackChangesOff" type="String" static="true">
    /// Item in Track Change drop down list, indicates the Track Change will be turned off, when selected
    /// </field>
    /// <field name="L_TrackChangesForEveryone" type="String" static="true">
    /// Item in Track Change drop down list, indicates the Track Change will be turned On for everyone in coauthoring session, when selected.
    /// </field>
    /// <field name="L_TrackChangesJustMine" type="String" static="true">
    /// Item in Track Change drop down list, indicates the Track Change will only be turned on for the current user, not any other people in the
    /// coauthering session, when selected.
    /// </field>
    /// <field name="L_AcceptChange" type="String" static="true">
    /// </field>
    /// <field name="L_AcceptChangeKeytip" type="String" static="true">
    /// </field>
    /// <field name="L_RejectChange" type="String" static="true">
    /// </field>
    /// <field name="L_RejectChangeKeytip" type="String" static="true">
    /// </field>
    /// <field name="L_PreviousChange" type="String" static="true">
    /// </field>
    /// <field name="L_PreviousChangeKeytip" type="String" static="true">
    /// </field>
    /// <field name="L_NextChange" type="String" static="true">
    /// </field>
    /// <field name="L_NextChangeKeytip" type="String" static="true">
    /// </field>
    /// <field name="L_TrackChangeContextMenuGeneric" type="String" static="true">
    /// The generic type of change to be displayed in context menu, when a user selects multiple changes
    /// </field>
    /// <field name="L_TrackChangeContextMenuInsertion" type="String" static="true">
    /// the change type to be displayed in context menu, when a user selects a insertion change
    /// </field>
    /// <field name="L_TrackChangeContextMenuDeletion" type="String" static="true">
    /// the change type to be displayed in context menu, when a user selects a deletion change
    /// </field>
    /// <field name="L_TrackChangeContextMenuFormat" type="String" static="true">
    /// the change type to be displayed in context menu, when a user selects a format change
    /// </field>
    /// <field name="L_TrackChangeContextMenuReplace" type="String" static="true">
    /// the change type to be displayed in context menu, when a user selects a replace change
    /// </field>
    /// <field name="L_TrackChangeContextMenuTextFormat" type="String" static="true">
    /// The generated text for a track change context menu items.
    /// {0} is the action users can perform. The action is either Accept (L_AcceptChange) or Reject (L_RejectChange)
    /// {1} is the type of change users can operate. The type of changes are one of Insertion (L_TrackChangeContextMenuInsertion), Deletion (L_TrackChangeContextMenuDeletion), Format Change (L_TrackChangeContextMenuFormat), and Change (L_TrackChangeContextMenuGeneric)
    /// for example:  Accept Insertion,  or Reject Format Change
    /// </field>
    /// <field name="L_TrackChangeNotFoundDialogMessage" type="String" static="true">
    /// the text message displayed inside the Track Change Not Found dialog
    /// {doctype} the friendly name of the current file/document type, like "document"
    /// </field>
    /// <field name="L_TrackChangeCannotBeAcceptedOrRejectedDialogMessage" type="String" static="true">
    /// the text message displayed inside the Track Change not Accepted\Rejected due to unsupported object present in it dialog.
    /// </field>
    /// <field name="L_TrackChangeCannotBeAcceptedOrRejectedDialogTitle" type="String" static="true">
    /// the title displayed on the Track Change not Accepted\Rejected due to unsupported object present in it dialog.
    /// </field>
    /// <field name="L_TrackChangeTooltipInserted" type="String" static="true">
    /// the insertion change type to be displayed in track change tooltip
    /// </field>
    /// <field name="L_TrackChangeTooltipDeleted" type="String" static="true">
    /// the deletion change type to be displayed in track change tooltip
    /// </field>
    /// <field name="L_TrackChangeTooltipFormatted" type="String" static="true">
    /// the format change type to be displayed in track change tooltip
    /// </field>
    /// <field name="L_TrackChangeCustomizedTooltipCitation" type="String" static="true">
    /// for tracked change text content reference shown in tooltip as citation.
    /// {0} is the content, wrapped in open and close quotation marks
    /// </field>
    /// <field name="L_TrackChangeCustomizedTooltipInserted" type="String" static="true">
    /// the insertion change type to be displayed in the new hovering track change tooltip
    /// the square brackets are for decorative purpose only
    /// </field>
    /// <field name="L_TrackChangeCustomizedTooltipDeleted" type="String" static="true">
    /// the deletion change type to be displayed in the new hovering track change tooltip
    /// the square brackets are for decorative purpose only
    /// </field>
    /// <field name="L_TrackChangeCustomizedTooltipFormatted" type="String" static="true">
    /// the format change type to be displayed the new hovering track change tooltip
    /// the square brackets are for decorative purpose only
    /// </field>
    /// <field name="L_TrackChangeCustomizedTooltipReplaced" type="String" static="true">
    /// the replace change type to be displayed the new hovering track change tooltip
    /// the square brackets are for decorative purpose only
    /// </field>
    /// <field name="L_TrackChangeTooltipRevertedChangeFormat" type="String" static="true">
    /// the string format for generating text for reverted text format change
    /// {0} the text format has been reverted.
    /// for example, when a user removes bold style from a selected text, the tool tip
    /// should show "not bold". Similar for removing italic style on a select text, "not italic"
    /// </field>
    /// <field name="L_TrackChangeTooltipCommaSeparator" type="String" static="true">
    /// adding comma separator between a list of format changes
    /// for example: Font, Font Size, Bold
    /// </field>
    /// <field name="L_TrackChangeTooltipOverflowEllipsis" type="String" static="true">
    /// adding an ellipsis to the end of the tooltip content, when the content length is over the limit
    /// {0} the text content to be displayed in tooltip
    /// for example: "this is too long to be displayed in a tooltip..."
    /// </field>
    /// <field name="L_TrackChangeTableRow" type="String" static="true">
    /// The content type of a table row change, displayed in the tooltip
    /// like, "Jason, 2/5/2017 10:20:23AM inserted: Table Row"
    /// </field>
    /// <field name="L_TrackChangeChangeReadout" type="String" static="true">
    /// Accessibility readout describing a tracked change that has received focus
    /// The placeholder (an adjective) indicates the type of change (see types below)
    /// </field>
    /// <field name="L_TrackChangeInsertionType" type="String" static="true">
    /// Accessibility readout for track change insertion type (property/adjective)
    /// </field>
    /// <field name="L_TrackChangeDeletionType" type="String" static="true">
    /// Accessibility readout for track change deletion type (property/adjective)
    /// </field>
    /// <field name="L_TrackChangeFormatType" type="String" static="true">
    /// Accessibility readout for track change format type (property/adjective)
    /// </field>
    /// <field name="L_Image" type="String" static="true">
    /// the name of the image content type, which will be used in a track change tooltip to present what type of content has been changed.
    /// </field>
    /// <field name="L_ParagraphMark" type="String" static="true">
    /// the name of the Paragraph Mark to mark the end of a paragraph, which will be used in a track change tooltip to present what type of content has been changed.
    /// </field>
    /// <field name="L_Justification" type="String" static="true">
    /// the name of a paragraph format type, which will be used in a track change tooltip to present what type of paragraph format has been applied.
    /// </field>
    /// <field name="L_Centered" type="String" static="true">
    /// the name of a paragraph format type, which will be used in a track change tooltip to present what type of paragraph format has been applied.
    /// It means that text in the paragraph is aligned by the center
    /// </field>
    /// <field name="L_Style" type="String" static="true">
    /// the name of a paragraph style format, which will be used in a track change tooltip to present what type of paragraph format has been applied.
    /// It indicates a paragraph style has been applied to the current paragraph
    /// </field>
    /// <field name="L_TextDirection" type="String" static="true">
    /// the name of a paragraph text direction format, which will be used in a track change tooltip to present what type of paragraph format has been applied.
    /// It indicates the text direction (Left to Right, or Right to Left) has been changed on the paragrpah
    /// </field>
    /// <field name="L_Numbered" type="String" static="true">
    /// a tooltip string, which indicates a number list style has been applied to the target paragraph
    /// </field>
    /// <field name="L_Bulleted" type="String" static="true">
    /// a tooltip string, which indicates a bullet list style has been applied to the target paragraph
    /// </field>
    /// <field name="L_NoBulletNumbering" type="String" static="true">
    /// a tooltip string, which indicates a bullet or numbering style has been removed from the target paragrpah
    /// </field>
    /// <field name="L_ProofingLanguage" type="String" static="true">
    /// a tooltip string, which indicates that a proofing language has been applied on the target paragraph.
    /// </field>
    /// <field name="L_CharacterFormatting" type="String" static="true">
    /// A tooltip string, which indicates that some (generic) character formatting change was applied on the paragraph.
    /// </field>
    /// <field name="L_UnknownAuthorName" type="String" static="true">
    /// The author name used in the tooltip when author name is unavailable. Which indicates the change is made by "unkown" author.
    /// </field>
    /// <field name="l_RemovedAuthorName" type="String" static="true">
    /// The author name used when RemovePersonalInformation document setting is enabled
    /// (matches Win32 experience)
    /// </field>
    /// <field name="L_TrackChangeDeletedTooltipFormat" type="String" static="true">
    /// The generated text for deletion tracked change tooltip.
    /// {0} is the name of the user, who made the change, like "Jack Smith"
    /// {1} is the time that the change was made, like "3/6/2017 12:41:00PM"
    /// {2} is the content that has been deleted by the user.
    /// for example:  "Jason, 2/5/2017 10:20:23AM deleted:\u200e\nABCD EFG"
    /// The \u200e in the string is a left-to-right mark (LRM). It guarantees that the colon (:)
    /// immediately preceeding it renders correctly in the user's browser for tooltips on paragraphs
    /// with the opposite text direction
    /// (otherwise we'll see ":Jason 2/5/2017 10:20:23AM deleted").
    /// You must retain the LRM proceeding the colon (or other punctuation immediately before the new line \n)
    /// in your translation. If you are translating for an RTL language such as Arabic or Hebrew, then replace
    /// \u200e with \u200f (RTL mark).
    /// </field>
    /// <field name="L_TrackChangeInsertedTooltipFormat" type="String" static="true">
    /// The generated text for insertion tracked change tooltip.
    /// {0} is the name of the user, who made the change, like "Jack Smith"
    /// {1} is the time that the change was made, like "3/6/2017 12:41:00PM"
    /// {2} is the content that has been inserted by the user.
    /// for example:  "Jason, 2/5/2017 10:20:23AM inserted:\u200e\nABCD EFG"
    /// The \u200e in the string is a left-to-right mark (LRM). It guarantees that the colon (:)
    /// immediately preceding it renders correctly in the user's browser for tooltips on paragraphs
    /// with the opposite text direction
    /// (otherwise we'll see ":Jason 2/5/2017 10:20:23AM inserted").
    /// You must retain the LRM proceeding the colon (or other punctuation immediately before the new line \n)
    /// in your translation. If you are translating for an RTL language such as Arabic or Hebrew, then replace
    /// \u200e with \u200f (RTL mark).
    /// </field>
    /// <field name="L_TrackChangeFormattedTooltipFormat" type="String" static="true">
    /// The generated text for format tracked change tooltip.
    /// {0} is the name of the user, who made the change, like "Jack Smith"
    /// {1} is the time that the change was made, like "3/6/2017 12:41:00PM"
    /// {2} is each changed format name.
    /// for example: "Jasmine, 2/5/2017 10:20:23AM formatted:\u200e\nFont, Font Color, Underline"
    /// The \u200e in the string is a left-to-right mark (LRM). It guarantees that the colon (:)
    /// immediately preceding it renders correctly in the user's browser for tooltips on paragraphs
    /// with the opposite text direction
    /// (otherwise we'll see ":Jasmine 2/5/2017 10:20:23AM formatted").
    /// You must retain the LRM proceeding the colon (or other punctuation immediately before the new line \n)
    /// in your translation. If you are translating for an RTL language such as Arabic or Hebrew, then replace
    /// \u200e with \u200f (RTL mark).
    /// </field>
    /// <field name="L_TrackChangeDeletedTooltipFormatNoTimestamp" type="String" static="true">
    /// The generated text for deletion tracked change tooltip when we have no timestamp
    /// {0} is the name of the user, who made the change, like "Jack Smith"
    /// {1} is the content that has been deleted by the user.
    /// for example:  "Jason deleted:\u200e\nABCD EFG"
    /// The \u200e in the string is a left-to-right mark (LRM). It guarantees that the colon (:)
    /// immediately preceeding it renders correctly in the user's browser for tooltips on paragraphs
    /// with the opposite text direction
    /// (otherwise we'll see ":Jason deleted").
    /// You must retain the LRM proceeding the colon (or other punctuation immediately before the new line \n)
    /// in your translation. If you are translating for an RTL language such as Arabic or Hebrew, then replace
    /// \u200e with \u200f (RTL mark).
    /// </field>
    /// <field name="L_TrackChangeInsertedTooltipFormatNoTimestamp" type="String" static="true">
    /// The generated text for insertion tracked change tooltip when we have no timestamp
    /// {0} is the name of the user, who made the change, like "Jack Smith"
    /// {1} is the content that has been inserted by the user.
    /// for example:  "Jason inserted:\u200e\nABCD EFG"
    /// The \u200e in the string is a left-to-right mark (LRM). It guarantees that the colon (:)
    /// immediately preceding it renders correctly in the user's browser for tooltips on paragraphs
    /// with the opposite text direction
    /// (otherwise we'll see ":Jason inserted").
    /// You must retain the LRM proceeding the colon (or other punctuation immediately before the new line \n)
    /// in your translation. If you are translating for an RTL language such as Arabic or Hebrew, then replace
    /// \u200e with \u200f (RTL mark).
    /// </field>
    /// <field name="L_TrackChangeFormattedTooltipFormatNoTimestamp" type="String" static="true">
    /// The generated text for format tracked change tooltip when we have no timestamp
    /// {0} is the name of the user, who made the change, like "Jack Smith"
    /// {1} is each changed format name.
    /// for example: "Jasmine formatted:\u200e\nFont, Font Color, Underline"
    /// The \u200e in the string is a left-to-right mark (LRM). It guarantees that the colon (:)
    /// immediately preceding it renders correctly in the user's browser for tooltips on paragraphs
    /// with the opposite text direction
    /// (otherwise we'll see ":Jasmine formatted").
    /// You must retain the LRM proceeding the colon (or other punctuation immediately before the new line \n)
    /// in your translation. If you are translating for an RTL language such as Arabic or Hebrew, then replace
    /// \u200e with \u200f (RTL mark).
    /// </field>
    /// <field name="L_TrackChangeDeletedContentSelectedDialogMessage" type="String" static="true">
    /// the text message displayed inside the Track Change deleted content selected dialog, if all the text selected is marked for delete.
    /// </field>
    /// <field name="L_TrackChangePartiallyDeletedContentSelectedDialogMessage" type="String" static="true">
    /// the text message displayed inside the Track Change deleted content selected dialog, if some of the text selected is marked for delete.
    /// </field>
    /// <field name="L_UntrackedChangeDialogTitle" type="String" static="true">
    /// The title text for an untracked change dialog.
    /// </field>
    /// <field name="L_UntrackedChangeDialogMessage" type="String" static="true">
    /// The message text for an untracked change dialog.
    /// </field>
    /// <field name="L_UntrackedChangeDialogTitleDeleteSelection" type="String" static="true">
    /// Special title text for an untracked change dialog. Shown if the user selects and deletes a bunch of text that contains an object
    /// whose deletion can't be tracked.
    /// </field>
    /// <field name="L_UntrackedChangeDialogMessageDeleteSelection" type="String" static="true">
    /// Special message text for an untracked change dialog. Shown if the user selects and deletes a bunch of text that contains an object
    /// whose deletion can't be tracked.
    /// </field>
    /// <field name="L_UntrackedChangeDialogCheckboxLabelGeneral" type="String" static="true">
    /// The text for the dialog dismiss message. Used for all change types except for changes to "unsupported objects."
    /// The {0} refers to the change type (e.g. equations, hyperlinks, etc).
    /// </field>
    /// <field name="L_UntrackedChangeDialogCheckboxLabelUnsupportedObject" type="String" static="true">
    /// The text for the dialog dismiss message. Used only for changes to "unsupported objects."
    /// {Placeholder="{webappshort}"}
    /// </field>
    /// <field name="L_UntrackedChangeDialogCheckboxLabelAnchoredImage" type="String" static="true">
    /// The text for the dialog dismiss message. Used only for deleting anchored images.
    /// </field>
    /// <field name="L_UntrackedChangeDialogTableColumnType" type="String" static="true">
    /// Text used for table format changes. Is one of the potential strings for the placeholder in L_UntrackedChangeDialogCheckboxLabelGeneral string.
    /// </field>
    /// <field name="L_UntrackedChangeDialogTableFormatType" type="String" static="true">
    /// Text used for table format changes. Is one of the potential strings for the placeholder in L_UntrackedChangeDialogCheckboxLabelGeneral string.
    /// </field>
    /// <field name="L_UntrackedChangeDialogEquationType" type="String" static="true">
    /// Text used for equation changes. Is one of the potential strings for the placeholder in L_UntrackedChangeDialogCheckboxLabelGeneral string.
    /// </field>
    /// <field name="L_UntrackedChangeDialogFootnoteEndnoteType" type="String" static="true">
    /// Text used for footnote and endnote changes. Is one of the potential strings for the placeholder in L_UntrackedChangeDialogCheckboxLabelGeneral string.
    /// </field>
    /// <field name="L_UntrackedChangeDialogHyperlinkType" type="String" static="true">
    /// Text used for hyperlink changes. Is one of the potential strings for the placeholder in L_UntrackedChangeDialogCheckboxLabelGeneral string.
    /// </field>
    /// <field name="L_UntrackedChangeDialogMergeTableCellsType" type="String" static="true">
    /// Text used for merge table cell changes. Is one of the potential strings for the placeholder in L_UntrackedChangeDialogCheckboxLabelGeneral string.
    /// </field>
    /// <field name="L_UntrackedChangeDialogSplitTableCellsType" type="String" static="true">
    /// Text used for split table cell changes. Is one of the potential strings for the placeholder in L_UntrackedChangeDialogCheckboxLabelGeneral string.
    /// </field>
    /// <field name="L_UntrackedChangeDialogContentControlType" type="String" static="true">
    /// Text used for content control changes. Is one of the potential strings for the placeholder in L_UntrackedChangeDialogCheckboxLabelGeneral string.
    /// </field>
    /// <field name="L_UntrackedChangeDialogPageLayoutType" type="String" static="true">
    /// Text used for page layout changes. Is one of the potential strings for the placeholder in L_UntrackedChangeDialogCheckboxLabelGeneral string.
    /// </field>
    /// <field name="L_UntrackedChangeDialogPageBreakType" type="String" static="true">
    /// Text used for page break changes. Is one of the potential strings for the placeholder in L_UntrackedChangeDialogCheckboxLabelGeneral string.
    /// </field>
    /// <field name="L_UntrackedChangeDialogPageNumbersType" type="String" static="true">
    /// Text used for page numbers changes. Is one of the potential strings for the placeholder in L_UntrackedChangeDialogCheckboxLabelGeneral string.
    /// </field>
    /// <field name="L_UntrackedChangeDialogPictureFormatType" type="String" static="true">
    /// Text used for picture format changes. Is one of the potential strings for the placeholder in L_UntrackedChangeDialogCheckboxLabelGeneral string.
    /// </field>
    /// <field name="L_UntrackedChangeDialogOkButton" type="String" static="true">
    /// Text used for the OK button in the untracked changes dialog. Communicates that no action will be taken and the user's change will
    /// be allowed but remain untracked.
    /// </field>
    /// <field name="L_UntrackedChangeDialogCancelButton" type="String" static="true">
    /// Text used for the Cancel button in the untracked changes dialog. Communicates that the user's (untracked) change will immediately be undone.
    /// </field>
    /// <field name="L_JustMineNotification" type="String" static="true">
    /// Strings for notification displayed when a user change the Track Change setting to Just Mine.
    /// {0} is the name of the user, who made the change, like "Jack Smith"
    /// </field>
    /// <field name="L_ForEveryoneNotification" type="String" static="true">
    /// Strings for notification displayed when a user change the Track Change setting to For Everyone.
    /// {0} is the name of the user, who made the change, like "Jack Smith"
    /// </field>
    /// <field name="L_TurnOffForEveryoneNotification" type="String" static="true">
    /// Strings for notification displayed when a user truns off track change setting For Everyone.
    /// {0} is the name of the user, who made the change, like "Jack Smith"
    /// </field>
    /// <field name="L_TurnOffJustMineNotification" type="String" static="true">
    /// Strings for notification displayed when a user truns off the Track Change setting for Just Mine.
    /// {0} is the name of the user, who made the change, like "Jack Smith"
    /// </field>
    /// <field name="L_ActivityGroupTitle" type="String" static="true">
    /// Title of Activity Control Group in the Ribbon. This group contains controls for interacting with changes made in the document
    /// </field>
    /// <field name="L_MarkChangeAsRead" type="String" static="true">
    /// Alter text for CatchUpChange MarkAsRead button
    /// </field>
    /// <field name="L_MarkAsRead" type="String" static="true">
    /// Label text of the CatchUpChange MarkAsRead button, which will mark the changes made while the current author is away as read,
    /// so no CatchUpChange UI indicators will be shown.
    /// </field>
    /// <field name="L_MarkAsReadKeytip" type="String" static="true">
    /// Keytip text of the MarkAsRead button
    /// </field>
    /// <field name="L_CatchUpActivityHighlightReadoutTemplate" type="String" static="true">
    /// string template for narrator to read out highlighted text content in the document.
    /// {0} is the current number of higlighted contents
    /// {1} is the total number of highlighted contents
    /// {2} is the current highlighted text content
    /// For example:
    /// Change 1 of 4: Summer is nice
    /// </field>
    /// <field name="L_CatchUpActivityParagraphAnnouncementTemplate" type="String" static="true">
    /// string for narrator when the user enters a paragraph that contains changes from another user
    /// </field>
    /// <field name="L_CatchUpActivityChangeAnnouncementTemplate" type="String" static="true">
    /// string template for narrator to read out information about a specific change made to content in the document.
    /// {0} is the name of the author of the changes
    /// {1} is the Date and Time of when the change was made
    /// For example:
    /// Changes made by 'Alice Alpha' on 'October 3rd 2019 11:50am PST'.
    /// </field>
    /// <field name="L_AccHelpDialogActivityAnnouncementsShortcut" type="String" static="true">
    /// string for the ctrl+shift+Y shortcut in the Accessibility Checker Help Dialogue
    /// </field>
    /// <field name="L_AccHelpDialogActivityAnnouncementsCommand" type="String" static="true">
    /// string for explaining the ctrl+shift+Y command in the Accessibility Checker Help Dialogue
    /// This command turns the announcement of new changes in the document on or off
    /// </field>
    /// <field name="L_WebAppFullName" type="String" static="true">
    /// The full name of the current web client application
    /// for word {webappfull} : Microsoft Word Online
    /// </field>
    /// <field name="L_GroupTableStyles" type="String" static="true">
    /// Label at the bottom of the Table Styles Ribbon Group
    /// </field>
    /// <field name="L_MenuTableTheme" type="String" static="true">
    /// Label at the bottom of the Table Styles Ribbon Group
    /// </field>
    /// <field name="L_LabelTableStylesCustom" type="String" static="true">
    /// Label on the Table Styles custom category
    /// </field>
    /// <field name="L_LabelTableStylesGrid" type="String" static="true">
    /// Label on the Table Styles grid category
    /// </field>
    /// <field name="L_LabelTableStylesList" type="String" static="true">
    /// Label on the Table Styles list category
    /// </field>
    /// <field name="L_LabelTableStylesPlain" type="String" static="true">
    /// Label on the Table Styles plain category
    /// </field>
    /// <field name="L_GroupTableStyleOptions" type="String" static="true">
    /// Label at the bottom of the Table Style Options Ribbon Group
    /// </field>
    /// <field name="L_TableStyleOptionFirstRow" type="String" static="true">
    /// Label for Header Row button under Table Style Options Ribbon Group
    /// </field>
    /// <field name="L_TableStyleOptionFirstColumn" type="String" static="true">
    /// Label for First Column button under Table Style Options Ribbon Group
    /// </field>
    /// <field name="L_TableStyleOptionLastRow" type="String" static="true">
    /// Label for Total Row button under Table Style Options Ribbon Group
    /// </field>
    /// <field name="L_TableStyleOptionLastColumn" type="String" static="true">
    /// Label for Last Column button under Table Style Options Ribbon Group
    /// </field>
    /// <field name="L_TableStyleOptionBandedRow" type="String" static="true">
    /// Label for Banded Rows button under Table Style Options Ribbon Group
    /// </field>
    /// <field name="L_TableStyleOptionBandedColumn" type="String" static="true">
    /// Label for Banded Columns button under Table Style Options Ribbon Group
    /// </field>
    /// <field name="L_TableGridLight" type="String" static="true">
    /// Word specific built-in table style names (without theme information)
    /// </field>
    /// <field name="L_PlainTable1" type="String" static="true">
    /// </field>
    /// <field name="L_PlainTable2" type="String" static="true">
    /// </field>
    /// <field name="L_PlainTable3" type="String" static="true">
    /// </field>
    /// <field name="L_PlainTable4" type="String" static="true">
    /// </field>
    /// <field name="L_PlainTable5" type="String" static="true">
    /// </field>
    /// <field name="L_TableGrid" type="String" static="true">
    /// </field>
    /// <field name="L_GridTable1Light" type="String" static="true">
    /// </field>
    /// <field name="L_GridTable2" type="String" static="true">
    /// </field>
    /// <field name="L_GridTable3" type="String" static="true">
    /// </field>
    /// <field name="L_GridTable4" type="String" static="true">
    /// </field>
    /// <field name="L_GridTable5Dark" type="String" static="true">
    /// </field>
    /// <field name="L_GridTable6Colorful" type="String" static="true">
    /// </field>
    /// <field name="L_GridTable7Colorful" type="String" static="true">
    /// </field>
    /// <field name="L_ListTable1Light" type="String" static="true">
    /// </field>
    /// <field name="L_ListTable2" type="String" static="true">
    /// </field>
    /// <field name="L_ListTable3" type="String" static="true">
    /// </field>
    /// <field name="L_ListTable4" type="String" static="true">
    /// </field>
    /// <field name="L_ListTable5Dark" type="String" static="true">
    /// </field>
    /// <field name="L_ListTable6Colorful" type="String" static="true">
    /// </field>
    /// <field name="L_ListTable7Colorful" type="String" static="true">
    /// </field>
    /// <field name="L_TableStyleNameWithThemeFormat" type="String" static="true">
    /// Format for built-in table style names with theme information
    /// </field>
    /// <field name="L_Crop" type="String" static="true">
    /// Used as the label to execute crop operation
    /// </field>
    /// <field name="L_HeaderToolbarLabel" type="String" static="true">
    /// much like L_StatusBarLabel, this label is just stored on the toolbar itself.
    /// </field>
    /// <field name="L_HeaderToolbarFirstPageButton" type="String" static="true">
    /// The button label for setting the header/footer view to be the special first page of the section.
    /// </field>
    /// <field name="L_HeaderToolbarEvenPagesButton" type="String" static="true">
    /// The button label for setting the header/footer view to be the even pages of the section.
    /// </field>
    /// <field name="L_HeaderToolbarOddPagesButton" type="String" static="true">
    /// The button label for setting the header/footer view to be the odd pages of the section.
    /// </field>
    /// <field name="L_HeaderToolbarOtherPagesButton" type="String" static="true">
    /// The button label for setting the header/footer view to be the other paegs of the section.
    /// This label is used in conjunction with  the First page label so that it says
    /// First Page | Other Pages
    /// </field>
    /// <field name="L_HeaderToolbarOptions" type="String" static="true">
    /// The label of the drop down for setting the header/footer template for the section.
    /// </field>
    /// <field name="L_HeaderToolbarSectionLabel" type="String" static="true">
    /// The default label of the section drop down.
    /// This label will quickly be overwritten by L_HeaderToolbarSectionButtonLabel
    /// </field>
    /// <field name="L_HeaderToolbarSectionButtonLabel" type="String" static="true">
    /// The generated label for a section button.
    /// {0} expands to the string representation of the section number.
    /// For example: Section 3
    /// </field>
    /// <field name="L_HeaderToolbarAllPages" type="String" static="true">
    /// The label describing the button in the options flyout to set headers/footers the same across the entire document.
    /// </field>
    /// <field name="L_HeaderToolbarEntireSection" type="String" static="true">
    /// The label describing the button in the options flyout to set headers/footers the same across the entire section.
    /// </field>
    /// <field name="L_HeaderToolbarFirstPage" type="String" static="true">
    /// The label describing the button in the options flyout to set the headers/footers to be different on the first page.
    /// </field>
    /// <field name="L_HeaderToolbarEvenOddPages" type="String" static="true">
    /// The label describing the button in the options flyout to set the headers/footers to be different on even and odd pages.
    /// </field>
    /// <field name="L_HeaderToolbarFirstEvenOddPages" type="String" static="true">
    /// The label describing the button in the options flyout to set the headers/footers to be different on even and odd pages
    /// As well as the first page.
    /// </field>
    /// <field name="L_HeaderToolbarRemoveHeadersAndFooters" type="String" static="true">
    /// The button in the options flyout which will remove all headers/footers from the document.
    /// </field>
    /// <field name="L_HeaderFooterOverlayAccessibleText" type="String" static="true">
    /// Text read to screenreaders when the user's focus is on the grey overlay which covers the document when the header/footer
    /// control is launched. It instructs the user that acting on this area close the header and footer.
    /// </field>
    /// <field name="L_HeaderToolbarDeleteDialogMessage" type="String" static="true">
    /// The string to be displayed as the message of the delete all headers and footers confirmation dialog.
    /// </field>
    /// <field name="L_HeaderToolbarCantDeleteContent" type="String" static="true">
    /// The string to be displayed if the headers and footers can't be removed.
    /// </field>
    /// <field name="L_HeaderToolbarDeleteDialogRemoveAllButton" type="String" static="true">
    /// The button on the remove all headers and footers confirmation dialog which will invoke the delete action.
    /// </field>
    /// <field name="l_DefaultHeaderScreenReaderMessage" type="String" static="true">
    /// Text read to screenreaders when the user enters the header pane showing the default header.
    /// </field>
    /// <field name="l_DefaultFooterScreenReaderMessage" type="String" static="true">
    /// Text read to screenreaders when the user enters the footer pane showing the footer footer.
    /// </field>
    /// <field name="l_FirstPageHeaderScreenReaderMessage" type="String" static="true">
    /// Text read to screenreaders when the user enters the header pane showing the first page header.
    /// </field>
    /// <field name="l_FirstPageFooterScreenReaderMessage" type="String" static="true">
    /// Text read to screenreaders when the user enters the footer pane showing the first page footer.
    /// </field>
    /// <field name="l_EvenPagesHeaderScreenReaderMessage" type="String" static="true">
    /// Text read to screenreaders when the user enters the header pane showing the even pages header.
    /// </field>
    /// <field name="l_EvenPagesFooterScreenReaderMessage" type="String" static="true">
    /// Text read to screenreaders when the user enters the footer pane showing the even pages footer.
    /// </field>
    /// <field name="l_OddPagesHeaderScreenReaderMessage" type="String" static="true">
    /// Text read to screenreaders when the user enters the header pane showing the odd pages header.
    /// </field>
    /// <field name="l_OddPagesFooterScreenReaderMessage" type="String" static="true">
    /// Text read to screenreaders when the user enters the footer pane showing the odd pages footer.
    /// </field>
    /// <field name="l_DefaultHeaderScreenReaderMessageForReadOnly" type="String" static="true">
    /// Text read to screenreaders when a read-only user enters the header pane showing the default header.
    /// </field>
    /// <field name="l_DefaultFooterScreenReaderMessageForReadOnly" type="String" static="true">
    /// Text read to screenreaders when a read-only user enters the footer pane showing the footer footer.
    /// </field>
    /// <field name="l_FirstPageHeaderScreenReaderMessageForReadOnly" type="String" static="true">
    /// Text read to screenreaders when a read-only user enters the header pane showing the first page header.
    /// </field>
    /// <field name="l_FirstPageFooterScreenReaderMessageForReadOnly" type="String" static="true">
    /// Text read to screenreaders when a read-only user enters the footer pane showing the first page footer.
    /// </field>
    /// <field name="l_EvenPagesHeaderScreenReaderMessageForReadOnly" type="String" static="true">
    /// Text read to screenreaders when a read-only user enters the header pane showing the even pages header.
    /// </field>
    /// <field name="l_EvenPagesFooterScreenReaderMessageForReadOnly" type="String" static="true">
    /// Text read to screenreaders when a read-only user enters the footer pane showing the even pages footer.
    /// </field>
    /// <field name="l_OddPagesHeaderScreenReaderMessageForReadOnly" type="String" static="true">
    /// Text read to screenreaders when a read-only user enters the header pane showing the odd pages header.
    /// </field>
    /// <field name="l_OddPagesFooterScreenReaderMessageForReadOnly" type="String" static="true">
    /// Text read to screenreaders when a read-only user enters the footer pane showing the odd pages footer.
    /// </field>
    /// <field name="l_HeaderFooterNoContentAvailableMessage" type="String" static="true">
    /// Text displayed when a read-only user shows a header-footer pane with no content.
    /// </field>
    /// <field name="L_FormatFootnotes" type="String" static="true">
    /// Text on the button for formatting footnotes
    /// </field>
    /// <field name="L_FormatEndnotes" type="String" static="true">
    /// Text on the button for formatting endnotes
    /// </field>
    /// <field name="L_FootnoteEndnoteFormattingOptionsDialogTitle" type="String" static="true">
    /// Text on the formatting options dialog title
    /// </field>
    /// <field name="L_FootnoteEndnoteFormattingOptionsDialogApplyButton" type="String" static="true">
    /// Text on the formatting options dialog 'Apply' button
    /// </field>
    /// <field name="L_FootnoteEndnoteFormattingOptionsDialogApplyAllButton" type="String" static="true">
    /// Text on the formatting options dialog 'Apply To All' button
    /// </field>
    /// <field name="l_FootnoteEndnoteFormattingOptionsFont" type="String" static="true">
    /// Text on the formatting options dialog 'Font' section
    /// </field>
    /// <field name="l_FootnoteEndnoteFormattingOptionsIndent" type="String" static="true">
    /// Text on the formatting options dialog 'Indent' section
    /// </field>
    /// <field name="l_FootnoteEndnotesIndentButtonText" type="String" static="true">
    /// Text on the formatting options indent gallery buttons.
    /// </field>
    /// <field name="l_FootnoteEndnotesNoIndentButtonTitle" type="String" static="true">
    /// Screen Reader text/Tool Tip text for formatting options indent gallery buttons.
    /// </field>
    /// <field name="l_FootnoteEndnotesFirstLineIndentButtonTitle" type="String" static="true">
    /// </field>
    /// <field name="l_FootnoteEndnoteFormattingUnsupportedNotification" type="String" static="true">
    /// {Placeholder="{webappshort}", "{richclientfull}"} Notification text when unsupported notes not formatted when "Apply All" formatting option.
    /// </field>
    /// <field name="l_FootnoteEndnoteTextOverflowFormat" type="String" static="true">
    /// Format for showing tooltip for footnote/endnote reference when number of characters exceed FootnoteEndnoteActor.MaximumTooltipLength
    /// </field>
    /// <field name="l_FootnoteTooltipInstruction" type="String" static="true">
    /// String appended in the end of footnote tooltip reference
    /// </field>
    /// <field name="l_EndnoteTooltipInstruction" type="String" static="true">
    /// String appended in the end of endnote tooltip reference
    /// </field>
    /// <field name="l_FootnoteEditingSurfaceAccessibilityTitleText" type="String" static="true">
    /// Screen Reader Text to read when focus comes to footnote/endnote editing surface
    /// </field>
    /// <field name="l_EndnoteEditingSurfaceAccessibilityTitleText" type="String" static="true">
    /// </field>
    /// <field name="l_FootnoteContentTitle" type="String" static="true">
    /// Screen reader text used as part of template messages like L_ContentTypeLeavingNotificationFormat.
    /// e.g. "Leaving Footnote"
    /// </field>
    /// <field name="l_EndnoteContentTitle" type="String" static="true">
    /// Screen reader text used as part of template messages like L_ContentTypeLeavingNotificationFormat.
    /// e.g. "Leaving Endnote"
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
    /// <field name="L_DigitalPrintTransformSlab" type="String" static="true">
    /// 'Transform' string to show in backstage as separate slab
    /// </field>
    /// <field name="L_DigitalPrintSlabKeyTip" type="String" static="true">
    /// {Locked} The key tip associated with the Publish slab.
    /// </field>
    /// <field name="L_DigitalPrintSwayProductName" type="String" static="true">
    /// {Locked} Sway product name.
    /// </field>
    /// <field name="L_DigitalMySwaysPattern" type="String" static="true">
    /// 'My Sways' format pattern. Controls order of words 'My' and 'Sways'
    /// In this instance: {0} - Sways (L_DigitalPrintSways).
    /// </field>
    /// <field name="L_DigitalPrintSways" type="String" static="true">
    /// {Locked} Part of 'My Sways' string from My Sways page. Shouldn't be localized since it is not localized in Sway.
    /// </field>
    /// <field name="L_DigitalPrintButtonTransform" type="String" static="true">
    /// The label associated with the digital print button. Different string (Transform) for flighting.
    /// </field>
    /// <field name="L_DigitalPrintDescriptionTransform" type="String" static="true">
    /// The description associated with the digital print button. Different string (Transform) for flighting.
    /// </field>
    /// <field name="L_DigitalPrintButtonKeyTip" type="String" static="true">
    /// The key tip associated with the digital print button.
    /// </field>
    /// <field name="L_DigitalPrintDialogDescriptionAAD" type="String" static="true">
    /// Text shown in digital print dialog to describe feature to AAD user.
    /// </field>
    /// <field name="L_DigitalPrintDialogDescriptionMSA" type="String" static="true">
    /// Text shown in digital print dialog to describe feature to MSA user.
    /// </field>
    /// <field name="L_DigitalPrintLearnMore" type="String" static="true">
    /// Text in link shown after the description in digital print dialog.
    /// </field>
    /// <field name="L_DigitalPrintDialogStyleLabel" type="String" static="true">
    /// Label describing Style galery in digital print dialog.
    /// </field>
    /// <field name="L_DigitalPrintDialogPreviewLabel" type="String" static="true">
    /// Label describing Preview in digital print dialog.
    /// </field>
    /// <field name="L_DigitalPrintTitle" type="String" static="true">
    /// Text used as default title when no title is present in Word document.
    /// </field>
    /// <field name="L_DigitalPrintPreviewFailureMessage" type="String" static="true">
    /// Text shown to the user when Sway preview service is not working.
    /// </field>
    /// <field name="L_DigitalPrintSignInNeeded" type="String" static="true">
    /// Text shown to the user when he/she needs to log in.
    /// </field>
    /// <field name="L_DigitalPrintDocumentTooLarge" type="String" static="true">
    /// Text shown to the user when document is to large to publish.
    /// </field>
    /// <field name="L_DigitalPrintSwayServiceDown" type="String" static="true">
    /// Text shown to the user when Sway service is down.
    /// </field>
    /// <field name="L_DigitalPrintHeadingText" type="String" static="true">
    /// Text shown in style preview as heading text.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameBokeh" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameRegency" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNamePilar" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameBoutique" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameStudio" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameSierra" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameFete" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameCelestial" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameTranquil" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameMidtown" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameLucent" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameAerial" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameStructure" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameMuse" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameCinema" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameMega" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameConvergence" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameAlloy" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameFluent" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameAurora" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameCivic" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintStyleNameReflection" type="String" static="true">
    /// Style name used as title in thumbnails for Sway preview.
    /// </field>
    /// <field name="L_DigitalPrintNoSwayLicense" type="String" static="true">
    /// Message shown to user when she is not signed in and tries to use Print to Web feature.
    /// </field>
    /// <field name="L_DigitalPrintCheckingSwayLicense" type="String" static="true">
    /// Message shown to user when she tries to use Print to Web feature before dialog with style gallery is opened.
    /// </field>
    /// <field name="L_DigitalPrintGeneratingPreview" type="String" static="true">
    /// Message shown to user while preview generation is in progress
    /// </field>
    /// <field name="l_MarginsDialogMarginTop" type="String" static="true">
    /// </field>
    /// <field name="l_MarginsDialogMarginTopAlt" type="String" static="true">
    /// </field>
    /// <field name="l_MarginsDialogMarginBottom" type="String" static="true">
    /// </field>
    /// <field name="l_MarginsDialogMarginBottomAlt" type="String" static="true">
    /// </field>
    /// <field name="l_MarginsDialogMarginLeft" type="String" static="true">
    /// </field>
    /// <field name="l_MarginsDialogMarginLeftAlt" type="String" static="true">
    /// </field>
    /// <field name="l_MarginsDialogMarginRight" type="String" static="true">
    /// </field>
    /// <field name="l_MarginsDialogMarginRightAlt" type="String" static="true">
    /// </field>
    /// <field name="l_PaperSizeDialogTitle" type="String" static="true">
    /// </field>
    /// <field name="l_PaperSizeDialogWidth" type="String" static="true">
    /// </field>
    /// <field name="l_PaperSizeDialogWidthAlt" type="String" static="true">
    /// </field>
    /// <field name="l_PaperSizeDialogHeight" type="String" static="true">
    /// </field>
    /// <field name="l_PaperSizeDialogHeightAlt" type="String" static="true">
    /// </field>
    /// <field name="l_ApplyStyles" type="String" static="true">
    /// </field>
    /// <field name="l_StyleName" type="String" static="true">
    /// </field>
    /// <field name="l_BadStyleName" type="String" static="true">
    /// {Placeholder="{webappshort}"}
    /// </field>
    /// <field name="l_CreateNewStyle" type="String" static="true">
    /// Title for the dialog that pops up from the create new style button
    /// </field>
    /// <field name="l_CreateNewStyleDialogName" type="String" static="true">
    /// Label for text box where the user can decide on the new style name
    /// </field>
    /// <field name="l_CreateNewStyleDialogParagraphPreview" type="String" static="true">
    /// Label for the section that will display the generated preview of the user's new style
    /// </field>
    /// <field name="l_CreateNewStyleDialogDefaultStyle" type="String" static="true">
    /// The text part of the default style name that is generated
    /// </field>
    /// <field name="l_StyleNameAlreadyExists" type="String" static="true">
    /// Error message when user chosen style name already exists in the style set
    /// </field>
    /// <field name="l_StyleNameRestrictedCharacters" type="String" static="true">
    /// Error message when user chosen style name contains restricted characters
    /// </field>
    /// <field name="l_StyleNameEmpty" type="String" static="true">
    /// Error message when user chosen style name is empty
    /// </field>
    /// <field name="l_StyleNameOverMaxLength" type="String" static="true">
    /// Error message when user chosen style name is too long.
    /// </field>
    /// <field name="L_NavigationPaneTitle" type="String" static="true">
    /// Title used for Navigation Pane which opens when the user clicks the "Navigation Pane" button in the ribbon.
    /// </field>
    /// <field name="L_NavigationPaneHeadingsSubtitle" type="String" static="true">
    /// The "headings" subtitle in the Navigation Pane. Clicking on this button presents the user with a view that allows
    /// for navigation through the document by section heading.
    /// </field>
    /// <field name="L_NavigationPaneButtonText" type="String" static="true">
    /// The text for the ribbon button used to invoke the Navigation Pane.
    /// </field>
    /// <field name="L_NoHeadingsNavigationPaneText1" type="String" static="true">
    /// Text for the "No Headings" case of the Navigation Pane.
    /// </field>
    /// <field name="L_NoHeadingsNavigationPaneText2" type="String" static="true">
    /// </field>
    /// <field name="L_NoHeadingsNavigationPaneText3" type="String" static="true">
    /// </field>
    /// <field name="L_PromoteHeadingText" type="String" static="true">
    /// </field>
    /// <field name="L_DemoteHeadingText" type="String" static="true">
    /// </field>
    /// <field name="L_DeleteHeadingText" type="String" static="true">
    /// </field>
    /// <field name="l_FindTitle" type="String" static="true">
    /// Title used for Find pane which opens when user clicks on Find button in ribbon.
    /// </field>
    /// <field name="L_FindReplaceTitle" type="String" static="true">
    /// Title used for Find Replace pane which opens when user clicks on Replace button in ribbon.
    /// </field>
    /// <field name="l_FindPlaceholderText" type="String" static="true">
    /// Used as a placeholder text in find textbox till user starts typing in the textbox
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
    /// <field name="l_LandingMessage" type="String" static="true">
    /// </field>
    /// <field name="L_SearchFilterTooltip" type="String" static="true">
    /// Text for Tooltip displayed over Search filter dropdown next to find textbox when search icon is being shown
    /// </field>
    /// <field name="l_SearchFilterCancelTooltip" type="String" static="true">
    /// Text for Tooltip displayed over Search filter dropdown next to find textbox when cancel icon is being shown
    /// </field>
    /// <field name="l_SearchAriaRoleDescription" type="String" static="true">
    /// Text for "aria-roledescription" attribute of the split button in Find/Navigation pane.
    /// </field>
    /// <field name="L_ReplaceAll" type="String" static="true">
    /// </field>
    /// <field name="L_FindPrevious" type="String" static="true">
    /// </field>
    /// <field name="L_FindNext" type="String" static="true">
    /// </field>
    /// <field name="l_FindFilterLabelText" type="String" static="true">
    /// Used to display filter applied to search query in find pane. {0} will be replaced by name of filter.
    /// </field>
    /// <field name="l_FindMultipleFiltersLabelText" type="String" static="true">
    /// Used to display more than one filters applied to search query in find pane. {0} and {1} will be replaced by names of filters.
    /// </field>
    /// <field name="l_NoMatchesMessage" type="String" static="true">
    /// </field>
    /// <field name="l_SummaryNoMatches" type="String" static="true">
    /// </field>
    /// <field name="l_SummarySearching" type="String" static="true">
    /// </field>
    /// <field name="l_ReplacePlaceholderText" type="String" static="true">
    /// Used as a placeholder text in replace textbox till user starts typing in the textbox
    /// </field>
    /// <field name="l_ReplacePlaceholderTooltip" type="String" static="true">
    /// Text for Tooltip displayed over placeholder text in Replace text box
    /// </field>
    /// <field name="l_TooManyResultsMessage" type="String" static="true">
    /// This text is shown to indicate that a search returned too many results to be displayed.
    /// </field>
    /// <field name="l_SummarySomeResults" type="String" static="true">
    /// Used to display search in progress when all results have not been found yet.
    /// {0} will be replaced by currently selected result. {1} will be replaced by total results found so far.
    /// </field>
    /// <field name="l_SummarySomeResultsReadout" type="String" static="true">
    /// Above string when read out by screen reader
    /// </field>
    /// <field name="l_SummaryAllResults" type="String" static="true">
    /// Used to display search state when all results have been found.
    /// {0} will be replaced by currently selected result. {1} will be replaced by total number of results.
    /// </field>
    /// <field name="l_FindOutOfSyncNotificationMessage" type="String" static="true">
    /// Strings for notification displayed when results in results pane are out of sync with document content.
    /// </field>
    /// <field name="l_FindDirtyNotificationHyperlinkMessage" type="String" static="true">
    /// </field>
    /// <field name="l_ReplaceAllInProgress" type="String" static="true">
    /// </field>
    /// <field name="l_ReplaceAllInProgressReadout" type="String" static="true">
    /// </field>
    /// <field name="l_ReplaceAllComplete" type="String" static="true">
    /// </field>
    /// <field name="l_ReplacedAllMessage" type="String" static="true">
    /// This message is shown to user after using Replace All function.
    /// {0} will show with number of instances replaced, {1} will show what was replaced,
    /// and {2} will show what was it replaced with. Eg. We replaced all 4 instances of "cricket" with "football".
    /// </field>
    /// <field name="l_ReplacedSomeMessage" type="String" static="true">
    /// This message is shown to user after using Replace All function if we can't replace all matches.
    /// {0} shows the number of matches instances replaced, {1} shows the total number of instances,
    /// {2} shows original text, {3} shows new text. Eg. We replaced 3 of 4 instances of "cricket" with "football".
    /// </field>
    /// <field name="l_FindReplaceResultSummaryScreenReaderNotification" type="String" static="true">
    /// This is the text read out by screen reader when search results change or user navigates
    /// {0} reads out results summary, eg Results 1 of 10; or Searching...
    /// {1} reads out results preview or snippet near the match as shown in search results pane
    /// </field>
    /// <field name="L_ResultTypeHeader" type="String" static="true">
    /// </field>
    /// <field name="L_ResultTypeFooter" type="String" static="true">
    /// </field>
    /// <field name="L_ResultTypeFootnote" type="String" static="true">
    /// </field>
    /// <field name="L_ResultTypeEndnote" type="String" static="true">
    /// </field>
    /// <field name="L_ResultTypeComment" type="String" static="true">
    /// </field>
    /// <field name="l_ReadoutCurrentResult" type="String" static="true">
    /// Screen reader text to indicate user's currently selected result's position whenever selection changes.
    /// {0} will be replace with number of selected result, {1} will be replaced with total number of results.
    /// </field>
    /// <field name="l_ReadoutCurrentResultWhenSearching" type="String" static="true">
    /// Screen reader text to indicate user's currently selected result's position whenever selection changes
    /// while search operation is still going on. {0} will be replace with number of selected result,
    /// {1} will be replaced with total number of results found so far.
    /// </field>
    /// <field name="l_ReadoutCurrentResultWhenSearchComplete" type="String" static="true">
    /// Screen reader text to indicate user's currently selected result's position whenever selection changes
    /// when search operation completes.
    /// {0} will be replace with number of selected result, {1} will be replaced with total number of results.
    /// </field>
    /// <field name="l_ReadoutNoMatchesWhenSearchComplete" type="String" static="true">
    /// Screen reader text to indicate user's currently selected result's position whenever selection changes
    /// when search operation completes without finding any results.
    /// </field>
    /// <field name="l_ReadoutReplacedAndMoveToNextResult" type="String" static="true">
    /// Screen reader text to indicate that selected result has been replaced and next result has been selected.
    /// {0} will show what was replaced, {1} will show what was it replaced with. Eg. Replaced cricket with football. Selecting next result.
    /// </field>
    /// <field name="l_ReadoutReplaceWithNoMoreResults" type="String" static="true">
    /// Screen reader text to indicate that selected result has been replaced and there are no more results remaining to be replaced.
    /// {0} will show what was replaced, {1} will show what was it replaced with. Eg. Replaced cricket with football. No more results.
    /// </field>
    /// <field name="l_ReadoutReplaceSkippedAndMoveToNextResult" type="String" static="true">
    /// Screen reader text to indicate that nothing has been replaced and next result has been selected.
    /// This may happen if paragraph is locked or user has not selected anything to replace etc.
    /// </field>
    /// <field name="l_SelectedSearchOption" type="String" static="true">
    /// Screen reader label for Filters summary line showing currently applied filter
    /// </field>
    /// <field name="l_SelectedSearchOptions" type="String" static="true">
    /// Screen reader label for Filters summary line showing currently applied filters
    /// </field>
    /// <field name="l_FindHitContentTitle" type="String" static="true">
    /// Screen reader text used as part of template messages like L_ContentTypeLeavingNotificationFormat.
    /// e.g. "Leaving Find Result"
    /// </field>
    /// <field name="l_Header" type="String" static="true">
    /// Display text for page adornment header label.
    /// </field>
    /// <field name="l_Footer" type="String" static="true">
    /// Display text for page adornment footer label.
    /// </field>
    /// <field name="l_OpenHeader" type="String" static="true">
    /// Display text for open header tooltip.
    /// </field>
    /// <field name="l_OpenFooter" type="String" static="true">
    /// Display text for open footer tooltip.
    /// </field>
    /// <field name="l_EditHeader" type="String" static="true">
    /// Display text for edit header tooltip.
    /// </field>
    /// <field name="l_EditFooter" type="String" static="true">
    /// Display text for edit footer tooltip.
    /// </field>
    /// <field name="l_AddHeader" type="String" static="true">
    /// Display text for add header tooltip.
    /// </field>
    /// <field name="l_AddFooter" type="String" static="true">
    /// Display text for add footer tooltip.
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
    /// <field name="L_TrackedChanges" type="String" static="true">
    /// Message in the status bar to indicate when a document changes are being tracked.
    /// </field>
    /// <field name="L_GroupWordCount" type="String" static="true">
    /// String for the word count drop down icon in the review tab.
    /// </field>
    /// <field name="L_SpbWordCountAlt" type="String" static="true">
    /// Alt text for the large word count icon under the ribbon-&gt;review tab
    /// </field>
    /// <field name="L_SpbWordCountLabel" type="String" static="true">
    /// label for for the word count large word count icon under the ribbon-&gt;review tab
    /// </field>
    /// <field name="L_WordCountMenuItem" type="String" static="true">
    /// Label for the word count drop down menu button that when pressed, present user with the word count dialog(ribbon-&gt;review tab-&gt;word count)
    /// </field>
    /// <field name="L_WordCountToggle" type="String" static="true">
    /// Label for the word count drop down menu toggle button that allows users to turn the feature ON  or OFF(ribbon-&gt;review tab-&gt;word count)
    /// </field>
    /// <field name="L_DocStatsDialogTitle" type="String" static="true">
    /// Strings for the word count dialog title
    /// </field>
    /// <field name="L_DocStatsDialogPagesCount" type="String" static="true">
    /// Label of the field  in the word count dialog that shows the number of pages in the document
    /// </field>
    /// <field name="L_DocStatsDialogWordsCount" type="String" static="true">
    /// Label of the field  in the word count dialog that shows the number of word in the document
    /// </field>
    /// <field name="L_DocStatsDialogCharsNoSpacesCount" type="String" static="true">
    /// Label of the field  in the word count dialog that shows the number of characters not including spaces in the document
    /// </field>
    /// <field name="L_DocStatsDialogCharsWithSpacesCount" type="String" static="true">
    /// Label of the field  in the word count dialog that shows the number of characters including spaces in the document
    /// </field>
    /// <field name="L_DocStatsDialogParagraphsCount" type="String" static="true">
    /// Label of the field  in the word count dialog that shows the number of paragraphs in the document
    /// </field>
    /// <field name="L_DocStatsDialogCountString" type="String" static="true">
    /// This is the text for items in word count dialog e.g. Paragraph :  1 of 2000.
    /// </field>
    /// <field name="l_WordCountResult" type="String" static="true">
    /// String for the word count result, displayed in the status bar. The {0} placeholder indicates where the number will be inserted.
    /// </field>
    /// <field name="l_WordCountResultSingular" type="String" static="true">
    /// String for the word count result, displayed in the status bar, when the result is singular.
    /// The {0} placeholder indicates where the number will be inserted.
    /// </field>
    /// <field name="l_WordCountResultSingularAccurate" type="String" static="true">
    /// String for the word count result, displayed in the status bar, when there is only one word.
    /// The {0} placeholder indicates where the number will be inserted.
    /// </field>
    /// <field name="l_WordCountResultAccurate" type="String" static="true">
    /// String for the word count result in status bar when there is more than one word, displayed in the status bar. The {0} placeholder indicates where the number will be inserted.
    /// </field>
    /// <field name="l_WordCountResultExact" type="String" static="true">
    /// String for the word count result, displayed in the status bar, for when we have an exact result (ie: zero).
    /// This is always plural. The {0} placeholder indicates where the number will be inserted.
    /// </field>
    /// <field name="l_WordCountCalculating" type="String" static="true">
    /// Text to display in place of a word count result while we are calculating the word count.
    /// </field>
    /// <field name="l_WordCountDisabled" type="String" static="true">
    /// Text to display instead of a word count result when word count is disabled.
    /// </field>
    /// <field name="l_WordCountHidden" type="String" static="true">
    /// Text to display instead of a word count result when word count is disabled.
    /// </field>
    /// <field name="L_WordCountToggleTellMe" type="String" static="true">
    /// Tell me alternate text for Label for the word count drop down menu toggle button that allows users to turn the feature ON  or OFF
    /// </field>
    /// <field name="L_WordCountTooltip" type="String" static="true">
    /// String for the Word Count button tooltip on the Status Bar
    /// Also used for the Tell Me 'WordCount' command result label
    /// </field>
    /// <field name="L_ParamFindInDocTitle" type="String" static="true">
    /// String for the TellMe in-document button title
    /// </field>
    /// <field name="L_TrackChangesUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_ShapesUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_LabelsUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_InsertCitationUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_TextBoxUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_TableOfContentsUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_SmartArtUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_WordArtUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_MultiColumnLayoutUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_InsertEquationUpSell" type="String" static="true">
    /// String used in TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_DesktopFeature" type="String" static="true">
    /// Label used by TellMe for Desktop app up sell
    /// </field>
    /// <field name="L_OpenInDesktopWord" type="String" static="true">
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
    /// <field name="l_WordCountResultOnSelection" type="String" static="true">
    /// String for the word count result, displayed in the status bar, when the user has a selection.
    /// The {0} placeholder indicates where the number of words selected will be inserted.
    /// The {1} placeholder indicates where the number of words in the document be inserted.
    /// </field>
    /// <field name="l_WordCountResultOnSelectionAccurate" type="String" static="true">
    /// String for the word count result, displayed in the status bar, when the user has a selection.
    /// The {0} placeholder indicates where the number of words selected will be inserted.
    /// The {1} placeholder indicates where the number of words in the document be inserted.
    /// </field>
    /// <field name="l_LastSavedAt" type="String" static="true">
    /// Displayed in the status bar to indicate the last time the document was saved.
    /// The {0} placeholder will be the time in short format.
    /// </field>
    /// <field name="l_SavingStatus" type="String" static="true">
    /// Displayed in the status bar to indicate that we are saving changes.
    /// </field>
    /// <field name="l_SavedStatus" type="String" static="true">
    /// Displayed in the status bar to indicate that we have nothing more to save.
    /// </field>
    /// <field name="l_ContentControlPlaceholder" type="String" static="true">
    /// This is the placeholder for content control if it has no content
    /// </field>
    /// <field name="L_RtcConnected" type="String" static="true">
    /// Displayed in the status bar to indicate that RTC is connected.
    /// </field>
    /// <field name="L_RtcConnecting" type="String" static="true">
    /// Displayed in the status bar to indicate that connecting to RTC is underway.
    /// </field>
    /// <field name="l_SavedSkydriveStatus" type="String" static="true">
    /// {Placeholder="{onedrive}"} Displayed in the status bar to indicate that we have nothing more to save on OneDrive.
    /// </field>
    /// <field name="L_GiveFeedback" type="String" static="true">
    /// Label used by controls for gathering customer feedback on the application.
    /// </field>
    /// <field name="L_GiveFeedbackShort" type="String" static="true">
    /// Label used by controls for gathering customer feedback on the application.
    /// </field>
    /// <field name="L_StatusBarLabel" type="String" static="true">
    /// </field>
    /// <field name="L_OcsConnected" type="String" static="true">
    /// Displayed in the status bar to indicate that the session is connected to OCS.
    /// </field>
    /// <field name="L_OcsNotConnected" type="String" static="true">
    /// Displayed in the status bar to indicate that the session is not connected to OCS.
    /// </field>
    /// <field name="l_PrintPDFWait" type="String" static="true">
    /// </field>
    /// <field name="l_PrintError" type="String" static="true">
    /// </field>
    /// <field name="l_ConversionToODTWait" type="String" static="true">
    /// </field>
    /// <field name="l_ConversionError" type="String" static="true">
    /// </field>
    /// <field name="l_DownloadAsOdtDialogOdtReady" type="String" static="true">
    /// {Placeholder="{0}"} Message displayed in the download a copy dialog. Placeholder 0 is a hyperlink replaced by the content of L_DownloadAsOdtDialogLinkSuggestion
    /// </field>
    /// <field name="l_DownloadAsOdtDialogLinkSuggestion" type="String" static="true">
    /// Text of a link to download a copy of the document. This is the content of placeholder 0 in L_DownloadAsOdtDialogOdtReady
    /// </field>
    /// <field name="l_DownloadAsOdtDialogLearnMoreLinkText" type="String" static="true">
    /// Text of link pointing to a page describing ODT support in Word web app
    /// </field>
    /// <field name="l_WordSavePrompt" type="String" static="true">
    /// </field>
    /// <field name="l_WordSaveButtonSave" type="String" static="true">
    /// </field>
    /// <field name="l_WordSaveButtonAbandon" type="String" static="true">
    /// </field>
    /// <field name="l_ModeSwitcherDialogConfirm" type="String" static="true">
    /// </field>
    /// <field name="l_ModeSwitcherDialogCancel" type="String" static="true">
    /// </field>
    /// <field name="l_ModeSwitcherDialogTitle" type="String" static="true">
    /// </field>
    /// <field name="l_ModeSwitcherDialogBody" type="String" static="true">
    /// </field>
    /// <field name="l_UnlockFailed" type="String" static="true">
    /// </field>
    /// <field name="l_PageBreak" type="String" static="true">
    /// </field>
    /// <field name="l_TotalPageCount" type="String" static="true">
    /// The label to show total page count in status bar. {0} will contain actual number of pages in the document.
    /// </field>
    /// <field name="l_TotalPageCountSingular" type="String" static="true">
    /// The label to show total page count in status bar. It is used when document contains only 1 page. {0} will contain actual number of pages in the document.
    /// </field>
    /// <field name="l_CurrentPageAndCount" type="String" static="true">
    /// The label to show current page and total page count in status bar. It is used when pagination is ON.
    /// </field>
    /// <field name="l_RefreshingPagination" type="String" static="true">
    /// String to call out when user is on page count button in status bar and pagination data is stale.
    /// </field>
    /// <field name="L_PaginationGroupTitle" type="String" static="true">
    /// Title of the ribbon group which contains a control to show/hide page ends in the document.
    /// </field>
    /// <field name="L_TogglePageEnds" type="String" static="true">
    /// Name of the ribbon control which can be used to show/hide page ends in the document.
    /// </field>
    /// <field name="L_PageCountApproximationMsg" type="String" static="true">
    /// ToolTip to for Approximation message for Page End.
    /// </field>
    /// <field name="L_faNew_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_faShare_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_faAbout_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_btnjClose_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_FullJustify_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_fseaInsertPageBreak_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_fsfaPageNumbers_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_btnFootnote_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_btnEndnote_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_flyOrientation_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_flySize_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_btnDeleteComment_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_btnPreviousComment_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_btnNextComment_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_btnOpenHeaderFooter_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_btnInsertComment_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_grpPictureFormat_PictureStyleAnchor_FriendlyLabel" type="String" static="true">
    /// Label on a control that allows a user to change the overall look of a picture.
    /// </field>
    /// <field name="L_buttonFirstRow_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonFirstColumn_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonLastRow_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonLastColumn_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonBandedRow_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonBandedColumn_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_fsfaMoreTableStyles_FriendlyLabel" type="String" static="true">
    /// Label on a control that exposes colors, lines and other effects that change a table's appearance.
    /// </field>
    /// <field name="L_fsfaTableStyleTheme_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonMarginsCustom_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonMarginsModerate_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonMarginsNarrow_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonMarginsNormal_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonMarginsOffice2003_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonMarginsWide_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonOrientationLandscape_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonOrientationPortrait_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonSizeA4_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonSizeA5_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonSizeExecutive_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonSizeLegal_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonSizeLetter_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_jbtnDownloadACopy_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_jbtnFileEmbed_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_WordCountFlyoutTitle" type="String" static="true">
    /// </field>
    /// <field name="L_ShareViaEmail" type="String" static="true">
    /// </field>
    /// <field name="L_jbtnRenameDialog_FriendlyLabel" type="String" static="true">
    /// Label on a button that launches a dialog for renaming a Word document.
    /// </field>
    /// <field name="L_WordTestFeature" type="String" static="true">
    /// {Locked}Non-shipping Test feature for simulating behavior of turning features on and off.
    /// </field>
    /// <field name="L_WordTestFeatureDialogText" type="String" static="true">
    /// {Locked}Non-shipping Test feature dialog text.
    /// </field>
    /// <field name="L_ProblemOpeningDocument" type="String" static="true">
    /// The text in the send us your file dialog that tells the user we had a problem.
    /// </field>
    /// <field name="L_SendUsYourFileDialogText" type="String" static="true">
    /// The text in the send us your file dialog that tells the user we need their file to investigate it.
    /// </field>
    /// <field name="L_Inserting" type="String" static="true">
    /// the text in the progress dialog that will show up when an agave is attempting to insert content such as images or text into the document.
    /// </field>
    /// <field name="L_TellMeAppTitle_Translator" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (Translator) button title. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_TextMaster" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (TextMaster) button title. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_ConsistencyChecker" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (Consistency Checker) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_EFax" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (eFax) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_ProWordCloud" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (Pro Word Cloud) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_FontFinder" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (Font Finder) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_PicHit" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (PicHit) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_IMGEffector" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (IMG Effector) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_LucidChart" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (Lucidchart) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_DocuSign" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (DocuSign) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_GeoGebraTube" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (GeoGebraTube) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_WordCalc" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (WordCalc) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_QR4Office" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (QR4Office) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_SymbolsCharacters" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (Symbols and Characters) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_WordToHTML" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (Word to HTML) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_MapIt" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (MapIt) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_AbbreviationList" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (Abbreviation List) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppTitle_HandyCalculator" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (Handy Calculator) button title . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_Translator" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (Translator) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_TextMaster" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (TextMaster) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_ConsistencyChecker" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (Consistency Checker) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_EFax" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (EFax) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_ProWordCloud" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (ProWordCloud) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_FontFinder" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (FontFinder) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_PicHit" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (PicHit) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_IMGEffector" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (IMGEffector) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_LucidChart" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (LucidChart) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_DocuSign" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (DocuSign) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_GeoGebraTube" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (GeoGebraTube) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_WordCalc" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (WordCalc) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_QR4Office" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (QR4Office) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_SymbolsCharacters" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (SymbolsCharacters) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_WordToHTML" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (WordToHTML) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_MapIt" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (MapIt) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_AbbreviationList" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (AbbreviationList) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppDescription_HandyCalculator" type="String" static="true">
    /// {Locked} String for the TellMe Office Add in (HandyCalculator) button description . This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_Translator" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (Translator) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_TextMaster" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (Translator) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_ConsistencyChecker" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (Consistency Checker) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_EFax" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (eFax) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_ProWordCloud" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (Pro Word Cloud) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_FontFinder" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (Font Finder) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_PicHit" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (PicHit) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_IMGEffector" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (IMG Effector) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_LucidChart" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (Lucidchart) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_DocuSign" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (DocuSign) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_GeoGebraTube" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (GeoGebraTube) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_WordCalc" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (WordCalc) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_QR4Office" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (QR4Office) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_SymbolsCharacters" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (SymbolsCharacters) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_WordToHTML" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (WordToHTML) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_MapIt" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (MapIt) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_AbbreviationList" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (AbbreviationList) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeAppIconUrl_HandyCalculator" type="String" static="true">
    /// {Locked} URL string for the TellMe Office Add in (HandyCalculator) button. This is for experiement, no need for localization.
    /// </field>
    /// <field name="L_TellMeButtonLabel_Synonyms" type="String" static="true">
    /// Label used for the Synonyms command returned by TellMe
    /// </field>
    /// <field name="L_TellMeButtonLabel_SynonymsParam" type="String" static="true">
    /// Label used for the parameterized Synonyms command returned by TellMe
    /// {0} is the query entered by the user
    /// </field>
    /// <field name="L_TellMeButtonLabel_Definitions" type="String" static="true">
    /// Label used for the Definitions command returned by TellMe
    /// </field>
    /// <field name="L_TellMeButtonLabel_DefinitionsParam" type="String" static="true">
    /// Label used for the parameterized Definitions command returned by TellMe
    /// {0} is the query entered by the user
    /// </field>
    /// <field name="L_TellMeTryQuery01" type="String" static="true">
    /// [Tag:CLE-UCI-TellMe]This string is meant to be in an informal, colloquial style, meant to resemble how everyday users would use the Tell Me feature.
    /// This string is an example for showing users how to add a comment.
    /// This string is shown to the user as an example menu item, as the abbreviated question that results in the answer/command "New Comment" (id=btnNewComment).
    /// </field>
    /// <field name="L_TellMeTryQuery02" type="String" static="true">
    /// [Tag:CLE-UCI-TellMe]This string is meant to be in an informal, colloquial style, meant to resemble how everyday users would use the Tell Me feature.
    /// This string is an example for showing users how to add a table.
    /// This string is shown to the user as an example menu item, as the abbreviated question that results in the answer/command "Insert Table" (id=flyInsertTable).
    /// </field>
    /// <field name="L_TellMeTryQuery03" type="String" static="true">
    /// [Tag:CLE-UCI-TellMe]This string is meant to be in an informal, colloquial style, meant to resemble how everyday users would use the Tell Me feature.
    /// This string is an example for showing users how to insert a header.
    /// This string is shown to the user as an example menu item, as the abbreviated question that results in the answer/command "Insert Header &amp; Footer" (id=btnInsertHeaderFooter).
    /// </field>
    /// <field name="L_TellMeTryQuery04" type="String" static="true">
    /// [Tag:CLE-UCI-TellMe]This string is meant to be in an informal, colloquial style, meant to resemble how everyday users would use the Tell Me feature.
    /// This string is an example for showing users how to check their spelling.
    /// This string is shown to the user as an example menu item, as the abbreviated question that results in the answer/command "Spelling" (id=fseaNextSpellingError).
    /// </field>
    /// <field name="L_TellMeTryQuery05" type="String" static="true">
    /// [Tag:CLE-UCI-TellMe]This string is meant to be in an informal, colloquial style, meant to resemble how everyday users would use the Tell Me feature.
    /// This string is an example for showing users how to share their document.
    /// This string is shown to the user as an example menu item, as the abbreviated question that results in the answer/command "Share via Email" (id=jbtnFileSharing).
    /// </field>
    /// <field name="L_TellMeTryQuery06" type="String" static="true">
    /// [Tag:CLE-UCI-TellMe]This string is meant to be in an informal, colloquial style, meant to resemble how everyday users would use the Tell Me feature.
    /// This string is an example for showing users how to find synonyms for the word amazing.
    /// This string is shown to the user as an example menu item, as the abbreviated question that results in the answer/command "Synonyms for "amazing"" (id=SynonymButton).
    /// </field>
    /// <field name="L_RichAPIErrorMsg_GeneralException" type="String" static="true">
    /// Error Message used in Word WAC Rich API when there are unexpected errors
    /// </field>
    /// <field name="L_RichAPIErrorMsg_InvalidArgument" type="String" static="true">
    /// Error Message used in Word WAC Rich API when user want to pass in invalid arguments
    /// </field>
    /// <field name="L_RichAPIErrorMsg_NotImplemented" type="String" static="true">
    /// Error Message used inWord WAC Rich API when user call an API which is not impelented yet
    /// </field>
    /// <field name="L_RichAPIErrorMsg_AccessDenied" type="String" static="true">
    /// Error Message used in Word WAC Rich API when user want to call an API which the API or
    /// user have not enouph permissions
    /// </field>
    /// <field name="L_RichAPIErrorMsg_ItemNotFound" type="String" static="true">
    /// Error Message used in Word WAC Rich API when the requested item not found.
    /// </field>
    /// <field name="L_RichAPIErrorMsg_NotSupported" type="String" static="true">
    /// Error Message used in Word WAC Rich API when user call some API which is not supported.
    /// </field>
    /// <field name="L_RichAPIErrorMsg_NotAllowed" type="String" static="true">
    /// Error Message used in Word WAC Rich API when user tries to perform some operation which is not allowed.
    /// For example, try to create a content control which includes multiple sections, etc. This is expected error.
    /// </field>
    /// <field name="L_RichAPIErrorMsg_OperationCancelled" type="String" static="true">
    /// Error Message used in Word WAC Rich API when certain API call was cancelled by the user.
    /// For example, try to call Application.createDocument and user click 'NO' button of the popup dialogue, etc. This is expected error.
    /// </field>
    /// <field name="L_RichAPIErrorMsg_ApiNotAvailable" type="String" static="true">
    /// Error Message used in Word WAC Rich API when certain API call was cancelled by the user.
    /// For example, try to call Application.createDocument and user click 'NO' button of the popup dialogue, etc. This is expected error.
    /// </field>
    /// <field name="L_AccHelpDialogWETitle" type="String" static="true">
    /// Word Editor accessibility help dialog title and subtitle
    /// </field>
    /// <field name="L_AccHelpDialogWESubtitle" type="String" static="true">
    /// </field>
    /// <field name="L_AccHelpDialogShowNextFootnoteCommand" type="String" static="true">
    /// Next footnote command/shortcut
    /// </field>
    /// <field name="L_AccHelpDialogShowNextFootnoteShortcut" type="String" static="true">
    /// </field>
    /// <field name="L_AccHelpDialogShowNextEndnoteCommand" type="String" static="true">
    /// Next endnote command/shortcut (uses a Ctrl/Cmd key shortcut prefix)
    /// </field>
    /// <field name="L_AccHelpDialogShowNextEndnoteShortcut" type="String" static="true">
    /// </field>
    /// <field name="L_AccHelpDialogShowNextCommentCommand" type="String" static="true">
    /// Next comment command/shortcut
    /// </field>
    /// <field name="L_AccHelpDialogShowNextCommentShortcut" type="String" static="true">
    /// </field>
    /// <field name="L_AccHelpDialogAccCheckerCommand" type="String" static="true">
    /// Accessibility Checker command/shortcut (uses a Ctrl/Cmd key shortcut prefix)
    /// </field>
    /// <field name="L_AccHelpDialogAccCheckerShortcut" type="String" static="true">
    /// </field>
    /// <field name="L_AccHelpDialogTrackChangesToggleCommand" type="String" static="true">
    /// Toggle Track Changes command/shortcut (uses a Ctrl/Cmd key shortcut prefix, desktop has same shortcut)
    /// </field>
    /// <field name="L_AccHelpDialogTrackChangesToggleShortcut" type="String" static="true">
    /// </field>
    /// <field name="L_AccHelpDialogTrackChangesAcceptCommand" type="String" static="true">
    /// Accept tracked change command/shortcut (uses a Ctrl/Cmd key shortcut prefix)
    /// </field>
    /// <field name="L_AccHelpDialogTrackChangesAcceptShortcut" type="String" static="true">
    /// </field>
    /// <field name="L_AccHelpDialogTrackChangesRejectCommand" type="String" static="true">
    /// Reject tracked change command/shortcut (uses a Ctrl/Cmd key shortcut prefix)
    /// </field>
    /// <field name="L_AccHelpDialogTrackChangesRejectShortcut" type="String" static="true">
    /// </field>
    /// <field name="L_AccHelpDialogTrackChangesPreviousCommand" type="String" static="true">
    /// Previous tracked change command/shortcut (uses a Ctrl/Cmd key shortcut prefix)
    /// </field>
    /// <field name="L_AccHelpDialogTrackChangesPreviousShortcut" type="String" static="true">
    /// </field>
    /// <field name="L_AccHelpDialogTrackChangesNextCommand" type="String" static="true">
    /// Next tracked change command/shortcut (uses a Ctrl/Cmd key shortcut prefix)
    /// </field>
    /// <field name="L_AccHelpDialogTrackChangesNextShortcut" type="String" static="true">
    /// </field>
    /// <field name="L_FormatPicture" type="String" static="true">
    /// Title used for Format Picture Pane which opens when the user clicks the launch button in the ribbon.
    /// </field>
    /// <field name="L_Picture" type="String" static="true">
    /// </field>
    /// <field name="L_Properties" type="String" static="true">
    /// </field>
    /// <field name="L_RotateMoreOptions" type="String" static="true">
    /// Strings for Rotation Section of Format Picture Pane
    /// </field>
    /// <field name="L_Rotation" type="String" static="true">
    /// </field>
    /// <field name="L_RotationAngle" type="String" static="true">
    /// </field>
    /// <field name="L_RotationSpinnerTooltip" type="String" static="true">
    /// </field>
    /// <field name="L_CropMoreOptions" type="String" static="true">
    /// Strings for Crop Section of Format Picture Pane
    /// </field>
    /// <field name="L_Top" type="String" static="true">
    /// </field>
    /// <field name="L_Bottom" type="String" static="true">
    /// </field>
    /// <field name="L_Left" type="String" static="true">
    /// </field>
    /// <field name="L_Right" type="String" static="true">
    /// </field>
    /// <field name="L_CropTopTooltip" type="String" static="true">
    /// </field>
    /// <field name="L_CropBottomTooltip" type="String" static="true">
    /// </field>
    /// <field name="L_CropLeftTooltip" type="String" static="true">
    /// </field>
    /// <field name="L_CropRightTooltip" type="String" static="true">
    /// </field>
    /// <field name="l_LanguageDialogDescription" type="String" static="true">
    /// </field>
    /// <field name="l_DoNotCheckSpellingOrGrammar" type="String" static="true">
    /// </field>
    /// <field name="L_ResumeTitle" type="String" static="true">
    /// Group title of the "Resume" section.
    /// </field>
    /// <field name="L_ResumeAssistantAsResume" type="String" static="true">
    /// Label for the ResumeAssistant Button in the "Resume" section.
    /// </field>
    /// <field name="L_ResumeAssistantAsResumeKeytip" type="String" static="true">
    /// Keytip text of the ResumeAssistantAsResume button
    /// </field>
    /// <field name="L_CVTitle" type="String" static="true">
    /// Group title of the "CV" section.
    /// </field>
    /// <field name="L_ResumeAssistantAsCV" type="String" static="true">
    /// Label for the ResumeAssistant Button in the "CV" section.
    /// </field>
    /// <field name="L_ResumeAssistantAsCVKeytip" type="String" static="true">
    /// Keytip text of the ResumeAssistantAsCV button
    /// </field>
    /// <field name="L_Acronyms" type="String" static="true">
    /// Label for the Acronyms ribbon button in the "Insights" section.
    /// </field>
    /// <field name="L_AcronymsKeytip" type="String" static="true">
    /// Keytip text of the Acronyms ribbon button.
    /// </field>
    /// <field name="L_SmartLookup" type="String" static="true">
    /// Label for the Smart Lookup ribbon button in the "Insights" section.
    /// </field>
    /// <field name="l_SmartLookupKeytip" type="String" static="true">
    /// Keytip text of the Acronyms ribbon button.
    /// </field>
    /// <field name="L_SuggestedTasks" type="String" static="true">
    /// Label for the Suggested Tasks ribbon button in the "Insights" section.
    /// </field>
    /// <field name="L_SuggestedTasksKeytip" type="String" static="true">
    /// Keytip text of the Suggested Tasks ribbon button.
    /// </field>
    /// <field name="L_UserNotSignedIn" type="String" static="true">
    /// User not signed in error message.
    /// </field>
    /// <field name="L_UserAborted" type="String" static="true">
    /// User not signed in error message.
    /// </field>
    /// <field name="L_UnsupoortedUserIdentity" type="String" static="true">
    /// The signed in identity is not supported for single sign on.
    /// </field>
    /// <field name="L_InvalidResourceUrl" type="String" static="true">
    /// The provided resource URL is invalid.
    /// </field>
    /// <field name="L_InvalidGrant" type="String" static="true">
    /// Office Online Client App ID is not granted for the request.
    /// </field>
    /// <field name="L_SSOAddinIsAlreadyRequestingToken" type="String" static="true">
    /// Pending token request has not completed.
    /// </field>
    /// <field name="L_SSOClientError" type="String" static="true">
    /// Client side error when making SSO token request.
    /// </field>
    /// <field name="L_SSOServerError" type="String" static="true">
    /// Server side error from authentication provider.
    /// </field>
    /// <field name="L_SSOResourceNotAllowed" type="String" static="true">
    /// Specified resource is not allowed.
    /// </field>
    /// <field name="L_TableOfContents" type="String" static="true">
    /// Group title of the Table of Contents section.
    /// </field>
    /// <field name="L_InsertTableOfContents" type="String" static="true">
    /// Label for the Insert Table of Contents button.
    /// </field>
    /// <field name="L_UpdateTableOfContents" type="String" static="true">
    /// Label for the Update Table of Contents button.
    /// </field>
    /// <field name="L_RemoveTableOfContents" type="String" static="true">
    /// Label for the Remove Table of Contents button.
    /// </field>
    /// <field name="L_LanguageTitle" type="String" static="true">
    /// Group title of the Language section.
    /// </field>
    /// <field name="L_ModernTranslator" type="String" static="true">
    /// Label for the Modern Translator button.
    /// </field>
    /// <field name="L_ModernTranslatorKeytip" type="String" static="true">
    /// Keytip for the Modern Translator button.
    /// </field>
    /// <field name="L_ModernTranslatorTaskPaneTitle" type="String" static="true">
    /// Title for the Modern Translator task pane.
    /// </field>
    /// <field name="L_ModernTranslatorSelectionTitle" type="String" static="true">
    /// Title for the Translate Selection button.
    /// </field>
    /// <field name="L_ModernTranslatorDocumentTitle" type="String" static="true">
    /// Title for the Translate Document button.
    /// </field>
    /// <field name="L_ModernTranslatorSettingsTitle" type="String" static="true">
    /// Title for the Translate Settings button.
    /// </field>
    /// <field name="L_ModernTranslatorSettingsTooltip" type="String" static="true">
    /// Tool tip for the Translate Settings button.
    /// </field>
    /// <field name="L_ModernTranslatorSelectionKeytip" type="String" static="true">
    /// Keytip for the Translate Selection button.
    /// </field>
    /// <field name="L_ModernTranslatorDocumentKeytip" type="String" static="true">
    /// Keytip for the Translate Document button.
    /// </field>
    /// <field name="L_ModernTranslatorSettingsKeytip" type="String" static="true">
    /// Keytip for the Translate Settings button.
    /// </field>
    /// <field name="l_BusinessBarMergePromptTitle" type="String" static="true">
    /// The business bar title to show when prompting the customer for permission to collect data to investigate failures in their session.
    /// </field>
    /// <field name="l_BusinessBarMergePromptMessage" type="String" static="true">
    /// The business bar message to show when prompting the customer for permission to collect data to investigate failures in their session.
    /// </field>
    /// <field name="l_BusinessBarMergePromptSendButton" type="String" static="true">
    /// The business bar button to show for getting permission to collect data to investigate failures in a customer's session.
    /// </field>
    /// <field name="l_BusinessBarMergePromptPrivacyLinkText" type="String" static="true">
    /// The business bar link to the privacy statement when getting permission to collect data to investigate failures in a customer's session.
    /// </field>
    /// <field name="l_PresenceStatusOnPage" type="String" static="true">
    /// Text for the user status used in the user button located in the PeoplesWell flyout or Action Hub callout
    /// </field>
    /// <field name="l_InlineTab" type="String" static="true">
    /// String represents the "tab" character (\t) in text. Used for accessibilty with Narrator.
    /// </field>
    /// <field name="L_InsertIntelligentPlaceholder" type="String" static="true">
    /// Text that shows up in the context menu to insert an intelligent placeholder
    /// </field>
    /// <field name="L_IntelligentPlaceholder" type="String" static="true">
    /// Text used to identify an intelligent placeholder in the canvas
    /// </field>
    /// <field name="L_InsertIntelligentPlaceholderAnchorText" type="String" static="true">
    /// Text that shows up when creating an intelligent placeholder, using either @ or the context menu.
    /// </field>
    /// <field name="L_InsertIntelligentPlaceholderContentText" type="String" static="true">
    /// Text that shows up when inside an intelligent placeholder comment, which preceedes any @ mentions in the placeholder.
    /// </field>
    /// <field name="L_MarkCompleteIntelligentPlaceholder" type="String" static="true">
    /// Text that shows up in the context menu to mark complete an intelligent placeholder.
    /// </field>
    /// <field name="L_OpenNavPaneIntelligentPlaceholderTab" type="String" static="true">
    /// Text that shows up in the canvas contextual menu to open navigation pane intelligent placeholder tab.
    /// </field>
    /// <field name="L_ReadingTimeLessThanOneMin" type="String" static="true">
    /// String used to render the reading time current numeric value when the value is nearly 0, displayed in the status bar and in the dialog box title.
    /// min is a abbreviatino for minutes.
    /// </field>
    /// <field name="L_ReadingTimeResultMin" type="String" static="true">
    /// String used to render the reading time numeric value in minutes.
    /// The reading time value is displayed in the status bar and in the dialog box title.
    /// The {0} placeholder indicates where the number will be inserted.
    /// min is an abbreviation for min.
    /// </field>
    /// <field name="L_ReadingTimeResultMinWithoutAbbreviation" type="String" static="true">
    /// String used to render the reading time numeric value in minutes for the selected content where we will not add abbreviation for minutes.
    /// The reading time value is displayed in the status bar and in the dialog box title.
    /// The {0} placeholder indicates where the number will be inserted.
    /// min is an abbreviation for min.
    /// </field>
    /// <field name="L_ReadingTimeResultHour" type="String" static="true">
    /// String used to render the reading time numeric value in hours.
    /// The reading time value is displayed in the status bar and in the dialog box title.
    /// The {0} placeholder indicates where the hour value will be inserted.
    /// h is an abbreviation for hour.
    /// </field>
    /// <field name="L_ReadingTimeResultDay" type="String" static="true">
    /// String used to render the reading time numeric value in days.
    /// The reading time value is displayed in the status bar and in the dialog box title.
    /// The {0} placeholder indicates where the number will be inserted.
    /// </field>
    /// <field name="L_ReadingTimeResultComposite" type="String" static="true">
    /// String used to render the reading time numeric value in the format hours minutes, or days hours.
    /// The reading time value is displayed in the status bar and in the dialog box title.
    /// The {0} placeholder indicates where the days or hours value will be inserted. L_ReadingTimeResultHour or L_ReadingTimeResultDay is used.
    /// The {1} placeholder indicates where the hours or minutes value will be inserted. L_ReadingTimeResultMin is used if {0} L_ReadingTimeResultHour, L_ReadingTimeResultHour if {0} is L_ReadingTimeResultDay.
    /// </field>
    /// <field name="L_ReadingTimeStatusBar" type="String" static="true">
    /// String used to render the reading time current value, displayed in the status bar and in the dialog box title.
    /// The {0} placeholder indicates where the reading time value will be inserted.
    /// Possible strings for this value are:
    /// L_ReadingTimeResultMin
    /// L_ReadingTimeLessThanOneMin
    /// L_ReadingTimeResultHour
    /// L_ReadingTimeResultDay
    /// L_ReadingTimeResultComposite
    /// </field>
    /// <field name="L_ReadingTimeSelectionStatusBar" type="String" static="true">
    /// String used to render the reading time current value when some content is selected, displayed in the status bar.
    /// The {0} placeholder indicates where the reading time value will be inserted.
    /// The {1} placeholder indicates where the total reading time will be inserted
    /// Possible strings for this value are:
    /// L_ReadingTimeResultMin
    /// L_ReadingTimeLessThanOneMin
    /// L_ReadingTimeResultHour
    /// L_ReadingTimeResultDay
    /// L_ReadingTimeResultComposite
    /// </field>
    /// <field name="L_ReadingTimeSelectionDialogBoxTitle" type="String" static="true">
    /// String used to render current value of reading time for selected content, displayed in the dialog box.
    /// The {0} placeholder indicates where the reading time value will be inserted.
    /// </field>
    /// <field name="L_ReadingTimeHidden" type="String" static="true">
    /// Text to display instead of reading time results when reading time is disabled.
    /// </field>
    /// <field name="L_ReadingTimeCalculating" type="String" static="true">
    /// Text used in the status bar in place of the reading time result while the reading time is not yet available.
    /// </field>
    /// <field name="L_ReadingTimeTooltip" type="String" static="true">
    /// String used for the reading time status bar button tooltip.
    /// Not yet used for the Tell Me 'ReadingTime' command result label.
    /// </field>
    /// <field name="L_ReadingTimeToggle" type="String" static="true">
    /// String used in the reading time visibility toggle button, located in the word count ribbon button drop down menu.
    /// </field>
    /// <field name="L_ReadingTimeStatsDialogDescription" type="String" static="true">
    /// String for the reading time dialog description in case no content is selected.
    /// </field>
    /// <field name="L_ReadingTimeSelectionDialogBox" type="String" static="true">
    /// String used to render the reading time current value when some content is selected, displayed in the dialog box.
    /// The {0} placeholder indicates where the reading time value will be inserted.
    /// The {1} placeholder indicates where the total reading time will be inserted
    /// Possible strings for this value are:
    /// L_ReadingTimeResultMin
    /// L_ReadingTimeLessThanOneMin
    /// L_ReadingTimeResultHour
    /// L_ReadingTimeResultDay
    /// L_ReadingTimeResultComposite
    /// </field>
    /// <field name="L_ReadingTimeStatsDialogSelectionDescription" type="String" static="true">
    /// String for the reading time dialog description in case some content is selected.
    /// The {0} placeholder is replaced with L_ReadingTimeSelectionDialogBox.
    /// Example: Estimated time to read the selected text is 1min of the 20min estimated to read the whole document.
    /// </field>
    /// <field name="L_ReadingTimeDocStatsDialogElementsHeading" type="String" static="true">
    /// Column heading in the reading time dialog that shows the element types (e.g. words, tables, images).
    /// Elements column labels are L_ReadingTimeDocStatsDialogWordCount, L_ReadingTimeDocStatsDialogImageCount and L_ReadingTimeDocStatsDialogTableCount.
    /// </field>
    /// <field name="L_ReadingTimeDocStatsDialogCountHeading" type="String" static="true">
    /// Column heading in the reading time dialog that shows the count values.
    /// </field>
    /// <field name="L_ReadingTimeDocStatsDialogTimeHeading" type="String" static="true">
    /// Column heading in the reading time dialog that shows the time values.
    /// </field>
    /// <field name="L_ReadingTimeDocStatsDialogWordCount" type="String" static="true">
    /// Label of the field in the reading time dialog that shows the number of words in the document or selection.
    /// </field>
    /// <field name="L_ReadingTimeDocStatsDialogImageCount" type="String" static="true">
    /// Label of the field in the reading time dialog that shows the number of images in the document or selection.
    /// </field>
    /// <field name="L_ReadingTimeDocStatsDialogTableCount" type="String" static="true">
    /// Label of the field in the reading time dialog that shows the number of tables in the document or selection.
    /// </field>
    /// <field name="L_RewriteContextMenuItem" type="String" static="true">
    /// The context menu item that shows when the user clicks on a range of text that is eligible for processing by the
    /// Rewrite feature. Launches the appropriate SDX when selected, so should be interpreted as a command meaning
    /// "rewrite this text now". The feature is currently in the early beta phase. That is why it is marked as "Preview".
    /// </field>
    /// <field name="L_AtAGlance" type="String" static="true">
    /// Label for At a glance ribbon button
    /// </field>
    /// <field name="L_AtAGlanceKeyTip" type="String" static="true">
    /// Keytip for the At a glance ribbon button
    /// </field>
    /// <field name="L_ShowIntentSuggestion" type="String" static="true">
    /// Text that shows up in the context menu to show intent suggestion
    /// </field>
    /// <field name="L_Ideas" type="String" static="true">
    /// Label on the button that launches Ideas pane
    /// </field>
    /// <field name="L_IdeasKeytip" type="String" static="true">
    /// Keytip text of the Ideas ribbon button.
    /// </field>
    /// <field name="L_IdeasKeyPointsCardTitle" type="String" static="true">
    /// Title text for the key points Ideas card
    /// </field>
    /// <field name="L_IdeasKeyPointsCardItemSubtle" type="String" static="true">
    /// "Subtle" (italic) item on the keypoints card
    /// </field>
    /// <field name="L_IdeasKeyPointsCardItemEmphasized" type="String" static="true">
    /// "Emphasized" (underline) item on the keypoints card
    /// </field>
    /// <field name="L_IdeasKeyPointsCardItemEyeCatching" type="String" static="true">
    /// "Eye-catching" (bold) item on the keypoints card
    /// </field>
    /// <field name="L_IdeasCalloutOpenIdeasButtonLabel" type="String" static="true">
    /// Label on the button that launches Ideas pane from the Ideas proactive callout/notification.
    /// </field>
}


WordEditorIntl.WordEditorStrings.registerClass('WordEditorIntl.WordEditorStrings');
WordEditorIntl.WordEditorStrings.l_DocumentContentsLabel = 'Document Contents';
WordEditorIntl.WordEditorStrings.l_EditingSurfaceAccessibilityDescribedByText = 'Press CTRL F6 to leave.';
WordEditorIntl.WordEditorStrings.l_LearningToolsErrorMessage = 'We are sorry, but your request to open up the Immersive Reader did not complete successfully.';
WordEditorIntl.WordEditorStrings.L_FormatPainter = 'Format Painter';
WordEditorIntl.WordEditorStrings.L_TabPageLayout = 'Page Layout';
WordEditorIntl.WordEditorStrings.L_BtnClearTableFormatting = 'Clear';
WordEditorIntl.WordEditorStrings.L_BtnHeaderFooter = 'Header & Footer';
WordEditorIntl.WordEditorStrings.L_PageNumbers = 'Page Numbers';
WordEditorIntl.WordEditorStrings.L_PageNumbersSectionHeaderForAdd = 'Add to Header or Footer';
WordEditorIntl.WordEditorStrings.L_IncludePageCount = 'Include Page Count';
WordEditorIntl.WordEditorStrings.L_IncludePageCountAlt = 'Include page count with page numbers.';
WordEditorIntl.WordEditorStrings.L_RemovePageNumbers = 'Remove Page Numbers';
WordEditorIntl.WordEditorStrings.L_RemovePageNumbersAlt = 'Remove all instances of page numbers from the header and footer.';
WordEditorIntl.WordEditorStrings.L_PageNumbersOnTopLeftAlt = 'Add page number to the left side of the header.';
WordEditorIntl.WordEditorStrings.L_PageNumbersOnTopCenterAlt = 'Add page number to the center of the header.';
WordEditorIntl.WordEditorStrings.L_PageNumbersOnTopRightAlt = 'Add page number to the right side of the header.';
WordEditorIntl.WordEditorStrings.L_PageNumbersOnBottomLeftAlt = 'Add page number to the left side of the footer.';
WordEditorIntl.WordEditorStrings.L_PageNumbersOnBottomCenterAlt = 'Add page number to the center of the footer.';
WordEditorIntl.WordEditorStrings.L_PageNumbersOnBottomRightAlt = 'Add page number to the right side of the footer.';
WordEditorIntl.WordEditorStrings.L_PageNumbersCalloutText = 'We\'ll add page numbers here';
WordEditorIntl.WordEditorStrings.L_PageNumbersInsertionNotificationMessage = 'Page numbers have been added. You can see the placeholder here and actual page numbers in Reading View or Print View.';
WordEditorIntl.WordEditorStrings.L_PageNumbersPreviewText = '{0}';
WordEditorIntl.WordEditorStrings.L_PageNumbersPreviewTextForIncludeCount = '{0} of {1}';
WordEditorIntl.WordEditorStrings.L_Endnote = 'Insert Endnote';
WordEditorIntl.WordEditorStrings.L_Footnote = 'Insert Footnote';
WordEditorIntl.WordEditorStrings.L_NextFootnote = 'Next Footnote';
WordEditorIntl.WordEditorStrings.L_NextEndnote = 'Next Endnote';
WordEditorIntl.WordEditorStrings.L_PrevFootnote = 'Previous Footnote';
WordEditorIntl.WordEditorStrings.L_PrevEndnote = 'Previous Endnote';
WordEditorIntl.WordEditorStrings.L_ShowFootnoteEndnote = 'Show Notes';
WordEditorIntl.WordEditorStrings.L_ShowFootnotes = 'Show Footnotes';
WordEditorIntl.WordEditorStrings.L_ShowEndnotes = 'Show Endnotes';
WordEditorIntl.WordEditorStrings.L_Endnotes = 'Endnotes';
WordEditorIntl.WordEditorStrings.L_Comment = 'Comment';
WordEditorIntl.WordEditorStrings.L_WheresTheSaveButton = 'Where\'s the Save Button?';
WordEditorIntl.WordEditorStrings.L_WheresTheSaveButtonDescription = 'There\'s no Save button because we\'re automatically saving your {doctype}.';
WordEditorIntl.WordEditorStrings.L_DownloadDescription = 'Download a copy to your computer.';
WordEditorIntl.WordEditorStrings.L_GoToFileOneDrive = 'Go to this File on {onedrive}';
WordEditorIntl.WordEditorStrings.L_GoToFile = 'Go to this File\'s Location';
WordEditorIntl.WordEditorStrings.L_GoToFileDescription = 'View the location of this file, where you can rename, copy, or move it.';
WordEditorIntl.WordEditorStrings.L_DownloadAsPDF = 'Download as PDF';
WordEditorIntl.WordEditorStrings.L_DownloadAsPDFDescription = 'Download a copy of this {doctype} to your computer as a PDF file.';
WordEditorIntl.WordEditorStrings.L_DownloadAsODT = 'Download as ODT';
WordEditorIntl.WordEditorStrings.L_DownloadAsODTDescription = 'Download a copy of this {doctype} to your computer as an ODT file.';
WordEditorIntl.WordEditorStrings.L_BtnEndnote = 'Endnote';
WordEditorIntl.WordEditorStrings.L_EmailALink = 'Email a Link';
WordEditorIntl.WordEditorStrings.L_EmailALinkDescription = 'Send an email that includes a link to this document.';
WordEditorIntl.WordEditorStrings.L_Embed = 'Embed';
WordEditorIntl.WordEditorStrings.L_EmbedDescription = 'Embed this {doctype} in your blog or website.';
WordEditorIntl.WordEditorStrings.L_Find = 'Find';
WordEditorIntl.WordEditorStrings.L_FindInDocument = 'Find in document';
WordEditorIntl.WordEditorStrings.L_FindTooltip = 'Find';
WordEditorIntl.WordEditorStrings.L_Replace = 'Replace';
WordEditorIntl.WordEditorStrings.L_ReplaceTooltip = 'Replace';
WordEditorIntl.WordEditorStrings.L_BtnFootnote = 'Footnote';
WordEditorIntl.WordEditorStrings.L_FullJustify = 'Justify';
WordEditorIntl.WordEditorStrings.L_GroupDocumentViews = 'Document Views';
WordEditorIntl.WordEditorStrings.L_GroupEditing = 'Editing';
WordEditorIntl.WordEditorStrings.L_GroupFont = 'Font';
WordEditorIntl.WordEditorStrings.L_FileHistory = 'Version History';
WordEditorIntl.WordEditorStrings.L_FileHistoryDescription = 'View previous versions.';
WordEditorIntl.WordEditorStrings.L_GroupFootnoteEndnote = 'Footnotes';
WordEditorIntl.WordEditorStrings.L_GroupHeaderFooter = 'Header & Footer';
WordEditorIntl.WordEditorStrings.L_GroupImageAdjust = 'Adjust';
WordEditorIntl.WordEditorStrings.L_GroupPageBreak = 'Pages';
WordEditorIntl.WordEditorStrings.L_GroupPageLayoutParagraph = 'Paragraph';
WordEditorIntl.WordEditorStrings.L_GroupPageSetup = 'Page Setup';
WordEditorIntl.WordEditorStrings.L_GroupParagraph = 'Paragraph';
WordEditorIntl.WordEditorStrings.L_GrowFontSize = 'Grow Font';
WordEditorIntl.WordEditorStrings.L_LabelIndent = 'Indent';
WordEditorIntl.WordEditorStrings.L_LabelSpacing = 'Spacing';
WordEditorIntl.WordEditorStrings.L_LabelSpacingAfter = 'After:';
WordEditorIntl.WordEditorStrings.L_LabelSpacingBefore = 'Before:';
WordEditorIntl.WordEditorStrings.L_LaunchParagraphDialogFromContextMenu = 'Paragraph...';
WordEditorIntl.WordEditorStrings.L_LineSpacing = 'Line Spacing';
WordEditorIntl.WordEditorStrings.L_MenuFootnotesEndnotes = 'Next Footnote';
WordEditorIntl.WordEditorStrings.L_PageA4 = 'A4';
WordEditorIntl.WordEditorStrings.L_PageA5 = 'A5';
WordEditorIntl.WordEditorStrings.L_RibbonInsertPageBreak = 'Page Break';
WordEditorIntl.WordEditorStrings.L_PageCustomSizes = 'Custom Page Size...';
WordEditorIntl.WordEditorStrings.L_PageCustomSizesDescription = 'Define custom page size';
WordEditorIntl.WordEditorStrings.L_PageCustomMargins = 'Custom Margins...';
WordEditorIntl.WordEditorStrings.L_PageCustomMarginsDescription = 'Define custom margins';
WordEditorIntl.WordEditorStrings.L_PageExecutive = 'Executive';
WordEditorIntl.WordEditorStrings.L_PageLandscape = 'Landscape';
WordEditorIntl.WordEditorStrings.L_PageLegal = 'Legal';
WordEditorIntl.WordEditorStrings.L_PageLetter = 'Letter';
WordEditorIntl.WordEditorStrings.L_PageMargins = 'Margins';
WordEditorIntl.WordEditorStrings.L_PageModerate = 'Moderate';
WordEditorIntl.WordEditorStrings.L_PageNarrow = 'Narrow';
WordEditorIntl.WordEditorStrings.L_PageNormal = 'Normal';
WordEditorIntl.WordEditorStrings.L_PageOffice2003 = 'Office 2003 Default';
WordEditorIntl.WordEditorStrings.L_PageOrientation = 'Orientation';
WordEditorIntl.WordEditorStrings.L_PagePortrait = 'Portrait';
WordEditorIntl.WordEditorStrings.L_PageSize = 'Size';
WordEditorIntl.WordEditorStrings.L_PageWide = 'Wide';
WordEditorIntl.WordEditorStrings.L_PreviousVersions = 'Previous Versions';
WordEditorIntl.WordEditorStrings.L_PreviousVersionsDescription = 'View, restore, or download older versions of this document.';
WordEditorIntl.WordEditorStrings.L_Print = 'Print';
WordEditorIntl.WordEditorStrings.L_PrintToPdf = 'Print to PDF';
WordEditorIntl.WordEditorStrings.L_PrintToPdfDescription = 'Create a printable PDF of this document.';
WordEditorIntl.WordEditorStrings.L_QuickStyles = 'Quick Styles';
WordEditorIntl.WordEditorStrings.L_ReplyWithChanges = 'Reply with Changes';
WordEditorIntl.WordEditorStrings.L_ReplyWithChangesDescription = 'Reply by email with a link to this {doctype}.';
WordEditorIntl.WordEditorStrings.L_ResetPicture = 'Reset Picture';
WordEditorIntl.WordEditorStrings.L_SaveAs = 'Save As';
WordEditorIntl.WordEditorStrings.L_ShrinkFontSize = 'Shrink Font';
WordEditorIntl.WordEditorStrings.L_SpinnerSpacingAfter = 'Spacing After';
WordEditorIntl.WordEditorStrings.L_SpinnerSpacingBefore = 'Spacing Before';
WordEditorIntl.WordEditorStrings.L_TextDirLTRTooltip = 'Left-to-Right Text Direction';
WordEditorIntl.WordEditorStrings.L_TextDirRTLTooltip = 'Right-to-Left Text Direction';
WordEditorIntl.WordEditorStrings.L_SpecialIndent = 'Special Indent';
WordEditorIntl.WordEditorStrings.L_SpecialIndentTooltip = 'Special Indent';
WordEditorIntl.WordEditorStrings.L_SpecialIndentNone = 'None';
WordEditorIntl.WordEditorStrings.L_SpecialIndentFirstLine = 'First Line';
WordEditorIntl.WordEditorStrings.L_SpecialIndentHanging = 'Hanging';
WordEditorIntl.WordEditorStrings.L_BevelEdgeRectangle = 'Bevel Rectangle';
WordEditorIntl.WordEditorStrings.L_BeveledMatteWhite = 'Beveled Matte, White';
WordEditorIntl.WordEditorStrings.L_BeveledOvalBlack = 'Beveled Oval, Black';
WordEditorIntl.WordEditorStrings.L_BevelPerspective = 'Bevel Perspective';
WordEditorIntl.WordEditorStrings.L_BevelPerspectiveLeftWhite = 'Bevel Perspective Left, White';
WordEditorIntl.WordEditorStrings.L_CenterShadowRectangle = 'Center Shadow Rectangle';
WordEditorIntl.WordEditorStrings.L_CompoundFrameBlack = 'Compound Frame, Black';
WordEditorIntl.WordEditorStrings.L_DoubleFrameBlack = 'Double Frame, Black';
WordEditorIntl.WordEditorStrings.L_DropShadowRectangle = 'Drop Shadow Rectangle';
WordEditorIntl.WordEditorStrings.L_MetalFrame = 'Metal Frame';
WordEditorIntl.WordEditorStrings.L_MetalOval = 'Metal Oval';
WordEditorIntl.WordEditorStrings.L_MetalRoundedRectangle = 'Metal Rounded Rectangle';
WordEditorIntl.WordEditorStrings.L_ModerateFrameBlack = 'Moderate Frame, Black';
WordEditorIntl.WordEditorStrings.L_ModerateFrameWhite = 'Moderate Frame, White';
WordEditorIntl.WordEditorStrings.L_PerspectiveShadowWhite = 'Perspective Shadow, White';
WordEditorIntl.WordEditorStrings.L_PictureStyles = 'Picture Styles';
WordEditorIntl.WordEditorStrings.L_ReflectedBevelBlack = 'Reflected Bevel, Black';
WordEditorIntl.WordEditorStrings.L_ReflectedBevelWhite = 'Reflected Bevel, White';
WordEditorIntl.WordEditorStrings.L_ReflectedPerspectiveRight = 'Reflected Perspective Right';
WordEditorIntl.WordEditorStrings.L_ReflectedRoundedRectangle = 'Reflected Rounded Rectangle';
WordEditorIntl.WordEditorStrings.L_RelaxedPerspectiveWhite = 'Relaxed Perspective, White';
WordEditorIntl.WordEditorStrings.L_RotatedWhite = 'Rotated, White';
WordEditorIntl.WordEditorStrings.L_RoundedDiagonalCornerWhite = 'Rounded Diagonal Corner, White';
WordEditorIntl.WordEditorStrings.L_SimpleFrameBlack = 'Simple Frame, Black';
WordEditorIntl.WordEditorStrings.L_SimpleFrameWhite = 'Simple Frame, White';
WordEditorIntl.WordEditorStrings.L_SnipDiagonalCornerWhite = 'Snip Diagonal Corner, White';
WordEditorIntl.WordEditorStrings.L_SoftEdgeOval = 'Soft Edge Oval';
WordEditorIntl.WordEditorStrings.L_SoftEdgeRectangle = 'Soft Edge Rectangle';
WordEditorIntl.WordEditorStrings.L_ThickMatteBlack = 'Thick Matte, Black';
WordEditorIntl.WordEditorStrings.L_TabReview = 'Review';
WordEditorIntl.WordEditorStrings.L_ProofingSplitButton = 'Spelling & Grammar';
WordEditorIntl.WordEditorStrings.L_GrammarSettings = 'Grammar Settings...';
WordEditorIntl.WordEditorStrings.L_EditorSettings = 'Editor Settings...';
WordEditorIntl.WordEditorStrings.L_NextProofingError = 'Spelling and Grammar';
WordEditorIntl.WordEditorStrings.L_Comments = 'Comments';
WordEditorIntl.WordEditorStrings.L_NewComment = 'New Comment';
WordEditorIntl.WordEditorStrings.L_DeleteComment = 'Delete';
WordEditorIntl.WordEditorStrings.L_PreviousComment = 'Previous';
WordEditorIntl.WordEditorStrings.L_NextComment = 'Next';
WordEditorIntl.WordEditorStrings.L_OpenCommentPane = 'Show Comments';
WordEditorIntl.WordEditorStrings.L_Tracking = 'Tracking';
WordEditorIntl.WordEditorStrings.L_TrackChanges = 'Track Changes';
WordEditorIntl.WordEditorStrings.L_TrackChangesLabelText = 'Track Changes:';
WordEditorIntl.WordEditorStrings.L_TrackChangesKeytip = 'G';
WordEditorIntl.WordEditorStrings.L_TrackChangesOff = 'Off';
WordEditorIntl.WordEditorStrings.L_TrackChangesForEveryone = 'For Everyone';
WordEditorIntl.WordEditorStrings.L_TrackChangesJustMine = 'Just Mine';
WordEditorIntl.WordEditorStrings.L_AcceptChange = 'Accept';
WordEditorIntl.WordEditorStrings.L_AcceptChangeKeytip = 'A2';
WordEditorIntl.WordEditorStrings.L_RejectChange = 'Reject';
WordEditorIntl.WordEditorStrings.L_RejectChangeKeytip = 'J';
WordEditorIntl.WordEditorStrings.L_PreviousChange = 'Previous';
WordEditorIntl.WordEditorStrings.L_PreviousChangeKeytip = 'F';
WordEditorIntl.WordEditorStrings.L_NextChange = 'Next';
WordEditorIntl.WordEditorStrings.L_NextChangeKeytip = 'H';
WordEditorIntl.WordEditorStrings.L_TrackChangeContextMenuGeneric = 'Change';
WordEditorIntl.WordEditorStrings.L_TrackChangeContextMenuInsertion = 'Insertion';
WordEditorIntl.WordEditorStrings.L_TrackChangeContextMenuDeletion = 'Deletion';
WordEditorIntl.WordEditorStrings.L_TrackChangeContextMenuFormat = 'Format Change';
WordEditorIntl.WordEditorStrings.L_TrackChangeContextMenuReplace = 'Replacement';
WordEditorIntl.WordEditorStrings.L_TrackChangeContextMenuTextFormat = '{0} {1}';
WordEditorIntl.WordEditorStrings.L_TrackChangeNotFoundDialogMessage = 'There aren\'t any tracked changes in your {doctype}.';
WordEditorIntl.WordEditorStrings.L_TrackChangeCannotBeAcceptedOrRejectedDialogMessage = 'The selection includes objects that cannot be edited by Word in a browser';
WordEditorIntl.WordEditorStrings.L_TrackChangeCannotBeAcceptedOrRejectedDialogTitle = 'That change can\u2019t be accepted or rejected';
WordEditorIntl.WordEditorStrings.L_TrackChangeTooltipInserted = 'inserted';
WordEditorIntl.WordEditorStrings.L_TrackChangeTooltipDeleted = 'deleted';
WordEditorIntl.WordEditorStrings.L_TrackChangeTooltipFormatted = 'formatted';
WordEditorIntl.WordEditorStrings.L_TrackChangeCustomizedTooltipCitation = '\"{0}\"';
WordEditorIntl.WordEditorStrings.L_TrackChangeCustomizedTooltipInserted = '[inserted] {0}';
WordEditorIntl.WordEditorStrings.L_TrackChangeCustomizedTooltipDeleted = '[deleted] {0}';
WordEditorIntl.WordEditorStrings.L_TrackChangeCustomizedTooltipFormatted = '[formatted] {0}';
WordEditorIntl.WordEditorStrings.L_TrackChangeCustomizedTooltipReplaced = '[replaced] {0} [with] {1}';
WordEditorIntl.WordEditorStrings.L_TrackChangeTooltipRevertedChangeFormat = 'Not {0}';
WordEditorIntl.WordEditorStrings.L_TrackChangeTooltipCommaSeparator = ', ';
WordEditorIntl.WordEditorStrings.L_TrackChangeTooltipOverflowEllipsis = '{0}...';
WordEditorIntl.WordEditorStrings.L_TrackChangeTableRow = 'Table Row';
WordEditorIntl.WordEditorStrings.L_TrackChangeChangeReadout = '{0} change';
WordEditorIntl.WordEditorStrings.L_TrackChangeInsertionType = 'Insertion';
WordEditorIntl.WordEditorStrings.L_TrackChangeDeletionType = 'Deletion';
WordEditorIntl.WordEditorStrings.L_TrackChangeFormatType = 'Format';
WordEditorIntl.WordEditorStrings.L_Image = 'Image';
WordEditorIntl.WordEditorStrings.L_ParagraphMark = 'Paragraph Mark';
WordEditorIntl.WordEditorStrings.L_Justification = 'Justification';
WordEditorIntl.WordEditorStrings.L_Centered = 'Centered';
WordEditorIntl.WordEditorStrings.L_Style = 'Style';
WordEditorIntl.WordEditorStrings.L_TextDirection = 'Text Direction';
WordEditorIntl.WordEditorStrings.L_Numbered = 'Numbered';
WordEditorIntl.WordEditorStrings.L_Bulleted = 'Bulleted';
WordEditorIntl.WordEditorStrings.L_NoBulletNumbering = 'No bullets or numbering';
WordEditorIntl.WordEditorStrings.L_ProofingLanguage = 'Proofing Language';
WordEditorIntl.WordEditorStrings.L_CharacterFormatting = 'Character Formatting';
WordEditorIntl.WordEditorStrings.L_UnknownAuthorName = 'Unknown';
WordEditorIntl.WordEditorStrings.l_RemovedAuthorName = 'Author';
WordEditorIntl.WordEditorStrings.L_TrackChangeDeletedTooltipFormat = '{0}, {1} deleted:\u200e\n{2}';
WordEditorIntl.WordEditorStrings.L_TrackChangeInsertedTooltipFormat = '{0}, {1} inserted:\u200e\n{2}';
WordEditorIntl.WordEditorStrings.L_TrackChangeFormattedTooltipFormat = '{0}, {1} formatted:\u200e\n{2}';
WordEditorIntl.WordEditorStrings.L_TrackChangeDeletedTooltipFormatNoTimestamp = '{0} deleted:\u200e\n{1}';
WordEditorIntl.WordEditorStrings.L_TrackChangeInsertedTooltipFormatNoTimestamp = '{0} inserted:\u200e\n{1}';
WordEditorIntl.WordEditorStrings.L_TrackChangeFormattedTooltipFormatNoTimestamp = '{0} formatted:\u200e\n{1}';
WordEditorIntl.WordEditorStrings.L_TrackChangeDeletedContentSelectedDialogMessage = 'This action cannot be performed because the selection is marked as deleted text.';
WordEditorIntl.WordEditorStrings.L_TrackChangePartiallyDeletedContentSelectedDialogMessage = 'This action cannot be performed because the selection contains text marked as deleted.';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogTitle = 'That change can\'t be tracked';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogMessage = 'Do you want to keep it anyway, or undo it?';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogTitleDeleteSelection = 'Something in that change can\'t be tracked';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogMessageDeleteSelection = 'Do you want to keep the whole change anyway, or undo it?';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogCheckboxLabelGeneral = 'From now on, go ahead and keep my changes to {0}.';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogCheckboxLabelUnsupportedObject = 'From now on, go ahead and delete items that can\'t be edited in {webappshort}.';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogCheckboxLabelAnchoredImage = 'From now on, go ahead and delete anchored images.';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogTableColumnType = 'table columns';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogTableFormatType = 'table formatting';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogEquationType = 'equations';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogFootnoteEndnoteType = 'footnotes and endnotes';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogHyperlinkType = 'hyperlinks';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogMergeTableCellsType = 'merge table cells';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogSplitTableCellsType = 'split table cells';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogContentControlType = 'content controls';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogPageLayoutType = 'page layout';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogPageBreakType = 'page breaks';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogPageNumbersType = 'page numbers';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogPictureFormatType = 'picture formatting';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogOkButton = 'Keep';
WordEditorIntl.WordEditorStrings.L_UntrackedChangeDialogCancelButton = 'Undo';
WordEditorIntl.WordEditorStrings.L_JustMineNotification = '{0} is tracking changes.';
WordEditorIntl.WordEditorStrings.L_ForEveryoneNotification = '{0} turned on track changes for everyone.';
WordEditorIntl.WordEditorStrings.L_TurnOffForEveryoneNotification = '{0} turned off track changes for everyone.';
WordEditorIntl.WordEditorStrings.L_TurnOffJustMineNotification = '{0} is no longer tracking changes.';
WordEditorIntl.WordEditorStrings.L_ActivityGroupTitle = 'Changes';
WordEditorIntl.WordEditorStrings.L_MarkChangeAsRead = 'Mark changes as read';
WordEditorIntl.WordEditorStrings.L_MarkAsRead = 'Mark As Read';
WordEditorIntl.WordEditorStrings.L_MarkAsReadKeytip = 'R';
WordEditorIntl.WordEditorStrings.L_CatchUpActivityHighlightReadoutTemplate = 'Change {0} of {1}: {2} ';
WordEditorIntl.WordEditorStrings.L_CatchUpActivityParagraphAnnouncementTemplate = 'Changes were made to this paragraph';
WordEditorIntl.WordEditorStrings.L_CatchUpActivityChangeAnnouncementTemplate = 'Changes made by {0} on {1}.';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogActivityAnnouncementsShortcut = 'Ctrl+Shift+Y';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogActivityAnnouncementsCommand = 'Toggle the announcement of new changes in the document on or off';
WordEditorIntl.WordEditorStrings.L_WebAppFullName = '{webappfull}';
WordEditorIntl.WordEditorStrings.L_GroupTableStyles = 'Table Styles';
WordEditorIntl.WordEditorStrings.L_MenuTableTheme = 'Change Colors';
WordEditorIntl.WordEditorStrings.L_LabelTableStylesCustom = 'Custom';
WordEditorIntl.WordEditorStrings.L_LabelTableStylesGrid = 'Grid Tables';
WordEditorIntl.WordEditorStrings.L_LabelTableStylesList = 'List Tables';
WordEditorIntl.WordEditorStrings.L_LabelTableStylesPlain = 'Plain Tables';
WordEditorIntl.WordEditorStrings.L_GroupTableStyleOptions = 'Table Style Options';
WordEditorIntl.WordEditorStrings.L_TableStyleOptionFirstRow = 'Header Row';
WordEditorIntl.WordEditorStrings.L_TableStyleOptionFirstColumn = 'First Column';
WordEditorIntl.WordEditorStrings.L_TableStyleOptionLastRow = 'Total Row';
WordEditorIntl.WordEditorStrings.L_TableStyleOptionLastColumn = 'Last Column';
WordEditorIntl.WordEditorStrings.L_TableStyleOptionBandedRow = 'Banded Rows';
WordEditorIntl.WordEditorStrings.L_TableStyleOptionBandedColumn = 'Banded Columns';
WordEditorIntl.WordEditorStrings.L_TableGridLight = 'Table Grid Light';
WordEditorIntl.WordEditorStrings.L_PlainTable1 = 'Plain Table 1';
WordEditorIntl.WordEditorStrings.L_PlainTable2 = 'Plain Table 2';
WordEditorIntl.WordEditorStrings.L_PlainTable3 = 'Plain Table 3';
WordEditorIntl.WordEditorStrings.L_PlainTable4 = 'Plain Table 4';
WordEditorIntl.WordEditorStrings.L_PlainTable5 = 'Plain Table 5';
WordEditorIntl.WordEditorStrings.L_TableGrid = 'Table Grid';
WordEditorIntl.WordEditorStrings.L_GridTable1Light = 'Grid Table 1 Light';
WordEditorIntl.WordEditorStrings.L_GridTable2 = 'Grid Table 2';
WordEditorIntl.WordEditorStrings.L_GridTable3 = 'Grid Table 3';
WordEditorIntl.WordEditorStrings.L_GridTable4 = 'Grid Table 4';
WordEditorIntl.WordEditorStrings.L_GridTable5Dark = 'Grid Table 5 Dark';
WordEditorIntl.WordEditorStrings.L_GridTable6Colorful = 'Grid Table 6 Colorful';
WordEditorIntl.WordEditorStrings.L_GridTable7Colorful = 'Grid Table 7 Colorful';
WordEditorIntl.WordEditorStrings.L_ListTable1Light = 'List Table 1 Light';
WordEditorIntl.WordEditorStrings.L_ListTable2 = 'List Table 2';
WordEditorIntl.WordEditorStrings.L_ListTable3 = 'List Table 3';
WordEditorIntl.WordEditorStrings.L_ListTable4 = 'List Table 4';
WordEditorIntl.WordEditorStrings.L_ListTable5Dark = 'List Table 5 Dark';
WordEditorIntl.WordEditorStrings.L_ListTable6Colorful = 'List Table 6 Colorful';
WordEditorIntl.WordEditorStrings.L_ListTable7Colorful = 'List Table 7 Colorful';
WordEditorIntl.WordEditorStrings.L_TableStyleNameWithThemeFormat = '{0} - {1}';
WordEditorIntl.WordEditorStrings.L_Crop = 'Crop';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarLabel = 'HeaderToolbar';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarFirstPageButton = 'First Page';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarEvenPagesButton = 'Even Pages';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarOddPagesButton = 'Odd Pages';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarOtherPagesButton = 'Other Pages';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarOptions = 'Options';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarSectionLabel = 'Section';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarSectionButtonLabel = 'Section {0}';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarAllPages = 'Same across Entire Document';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarEntireSection = 'Same across Entire Section';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarFirstPage = 'Different First Page';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarEvenOddPages = 'Different Even & Odd Pages';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarFirstEvenOddPages = 'Different First, Even & Odd Pages';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarRemoveHeadersAndFooters = 'Remove Headers & Footers';
WordEditorIntl.WordEditorStrings.L_HeaderFooterOverlayAccessibleText = 'Close Header & Footer';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarDeleteDialogMessage = 'This will delete all headers and footers including any existing page numbers.';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarCantDeleteContent = 'Sorry, we can\'t remove these headers and footers because they include content that {webappshort} can\'t delete. Click Open in Word to remove them.';
WordEditorIntl.WordEditorStrings.L_HeaderToolbarDeleteDialogRemoveAllButton = 'Remove all';
WordEditorIntl.WordEditorStrings.l_DefaultHeaderScreenReaderMessage = 'Editing default header';
WordEditorIntl.WordEditorStrings.l_DefaultFooterScreenReaderMessage = 'Editing default footer';
WordEditorIntl.WordEditorStrings.l_FirstPageHeaderScreenReaderMessage = 'Editing first page header';
WordEditorIntl.WordEditorStrings.l_FirstPageFooterScreenReaderMessage = 'Editing first page footer';
WordEditorIntl.WordEditorStrings.l_EvenPagesHeaderScreenReaderMessage = 'Editing even pages header';
WordEditorIntl.WordEditorStrings.l_EvenPagesFooterScreenReaderMessage = 'Editing even pages footer';
WordEditorIntl.WordEditorStrings.l_OddPagesHeaderScreenReaderMessage = 'Editing odd pages header';
WordEditorIntl.WordEditorStrings.l_OddPagesFooterScreenReaderMessage = 'Editing odd pages footer';
WordEditorIntl.WordEditorStrings.l_DefaultHeaderScreenReaderMessageForReadOnly = 'Reading default header';
WordEditorIntl.WordEditorStrings.l_DefaultFooterScreenReaderMessageForReadOnly = 'Reading default footer';
WordEditorIntl.WordEditorStrings.l_FirstPageHeaderScreenReaderMessageForReadOnly = 'Reading first page header';
WordEditorIntl.WordEditorStrings.l_FirstPageFooterScreenReaderMessageForReadOnly = 'Reading first page footer';
WordEditorIntl.WordEditorStrings.l_EvenPagesHeaderScreenReaderMessageForReadOnly = 'Reading even pages header';
WordEditorIntl.WordEditorStrings.l_EvenPagesFooterScreenReaderMessageForReadOnly = 'Reading even pages footer';
WordEditorIntl.WordEditorStrings.l_OddPagesHeaderScreenReaderMessageForReadOnly = 'Reading odd pages header';
WordEditorIntl.WordEditorStrings.l_OddPagesFooterScreenReaderMessageForReadOnly = 'Reading odd pages footer';
WordEditorIntl.WordEditorStrings.l_HeaderFooterNoContentAvailableMessage = 'No content has been added yet.';
WordEditorIntl.WordEditorStrings.L_FormatFootnotes = 'Format Footnotes';
WordEditorIntl.WordEditorStrings.L_FormatEndnotes = 'Format Endnotes';
WordEditorIntl.WordEditorStrings.L_FootnoteEndnoteFormattingOptionsDialogTitle = 'Format Options';
WordEditorIntl.WordEditorStrings.L_FootnoteEndnoteFormattingOptionsDialogApplyButton = 'Apply';
WordEditorIntl.WordEditorStrings.L_FootnoteEndnoteFormattingOptionsDialogApplyAllButton = 'Apply To All';
WordEditorIntl.WordEditorStrings.l_FootnoteEndnoteFormattingOptionsFont = 'Font';
WordEditorIntl.WordEditorStrings.l_FootnoteEndnoteFormattingOptionsIndent = 'Indentation';
WordEditorIntl.WordEditorStrings.l_FootnoteEndnotesIndentButtonText = 'Sample Text Sample Text Sample Text';
WordEditorIntl.WordEditorStrings.l_FootnoteEndnotesNoIndentButtonTitle = 'No Indent';
WordEditorIntl.WordEditorStrings.l_FootnoteEndnotesFirstLineIndentButtonTitle = 'First Line Indent';
WordEditorIntl.WordEditorStrings.l_FootnoteEndnoteFormattingUnsupportedNotification = 'We couldn\'t format some notes that are too complex for {webappshort} in a browser. You can format them in the desktop version of {richclientfull}.';
WordEditorIntl.WordEditorStrings.l_FootnoteEndnoteTextOverflowFormat = '{0}...';
WordEditorIntl.WordEditorStrings.l_FootnoteTooltipInstruction = '\n\nClick to View/Edit Footnote';
WordEditorIntl.WordEditorStrings.l_EndnoteTooltipInstruction = '\n\nClick to View/Edit Endnote';
WordEditorIntl.WordEditorStrings.l_FootnoteEditingSurfaceAccessibilityTitleText = 'Editing Footnote';
WordEditorIntl.WordEditorStrings.l_EndnoteEditingSurfaceAccessibilityTitleText = 'Editing Endnote';
WordEditorIntl.WordEditorStrings.l_FootnoteContentTitle = 'Footnote';
WordEditorIntl.WordEditorStrings.l_EndnoteContentTitle = 'Endnote';
WordEditorIntl.WordEditorStrings.L_DirectPrintJewelButton = 'Print';
WordEditorIntl.WordEditorStrings.L_DirectPrintJewelDescription = 'Print this document.';
WordEditorIntl.WordEditorStrings.L_DirectPrintWait = 'Preparing to print...';
WordEditorIntl.WordEditorStrings.L_DigitalPrintTransformSlab = 'Transform';
WordEditorIntl.WordEditorStrings.L_DigitalPrintSlabKeyTip = 'X';
WordEditorIntl.WordEditorStrings.L_DigitalPrintSwayProductName = 'Sway';
WordEditorIntl.WordEditorStrings.L_DigitalMySwaysPattern = 'My {0}';
WordEditorIntl.WordEditorStrings.L_DigitalPrintSways = 'Sways';
WordEditorIntl.WordEditorStrings.L_DigitalPrintButtonTransform = 'Transform to Web Page';
WordEditorIntl.WordEditorStrings.L_DigitalPrintDescriptionTransform = 'Transform your document into an interactive, easy-to-share web page that looks great on any device.';
WordEditorIntl.WordEditorStrings.L_DigitalPrintButtonKeyTip = 'W';
WordEditorIntl.WordEditorStrings.L_DigitalPrintDialogDescriptionAAD = 'Create an interactive, easy-to-share Microsoft Sway web page that looks great on any device. Anyone in your organization with whom you share the link will be able to view the content. You can always change permissions or edit the web pages afterwards.';
WordEditorIntl.WordEditorStrings.L_DigitalPrintDialogDescriptionMSA = 'Create an interactive, easy-to-share Microsoft Sway web page that looks great on any device. Anyone with whom you share the link will be able to view the content. You can always change permissions or edit the web pages afterwards';
WordEditorIntl.WordEditorStrings.L_DigitalPrintLearnMore = 'Learn more';
WordEditorIntl.WordEditorStrings.L_DigitalPrintDialogStyleLabel = 'Style';
WordEditorIntl.WordEditorStrings.L_DigitalPrintDialogPreviewLabel = 'Preview';
WordEditorIntl.WordEditorStrings.L_DigitalPrintTitle = 'Title';
WordEditorIntl.WordEditorStrings.L_DigitalPrintPreviewFailureMessage = 'We can\'t show you previews right now, but you can still transform your document to a web page.';
WordEditorIntl.WordEditorStrings.L_DigitalPrintSignInNeeded = 'This feature is available when you sign-in.';
WordEditorIntl.WordEditorStrings.L_DigitalPrintDocumentTooLarge = 'The feature is available only for documents smaller than 20MB.';
WordEditorIntl.WordEditorStrings.L_DigitalPrintSwayServiceDown = 'Something on our end isn\u2019t working right now, and we\u2019re working to fix it. Please try again later.';
WordEditorIntl.WordEditorStrings.L_DigitalPrintHeadingText = 'Heading';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameBokeh = 'Bokeh';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameRegency = 'Regency';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNamePilar = 'Pilar';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameBoutique = 'Boutique';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameStudio = 'Studio';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameSierra = 'Sierra';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameFete = 'Fete';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameCelestial = 'Celestial';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameTranquil = 'Tranquil';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameMidtown = 'Midtown';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameLucent = 'Lucent';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameAerial = 'Aerial';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameStructure = 'Structure';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameMuse = 'Muse';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameCinema = 'Cinema';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameMega = 'Mega';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameConvergence = 'Convergence';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameAlloy = 'Alloy';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameFluent = 'Fluent';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameAurora = 'Aurora';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameCivic = 'Civic';
WordEditorIntl.WordEditorStrings.L_DigitalPrintStyleNameReflection = 'Reflection';
WordEditorIntl.WordEditorStrings.L_DigitalPrintNoSwayLicense = 'This feature requires access to Microsoft Sway service, which is not enabled for your Office 365 account.';
WordEditorIntl.WordEditorStrings.L_DigitalPrintCheckingSwayLicense = 'Checking your account settings...';
WordEditorIntl.WordEditorStrings.L_DigitalPrintGeneratingPreview = 'Generating your web page preview\u2026';
WordEditorIntl.WordEditorStrings.l_MarginsDialogMarginTop = 'Top:';
WordEditorIntl.WordEditorStrings.l_MarginsDialogMarginTopAlt = 'Top Margin';
WordEditorIntl.WordEditorStrings.l_MarginsDialogMarginBottom = 'Bottom:';
WordEditorIntl.WordEditorStrings.l_MarginsDialogMarginBottomAlt = 'Bottom Margin';
WordEditorIntl.WordEditorStrings.l_MarginsDialogMarginLeft = 'Left:';
WordEditorIntl.WordEditorStrings.l_MarginsDialogMarginLeftAlt = 'Left Margin';
WordEditorIntl.WordEditorStrings.l_MarginsDialogMarginRight = 'Right:';
WordEditorIntl.WordEditorStrings.l_MarginsDialogMarginRightAlt = 'Right Margin';
WordEditorIntl.WordEditorStrings.l_PaperSizeDialogTitle = 'Paper Size';
WordEditorIntl.WordEditorStrings.l_PaperSizeDialogWidth = 'Width:';
WordEditorIntl.WordEditorStrings.l_PaperSizeDialogWidthAlt = 'Paper Width';
WordEditorIntl.WordEditorStrings.l_PaperSizeDialogHeight = 'Height:';
WordEditorIntl.WordEditorStrings.l_PaperSizeDialogHeightAlt = 'Paper Height';
WordEditorIntl.WordEditorStrings.l_ApplyStyles = 'Apply Styles';
WordEditorIntl.WordEditorStrings.l_StyleName = 'Style Name';
WordEditorIntl.WordEditorStrings.l_BadStyleName = 'Sorry, this style is not available in {webappshort}.';
WordEditorIntl.WordEditorStrings.l_CreateNewStyle = 'Create New Style From Formatting';
WordEditorIntl.WordEditorStrings.l_CreateNewStyleDialogName = 'Name:';
WordEditorIntl.WordEditorStrings.l_CreateNewStyleDialogParagraphPreview = 'Paragraph Style Preview:';
WordEditorIntl.WordEditorStrings.l_CreateNewStyleDialogDefaultStyle = 'Style';
WordEditorIntl.WordEditorStrings.l_StyleNameAlreadyExists = 'This style name already exists or is reserved for a built-in style.';
WordEditorIntl.WordEditorStrings.l_StyleNameRestrictedCharacters = 'The style name contains a character that is not valid.';
WordEditorIntl.WordEditorStrings.l_StyleNameEmpty = 'The style name field cannot be empty.';
WordEditorIntl.WordEditorStrings.l_StyleNameOverMaxLength = 'The style name is too long.';
WordEditorIntl.WordEditorStrings.L_NavigationPaneTitle = 'Navigation';
WordEditorIntl.WordEditorStrings.L_NavigationPaneHeadingsSubtitle = 'Headings';
WordEditorIntl.WordEditorStrings.L_NavigationPaneButtonText = 'Navigation Pane';
WordEditorIntl.WordEditorStrings.L_NoHeadingsNavigationPaneText1 = 'Create an interactive outline of your document.';
WordEditorIntl.WordEditorStrings.L_NoHeadingsNavigationPaneText2 = 'It\'s a great way to keep track of where you are or quickly move your content around.';
WordEditorIntl.WordEditorStrings.L_NoHeadingsNavigationPaneText3 = 'To get started, go to the Home tab and apply Heading styles to the headings in your document.';
WordEditorIntl.WordEditorStrings.L_PromoteHeadingText = 'Promote';
WordEditorIntl.WordEditorStrings.L_DemoteHeadingText = 'Demote';
WordEditorIntl.WordEditorStrings.L_DeleteHeadingText = 'Delete';
WordEditorIntl.WordEditorStrings.l_FindTitle = 'Find';
WordEditorIntl.WordEditorStrings.L_FindReplaceTitle = 'Find and Replace';
WordEditorIntl.WordEditorStrings.l_FindPlaceholderText = 'Search for...';
WordEditorIntl.WordEditorStrings.l_FindPlaceholderTooltip = 'Search the {doctype} for...';
WordEditorIntl.WordEditorStrings.l_MatchCase = 'Match case';
WordEditorIntl.WordEditorStrings.l_MatchWholeWord = 'Find whole words only';
WordEditorIntl.WordEditorStrings.l_ClearSearch = 'Clear search';
WordEditorIntl.WordEditorStrings.l_LandingMessage = 'Use the search box above to find text in your {doctype}.';
WordEditorIntl.WordEditorStrings.L_SearchFilterTooltip = 'Search and other search options';
WordEditorIntl.WordEditorStrings.l_SearchFilterCancelTooltip = 'Clear search and other search options';
WordEditorIntl.WordEditorStrings.l_SearchAriaRoleDescription = 'Split Button';
WordEditorIntl.WordEditorStrings.L_ReplaceAll = 'Replace All';
WordEditorIntl.WordEditorStrings.L_FindPrevious = 'Previous result';
WordEditorIntl.WordEditorStrings.L_FindNext = 'Next result';
WordEditorIntl.WordEditorStrings.l_FindFilterLabelText = '({0})';
WordEditorIntl.WordEditorStrings.l_FindMultipleFiltersLabelText = '({0}, {1})';
WordEditorIntl.WordEditorStrings.l_NoMatchesMessage = 'We couldn\'t find what you were looking for.';
WordEditorIntl.WordEditorStrings.l_SummaryNoMatches = 'No matches';
WordEditorIntl.WordEditorStrings.l_SummarySearching = 'Searching...';
WordEditorIntl.WordEditorStrings.l_ReplacePlaceholderText = 'Replace with...';
WordEditorIntl.WordEditorStrings.l_ReplacePlaceholderTooltip = 'Replace with...';
WordEditorIntl.WordEditorStrings.l_TooManyResultsMessage = 'There are too many results to show here. Try narrowing your search.';
WordEditorIntl.WordEditorStrings.l_SummarySomeResults = 'Result {0} of {1}, Searching...';
WordEditorIntl.WordEditorStrings.l_SummarySomeResultsReadout = 'Result {0} of {1}, found so far.';
WordEditorIntl.WordEditorStrings.l_SummaryAllResults = 'Result {0} of {1}';
WordEditorIntl.WordEditorStrings.l_FindOutOfSyncNotificationMessage = '{doctypetitlecase} content has changed. Search again to make sure the results are current.';
WordEditorIntl.WordEditorStrings.l_FindDirtyNotificationHyperlinkMessage = 'Search again';
WordEditorIntl.WordEditorStrings.l_ReplaceAllInProgress = 'Replacing...';
WordEditorIntl.WordEditorStrings.l_ReplaceAllInProgressReadout = 'Replacing';
WordEditorIntl.WordEditorStrings.l_ReplaceAllComplete = 'All done!';
WordEditorIntl.WordEditorStrings.l_ReplacedAllMessage = 'We replaced all {0} instances of \"{1}\" with \"{2}\".';
WordEditorIntl.WordEditorStrings.l_ReplacedSomeMessage = 'We replaced {0} of {1} instances of \"{2}\" with \"{3}\".';
WordEditorIntl.WordEditorStrings.l_FindReplaceResultSummaryScreenReaderNotification = '{0} {1}';
WordEditorIntl.WordEditorStrings.L_ResultTypeHeader = 'Header: ';
WordEditorIntl.WordEditorStrings.L_ResultTypeFooter = 'Footer: ';
WordEditorIntl.WordEditorStrings.L_ResultTypeFootnote = 'Footnote: ';
WordEditorIntl.WordEditorStrings.L_ResultTypeEndnote = 'Endnote: ';
WordEditorIntl.WordEditorStrings.L_ResultTypeComment = 'Comment: ';
WordEditorIntl.WordEditorStrings.l_ReadoutCurrentResult = 'You are at result {0} of {1}.';
WordEditorIntl.WordEditorStrings.l_ReadoutCurrentResultWhenSearching = 'You are at result {0} of {1} found so far.';
WordEditorIntl.WordEditorStrings.l_ReadoutCurrentResultWhenSearchComplete = 'Search completed. You are at result {0} of {1}.';
WordEditorIntl.WordEditorStrings.l_ReadoutNoMatchesWhenSearchComplete = 'Search completed. No matches found.';
WordEditorIntl.WordEditorStrings.l_ReadoutReplacedAndMoveToNextResult = 'Replaced {0} with {1}. Selecting next result.';
WordEditorIntl.WordEditorStrings.l_ReadoutReplaceWithNoMoreResults = 'Replaced {0} with {1}. No more results.';
WordEditorIntl.WordEditorStrings.l_ReadoutReplaceSkippedAndMoveToNextResult = 'No selected text to replace. Selecting next result.';
WordEditorIntl.WordEditorStrings.l_SelectedSearchOption = 'Selected search option: {0}';
WordEditorIntl.WordEditorStrings.l_SelectedSearchOptions = 'Selected search options: {0} and {1}';
WordEditorIntl.WordEditorStrings.l_FindHitContentTitle = 'Find Result';
WordEditorIntl.WordEditorStrings.l_Header = 'Header';
WordEditorIntl.WordEditorStrings.l_Footer = 'Footer';
WordEditorIntl.WordEditorStrings.l_OpenHeader = 'Open Header';
WordEditorIntl.WordEditorStrings.l_OpenFooter = 'Open Footer';
WordEditorIntl.WordEditorStrings.l_EditHeader = 'Edit Header';
WordEditorIntl.WordEditorStrings.l_EditFooter = 'Edit Footer';
WordEditorIntl.WordEditorStrings.l_AddHeader = 'Add Header';
WordEditorIntl.WordEditorStrings.l_AddFooter = 'Add Footer';
WordEditorIntl.WordEditorStrings.l_PrintOption = 'Let people print the document';
WordEditorIntl.WordEditorStrings.l_ReembedOption = 'Let people see the embed code for this document';
WordEditorIntl.WordEditorStrings.l_StartOnOption = 'Start on page:';
WordEditorIntl.WordEditorStrings.l_Width = 'Width (px):';
WordEditorIntl.WordEditorStrings.l_Height = 'Height (px):';
WordEditorIntl.WordEditorStrings.l_StartPage = 'Start page';
WordEditorIntl.WordEditorStrings.L_TrackedChanges = 'Track Changes: On';
WordEditorIntl.WordEditorStrings.L_GroupWordCount = 'Word Count';
WordEditorIntl.WordEditorStrings.L_SpbWordCountAlt = 'Word Count';
WordEditorIntl.WordEditorStrings.L_SpbWordCountLabel = 'Word Count';
WordEditorIntl.WordEditorStrings.L_WordCountMenuItem = 'Word Count...';
WordEditorIntl.WordEditorStrings.L_WordCountToggle = 'Show Word Count';
WordEditorIntl.WordEditorStrings.L_DocStatsDialogTitle = 'Word Count';
WordEditorIntl.WordEditorStrings.L_DocStatsDialogPagesCount = 'Pages';
WordEditorIntl.WordEditorStrings.L_DocStatsDialogWordsCount = 'Words';
WordEditorIntl.WordEditorStrings.L_DocStatsDialogCharsNoSpacesCount = 'Characters (no spaces)';
WordEditorIntl.WordEditorStrings.L_DocStatsDialogCharsWithSpacesCount = 'Characters (with spaces)';
WordEditorIntl.WordEditorStrings.L_DocStatsDialogParagraphsCount = 'Paragraphs';
WordEditorIntl.WordEditorStrings.L_DocStatsDialogCountString = '{0} of {1}';
WordEditorIntl.WordEditorStrings.l_WordCountResult = 'About {0} words';
WordEditorIntl.WordEditorStrings.l_WordCountResultSingular = 'About {0} word';
WordEditorIntl.WordEditorStrings.l_WordCountResultSingularAccurate = '{0} word';
WordEditorIntl.WordEditorStrings.l_WordCountResultAccurate = '{0} words';
WordEditorIntl.WordEditorStrings.l_WordCountResultExact = '{0} words';
WordEditorIntl.WordEditorStrings.l_WordCountCalculating = 'Counting...';
WordEditorIntl.WordEditorStrings.l_WordCountDisabled = 'Word Count: Off';
WordEditorIntl.WordEditorStrings.l_WordCountHidden = 'Word Count: Hidden';
WordEditorIntl.WordEditorStrings.L_WordCountToggleTellMe = 'Show/Hide Word Count';
WordEditorIntl.WordEditorStrings.L_WordCountTooltip = 'The number of words in the selection or document. Click or tap to open the word count dialog box.';
WordEditorIntl.WordEditorStrings.L_ParamFindInDocTitle = 'Find \"{0}\" in document';
WordEditorIntl.WordEditorStrings.L_TrackChangesUpSell = 'Looking for Track Changes?';
WordEditorIntl.WordEditorStrings.L_ShapesUpSell = 'Looking for Insert Shapes?';
WordEditorIntl.WordEditorStrings.L_LabelsUpSell = 'Looking for Labels?';
WordEditorIntl.WordEditorStrings.L_InsertCitationUpSell = 'Looking for Insert Citation?';
WordEditorIntl.WordEditorStrings.L_TextBoxUpSell = 'Looking for Text Box?';
WordEditorIntl.WordEditorStrings.L_TableOfContentsUpSell = 'Looking for Table of Contents?';
WordEditorIntl.WordEditorStrings.L_SmartArtUpSell = 'Looking for SmartArt?';
WordEditorIntl.WordEditorStrings.L_WordArtUpSell = 'Looking for WordArt?';
WordEditorIntl.WordEditorStrings.L_MultiColumnLayoutUpSell = 'Looking for Add or Remove Columns?';
WordEditorIntl.WordEditorStrings.L_InsertEquationUpSell = 'Looking for Insert Equation?';
WordEditorIntl.WordEditorStrings.L_DesktopFeature = 'Feature available in Desktop App';
WordEditorIntl.WordEditorStrings.L_OpenInDesktopWord = 'Open in Desktop App';
WordEditorIntl.WordEditorStrings.L_OpenInDesktopDescription = 'Use the desktop version of Microsoft Word.';
WordEditorIntl.WordEditorStrings.L_DesktopUpSellTitle = 'Don\'t have Word?';
WordEditorIntl.WordEditorStrings.L_DesktopUpSellDescription = 'Get the latest version now - upgrade to Office 365!';
WordEditorIntl.WordEditorStrings.l_WordCountResultOnSelection = 'About {0} of {1} words';
WordEditorIntl.WordEditorStrings.l_WordCountResultOnSelectionAccurate = '{0} of {1} words';
WordEditorIntl.WordEditorStrings.l_LastSavedAt = 'Last Saved {0}';
WordEditorIntl.WordEditorStrings.l_SavingStatus = 'Saving...';
WordEditorIntl.WordEditorStrings.l_SavedStatus = 'Saved';
WordEditorIntl.WordEditorStrings.l_ContentControlPlaceholder = 'Click here to enter text.';
WordEditorIntl.WordEditorStrings.L_RtcConnected = 'RTC Connected';
WordEditorIntl.WordEditorStrings.L_RtcConnecting = 'Connecting to RTC...';
WordEditorIntl.WordEditorStrings.l_SavedSkydriveStatus = 'Saved to {onedrive}';
WordEditorIntl.WordEditorStrings.L_GiveFeedback = 'Give Feedback to Microsoft';
WordEditorIntl.WordEditorStrings.L_GiveFeedbackShort = 'Feedback';
WordEditorIntl.WordEditorStrings.L_StatusBarLabel = 'Status Bar';
WordEditorIntl.WordEditorStrings.L_OcsConnected = 'OCS: ON';
WordEditorIntl.WordEditorStrings.L_OcsNotConnected = 'OCS: OFF';
WordEditorIntl.WordEditorStrings.l_PrintPDFWait = 'Converting to PDF...';
WordEditorIntl.WordEditorStrings.l_PrintError = 'Your {doctype} couldn\'t be converted.\n\n Try again later or print the {doctype} in {richclientfull}.';
WordEditorIntl.WordEditorStrings.l_ConversionToODTWait = 'Converting to ODT...';
WordEditorIntl.WordEditorStrings.l_ConversionError = 'We couldn\'t convert your document.\n\n Please try again later or open it in {richclientfull} and save it as an ODT file.';
WordEditorIntl.WordEditorStrings.l_DownloadAsOdtDialogOdtReady = 'Your document is ready. {0}';
WordEditorIntl.WordEditorStrings.l_DownloadAsOdtDialogLinkSuggestion = 'Click here to download.';
WordEditorIntl.WordEditorStrings.l_DownloadAsOdtDialogLearnMoreLinkText = 'Learn about ODT files';
WordEditorIntl.WordEditorStrings.l_WordSavePrompt = 'Want to save your changes to this document?';
WordEditorIntl.WordEditorStrings.l_WordSaveButtonSave = 'Save';
WordEditorIntl.WordEditorStrings.l_WordSaveButtonAbandon = 'Don\'t Save';
WordEditorIntl.WordEditorStrings.l_ModeSwitcherDialogConfirm = 'Continue';
WordEditorIntl.WordEditorStrings.l_ModeSwitcherDialogCancel = 'Cancel';
WordEditorIntl.WordEditorStrings.l_ModeSwitcherDialogTitle = 'Turn off track changes?';
WordEditorIntl.WordEditorStrings.l_ModeSwitcherDialogBody = 'Editing this document will turn off track changes for everyone. Do you want to continue?';
WordEditorIntl.WordEditorStrings.l_UnlockFailed = 'Sorry, there was a problem opening your {doctype} in {richclientfull}. Please try again later.';
WordEditorIntl.WordEditorStrings.l_PageBreak = 'Page Break';
WordEditorIntl.WordEditorStrings.l_TotalPageCount = '{0} pages';
WordEditorIntl.WordEditorStrings.l_TotalPageCountSingular = '{0} page';
WordEditorIntl.WordEditorStrings.l_CurrentPageAndCount = 'Page {0} of {1}';
WordEditorIntl.WordEditorStrings.l_RefreshingPagination = 'Refreshing';
WordEditorIntl.WordEditorStrings.L_PaginationGroupTitle = 'Show';
WordEditorIntl.WordEditorStrings.L_TogglePageEnds = 'Page Ends';
WordEditorIntl.WordEditorStrings.L_PageCountApproximationMsg = 'This view shows approximate page ends. For exact page layout, switch to Reading View.';
WordEditorIntl.WordEditorStrings.L_faNew_FriendlyLabel = 'New Document';
WordEditorIntl.WordEditorStrings.L_faShare_FriendlyLabel = 'Share Document';
WordEditorIntl.WordEditorStrings.L_faAbout_FriendlyLabel = 'About Word';
WordEditorIntl.WordEditorStrings.L_btnjClose_FriendlyLabel = 'Exit Word';
WordEditorIntl.WordEditorStrings.L_FullJustify_FriendlyLabel = 'Justify Text';
WordEditorIntl.WordEditorStrings.L_fseaInsertPageBreak_FriendlyLabel = 'Insert Page Break';
WordEditorIntl.WordEditorStrings.L_fsfaPageNumbers_FriendlyLabel = 'Insert Page Numbers';
WordEditorIntl.WordEditorStrings.L_btnFootnote_FriendlyLabel = 'Insert Footnote';
WordEditorIntl.WordEditorStrings.L_btnEndnote_FriendlyLabel = 'Insert Endnote';
WordEditorIntl.WordEditorStrings.L_flyOrientation_FriendlyLabel = 'Page Orientation';
WordEditorIntl.WordEditorStrings.L_flySize_FriendlyLabel = 'Page Size';
WordEditorIntl.WordEditorStrings.L_btnDeleteComment_FriendlyLabel = 'Delete Comment';
WordEditorIntl.WordEditorStrings.L_btnPreviousComment_FriendlyLabel = 'Previous Comment';
WordEditorIntl.WordEditorStrings.L_btnNextComment_FriendlyLabel = 'Next Comment';
WordEditorIntl.WordEditorStrings.L_btnOpenHeaderFooter_FriendlyLabel = 'Open Header & Footer';
WordEditorIntl.WordEditorStrings.L_btnInsertComment_FriendlyLabel = 'Insert Comment';
WordEditorIntl.WordEditorStrings.L_grpPictureFormat_PictureStyleAnchor_FriendlyLabel = 'Picture Styles';
WordEditorIntl.WordEditorStrings.L_buttonFirstRow_FriendlyLabel = 'Insert Header Row';
WordEditorIntl.WordEditorStrings.L_buttonFirstColumn_FriendlyLabel = 'Insert First Column';
WordEditorIntl.WordEditorStrings.L_buttonLastRow_FriendlyLabel = 'Insert Total Row';
WordEditorIntl.WordEditorStrings.L_buttonLastColumn_FriendlyLabel = 'Insert Last Column';
WordEditorIntl.WordEditorStrings.L_buttonBandedRow_FriendlyLabel = 'Insert Banded Rows';
WordEditorIntl.WordEditorStrings.L_buttonBandedColumn_FriendlyLabel = 'Insert Banded Columns';
WordEditorIntl.WordEditorStrings.L_fsfaMoreTableStyles_FriendlyLabel = 'Table Styles';
WordEditorIntl.WordEditorStrings.L_fsfaTableStyleTheme_FriendlyLabel = 'Change Table Colors';
WordEditorIntl.WordEditorStrings.L_buttonMarginsCustom_FriendlyLabel = 'Custom Margins';
WordEditorIntl.WordEditorStrings.L_buttonMarginsModerate_FriendlyLabel = 'Moderate Margins';
WordEditorIntl.WordEditorStrings.L_buttonMarginsNarrow_FriendlyLabel = 'Narrow Margins';
WordEditorIntl.WordEditorStrings.L_buttonMarginsNormal_FriendlyLabel = 'Normal Margins';
WordEditorIntl.WordEditorStrings.L_buttonMarginsOffice2003_FriendlyLabel = 'Office 2003 Margins';
WordEditorIntl.WordEditorStrings.L_buttonMarginsWide_FriendlyLabel = 'Wide Margins';
WordEditorIntl.WordEditorStrings.L_buttonOrientationLandscape_FriendlyLabel = 'Landscape Orientation';
WordEditorIntl.WordEditorStrings.L_buttonOrientationPortrait_FriendlyLabel = 'Portrait Orientation';
WordEditorIntl.WordEditorStrings.L_buttonSizeA4_FriendlyLabel = 'A4 Page Size';
WordEditorIntl.WordEditorStrings.L_buttonSizeA5_FriendlyLabel = 'A5 Page Size';
WordEditorIntl.WordEditorStrings.L_buttonSizeExecutive_FriendlyLabel = 'Executive Page Size';
WordEditorIntl.WordEditorStrings.L_buttonSizeLegal_FriendlyLabel = 'Legal Page Size';
WordEditorIntl.WordEditorStrings.L_buttonSizeLetter_FriendlyLabel = 'Letter Page Size';
WordEditorIntl.WordEditorStrings.L_jbtnDownloadACopy_FriendlyLabel = 'Download Document';
WordEditorIntl.WordEditorStrings.L_jbtnFileEmbed_FriendlyLabel = 'Embed Document';
WordEditorIntl.WordEditorStrings.L_WordCountFlyoutTitle = 'Document Word Count';
WordEditorIntl.WordEditorStrings.L_ShareViaEmail = 'Share via Email';
WordEditorIntl.WordEditorStrings.L_jbtnRenameDialog_FriendlyLabel = 'Rename Document';
WordEditorIntl.WordEditorStrings.L_WordTestFeature = 'Test Feature';
WordEditorIntl.WordEditorStrings.L_WordTestFeatureDialogText = 'Congrats!  You found the test feature.';
WordEditorIntl.WordEditorStrings.L_ProblemOpeningDocument = 'Sorry, we couldn\'t open your {doctype}.';
WordEditorIntl.WordEditorStrings.L_SendUsYourFileDialogText = 'We would like to prevent errors like this. You can help by sending us a copy of your file as part of an error report. We will only use your file to try to fix the problem and improve your future experience.';
WordEditorIntl.WordEditorStrings.L_Inserting = 'Inserting...';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_Translator = 'Translator';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_TextMaster = 'TextMaster';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_ConsistencyChecker = 'Consistency Checker';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_EFax = 'eFax';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_ProWordCloud = 'Pro Word Cloud';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_FontFinder = 'Font Finder';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_PicHit = 'PicHit';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_IMGEffector = 'IMG Effector';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_LucidChart = 'Lucidchart';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_DocuSign = 'DocuSign';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_GeoGebraTube = 'GeoGebraTube';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_WordCalc = 'WordCalc';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_QR4Office = 'QR4Office';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_SymbolsCharacters = 'Symbols and Characters';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_WordToHTML = 'Word to HTML';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_MapIt = 'MapIt';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_AbbreviationList = 'Abbreviation List';
WordEditorIntl.WordEditorStrings.L_TellMeAppTitle_HandyCalculator = 'Handy Calculator';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_Translator = 'Translate words and sentences you\u2019ve chosen in a document, using Microsoft Translator.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_TextMaster = 'Have your text translated or proofread by professional member of Textmaster\'s crowdsourcing network.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_ConsistencyChecker = 'Find mistakes in your text that no spelling or grammar checker can find.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_EFax = 'Easily send fax documents without leaving Word.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_ProWordCloud = 'Create beautiful word cloud images from your text.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_FontFinder = 'Search your fonts by categories and save your favourites.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_PicHit = 'Get access to 50 million photos directly within Office.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_IMGEffector = 'Apply more than 15 effects to images in your document.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_LucidChart = 'The easiest way to draw and insert flowcharts, mockups, UML, mind maps and more in Office documents.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_DocuSign = 'Enhance productivity by electronically signing or sending any document from Microsoft Word.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_GeoGebraTube = 'Insert interactive GeoGebra worksheets for learning and teaching mathematics and science.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_WordCalc = 'A mathematical expression solver for Microsoft Word.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_QR4Office = 'A first-of-its-kind QR-generator that integrates seamlessly into your Office documents.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_SymbolsCharacters = 'Easily insert symbols and characters | Convenient symbol search';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_WordToHTML = 'Word to HTML converts your Microsoft Word document to HTML, CSS, and a Web Page.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_MapIt = 'It helps you to locate places.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_AbbreviationList = 'Instantly generate a Table of Abbreviations and find acronyms that have not been defined.';
WordEditorIntl.WordEditorStrings.L_TellMeAppDescription_HandyCalculator = 'Readily accessible calculator displayed alongside your document.';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_Translator = 'https://az158878.vo.msecnd.net/marketing/Partner_21474836617/Product_42949674936/Asset_1de07245-8dcf-44b1-9ad5-7b66514dd826/MSTIIcon9696.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_TextMaster = 'https://az158878.vo.msecnd.net/marketing/Partner_21474838893/Product_42949674599/Asset_8dae2c3d-ba6e-46cd-b467-c6074670dd6f/logotm.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_ConsistencyChecker = 'https://az158878.vo.msecnd.net/marketing/product/42949674255/d91cf13f-11ae-41da-9584-27056708979b/IEDappCCicon96.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_EFax = 'https://az158878.vo.msecnd.net/marketing/product/42949673251/12bc03df-7566-4ac8-8274-41d17613a2ab/efaxlogo96x96.jpg';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_ProWordCloud = 'https://az158878.vo.msecnd.net/marketing/product/42949674199/17c67318-d9e1-4d5f-8476-89e50e3d618d/wordcloud96x96.jpg';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_FontFinder = 'https://az158878.vo.msecnd.net/marketing/Partner_21474836617/Product_42949675690/Asset_f77102bd-2587-402c-a2db-587e6a4efbb3/FontFinderLogo96by96.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_PicHit = 'https://az158878.vo.msecnd.net/marketing/Partner_21474839925/Product_42949675087/Asset_1dc109b5-d3b5-4374-8afa-b2bbf8c2a07b/LOGO96x96.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_IMGEffector = 'https://az158878.vo.msecnd.net/marketing/Partner_21474836786/Product_42949674581/Asset_524b1481-bc6f-45ed-8e86-4ef8395bafc7/ico96.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_LucidChart = 'https://az158878.vo.msecnd.net/marketing/product/42949673777/dcaed2d8-f265-444e-9c4b-33eb46239a0a/chartappicon96.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_DocuSign = 'https://az158878.vo.msecnd.net/marketing/Partner_21474836634/Product_42949675672/Asset_2bee3c23-4f84-44a1-a906-0e3491bd3dee/docusignwin8appassets2.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_GeoGebraTube = 'https://az158878.vo.msecnd.net/marketing/Partner_21474840190/Product_42949675314/Asset_1ac6ebd4-b25c-4e5e-8b2b-87ace69f23db/geogebralogo96.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_WordCalc = 'https://az158878.vo.msecnd.net/marketing/product/42949673851/a8feb4f0-e27f-4f84-a77c-c18ec2610187/WordCalcLogo9696.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_QR4Office = 'https://pinpointprod.blob.core.windows.net/marketing/product/42949674437/b65aa6da-f4b1-4f8b-b04e-cf40a0e73012/Cube9696.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_SymbolsCharacters = 'https://pinpointprod.blob.core.windows.net/marketing/Partner_21474842728/Product_42949677195/Asset_fc9f0ba0-ea8e-43a6-8c01-317991d5149a/iconsymbol96x96.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_WordToHTML = 'https://pinpointprod.blob.core.windows.net/marketing/Partner_21474840919/Product_42949675896/Asset_506fd245-85a2-415c-a3bc-40c7720a60ea/p96.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_MapIt = 'https://pinpointprod.blob.core.windows.net/marketing/Partner_21474841964/Product_42949676621/Asset_9f03d1e0-d530-4abb-b210-edbc15f58312/logo3.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_AbbreviationList = 'https://pinpointprod.blob.core.windows.net/marketing/product/42949674257/b074f0e2-eae8-4191-9b33-a724c51aeada/IEDappALicon96.png';
WordEditorIntl.WordEditorStrings.L_TellMeAppIconUrl_HandyCalculator = 'https://pinpointprod.blob.core.windows.net/marketing/Partner_21474844966/Product_42949678237/Asset_6de65af2-288d-43ef-8c77-3efa8668172e/Calculator96.png';
WordEditorIntl.WordEditorStrings.L_TellMeButtonLabel_Synonyms = 'Synonyms';
WordEditorIntl.WordEditorStrings.L_TellMeButtonLabel_SynonymsParam = 'Synonyms for \"{0}\"';
WordEditorIntl.WordEditorStrings.L_TellMeButtonLabel_Definitions = 'Definitions';
WordEditorIntl.WordEditorStrings.L_TellMeButtonLabel_DefinitionsParam = 'Definitions for \"{0}\"';
WordEditorIntl.WordEditorStrings.L_TellMeTryQuery01 = 'leave a comment';
WordEditorIntl.WordEditorStrings.L_TellMeTryQuery02 = 'add a table';
WordEditorIntl.WordEditorStrings.L_TellMeTryQuery03 = 'insert header';
WordEditorIntl.WordEditorStrings.L_TellMeTryQuery04 = 'check my spelling';
WordEditorIntl.WordEditorStrings.L_TellMeTryQuery05 = 'share my document';
WordEditorIntl.WordEditorStrings.L_TellMeTryQuery06 = 'synonyms for amazing';
WordEditorIntl.WordEditorStrings.L_RichAPIErrorMsg_GeneralException = 'Sorry, something went wrong. Check the OfficeExtension.Error.debugInfo for more information. ';
WordEditorIntl.WordEditorStrings.L_RichAPIErrorMsg_InvalidArgument = 'The argument you provided is not valid. Check the OfficeExtension.Error.debugInfo for more information.';
WordEditorIntl.WordEditorStrings.L_RichAPIErrorMsg_NotImplemented = 'Sorry, this function isn\u2019t available. Perform a runtime check on the Office add-in to find out whether the feature is supported by the host.';
WordEditorIntl.WordEditorStrings.L_RichAPIErrorMsg_AccessDenied = 'Permission settings prevent us from doing that. Check the OfficeExtension.Error.debugInfo for more information.';
WordEditorIntl.WordEditorStrings.L_RichAPIErrorMsg_ItemNotFound = 'We couldn\u2019t find the item you requested. Check the OfficeExtension.Error.debugInfo for more information.';
WordEditorIntl.WordEditorStrings.L_RichAPIErrorMsg_NotSupported = 'Sorry, this add-in uses features that aren\u2019t supported. Perform a runtime check to find out whether the Office host supports APIs needed by the add-in.';
WordEditorIntl.WordEditorStrings.L_RichAPIErrorMsg_NotAllowed = 'The action isn\u2019t supported by Word in a browser. Check the OfficeExtension.Error.debugInfo for more information.';
WordEditorIntl.WordEditorStrings.L_RichAPIErrorMsg_OperationCancelled = 'The operation was cancelled by the user. Check the OfficeExtension.Error.debugInfo for more information.';
WordEditorIntl.WordEditorStrings.L_RichAPIErrorMsg_ApiNotAvailable = 'The API is currently not available. Check the OfficeExtension.Error.debugInfo for more information.';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogWETitle = 'Word Accessibility';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogWESubtitle = 'If you are using a screen reader, its built-in navigation commands work with Word in a browser.';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogShowNextFootnoteCommand = 'Show next footnote';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogShowNextFootnoteShortcut = '{0}+F8';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogShowNextEndnoteCommand = 'Show next endnote';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogShowNextEndnoteShortcut = '{0}+F9';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogShowNextCommentCommand = 'Show next comment';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogShowNextCommentShortcut = 'Alt+F12';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogAccCheckerCommand = 'Launch the Accessibility Checker';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogAccCheckerShortcut = '{0}+Alt+F7';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogTrackChangesToggleCommand = 'Turn Track Changes on/off';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogTrackChangesToggleShortcut = '{0}+Shift+E';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogTrackChangesAcceptCommand = 'Accept change';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogTrackChangesAcceptShortcut = '{0}+Alt+=';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogTrackChangesRejectCommand = 'Reject change';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogTrackChangesRejectShortcut = '{0}+Alt+-';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogTrackChangesPreviousCommand = 'Navigate to previous change';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogTrackChangesPreviousShortcut = '{0}+Alt+9';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogTrackChangesNextCommand = 'Navigate to next change';
WordEditorIntl.WordEditorStrings.L_AccHelpDialogTrackChangesNextShortcut = '{0}+Alt+0';
WordEditorIntl.WordEditorStrings.L_FormatPicture = 'Format Picture';
WordEditorIntl.WordEditorStrings.L_Picture = 'Picture';
WordEditorIntl.WordEditorStrings.L_Properties = 'Properties';
WordEditorIntl.WordEditorStrings.L_RotateMoreOptions = 'More Rotation Options...';
WordEditorIntl.WordEditorStrings.L_Rotation = 'Rotation';
WordEditorIntl.WordEditorStrings.L_RotationAngle = 'Angle';
WordEditorIntl.WordEditorStrings.L_RotationSpinnerTooltip = 'Enter a value from 0 to 360';
WordEditorIntl.WordEditorStrings.L_CropMoreOptions = 'More Crop Options...';
WordEditorIntl.WordEditorStrings.L_Top = 'Top';
WordEditorIntl.WordEditorStrings.L_Bottom = 'Bottom';
WordEditorIntl.WordEditorStrings.L_Left = 'Left';
WordEditorIntl.WordEditorStrings.L_Right = 'Right';
WordEditorIntl.WordEditorStrings.L_CropTopTooltip = 'Top';
WordEditorIntl.WordEditorStrings.L_CropBottomTooltip = 'Bottom';
WordEditorIntl.WordEditorStrings.L_CropLeftTooltip = 'Left';
WordEditorIntl.WordEditorStrings.L_CropRightTooltip = 'Right';
WordEditorIntl.WordEditorStrings.l_LanguageDialogDescription = 'The speller and other proofing tools automatically use dictionaries of the selected language, if available.';
WordEditorIntl.WordEditorStrings.l_DoNotCheckSpellingOrGrammar = 'Don\'t check spelling or grammar';
WordEditorIntl.WordEditorStrings.L_ResumeTitle = 'Resume';
WordEditorIntl.WordEditorStrings.L_ResumeAssistantAsResume = 'Resume Assistant';
WordEditorIntl.WordEditorStrings.L_ResumeAssistantAsResumeKeytip = 'R2';
WordEditorIntl.WordEditorStrings.L_CVTitle = 'CV';
WordEditorIntl.WordEditorStrings.L_ResumeAssistantAsCV = 'CV Assistant';
WordEditorIntl.WordEditorStrings.L_ResumeAssistantAsCVKeytip = 'C2';
WordEditorIntl.WordEditorStrings.L_Acronyms = 'Acronyms';
WordEditorIntl.WordEditorStrings.L_AcronymsKeytip = 'AC';
WordEditorIntl.WordEditorStrings.L_SmartLookup = 'Smart Lookup';
WordEditorIntl.WordEditorStrings.l_SmartLookupKeytip = 'SL';
WordEditorIntl.WordEditorStrings.L_SuggestedTasks = 'Suggested Tasks';
WordEditorIntl.WordEditorStrings.L_SuggestedTasksKeytip = 'ST';
WordEditorIntl.WordEditorStrings.L_UserNotSignedIn = 'No user is signed into Office.';
WordEditorIntl.WordEditorStrings.L_UserAborted = 'User aborted the consent request.';
WordEditorIntl.WordEditorStrings.L_UnsupoortedUserIdentity = 'The identity type of the user is not supported.';
WordEditorIntl.WordEditorStrings.L_InvalidResourceUrl = 'Invalid application resource URL provided.';
WordEditorIntl.WordEditorStrings.L_InvalidGrant = 'Authorization missing for Office.';
WordEditorIntl.WordEditorStrings.L_SSOAddinIsAlreadyRequestingToken = 'The operation failed because this add-in is already requesting an access token.';
WordEditorIntl.WordEditorStrings.L_SSOClientError = 'Error occurred in Office when making request to authentication provider.';
WordEditorIntl.WordEditorStrings.L_SSOServerError = 'Error occurred in the response from authentication provider.';
WordEditorIntl.WordEditorStrings.L_SSOResourceNotAllowed = 'Specified resource is not allowed.';
WordEditorIntl.WordEditorStrings.L_TableOfContents = 'Table of Contents';
WordEditorIntl.WordEditorStrings.L_InsertTableOfContents = 'Insert Table';
WordEditorIntl.WordEditorStrings.L_UpdateTableOfContents = 'Update Table';
WordEditorIntl.WordEditorStrings.L_RemoveTableOfContents = 'Remove Table';
WordEditorIntl.WordEditorStrings.L_LanguageTitle = 'Language';
WordEditorIntl.WordEditorStrings.L_ModernTranslator = 'Translate';
WordEditorIntl.WordEditorStrings.L_ModernTranslatorKeytip = 'T';
WordEditorIntl.WordEditorStrings.L_ModernTranslatorTaskPaneTitle = 'Translator';
WordEditorIntl.WordEditorStrings.L_ModernTranslatorSelectionTitle = 'Translate Selection';
WordEditorIntl.WordEditorStrings.L_ModernTranslatorDocumentTitle = 'Translate Document';
WordEditorIntl.WordEditorStrings.L_ModernTranslatorSettingsTitle = 'Translator Preferences...';
WordEditorIntl.WordEditorStrings.L_ModernTranslatorSettingsTooltip = 'Set preferences for translation suggestions, including the list of languages that should not be translated.';
WordEditorIntl.WordEditorStrings.L_ModernTranslatorSelectionKeytip = 'S';
WordEditorIntl.WordEditorStrings.L_ModernTranslatorDocumentKeytip = 'T';
WordEditorIntl.WordEditorStrings.L_ModernTranslatorSettingsKeytip = 'P';
WordEditorIntl.WordEditorStrings.l_BusinessBarMergePromptTitle = 'We can help';
WordEditorIntl.WordEditorStrings.l_BusinessBarMergePromptMessage = 'We discovered a problem merging your changes and created a report you can send us to help fix this. This report includes a copy of your document which we will only use to investigate the problem.';
WordEditorIntl.WordEditorStrings.l_BusinessBarMergePromptSendButton = 'Send Report';
WordEditorIntl.WordEditorStrings.l_BusinessBarMergePromptPrivacyLinkText = 'Privacy Statement';
WordEditorIntl.WordEditorStrings.l_PresenceStatusOnPage = 'On page {0}';
WordEditorIntl.WordEditorStrings.l_InlineTab = 'Tab';
WordEditorIntl.WordEditorStrings.L_InsertIntelligentPlaceholder = 'New Follow-up';
WordEditorIntl.WordEditorStrings.L_IntelligentPlaceholder = 'Follow Up';
WordEditorIntl.WordEditorStrings.L_InsertIntelligentPlaceholderAnchorText = 'Add a description. Press tab when you are done.';
WordEditorIntl.WordEditorStrings.L_InsertIntelligentPlaceholderContentText = 'Follow Up (Preview): ';
WordEditorIntl.WordEditorStrings.L_MarkCompleteIntelligentPlaceholder = 'Resolve Follow-up';
WordEditorIntl.WordEditorStrings.L_OpenNavPaneIntelligentPlaceholderTab = 'See all Follow-ups';
WordEditorIntl.WordEditorStrings.L_ReadingTimeLessThanOneMin = '< 1min';
WordEditorIntl.WordEditorStrings.L_ReadingTimeResultMin = '{0}min';
WordEditorIntl.WordEditorStrings.L_ReadingTimeResultMinWithoutAbbreviation = '{0}';
WordEditorIntl.WordEditorStrings.L_ReadingTimeResultHour = '{0}h';
WordEditorIntl.WordEditorStrings.L_ReadingTimeResultDay = '{0}d';
WordEditorIntl.WordEditorStrings.L_ReadingTimeResultComposite = '{0} {1}';
WordEditorIntl.WordEditorStrings.L_ReadingTimeStatusBar = 'Time to Read: {0}';
WordEditorIntl.WordEditorStrings.L_ReadingTimeSelectionStatusBar = 'Time to Read: {0} of {1}';
WordEditorIntl.WordEditorStrings.L_ReadingTimeSelectionDialogBoxTitle = 'Time to read for selection: {0}';
WordEditorIntl.WordEditorStrings.L_ReadingTimeHidden = 'Reading time: Hidden';
WordEditorIntl.WordEditorStrings.L_ReadingTimeCalculating = 'Calculating...';
WordEditorIntl.WordEditorStrings.L_ReadingTimeTooltip = 'Estimated time to read the document. Click or tap here to learn how the estimate is calculated.';
WordEditorIntl.WordEditorStrings.L_ReadingTimeToggle = 'Show Time to Read';
WordEditorIntl.WordEditorStrings.L_ReadingTimeStatsDialogDescription = 'Estimated time to read this document is {0}. This estimate is based on average reading speeds in different languages (number of words per minute a person can read on average).';
WordEditorIntl.WordEditorStrings.L_ReadingTimeSelectionDialogBox = '{0} of the {1}';
WordEditorIntl.WordEditorStrings.L_ReadingTimeStatsDialogSelectionDescription = 'Estimated time to read the selected text is {0} estimated to read the whole document. These estimates are based on average reading speeds in different languages (number of words per minute a person can read on average).';
WordEditorIntl.WordEditorStrings.L_ReadingTimeDocStatsDialogElementsHeading = 'Elements';
WordEditorIntl.WordEditorStrings.L_ReadingTimeDocStatsDialogCountHeading = 'Count';
WordEditorIntl.WordEditorStrings.L_ReadingTimeDocStatsDialogTimeHeading = 'Time';
WordEditorIntl.WordEditorStrings.L_ReadingTimeDocStatsDialogWordCount = 'Words';
WordEditorIntl.WordEditorStrings.L_ReadingTimeDocStatsDialogImageCount = 'Images';
WordEditorIntl.WordEditorStrings.L_ReadingTimeDocStatsDialogTableCount = 'Tables';
WordEditorIntl.WordEditorStrings.L_RewriteContextMenuItem = 'Rewrite (Preview)';
WordEditorIntl.WordEditorStrings.L_AtAGlance = 'At a glance';
WordEditorIntl.WordEditorStrings.L_AtAGlanceKeyTip = 'AG';
WordEditorIntl.WordEditorStrings.L_ShowIntentSuggestion = 'Open Suggestion';
WordEditorIntl.WordEditorStrings.L_Ideas = 'Ideas';
WordEditorIntl.WordEditorStrings.L_IdeasKeytip = 'SU';
WordEditorIntl.WordEditorStrings.L_IdeasKeyPointsCardTitle = 'Make key points stand out';
WordEditorIntl.WordEditorStrings.L_IdeasKeyPointsCardItemSubtle = 'Subtle';
WordEditorIntl.WordEditorStrings.L_IdeasKeyPointsCardItemEmphasized = 'Emphasized';
WordEditorIntl.WordEditorStrings.L_IdeasKeyPointsCardItemEyeCatching = 'Eye-catching';
WordEditorIntl.WordEditorStrings.L_IdeasCalloutOpenIdeasButtonLabel = 'Review with Ideas';
Type.registerNamespace('WoncaIntl');

WoncaIntl.WoncaStrings = function WoncaIntl_WoncaStrings() {
    /// <summary>
    /// Contains the localizable strings shared between Word and OneNote.
    /// All string will be formatted with the following substitutions:
    /// {webappfull} is the long name of the Web client application; e.g., "Microsoft OneNote Online"
    /// {webappshort} is the short name of the Web client application; e.g. "Wonca Online")
    /// {brandingstring} for the branding of the app (e.g. "Online")
    /// {brandingstringplural} for the branding of the apps collectively (e.g. "Online")
    /// {richclientfull} is the name of the equivalent rich client (e.g. "Microsoft Wonca")
    /// {doctype} is the friendly name of the file/document type (e.g. "document", "presentation")
    /// {doctypetitlecase} is the friendly name of the file/document type in title case (e.g. "Document", "Presentation")
    /// {doctypeplural} is the plural form of {doctype} (e.g. "documents", "presentations").
    /// </summary>
    /// <field name="L_RibbonLabel" type="String" static="true">
    /// </field>
    /// <field name="L_TabHome" type="String" static="true">
    /// </field>
    /// <field name="L_TabInsert" type="String" static="true">
    /// </field>
    /// <field name="L_TabWordDesign" type="String" static="true">
    /// </field>
    /// <field name="L_TabReferences" type="String" static="true">
    /// </field>
    /// <field name="L_TabMailings" type="String" static="true">
    /// </field>
    /// <field name="L_TabReview" type="String" static="true">
    /// </field>
    /// <field name="L_TabView" type="String" static="true">
    /// </field>
    /// <field name="L_TabDeveloper" type="String" static="true">
    /// </field>
    /// <field name="L_TabAddIns" type="String" static="true">
    /// </field>
    /// <field name="L_TabTableTools" type="String" static="true">
    /// </field>
    /// <field name="L_TabLayout" type="String" static="true">
    /// </field>
    /// <field name="L_TabPictureTools" type="String" static="true">
    /// </field>
    /// <field name="L_TabFormatPicture" type="String" static="true">
    /// </field>
    /// <field name="L_TabDesign" type="String" static="true">
    /// </field>
    /// <field name="L_TabHelp" type="String" static="true">
    /// </field>
    /// <field name="L_GroupUndoRedo" type="String" static="true">
    /// </field>
    /// <field name="L_GroupClipboard" type="String" static="true">
    /// </field>
    /// <field name="L_GroupStyles" type="String" static="true">
    /// </field>
    /// <field name="L_GroupTable" type="String" static="true">
    /// </field>
    /// <field name="L_GroupTables" type="String" static="true">
    /// </field>
    /// <field name="L_GroupMedia" type="String" static="true">
    /// </field>
    /// <field name="L_GroupLinks" type="String" static="true">
    /// </field>
    /// <field name="L_GroupProofing" type="String" static="true">
    /// </field>
    /// <field name="L_GroupSpelling" type="String" static="true">
    /// </field>
    /// <field name="L_GroupImageText" type="String" static="true">
    /// </field>
    /// <field name="L_GroupImageSize" type="String" static="true">
    /// </field>
    /// <field name="L_GroupDelete" type="String" static="true">
    /// </field>
    /// <field name="L_GroupInsert" type="String" static="true">
    /// </field>
    /// <field name="L_GroupSelect" type="String" static="true">
    /// </field>
    /// <field name="L_GroupAlignment" type="String" static="true">
    /// </field>
    /// <field name="L_GroupArrange" type="String" static="true">
    /// </field>
    /// <field name="L_GroupHelp" type="String" static="true">
    /// </field>
    /// <field name="L_MenuBullets" type="String" static="true">
    /// </field>
    /// <field name="L_MenuNumbering" type="String" static="true">
    /// </field>
    /// <field name="L_MenuMultilevelList" type="String" static="true">
    /// </field>
    /// <field name="L_MenuMoreStyles" type="String" static="true">
    /// </field>
    /// <field name="L_MenuInsertTable" type="String" static="true">
    /// </field>
    /// <field name="L_MenuInsertTableGrid" type="String" static="true">
    /// The placeholders 0 and 1 are both single digit numbers
    /// </field>
    /// <field name="L_MenuFontColor" type="String" static="true">
    /// </field>
    /// <field name="L_MenuHighlightColor" type="String" static="true">
    /// </field>
    /// <field name="L_Highlight" type="String" static="true">
    /// </field>
    /// <field name="L_About" type="String" static="true">
    /// </field>
    /// <field name="L_AccessibilityHelpShort" type="String" static="true">
    /// </field>
    /// <field name="L_AccessibilityHelp" type="String" static="true">
    /// </field>
    /// <field name="L_AccessibilityHelpDescription" type="String" static="true">
    /// </field>
    /// <field name="L_AlignLeft" type="String" static="true">
    /// </field>
    /// <field name="L_AlignRight" type="String" static="true">
    /// </field>
    /// <field name="L_AlignTextLeft" type="String" static="true">
    /// </field>
    /// <field name="L_AlignTextRight" type="String" static="true">
    /// </field>
    /// <field name="L_AltText" type="String" static="true">
    /// </field>
    /// <field name="L_Bold" type="String" static="true">
    /// </field>
    /// <field name="L_BulletStyle1" type="String" static="true">
    /// </field>
    /// <field name="L_BulletStyle2" type="String" static="true">
    /// </field>
    /// <field name="L_BulletStyle3" type="String" static="true">
    /// </field>
    /// <field name="L_ClipArt" type="String" static="true">
    /// </field>
    /// <field name="L_CloseMenu" type="String" static="true">
    /// </field>
    /// <field name="L_ContactSupport" type="String" static="true">
    /// </field>
    /// <field name="L_DeleteColumn" type="String" static="true">
    /// </field>
    /// <field name="L_DeleteRow" type="String" static="true">
    /// </field>
    /// <field name="L_DeleteTable" type="String" static="true">
    /// </field>
    /// <field name="L_EditView" type="String" static="true">
    /// </field>
    /// <field name="L_InteractiveView" type="String" static="true">
    /// </field>
    /// <field name="L_ImmersiveView" type="String" static="true">
    /// </field>
    /// <field name="L_Exit" type="String" static="true">
    /// </field>
    /// <field name="L_Font" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorAqua" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorAquaDarker25pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorAquaDarker50pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorAquaLighter40pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorAquaLighter60pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorAquaLighter80pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorBlack" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorBlackLighter15pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorBlackLighter25pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorBlackLighter35pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorBlackLighter50pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorBlackLighter5pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorBlueDarker25pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorBlueDarker50pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorBlueLighter40pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorBlueLighter60pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorBlueLighter80pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorCyan" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorDarkBlueDarker25pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorDarkBlueDarker50pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorDarkBlueLighter40pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorDarkBlueLighter60pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorDarkBlueLighter80pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorDarkCyan" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorDarkMagenta" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorDarkYellow" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorGreen" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorGrey" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorLightGrey" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorMagenta" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorOliveGreen" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorOliveGreenDarker25pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorOliveGreenDarker50pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorOliveGreenLighter40pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorOliveGreenLighter60pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorOliveGreenLighter80pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorOrangeDarker25pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorOrangeDarker50pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorOrangeLighter40pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorOrangeLighter60pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorOrangeLighter80pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorPurpleDarker25pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorPurpleDarker50pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorPurpleLighter40pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorPurpleLighter60pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorPurpleLighter80pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorRedDarker25pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorRedDarker50pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorRedLighter40pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorRedLighter60pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorRedLighter80pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorTan" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorTanDarker10pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorTanDarker25pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorTanDarker50pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorTanDarker75pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorTanDarker90pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorWhite" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorWhiteDarker15pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorWhiteDarker25pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorWhiteDarker35pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorWhiteDarker50pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontColorWhiteDarker5pct" type="String" static="true">
    /// </field>
    /// <field name="L_FontName" type="String" static="true">
    /// </field>
    /// <field name="L_FontSize" type="String" static="true">
    /// </field>
    /// <field name="L_GiveFeedbackShort" type="String" static="true">
    /// Label used by controls for gathering customer feedback on the application.
    /// </field>
    /// <field name="L_GiveFeedback" type="String" static="true">
    /// </field>
    /// <field name="L_GiveFeedbackDescription" type="String" static="true">
    /// Description of the menu item to provide customer feedback on the application.
    /// </field>
    /// <field name="L_Grow" type="String" static="true">
    /// </field>
    /// <field name="L_Help" type="String" static="true">
    /// </field>
    /// <field name="L_HelpButtonTitle" type="String" static="true">
    /// </field>
    /// <field name="L_HelpButtonDescription" type="String" static="true">
    /// </field>
    /// <field name="L_Hyperlink" type="String" static="true">
    /// </field>
    /// <field name="L_InsertAbove" type="String" static="true">
    /// </field>
    /// <field name="L_InsertBelow" type="String" static="true">
    /// </field>
    /// <field name="L_InsertLeft" type="String" static="true">
    /// </field>
    /// <field name="L_InsertRight" type="String" static="true">
    /// </field>
    /// <field name="L_Italic" type="String" static="true">
    /// </field>
    /// <field name="L_Info" type="String" static="true">
    /// </field>
    /// <field name="L_JewelText" type="String" static="true">
    /// </field>
    /// <field name="L_JustifyCenter" type="String" static="true">
    /// </field>
    /// <field name="L_JustifyTopLeft" type="String" static="true">
    /// </field>
    /// <field name="L_JustifyTopCenter" type="String" static="true">
    /// </field>
    /// <field name="L_JustifyTopRight" type="String" static="true">
    /// </field>
    /// <field name="L_JustifyMiddleLeft" type="String" static="true">
    /// </field>
    /// <field name="L_JustifyMiddleCenter" type="String" static="true">
    /// </field>
    /// <field name="L_JustifyMiddleRight" type="String" static="true">
    /// </field>
    /// <field name="L_JustifyBottomLeft" type="String" static="true">
    /// </field>
    /// <field name="L_JustifyBottomCenter" type="String" static="true">
    /// </field>
    /// <field name="L_JustifyBottomRight" type="String" static="true">
    /// </field>
    /// <field name="L_LabelIndentBeforeLtr" type="String" static="true">
    /// Labels for indenting an LTR paragraph
    /// </field>
    /// <field name="L_LabelIndentAfterLtr" type="String" static="true">
    /// </field>
    /// <field name="L_LabelIndentBeforeRtl" type="String" static="true">
    /// Labels for indenting an RTL paragraph
    /// </field>
    /// <field name="L_LabelIndentAfterRtl" type="String" static="true">
    /// </field>
    /// <field name="L_LearningToolsTellMeImmersiveView" type="String" static="true">
    /// </field>
    /// <field name="L_LearningToolsTellMeLearningTools" type="String" static="true">
    /// </field>
    /// <field name="L_LearningToolsTellMeLearnNewLang" type="String" static="true">
    /// </field>
    /// <field name="L_LearningToolsTellMeReadAloud" type="String" static="true">
    /// </field>
    /// <field name="L_LearningToolsTellMeReadToMe" type="String" static="true">
    /// </field>
    /// <field name="L_LearningToolsTellMeSyllabification" type="String" static="true">
    /// </field>
    /// <field name="L_LearningToolsTellMeTextToSpeech" type="String" static="true">
    /// </field>
    /// <field name="L_LearningToolsTellMeTranslation" type="String" static="true">
    /// </field>
    /// <field name="L_LockAspectRatio" type="String" static="true">
    /// </field>
    /// <field name="L_New" type="String" static="true">
    /// </field>
    /// <field name="L_NewBlank" type="String" static="true">
    /// </field>
    /// <field name="L_NewBlankDescription" type="String" static="true">
    /// </field>
    /// <field name="L_NextSpellingError" type="String" static="true">
    /// </field>
    /// <field name="L_NoHighlight" type="String" static="true">
    /// </field>
    /// <field name="L_NumberStyle1" type="String" static="true">
    /// </field>
    /// <field name="L_NumberStyle2" type="String" static="true">
    /// </field>
    /// <field name="L_NumberStyle3" type="String" static="true">
    /// </field>
    /// <field name="L_NumberStyle4" type="String" static="true">
    /// </field>
    /// <field name="L_NumberStyle5" type="String" static="true">
    /// </field>
    /// <field name="L_OnlinePicture" type="String" static="true">
    /// </field>
    /// <field name="L_Open" type="String" static="true">
    /// </field>
    /// <field name="L_OpenInRichClientDescription" type="String" static="true">
    /// {Placeholder="{richclientfull}"}
    /// </field>
    /// <field name="L_ProtectDocumentDescriptionOn" type="String" static="true">
    /// </field>
    /// <field name="L_ProtectDocumentDescriptionOff" type="String" static="true">
    /// </field>
    /// <field name="L_Picture" type="String" static="true">
    /// </field>
    /// <field name="L_PictureHeightLabel" type="String" static="true">
    /// </field>
    /// <field name="L_PictureHeightTooltip" type="String" static="true">
    /// </field>
    /// <field name="L_PictureScaleLabel" type="String" static="true">
    /// </field>
    /// <field name="L_PictureScaleTooltip" type="String" static="true">
    /// </field>
    /// <field name="L_PictureWidthLabel" type="String" static="true">
    /// </field>
    /// <field name="L_PictureWidthTooltip" type="String" static="true">
    /// </field>
    /// <field name="L_Privacy" type="String" static="true">
    /// </field>
    /// <field name="L_PrivacyDescription" type="String" static="true">
    /// </field>
    /// <field name="L_ReadView" type="String" static="true">
    /// </field>
    /// <field name="L_Redo" type="String" static="true">
    /// </field>
    /// <field name="L_ReportAbuse" type="String" static="true">
    /// </field>
    /// <field name="L_ReportAbuseDescription" type="String" static="true">
    /// </field>
    /// <field name="L_Rotate" type="String" static="true">
    /// </field>
    /// <field name="L_RotateRight90" type="String" static="true">
    /// </field>
    /// <field name="L_RotateLeft90" type="String" static="true">
    /// </field>
    /// <field name="L_RotateFlipVertical" type="String" static="true">
    /// </field>
    /// <field name="L_RotateFlipHorizontal" type="String" static="true">
    /// </field>
    /// <field name="L_Save" type="String" static="true">
    /// </field>
    /// <field name="L_Select" type="String" static="true">
    /// </field>
    /// <field name="L_SelectCell" type="String" static="true">
    /// </field>
    /// <field name="L_SelectColumn" type="String" static="true">
    /// </field>
    /// <field name="L_SelectRow" type="String" static="true">
    /// </field>
    /// <field name="L_SelectTable" type="String" static="true">
    /// </field>
    /// <field name="L_Share" type="String" static="true">
    /// </field>
    /// <field name="L_ShareWithPeople" type="String" static="true">
    /// </field>
    /// <field name="L_ShareWithPeopleDescription" type="String" static="true">
    /// </field>
    /// <field name="L_Shrink" type="String" static="true">
    /// </field>
    /// <field name="L_SpinnerIndentBeforeLtr" type="String" static="true">
    /// Tooltip for indenting an LTR paragraph
    /// </field>
    /// <field name="L_SpinnerIndentAfterLtr" type="String" static="true">
    /// </field>
    /// <field name="L_SpinnerIndentBeforeRtl" type="String" static="true">
    /// Tooltip for indenting an RTL paragraph
    /// </field>
    /// <field name="L_SpinnerIndentAfterRtl" type="String" static="true">
    /// </field>
    /// <field name="L_Strikethrough" type="String" static="true">
    /// </field>
    /// <field name="L_Subscript" type="String" static="true">
    /// </field>
    /// <field name="L_Superscript" type="String" static="true">
    /// </field>
    /// <field name="L_Table" type="String" static="true">
    /// </field>
    /// <field name="L_TermsOfUse" type="String" static="true">
    /// </field>
    /// <field name="L_TermsOfUseDescription" type="String" static="true">
    /// </field>
    /// <field name="L_Training" type="String" static="true">
    /// </field>
    /// <field name="L_TryMacOfficeDescription" type="String" static="true">
    /// Description for the file menu option to offer Office for Mac 2011.
    /// </field>
    /// <field name="L_TextDirLTR" type="String" static="true">
    /// </field>
    /// <field name="L_TextDirRTL" type="String" static="true">
    /// </field>
    /// <field name="L_TryMacOffice" type="String" static="true">
    /// Title for the file menu option to offer Office for Mac 2011.
    /// </field>
    /// <field name="L_TryOffice" type="String" static="true">
    /// </field>
    /// <field name="L_TryOfficeDescription" type="String" static="true">
    /// </field>
    /// <field name="L_Underline" type="String" static="true">
    /// </field>
    /// <field name="L_Undo" type="String" static="true">
    /// </field>
    /// <field name="L_WhatsNew" type="String" static="true">
    /// </field>
    /// <field name="L_WrapText" type="String" static="true">
    /// </field>
    /// <field name="L_WrapTextInLine" type="String" static="true">
    /// </field>
    /// <field name="L_WrapTextSquareLeft" type="String" static="true">
    /// </field>
    /// <field name="L_WrapTextSquareRight" type="String" static="true">
    /// </field>
    /// <field name="L_WrapTextBehindText" type="String" static="true">
    /// </field>
    /// <field name="L_WrapTextInFrontOfText" type="String" static="true">
    /// </field>
    /// <field name="L_ColorWhite" type="String" static="true">
    /// </field>
    /// <field name="L_ColorBlack" type="String" static="true">
    /// </field>
    /// <field name="L_ColorGray25" type="String" static="true">
    /// </field>
    /// <field name="L_ColorGray50" type="String" static="true">
    /// </field>
    /// <field name="L_ColorGray80" type="String" static="true">
    /// </field>
    /// <field name="L_ColorAqua" type="String" static="true">
    /// </field>
    /// <field name="L_ColorBlue" type="String" static="true">
    /// </field>
    /// <field name="L_ColorBlueGray" type="String" static="true">
    /// </field>
    /// <field name="L_ColorBrightGreen" type="String" static="true">
    /// </field>
    /// <field name="L_ColorBrown" type="String" static="true">
    /// </field>
    /// <field name="L_ColorCoral" type="String" static="true">
    /// </field>
    /// <field name="L_ColorDarkBlue" type="String" static="true">
    /// </field>
    /// <field name="L_ColorDarkGreen" type="String" static="true">
    /// </field>
    /// <field name="L_ColorDarkPurple" type="String" static="true">
    /// </field>
    /// <field name="L_ColorDarkRed" type="String" static="true">
    /// </field>
    /// <field name="L_ColorDarkTeal" type="String" static="true">
    /// </field>
    /// <field name="L_ColorDarkYellow" type="String" static="true">
    /// </field>
    /// <field name="L_ColorGalleryStandardColor10" type="String" static="true">
    /// </field>
    /// <field name="L_ColorGold" type="String" static="true">
    /// </field>
    /// <field name="L_ColorGreen" type="String" static="true">
    /// </field>
    /// <field name="L_ColorIceBlue" type="String" static="true">
    /// </field>
    /// <field name="L_ColorIndigo" type="String" static="true">
    /// </field>
    /// <field name="L_ColorLavender" type="String" static="true">
    /// </field>
    /// <field name="L_ColorLightBlue" type="String" static="true">
    /// </field>
    /// <field name="L_ColorLightGreen" type="String" static="true">
    /// </field>
    /// <field name="L_ColorLightOrange" type="String" static="true">
    /// </field>
    /// <field name="L_ColorLightTurquoise" type="String" static="true">
    /// </field>
    /// <field name="L_ColorLightYellow" type="String" static="true">
    /// </field>
    /// <field name="L_ColorLime" type="String" static="true">
    /// </field>
    /// <field name="L_ColorOliveGreen" type="String" static="true">
    /// </field>
    /// <field name="L_ColorOrange" type="String" static="true">
    /// </field>
    /// <field name="L_ColorPaleBlue" type="String" static="true">
    /// </field>
    /// <field name="L_ColorPeriwinkle" type="String" static="true">
    /// </field>
    /// <field name="L_ColorPink" type="String" static="true">
    /// </field>
    /// <field name="L_ColorPlum" type="String" static="true">
    /// </field>
    /// <field name="L_ColorRed" type="String" static="true">
    /// </field>
    /// <field name="L_ColorRose" type="String" static="true">
    /// </field>
    /// <field name="L_ColorSkyBlue" type="String" static="true">
    /// </field>
    /// <field name="L_ColorTan" type="String" static="true">
    /// </field>
    /// <field name="L_ColorTeal" type="String" static="true">
    /// </field>
    /// <field name="L_ColorTurquoise" type="String" static="true">
    /// </field>
    /// <field name="L_ColorYellow" type="String" static="true">
    /// </field>
    /// <field name="L_btnImageGrow_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_btnImageShrink_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonNumberStyle1_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonNumberStyle2_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonNumberStyle3_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonNumberStyle4_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_buttonNumberStyle5_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_CenterJustify_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_Collab_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_Coauthor_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_fseaInsertPicture_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_fseaInsertClipart_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_fseaInsertOnlinePicture_FriendlyLabel" type="String" static="true">
    /// Label on a control that allows a user to find and insert pictures from a variety of online sources.
    /// </field>
    /// <field name="L_fseaInsertHyperlink_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_fsfaMoreStyles_FriendlyLabel" type="String" static="true">
    /// Label on a control that allows a user to change the style of a block of text. Example styles include normal text, title, heading or quote.
    /// </field>
    /// <field name="L_TextDirLTR_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="L_TextDirRTL_FriendlyLabel" type="String" static="true">
    /// </field>
    /// <field name="l_AccessDenied" type="String" static="true">
    /// </field>
    /// <field name="l_CanaryFailure" type="String" static="true">
    /// </field>
    /// <field name="l_CannotBeEdited" type="String" static="true">
    /// </field>
    /// <field name="l_CheckedOut" type="String" static="true">
    /// </field>
    /// <field name="l_CorruptedFile" type="String" static="true">
    /// {Placeholder="{webappshort}"}
    /// </field>
    /// <field name="l_CustomXml" type="String" static="true">
    /// </field>
    /// <field name="l_EditedInRichClient" type="String" static="true">
    /// </field>
    /// <field name="l_ImageTooLarge" type="String" static="true">
    /// </field>
    /// <field name="l_LockedByOtherInterface" type="String" static="true">
    /// </field>
    /// <field name="l_LockedForOfflineCheckout" type="String" static="true">
    /// </field>
    /// <field name="l_LostUserChanges" type="String" static="true">
    /// {Placeholder="{webappshort}"}, AutoRecover for Word Online feature crew
    /// </field>
    /// <field name="l_MarginSetFailedMessage" type="String" static="true">
    /// </field>
    /// <field name="l_ModifiedWithoutUnsavedWork" type="String" static="true">
    /// AutoRecover for Word Online feature crew
    /// </field>
    /// <field name="l_ModifiedWithUnsavedWork" type="String" static="true">
    /// AutoRecover for Word Online feature crew
    /// </field>
    /// <field name="l_NotebookSaveErrorNotificationText" type="String" static="true">
    /// Notification shown when we've failed to save changes to a notebook (after 3 successive save attempts.)
    /// </field>
    /// <field name="l_NumberOfCoauthorsReachedMax" type="String" static="true">
    /// </field>
    /// <field name="l_RequiresCheckout" type="String" static="true">
    /// </field>
    /// <field name="l_ResponseTooLarge" type="String" static="true">
    /// </field>
    /// <field name="l_RecoverYourChanges" type="String" static="true">
    /// </field>
    /// <field name="l_TemplateDocxFile" type="String" static="true">
    /// </field>
    /// <field name="l_UnsupportedObjects" type="String" static="true">
    /// </field>
    /// <field name="l_Working" type="String" static="true">
    /// </field>
    /// <field name="l_SaveWait" type="String" static="true">
    /// </field>
    /// <field name="l_SaveFailed" type="String" static="true">
    /// </field>
    /// <field name="l_SaveFailedManualRefreshNeeded" type="String" static="true">
    /// </field>
    /// <field name="l_PageSaveErrorNotificationText" type="String" static="true">
    /// {Placeholder="{0}"}Notification shown when we've failed to save changes to a page (after 3 successive save attempts.)  Placeholder 0: Page Title
    /// </field>
    /// <field name="l_PreReleaseFile" type="String" static="true">
    /// {Placeholder="{webappshort}", "{richclientfull}"}
    /// </field>
    /// <field name="l_PageVersionSaveErrorNotificationText" type="String" static="true">
    /// {Placeholder="{0}"}Notification shown when we've failed to save a page version (after 3 successive save attempts.)  Placeholder 0: Version title
    /// </field>
    /// <field name="l_DocumentProtectionSettings" type="String" static="true">
    /// {Placeholder="{richclientfull}", "{webappshort}"}
    /// </field>
    /// <field name="l_DocumentPasswordEncrypted" type="String" static="true">
    /// {Placeholder="{richclientfull}", "{webappshort}"}
    /// </field>
    /// <field name="l_FolderSaveErrorNotificationText" type="String" static="true">
    /// {Placeholder="{0}"}Notification shown when we've failed to save changes to a section group (after 3 successive save attempts.)  Placeholder 0: Notebook / Folder Name
    /// </field>
    /// <field name="l_ODTEditDisabled" type="String" static="true">
    /// {Placeholder="{0}", "{webappshort}"}Placeholder 0: .odt file extension {Placeholder="{webappshort}"}
    /// </field>
    /// <field name="l_OldProductDigitalSignature" type="String" static="true">
    /// </field>
    /// <field name="l_PaperSizeSetFailedMessage" type="String" static="true">
    /// </field>
    /// <field name="l_SectionProtectionSettings" type="String" static="true">
    /// {Placeholder="{richclientfull}", "{webappshort}"}
    /// </field>
    /// <field name="l_SectionSaveErrorNotificationText" type="String" static="true">
    /// {Placeholder="{0}"}Notification shown when we've failed to save changes to a section (after 3 successive save attempts.)  Placeholder 0: Section Name
    /// </field>
    /// <field name="l_VersionHistorySaveErrorNotificationText" type="String" static="true">
    /// {Placeholder="{0}"}Notification shown when we've failed to save changes to a page's version history context (after 3 successive save attempts.)  Placeholder 0: Page Name
    /// </field>
    /// <field name="l_WordDocxCoherencyFailure" type="String" static="true">
    /// {Placeholder="{0}"}When we fail to save due to race condition with another coauthor, this is the Businessbar's message. Placeholder 0 is substitued by the string for L_Save.
    /// </field>
    /// <field name="l_WordRetryOnOpen" type="String" static="true">
    /// When the user cannot open the document for editing because we have hit a transient issue, and we wish to encourage the user to retry.
    /// </field>
    /// <field name="l_SiteReadOnlyOnLoad" type="String" static="true">
    /// {Placeholder="{webappshort}", "{doctype}"}, When the user cannot open the document for editing because the host (e.g. SharePoint, OneDrive, etc.) is read-only.
    /// </field>
    /// <field name="l_WordUnrecoverableStoreBusy" type="String" static="true">
    /// When we fail to save due to race condition with another coauthor but after already committing some of the changes, this is the Businessbar's message.
    /// </field>
    /// <field name="l_WordFootnoteEndnoteNotConformant" type="String" static="true">
    /// {Placeholder="{webappshort}"} When we fail to load the document because a footnote or endnote reference doesn't have a corresponding entry in the .docx file, rendering file non-conformant.
    /// </field>
    /// <field name="l_CannotInsertOnlinePicture" type="String" static="true">
    /// When we fail to insert online pictures.
    /// </field>
    /// <field name="l_SaveErrorReportTitle" type="String" static="true">
    /// </field>
    /// <field name="l_SaveErrorReportDescription" type="String" static="true">
    /// </field>
    /// <field name="l_SaveErrorReportPrivacyStatement" type="String" static="true">
    /// </field>
    /// <field name="l_SendErrorReport" type="String" static="true">
    /// </field>
    /// <field name="l_NoThanks" type="String" static="true">
    /// </field>
    /// <field name="l_WordLostSessionErrorWithRefresh" type="String" static="true">
    /// This string shows when you can't continue working on the session but a refresh might fix the issue
    /// </field>
    /// <field name="l_WordLostSessionRefreshButton" type="String" static="true">
    /// </field>
    /// <field name="l_WordKickoutFailOther" type="String" static="true">
    /// The string which is displayed in the business bar when you are being kicked out due to a coauthor adding unsupported content.
    /// </field>
    /// <field name="l_WordKickoutFailDocumentTooLarge" type="String" static="true">
    /// The string which is displayed in the business bar when you are being kicked out with data loss because the document has become too large
    /// </field>
    /// <field name="l_WordKickoutFailDocumentTooLargeNoCopy" type="String" static="true">
    /// </field>
    /// <field name="l_MissingRequiredPropertiesKickout" type="String" static="true">
    /// The string which is displayed in the business bar when you are being kicked out due to SharePoint having missing required properties on the document. The placeholder (doctype) will be replaced with the translation of "document", "presentation", "notebook", or "workbook" at runtime.  If this does not work for your language, replace the placeholder with the literal translation for "document".
    /// </field>
    /// <field name="l_WordKickOutHotStoreStatusLoad" type="String" static="true">
    /// The string displayed in the business bar when you are being kicked out when there is no more specific error message to display.
    /// </field>
    /// <field name="l_WordKickOutHotStoreStatusNoCopy" type="String" static="true">
    /// </field>
    /// <field name="l_WordKickOutIrmNowEnabled" type="String" static="true">
    /// </field>
    /// <field name="l_WordKickOutLostConnectionTitle" type="String" static="true">
    /// The string displayed in the business bar when you are being kicked out when there is no more specific error message to display. Variation of L_WordKickOutHotStoreStatusNoCopy for experimentation purposes.
    /// </field>
    /// <field name="l_WordKickOutLostConnectionDescription" type="String" static="true">
    /// The string displayed in the business bar when you are being kicked out when there is no more specific error message to display. Variation of L_WordKickOutHotStoreStatusNoCopy for experimentation purposes.
    /// </field>
    /// <field name="l_WordKickoutSaveFailedTitle" type="String" static="true">
    /// The title to be used for kickout failures when we cannot confirm save succeeded.
    /// </field>
    /// <field name="l_WordKickoutSaveFailedDescription" type="String" static="true">
    /// The title to be used for kickout failures when we cannot confirm save succeeded.
    /// </field>
    /// <field name="l_WordKickoutFailChangesNotSaved" type="String" static="true">
    /// The title to be used for kickout failures
    /// </field>
    /// <field name="l_WordKickoutStateRecovery" type="String" static="true">
    /// {Locked}Business bar description after re-playing a Word Save Replay. Only shows up after a replay which is debug-only functionality.
    /// </field>
    /// <field name="l_ReadOnlyEmbeddedFonts" type="String" static="true">
    /// The string displayed when a user is not allowed to edit a document because it has read-only embedded fonts.
    /// </field>
    /// <field name="l_WordQuotaExceededYouAreOwner" type="String" static="true">
    /// When we fail to load due to the customer not having any quota (storage space) available to them.  This is a dialog message.  The placeholder (doctype) will be replaced with the translation of "document", "presentation", "notebook", or "workbook" at runtime.  If this does not work for your language, replace the placeholder with the literal translation for "document".
    /// </field>
    /// <field name="l_WordQuotaExceededNotTheOwner" type="String" static="true">
    /// When we fail to load due to the document owner not having any quota (storage space) available.  This is a dialog message.  The placeholder (doctype) will be replaced with the translation of "document", "presentation", "notebook", or "workbook" at runtime.  If this does not work for your language, replace the placeholder with the literal translation for "document".
    /// </field>
    /// <field name="l_WordIncorrectFileExtension" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}
    /// When we fail to load because the file extension does not match content.
    /// Placeholder 0: file extension
    /// Placeholder 1: actual file format from content
    /// </field>
    /// <field name="L_PageMarginsDescription" type="String" static="true">
    /// {Placeholder="{0}", "{1}", "{2}", "{3}"}
    /// Text to display in the page layout flyout to describe the predefine margins options.
    /// Placeholder 0: number + units appropriate for ui language for margin top (e.g. in the US it might be 1")
    /// Placeholder 1: number + units appropriate for ui language for margin bottom (e.g. in the US it might be 1")
    /// Placeholder 2: number + units appropriate for ui language for margin left (e.g. in the US it might be 1")
    /// Placeholder 3: number + units appropriate for ui language for margin right (e.g. in the US it might be 1")
    /// </field>
    /// <field name="L_PageSizeDescription" type="String" static="true">
    /// {Placeholder="{0}", "{1}"}
    /// Text to display in the page layout flyout to describe the predefined page size options.
    /// Placeholder 0: number + units appropriate for ui language for page size width (e.g. in US it might be 8.5").
    /// Placeholder 1: number + units appropriate for ui language for page size height.
    /// Formatting may need to be localized (so while the string should read width x height in the us, it might be height x width elsewhere
    /// in which case the string would need to be localized to "{1} x {0}")
    /// </field>
    /// <field name="l_CoauthHelpContextId" type="String" static="true">
    /// Help Page Context IDs. {Locked}
    /// </field>
}


WoncaIntl.WoncaStrings.registerClass('WoncaIntl.WoncaStrings');
WoncaIntl.WoncaStrings.L_RibbonLabel = 'Ribbon';
WoncaIntl.WoncaStrings.L_TabHome = 'Home';
WoncaIntl.WoncaStrings.L_TabInsert = 'Insert';
WoncaIntl.WoncaStrings.L_TabWordDesign = 'Design';
WoncaIntl.WoncaStrings.L_TabReferences = 'References';
WoncaIntl.WoncaStrings.L_TabMailings = 'Mailings';
WoncaIntl.WoncaStrings.L_TabReview = 'Review';
WoncaIntl.WoncaStrings.L_TabView = 'View';
WoncaIntl.WoncaStrings.L_TabDeveloper = 'Developer';
WoncaIntl.WoncaStrings.L_TabAddIns = 'Add-ins';
WoncaIntl.WoncaStrings.L_TabTableTools = 'Table Tools';
WoncaIntl.WoncaStrings.L_TabLayout = 'Layout';
WoncaIntl.WoncaStrings.L_TabPictureTools = 'Picture Tools';
WoncaIntl.WoncaStrings.L_TabFormatPicture = 'Format';
WoncaIntl.WoncaStrings.L_TabDesign = 'Design';
WoncaIntl.WoncaStrings.L_TabHelp = 'Help';
WoncaIntl.WoncaStrings.L_GroupUndoRedo = 'Undo';
WoncaIntl.WoncaStrings.L_GroupClipboard = 'Clipboard';
WoncaIntl.WoncaStrings.L_GroupStyles = 'Styles';
WoncaIntl.WoncaStrings.L_GroupTable = 'Table';
WoncaIntl.WoncaStrings.L_GroupTables = 'Tables';
WoncaIntl.WoncaStrings.L_GroupMedia = 'Pictures';
WoncaIntl.WoncaStrings.L_GroupLinks = 'Links';
WoncaIntl.WoncaStrings.L_GroupProofing = 'Proofing';
WoncaIntl.WoncaStrings.L_GroupSpelling = 'Spelling';
WoncaIntl.WoncaStrings.L_GroupImageText = 'Image Text';
WoncaIntl.WoncaStrings.L_GroupImageSize = 'Image Size';
WoncaIntl.WoncaStrings.L_GroupDelete = 'Delete';
WoncaIntl.WoncaStrings.L_GroupInsert = 'Insert';
WoncaIntl.WoncaStrings.L_GroupSelect = 'Select';
WoncaIntl.WoncaStrings.L_GroupAlignment = 'Alignment';
WoncaIntl.WoncaStrings.L_GroupArrange = 'Arrange';
WoncaIntl.WoncaStrings.L_GroupHelp = 'Help & Support';
WoncaIntl.WoncaStrings.L_MenuBullets = 'Bullets';
WoncaIntl.WoncaStrings.L_MenuNumbering = 'Numbering';
WoncaIntl.WoncaStrings.L_MenuMultilevelList = 'Multilevel List';
WoncaIntl.WoncaStrings.L_MenuMoreStyles = 'More Styles';
WoncaIntl.WoncaStrings.L_MenuInsertTable = 'Insert Table';
WoncaIntl.WoncaStrings.L_MenuInsertTableGrid = '{0}x{1} Table';
WoncaIntl.WoncaStrings.L_MenuFontColor = 'Font Color';
WoncaIntl.WoncaStrings.L_MenuHighlightColor = 'Text Highlight Color';
WoncaIntl.WoncaStrings.L_Highlight = 'Highlight';
WoncaIntl.WoncaStrings.L_About = 'About';
WoncaIntl.WoncaStrings.L_AccessibilityHelpShort = 'Accessibility';
WoncaIntl.WoncaStrings.L_AccessibilityHelp = 'Accessibility Help (Alt+Shift+A)';
WoncaIntl.WoncaStrings.L_AccessibilityHelpDescription = 'Find out about accessibility features in {webappshort}.';
WoncaIntl.WoncaStrings.L_AlignLeft = 'Align Left';
WoncaIntl.WoncaStrings.L_AlignRight = 'Align Right';
WoncaIntl.WoncaStrings.L_AlignTextLeft = 'Align Text Left';
WoncaIntl.WoncaStrings.L_AlignTextRight = 'Align Text Right';
WoncaIntl.WoncaStrings.L_AltText = 'Alt-Text';
WoncaIntl.WoncaStrings.L_Bold = 'Bold';
WoncaIntl.WoncaStrings.L_BulletStyle1 = 'Solid Bullet';
WoncaIntl.WoncaStrings.L_BulletStyle2 = 'Hollow Bullet';
WoncaIntl.WoncaStrings.L_BulletStyle3 = 'Square Bullet';
WoncaIntl.WoncaStrings.L_ClipArt = 'Clip Art';
WoncaIntl.WoncaStrings.L_CloseMenu = 'Close Menu';
WoncaIntl.WoncaStrings.L_ContactSupport = 'Contact Support';
WoncaIntl.WoncaStrings.L_DeleteColumn = 'Delete Column';
WoncaIntl.WoncaStrings.L_DeleteRow = 'Delete Row';
WoncaIntl.WoncaStrings.L_DeleteTable = 'Delete Table';
WoncaIntl.WoncaStrings.L_EditView = 'Editing View';
WoncaIntl.WoncaStrings.L_InteractiveView = 'Interactive View';
WoncaIntl.WoncaStrings.L_ImmersiveView = 'Immersive Reader';
WoncaIntl.WoncaStrings.L_Exit = 'Exit';
WoncaIntl.WoncaStrings.L_Font = 'Font';
WoncaIntl.WoncaStrings.L_FontColorAqua = 'Aqua';
WoncaIntl.WoncaStrings.L_FontColorAquaDarker25pct = 'Aqua, Darker 25%';
WoncaIntl.WoncaStrings.L_FontColorAquaDarker50pct = 'Aqua, Darker 50%';
WoncaIntl.WoncaStrings.L_FontColorAquaLighter40pct = 'Aqua, Lighter 40%';
WoncaIntl.WoncaStrings.L_FontColorAquaLighter60pct = 'Aqua, Lighter 60%';
WoncaIntl.WoncaStrings.L_FontColorAquaLighter80pct = 'Aqua, Lighter 80%';
WoncaIntl.WoncaStrings.L_FontColorBlack = 'Black';
WoncaIntl.WoncaStrings.L_FontColorBlackLighter15pct = 'Black, Lighter 15%';
WoncaIntl.WoncaStrings.L_FontColorBlackLighter25pct = 'Black, Lighter 25%';
WoncaIntl.WoncaStrings.L_FontColorBlackLighter35pct = 'Black, Lighter 35%';
WoncaIntl.WoncaStrings.L_FontColorBlackLighter50pct = 'Black, Lighter 50%';
WoncaIntl.WoncaStrings.L_FontColorBlackLighter5pct = 'Black, Lighter 5%';
WoncaIntl.WoncaStrings.L_FontColorBlueDarker25pct = 'Blue, Darker 25%';
WoncaIntl.WoncaStrings.L_FontColorBlueDarker50pct = 'Blue, Darker 50%';
WoncaIntl.WoncaStrings.L_FontColorBlueLighter40pct = 'Blue, Lighter 40%';
WoncaIntl.WoncaStrings.L_FontColorBlueLighter60pct = 'Blue, Lighter 60%';
WoncaIntl.WoncaStrings.L_FontColorBlueLighter80pct = 'Blue, Lighter 80%';
WoncaIntl.WoncaStrings.L_FontColorCyan = 'Turquoise';
WoncaIntl.WoncaStrings.L_FontColorDarkBlueDarker25pct = 'Dark Blue, Darker 25%';
WoncaIntl.WoncaStrings.L_FontColorDarkBlueDarker50pct = 'Dark Blue, Darker 50%';
WoncaIntl.WoncaStrings.L_FontColorDarkBlueLighter40pct = 'Dark Blue, Lighter 40%';
WoncaIntl.WoncaStrings.L_FontColorDarkBlueLighter60pct = 'Dark Blue, Lighter 60%';
WoncaIntl.WoncaStrings.L_FontColorDarkBlueLighter80pct = 'Dark Blue, Lighter 80%';
WoncaIntl.WoncaStrings.L_FontColorDarkCyan = 'Teal';
WoncaIntl.WoncaStrings.L_FontColorDarkMagenta = 'Violet';
WoncaIntl.WoncaStrings.L_FontColorDarkYellow = 'Dark Yellow';
WoncaIntl.WoncaStrings.L_FontColorGreen = 'Green';
WoncaIntl.WoncaStrings.L_FontColorGrey = 'Gray';
WoncaIntl.WoncaStrings.L_FontColorLightGrey = 'Light Gray';
WoncaIntl.WoncaStrings.L_FontColorMagenta = 'Pink';
WoncaIntl.WoncaStrings.L_FontColorOliveGreen = 'Olive Green';
WoncaIntl.WoncaStrings.L_FontColorOliveGreenDarker25pct = 'Olive Green, Darker 25%';
WoncaIntl.WoncaStrings.L_FontColorOliveGreenDarker50pct = 'Olive Green, Darker 50%';
WoncaIntl.WoncaStrings.L_FontColorOliveGreenLighter40pct = 'Olive Green, Lighter 40%';
WoncaIntl.WoncaStrings.L_FontColorOliveGreenLighter60pct = 'Olive Green, Lighter 60%';
WoncaIntl.WoncaStrings.L_FontColorOliveGreenLighter80pct = 'Olive Green, Lighter 80%';
WoncaIntl.WoncaStrings.L_FontColorOrangeDarker25pct = 'Orange, Darker 25%';
WoncaIntl.WoncaStrings.L_FontColorOrangeDarker50pct = 'Orange, Darker 50%';
WoncaIntl.WoncaStrings.L_FontColorOrangeLighter40pct = 'Orange, Lighter 40%';
WoncaIntl.WoncaStrings.L_FontColorOrangeLighter60pct = 'Orange, Lighter 60%';
WoncaIntl.WoncaStrings.L_FontColorOrangeLighter80pct = 'Orange, Lighter 80%';
WoncaIntl.WoncaStrings.L_FontColorPurpleDarker25pct = 'Purple, Darker 25%';
WoncaIntl.WoncaStrings.L_FontColorPurpleDarker50pct = 'Purple, Darker 50%';
WoncaIntl.WoncaStrings.L_FontColorPurpleLighter40pct = 'Purple, Lighter 40%';
WoncaIntl.WoncaStrings.L_FontColorPurpleLighter60pct = 'Purple, Lighter 60%';
WoncaIntl.WoncaStrings.L_FontColorPurpleLighter80pct = 'Purple, Lighter 80%';
WoncaIntl.WoncaStrings.L_FontColorRedDarker25pct = 'Red, Darker 25%';
WoncaIntl.WoncaStrings.L_FontColorRedDarker50pct = 'Red, Darker 50%';
WoncaIntl.WoncaStrings.L_FontColorRedLighter40pct = 'Red, Lighter 40%';
WoncaIntl.WoncaStrings.L_FontColorRedLighter60pct = 'Red, Lighter 60%';
WoncaIntl.WoncaStrings.L_FontColorRedLighter80pct = 'Red, Lighter 80%';
WoncaIntl.WoncaStrings.L_FontColorTan = 'Tan';
WoncaIntl.WoncaStrings.L_FontColorTanDarker10pct = 'Tan, Darker 10%';
WoncaIntl.WoncaStrings.L_FontColorTanDarker25pct = 'Tan, Darker 25%';
WoncaIntl.WoncaStrings.L_FontColorTanDarker50pct = 'Tan, Darker 50%';
WoncaIntl.WoncaStrings.L_FontColorTanDarker75pct = 'Tan, Darker 75%';
WoncaIntl.WoncaStrings.L_FontColorTanDarker90pct = 'Tan, Darker 90%';
WoncaIntl.WoncaStrings.L_FontColorWhite = 'White';
WoncaIntl.WoncaStrings.L_FontColorWhiteDarker15pct = 'White, Darker 15%';
WoncaIntl.WoncaStrings.L_FontColorWhiteDarker25pct = 'White, Darker 25%';
WoncaIntl.WoncaStrings.L_FontColorWhiteDarker35pct = 'White, Darker 35%';
WoncaIntl.WoncaStrings.L_FontColorWhiteDarker50pct = 'White, Darker 50%';
WoncaIntl.WoncaStrings.L_FontColorWhiteDarker5pct = 'White, Darker 5%';
WoncaIntl.WoncaStrings.L_FontName = 'Font Name';
WoncaIntl.WoncaStrings.L_FontSize = 'Font Size';
WoncaIntl.WoncaStrings.L_GiveFeedbackShort = 'Feedback';
WoncaIntl.WoncaStrings.L_GiveFeedback = 'Give Feedback to Microsoft';
WoncaIntl.WoncaStrings.L_GiveFeedbackDescription = 'Tell us what you think.';
WoncaIntl.WoncaStrings.L_Grow = 'Grow';
WoncaIntl.WoncaStrings.L_Help = 'Help';
WoncaIntl.WoncaStrings.L_HelpButtonTitle = 'Help';
WoncaIntl.WoncaStrings.L_HelpButtonDescription = 'Get answers to your {webappshort} questions.';
WoncaIntl.WoncaStrings.L_Hyperlink = 'Link';
WoncaIntl.WoncaStrings.L_InsertAbove = 'Insert Above';
WoncaIntl.WoncaStrings.L_InsertBelow = 'Insert Below';
WoncaIntl.WoncaStrings.L_InsertLeft = 'Insert Left';
WoncaIntl.WoncaStrings.L_InsertRight = 'Insert Right';
WoncaIntl.WoncaStrings.L_Italic = 'Italic';
WoncaIntl.WoncaStrings.L_Info = 'Info';
WoncaIntl.WoncaStrings.L_JewelText = 'File';
WoncaIntl.WoncaStrings.L_JustifyCenter = 'Center';
WoncaIntl.WoncaStrings.L_JustifyTopLeft = 'Align Top Left';
WoncaIntl.WoncaStrings.L_JustifyTopCenter = 'Align Top Center';
WoncaIntl.WoncaStrings.L_JustifyTopRight = 'Align Top Right';
WoncaIntl.WoncaStrings.L_JustifyMiddleLeft = 'Align Center Left';
WoncaIntl.WoncaStrings.L_JustifyMiddleCenter = 'Align Center';
WoncaIntl.WoncaStrings.L_JustifyMiddleRight = 'Align Center Right';
WoncaIntl.WoncaStrings.L_JustifyBottomLeft = 'Align Bottom Left';
WoncaIntl.WoncaStrings.L_JustifyBottomCenter = 'Align Bottom Center';
WoncaIntl.WoncaStrings.L_JustifyBottomRight = 'Align Bottom Right';
WoncaIntl.WoncaStrings.L_LabelIndentBeforeLtr = 'Left:';
WoncaIntl.WoncaStrings.L_LabelIndentAfterLtr = 'Right:';
WoncaIntl.WoncaStrings.L_LabelIndentBeforeRtl = 'Before:';
WoncaIntl.WoncaStrings.L_LabelIndentAfterRtl = 'After:';
WoncaIntl.WoncaStrings.L_LearningToolsTellMeImmersiveView = 'Immersive View';
WoncaIntl.WoncaStrings.L_LearningToolsTellMeLearningTools = 'Learning Tools';
WoncaIntl.WoncaStrings.L_LearningToolsTellMeLearnNewLang = 'Learn a new language';
WoncaIntl.WoncaStrings.L_LearningToolsTellMeReadAloud = 'Read aloud';
WoncaIntl.WoncaStrings.L_LearningToolsTellMeReadToMe = 'Read to me';
WoncaIntl.WoncaStrings.L_LearningToolsTellMeSyllabification = 'Syllabification';
WoncaIntl.WoncaStrings.L_LearningToolsTellMeTextToSpeech = 'Text to speech';
WoncaIntl.WoncaStrings.L_LearningToolsTellMeTranslation = 'Translation';
WoncaIntl.WoncaStrings.L_LockAspectRatio = 'Lock aspect ratio';
WoncaIntl.WoncaStrings.L_New = 'New';
WoncaIntl.WoncaStrings.L_NewBlank = 'Blank Document';
WoncaIntl.WoncaStrings.L_NewBlankDescription = 'Create a new blank {doctype}.';
WoncaIntl.WoncaStrings.L_NextSpellingError = 'Spelling';
WoncaIntl.WoncaStrings.L_NoHighlight = 'No Color';
WoncaIntl.WoncaStrings.L_NumberStyle1 = '1., 2., 3., 4.,';
WoncaIntl.WoncaStrings.L_NumberStyle2 = 'a., b., c., d.,';
WoncaIntl.WoncaStrings.L_NumberStyle3 = 'i., ii., iii., iv.,';
WoncaIntl.WoncaStrings.L_NumberStyle4 = 'A., B., C., D.,';
WoncaIntl.WoncaStrings.L_NumberStyle5 = 'I., II., III., IV.,';
WoncaIntl.WoncaStrings.L_OnlinePicture = 'Online Pictures';
WoncaIntl.WoncaStrings.L_Open = 'Open';
WoncaIntl.WoncaStrings.L_OpenInRichClientDescription = 'Use the full functionality of {richclientfull}.';
WoncaIntl.WoncaStrings.L_ProtectDocumentDescriptionOn = 'To prevent accidental changes, this document has been set to open as view-only.';
WoncaIntl.WoncaStrings.L_ProtectDocumentDescriptionOff = 'Always open view-only to prevent accidental changes by asking readers to opt-in to editing.';
WoncaIntl.WoncaStrings.L_Picture = 'Picture';
WoncaIntl.WoncaStrings.L_PictureHeightLabel = 'Height:';
WoncaIntl.WoncaStrings.L_PictureHeightTooltip = 'Height';
WoncaIntl.WoncaStrings.L_PictureScaleLabel = 'Scale:';
WoncaIntl.WoncaStrings.L_PictureScaleTooltip = 'Scale';
WoncaIntl.WoncaStrings.L_PictureWidthLabel = 'Width: ';
WoncaIntl.WoncaStrings.L_PictureWidthTooltip = 'Width';
WoncaIntl.WoncaStrings.L_Privacy = 'Privacy and Cookies';
WoncaIntl.WoncaStrings.L_PrivacyDescription = 'Learn how Microsoft protects your privacy.';
WoncaIntl.WoncaStrings.L_ReadView = 'Reading View';
WoncaIntl.WoncaStrings.L_Redo = 'Redo';
WoncaIntl.WoncaStrings.L_ReportAbuse = 'Report Abuse';
WoncaIntl.WoncaStrings.L_ReportAbuseDescription = 'Report this {doctype} as having inappropriate content.';
WoncaIntl.WoncaStrings.L_Rotate = 'Rotate';
WoncaIntl.WoncaStrings.L_RotateRight90 = 'Rotate Right 90\u00b0';
WoncaIntl.WoncaStrings.L_RotateLeft90 = 'Rotate Left 90\u00b0';
WoncaIntl.WoncaStrings.L_RotateFlipVertical = 'Flip Vertical';
WoncaIntl.WoncaStrings.L_RotateFlipHorizontal = 'Flip Horizontal';
WoncaIntl.WoncaStrings.L_Save = 'Save';
WoncaIntl.WoncaStrings.L_Select = 'Select';
WoncaIntl.WoncaStrings.L_SelectCell = 'Select Cell';
WoncaIntl.WoncaStrings.L_SelectColumn = 'Select Column';
WoncaIntl.WoncaStrings.L_SelectRow = 'Select Row';
WoncaIntl.WoncaStrings.L_SelectTable = 'Select Table';
WoncaIntl.WoncaStrings.L_Share = 'Share';
WoncaIntl.WoncaStrings.L_ShareWithPeople = 'Share with People';
WoncaIntl.WoncaStrings.L_ShareWithPeopleDescription = 'Invite other people to view or edit this document.';
WoncaIntl.WoncaStrings.L_Shrink = 'Shrink';
WoncaIntl.WoncaStrings.L_SpinnerIndentBeforeLtr = 'Indent Left';
WoncaIntl.WoncaStrings.L_SpinnerIndentAfterLtr = 'Indent Right';
WoncaIntl.WoncaStrings.L_SpinnerIndentBeforeRtl = 'Indent Before';
WoncaIntl.WoncaStrings.L_SpinnerIndentAfterRtl = 'Indent After';
WoncaIntl.WoncaStrings.L_Strikethrough = 'Strikethrough';
WoncaIntl.WoncaStrings.L_Subscript = 'Subscript';
WoncaIntl.WoncaStrings.L_Superscript = 'Superscript';
WoncaIntl.WoncaStrings.L_Table = 'Table';
WoncaIntl.WoncaStrings.L_TermsOfUse = 'Terms of Use';
WoncaIntl.WoncaStrings.L_TermsOfUseDescription = 'Read the terms and conditions of using {webappshort}.';
WoncaIntl.WoncaStrings.L_Training = 'Training';
WoncaIntl.WoncaStrings.L_TryMacOfficeDescription = 'Get the premium, always up-to-date Microsoft Office experience.';
WoncaIntl.WoncaStrings.L_TextDirLTR = 'Left-to-Right';
WoncaIntl.WoncaStrings.L_TextDirRTL = 'Right-to-Left';
WoncaIntl.WoncaStrings.L_TryMacOffice = 'Upgrade to Office 365';
WoncaIntl.WoncaStrings.L_TryOffice = 'Upgrade to Office 365';
WoncaIntl.WoncaStrings.L_TryOfficeDescription = 'Get the premium, always up-to-date Microsoft Office experience.';
WoncaIntl.WoncaStrings.L_Underline = 'Underline';
WoncaIntl.WoncaStrings.L_Undo = 'Undo';
WoncaIntl.WoncaStrings.L_WhatsNew = 'What\'s New';
WoncaIntl.WoncaStrings.L_WrapText = 'Wrap Text';
WoncaIntl.WoncaStrings.L_WrapTextInLine = 'In Line with Text';
WoncaIntl.WoncaStrings.L_WrapTextSquareLeft = 'Square Left';
WoncaIntl.WoncaStrings.L_WrapTextSquareRight = 'Square Right';
WoncaIntl.WoncaStrings.L_WrapTextBehindText = 'Behind Text';
WoncaIntl.WoncaStrings.L_WrapTextInFrontOfText = 'In Front of Text';
WoncaIntl.WoncaStrings.L_ColorWhite = 'White';
WoncaIntl.WoncaStrings.L_ColorBlack = 'Black';
WoncaIntl.WoncaStrings.L_ColorGray25 = 'Gray-25%';
WoncaIntl.WoncaStrings.L_ColorGray50 = 'Gray-50%';
WoncaIntl.WoncaStrings.L_ColorGray80 = 'Gray-80%';
WoncaIntl.WoncaStrings.L_ColorAqua = 'Aqua';
WoncaIntl.WoncaStrings.L_ColorBlue = 'Blue';
WoncaIntl.WoncaStrings.L_ColorBlueGray = 'Blue Gray';
WoncaIntl.WoncaStrings.L_ColorBrightGreen = 'Bright Green';
WoncaIntl.WoncaStrings.L_ColorBrown = 'Brown';
WoncaIntl.WoncaStrings.L_ColorCoral = 'Coral';
WoncaIntl.WoncaStrings.L_ColorDarkBlue = 'Dark Blue';
WoncaIntl.WoncaStrings.L_ColorDarkGreen = 'Dark Green';
WoncaIntl.WoncaStrings.L_ColorDarkPurple = 'Dark Purple';
WoncaIntl.WoncaStrings.L_ColorDarkRed = 'Dark Red';
WoncaIntl.WoncaStrings.L_ColorDarkTeal = 'Dark Teal';
WoncaIntl.WoncaStrings.L_ColorDarkYellow = 'Dark Yellow';
WoncaIntl.WoncaStrings.L_ColorGalleryStandardColor10 = 'Purple';
WoncaIntl.WoncaStrings.L_ColorGold = 'Gold';
WoncaIntl.WoncaStrings.L_ColorGreen = 'Green';
WoncaIntl.WoncaStrings.L_ColorIceBlue = 'Ice Blue';
WoncaIntl.WoncaStrings.L_ColorIndigo = 'Indigo';
WoncaIntl.WoncaStrings.L_ColorLavender = 'Lavender';
WoncaIntl.WoncaStrings.L_ColorLightBlue = 'Light Blue';
WoncaIntl.WoncaStrings.L_ColorLightGreen = 'Light Green';
WoncaIntl.WoncaStrings.L_ColorLightOrange = 'Light Orange';
WoncaIntl.WoncaStrings.L_ColorLightTurquoise = 'Light Turquoise';
WoncaIntl.WoncaStrings.L_ColorLightYellow = 'Light Yellow';
WoncaIntl.WoncaStrings.L_ColorLime = 'Lime';
WoncaIntl.WoncaStrings.L_ColorOliveGreen = 'Olive Green';
WoncaIntl.WoncaStrings.L_ColorOrange = 'Orange';
WoncaIntl.WoncaStrings.L_ColorPaleBlue = 'Pale Blue';
WoncaIntl.WoncaStrings.L_ColorPeriwinkle = 'Periwinkle';
WoncaIntl.WoncaStrings.L_ColorPink = 'Pink';
WoncaIntl.WoncaStrings.L_ColorPlum = 'Plum';
WoncaIntl.WoncaStrings.L_ColorRed = 'Red';
WoncaIntl.WoncaStrings.L_ColorRose = 'Rose';
WoncaIntl.WoncaStrings.L_ColorSkyBlue = 'Sky Blue';
WoncaIntl.WoncaStrings.L_ColorTan = 'Tan';
WoncaIntl.WoncaStrings.L_ColorTeal = 'Teal';
WoncaIntl.WoncaStrings.L_ColorTurquoise = 'Turquoise';
WoncaIntl.WoncaStrings.L_ColorYellow = 'Yellow';
WoncaIntl.WoncaStrings.L_btnImageGrow_FriendlyLabel = 'Grow Image';
WoncaIntl.WoncaStrings.L_btnImageShrink_FriendlyLabel = 'Shrink Image';
WoncaIntl.WoncaStrings.L_buttonNumberStyle1_FriendlyLabel = 'Numbering: 1., 2., 3., 4.,';
WoncaIntl.WoncaStrings.L_buttonNumberStyle2_FriendlyLabel = 'Numbering: a., b., c., d.,';
WoncaIntl.WoncaStrings.L_buttonNumberStyle3_FriendlyLabel = 'Numbering: i., ii., iii., iv.,';
WoncaIntl.WoncaStrings.L_buttonNumberStyle4_FriendlyLabel = 'Numbering: A., B., C., D.,';
WoncaIntl.WoncaStrings.L_buttonNumberStyle5_FriendlyLabel = 'Numbering: I., II., III., IV.,';
WoncaIntl.WoncaStrings.L_CenterJustify_FriendlyLabel = 'Center Text';
WoncaIntl.WoncaStrings.L_Collab_FriendlyLabel = 'Collaborate';
WoncaIntl.WoncaStrings.L_Coauthor_FriendlyLabel = 'Coauthor';
WoncaIntl.WoncaStrings.L_fseaInsertPicture_FriendlyLabel = 'Insert Picture';
WoncaIntl.WoncaStrings.L_fseaInsertClipart_FriendlyLabel = 'Insert Clip Art';
WoncaIntl.WoncaStrings.L_fseaInsertOnlinePicture_FriendlyLabel = 'Insert Online Picture';
WoncaIntl.WoncaStrings.L_fseaInsertHyperlink_FriendlyLabel = 'Insert Link';
WoncaIntl.WoncaStrings.L_fsfaMoreStyles_FriendlyLabel = 'Text Styles';
WoncaIntl.WoncaStrings.L_TextDirLTR_FriendlyLabel = 'Left-to-Right Text';
WoncaIntl.WoncaStrings.L_TextDirRTL_FriendlyLabel = 'Right-to-Left Text';
WoncaIntl.WoncaStrings.l_AccessDenied = 'Sorry, you don\'t have permission to edit this {doctype}.';
WoncaIntl.WoncaStrings.l_CanaryFailure = '{webappshort} could not contact the server. Please try refreshing your browser.';
WoncaIntl.WoncaStrings.l_CannotBeEdited = 'Sorry, this {doctype} can\'t be opened for editing.';
WoncaIntl.WoncaStrings.l_CheckedOut = 'Sorry, {webappshort} can\'t edit this {doctype} because it\'s currently checked out to someone else.';
WoncaIntl.WoncaStrings.l_CorruptedFile = 'Sorry, {webappshort} can\'t edit this {doctype} because it appears to be corrupt.';
WoncaIntl.WoncaStrings.l_CustomXml = 'Sorry, this {doctype} can\'t be opened because it contains custom XML elements. To edit this {doctype}, please open it in {richclientfull}.';
WoncaIntl.WoncaStrings.l_EditedInRichClient = 'Sorry, this file is currently being edited in {richclientfull14}. You can edit this file too by opening it in {richclientfull14}.';
WoncaIntl.WoncaStrings.l_ImageTooLarge = 'Sorry, some of the images in your {doctype} are too large for editing with {webappshort} in a browser. To edit this {doctype}, please open it in the desktop version  of {richclientfull}.';
WoncaIntl.WoncaStrings.l_LockedByOtherInterface = 'Sorry, you can\'t edit this {doctype} with other people.';
WoncaIntl.WoncaStrings.l_LockedForOfflineCheckout = 'Sorry, {webappshort} can\'t edit this {doctype} because it\'s checked out to your local drafts folder.';
WoncaIntl.WoncaStrings.l_LostUserChanges = 'Sorry, {webappshort} can\'t save your changes.';
WoncaIntl.WoncaStrings.l_MarginSetFailedMessage = 'The margins are too big for the current page size. Try making them a bit smaller.';
WoncaIntl.WoncaStrings.l_ModifiedWithoutUnsavedWork = 'Sorry, but this {doctype} has been changed since you last saved. To continue working with this {doctype} you need to open the new version.';
WoncaIntl.WoncaStrings.l_ModifiedWithUnsavedWork = 'Sorry, but this {doctype} has been changed since you last saved. Your unsaved work can\'t be saved to this version of the file.';
WoncaIntl.WoncaStrings.l_NotebookSaveErrorNotificationText = 'Unable to update the notebook';
WoncaIntl.WoncaStrings.l_NumberOfCoauthorsReachedMax = 'Sorry, the number of people editing this {doctype} has reached the limit. You can edit the {doctype} as soon as someone else is finished.';
WoncaIntl.WoncaStrings.l_RequiresCheckout = 'Please check out this {doctype} before editing it in {webappshort}.';
WoncaIntl.WoncaStrings.l_ResponseTooLarge = 'Sorry, {webappshort} can\'t open this {doctype} because it\'s too big.';
WoncaIntl.WoncaStrings.l_RecoverYourChanges = 'It looks like you might have changes that weren\'t saved. Would you like to try and recover them?';
WoncaIntl.WoncaStrings.l_TemplateDocxFile = 'The {doctype} you are trying to open is a template. Would you like to open and edit as a standard {doctype}?';
WoncaIntl.WoncaStrings.l_UnsupportedObjects = 'Sorry, this {doctype} can\'t be opened because it contains objects that {webappshort} doesn\'t support in a browser. To edit this {doctype} please open it in the desktop version of {richclientfull}.';
WoncaIntl.WoncaStrings.l_Working = 'Working...';
WoncaIntl.WoncaStrings.l_SaveWait = 'Saving...';
WoncaIntl.WoncaStrings.l_SaveFailed = 'Sorry, there was a problem saving your {doctype}.';
WoncaIntl.WoncaStrings.l_SaveFailedManualRefreshNeeded = 'Sorry, there was a problem saving your {doctype}. Please refresh the page.';
WoncaIntl.WoncaStrings.l_PageSaveErrorNotificationText = 'Unable to save page \"{0}\"';
WoncaIntl.WoncaStrings.l_PreReleaseFile = 'Sorry, {webappshort} can\'t open this {doctype} for editing in a browser because it was created in a pre-release version of {richclientfull}.  To edit this {doctype} please try opening it in the desktop version of {richclientfull}.';
WoncaIntl.WoncaStrings.l_PageVersionSaveErrorNotificationText = 'Unable to create page version \"{0}\"';
WoncaIntl.WoncaStrings.l_DocumentProtectionSettings = 'Sorry, {webappshort} can\'t open this {doctype} for editing in a browser because it is protected by Information Rights Management (IRM).  To edit this {doctype}, please open it in the desktop version of {richclientfull}.';
WoncaIntl.WoncaStrings.l_DocumentPasswordEncrypted = 'Sorry, {webappshort} can\'t open this {doctype} for editing in a browser because it is protected by a password.  To edit this {doctype}, please open it in the desktop version of {richclientfull}.';
WoncaIntl.WoncaStrings.l_FolderSaveErrorNotificationText = 'Unable to update the section group \"{0}\"';
WoncaIntl.WoncaStrings.l_ODTEditDisabled = 'Sorry, editing of {0} files has been disabled in {webappshort}. Please get in touch with your helpdesk.';
WoncaIntl.WoncaStrings.l_OldProductDigitalSignature = 'Sorry, this {doctype} can\'t be opened because it has a digital signature that was created with a version older than {richclientfull14}.';
WoncaIntl.WoncaStrings.l_PaperSizeSetFailedMessage = 'The page is too small for the current margins.  Try making it a bit bigger.';
WoncaIntl.WoncaStrings.l_SectionProtectionSettings = 'Sorry, {webappshort} can\'t open this {doctype} for editing in a browser because it has document protection enabled for one or more sections. To edit this {doctype}, please open it in the desktop version of {richclientfull}.';
WoncaIntl.WoncaStrings.l_SectionSaveErrorNotificationText = 'Unable to save section \"{0}\"';
WoncaIntl.WoncaStrings.l_VersionHistorySaveErrorNotificationText = 'Unable to save version history \"{0}\"';
WoncaIntl.WoncaStrings.l_WordDocxCoherencyFailure = 'This {doctype} needs to be refreshed with updates. Please click {0} to refresh and retry saving your changes.';
WoncaIntl.WoncaStrings.l_WordRetryOnOpen = 'Sorry, {webappshort} can\'t open the {doctype} because the service is too busy. Please refresh the page to try again.';
WoncaIntl.WoncaStrings.l_SiteReadOnlyOnLoad = 'Sorry, {webappshort} can\'t open the {doctype} because it is stored in a location that is currently read-only.';
WoncaIntl.WoncaStrings.l_WordUnrecoverableStoreBusy = 'This {doctype} needs to be refreshed with updates. Please refresh the page to reload the {doctype}.';
WoncaIntl.WoncaStrings.l_WordFootnoteEndnoteNotConformant = 'Sorry, {webappshort} can\'t open the {doctype} because it contains footnotes or endnotes that are invalid.';
WoncaIntl.WoncaStrings.l_CannotInsertOnlinePicture = 'We ran into a problem when inserting the picture. Please try again later.';
WoncaIntl.WoncaStrings.l_SaveErrorReportTitle = 'Please tell Microsoft about this problem.';
WoncaIntl.WoncaStrings.l_SaveErrorReportDescription = 'We have created an error report that you can send to help us improve {webappshort}. This report will include a copy of your document which we will only use to investigate the error.';
WoncaIntl.WoncaStrings.l_SaveErrorReportPrivacyStatement = 'View the Microsoft Privacy Statement';
WoncaIntl.WoncaStrings.l_SendErrorReport = 'Send Error Report';
WoncaIntl.WoncaStrings.l_NoThanks = 'No Thanks';
WoncaIntl.WoncaStrings.l_WordLostSessionErrorWithRefresh = 'We can\'t connect to the server. Please refresh the page.';
WoncaIntl.WoncaStrings.l_WordLostSessionRefreshButton = 'Refresh';
WoncaIntl.WoncaStrings.l_WordKickoutFailOther = '{webappshort} can\'t continue editing this {doctype} because another user has added content that isn\'t supported in a browser. To continue working, please open it in the desktop version of {richclientfull}.';
WoncaIntl.WoncaStrings.l_WordKickoutFailDocumentTooLarge = '{webappshort} can\'t continue to edit this {doctype} because it has become too large to be opened in a browser.  Please copy your changes and continue editing the document in the desktop version of {richclientfull}.';
WoncaIntl.WoncaStrings.l_WordKickoutFailDocumentTooLargeNoCopy = '{webappshort} can\'t continue to edit this {doctype} because it has become too large to be opened.  Your changes may not be saved.';
WoncaIntl.WoncaStrings.l_MissingRequiredPropertiesKickout = 'This {doctype} is missing properties required by your organization. Copy your changes and reapply them once this has been resolved.';
WoncaIntl.WoncaStrings.l_WordKickOutHotStoreStatusLoad = 'To continue editing this {doctype}, please copy your changes and refresh the page.';
WoncaIntl.WoncaStrings.l_WordKickOutHotStoreStatusNoCopy = 'To continue editing, please refresh the page.';
WoncaIntl.WoncaStrings.l_WordKickOutIrmNowEnabled = '{webappshort} can\'t save this {doctype} in a browser because it is now protected by Information Rights Management (IRM). To edit this {doctype}, please open it in the desktop version of {richclientfull}.';
WoncaIntl.WoncaStrings.l_WordKickOutLostConnectionTitle = 'Please reconnect to continue.';
WoncaIntl.WoncaStrings.l_WordKickOutLostConnectionDescription = ' ';
WoncaIntl.WoncaStrings.l_WordKickoutSaveFailedTitle = 'Couldn\'t save automatically';
WoncaIntl.WoncaStrings.l_WordKickoutSaveFailedDescription = 'To avoid losing your changes, please copy them before you reload this document.';
WoncaIntl.WoncaStrings.l_WordKickoutFailChangesNotSaved = 'Sorry, your changes weren\'t saved.';
WoncaIntl.WoncaStrings.l_WordKickoutStateRecovery = 'Session state recovered. Unable to continue this editing session.';
WoncaIntl.WoncaStrings.l_ReadOnlyEmbeddedFonts = 'This {doctype} contains read-only embedded fonts. To edit, open in {richclientfull} and change the restricted fonts.';
WoncaIntl.WoncaStrings.l_WordQuotaExceededYouAreOwner = 'This {doctype} is stored in a location that\'s full. Free up space so you can continue working on this {doctype}.';
WoncaIntl.WoncaStrings.l_WordQuotaExceededNotTheOwner = 'This {doctype} is stored in a location that\'s full. Ask the owner to free up space so you can continue working on this {doctype}.';
WoncaIntl.WoncaStrings.l_WordIncorrectFileExtension = 'This document\'s file name extension ({0}) doesn\'t match its format ({1}). Rename the file with the extension {1} and try opening again.';
WoncaIntl.WoncaStrings.L_PageMarginsDescription = 'Top: {0}, Bottom: {1}, Left: {2}, Right: {3}';
WoncaIntl.WoncaStrings.L_PageSizeDescription = '{0} x {1}';
WoncaIntl.WoncaStrings.l_CoauthHelpContextId = 'Collablock';
CommonStrings={afrikaans:"Afrikaans",albanian:"Albanian",alsatian:"Alsatian",amharic:"Amharic",arabic:"Arabic",arabic_Algeria:"Arabic (Algeria)",arabic_Bahrain:"Arabic (Bahrain)",arabic_Egypt:"Arabic (Egypt)",arabic_Iraq:"Arabic (Iraq)",arabic_Jordan:"Arabic (Jordan)",arabic_Kuwait:"Arabic (Kuwait)",arabic_Lebanon:"Arabic (Lebanon)",arabic_Libya:"Arabic (Libya)",arabic_Morocco:"Arabic (Morocco)",arabic_Oman:"Arabic (Oman)",arabic_Qatar:"Arabic (Qatar)",arabic_Saudi_Arabia:"Arabic (Saudi Arabia)",arabic_Syria:"Arabic (Syria)",arabic_Tunisia:"Arabic (Tunisia)",arabic_UAE:"Arabic (U.A.E.)",arabic_Yemen:"Arabic (Yemen)",armenian:"Armenian",assamese:"Assamese",azerbaijani:"Azerbaijani",azerbaijani_Cyrillic:"Azerbaijani (Cyrillic)",azerbaijani_Latin:"Azerbaijani (Latin)",bangla_Bangladesh:"Bangla (Bangladesh)",bangla_India:"Bangla (India)",bashkir:"Bashkir",basque:"Basque",belarusian:"Belarusian",bosnian_Cyrillic:"Bosnian (Cyrillic)",bosnian_Latin:"Bosnian (Latin)",breton:"Breton",bulgarian:"Bulgarian",burmese:"Burmese",catalan:"Catalan",central_Kurdish_Iraq:"Central Kurdish (Iraq)",cherokee:"Cherokee",chinese_Hong_Kong_SAR:"Chinese (Hong Kong S.A.R.)",chinese_Macao_SAR:"Chinese (Macao S.A.R.)",chinese_China:"Chinese (China)",chinese_Simplified:"Chinese (Simplified)",chinese_Singapore:"Chinese (Singapore)",chinese_Taiwan:"Chinese (Taiwan)",chinese_Traditional:"Chinese (Traditional)",corsican:"Corsican",croatian:"Croatian",croatian_Bosnia_and_Herzegovina:"Croatian (Bosnia and Herzegovina)",croatian_Croatia:"Croatian (Croatia)",czech:"Czech",danish:"Danish",dari_Afghanistan:"Dari (Afghanistan)",divehi:"Divehi",dutch:"Dutch",dutch_Belgium:"Dutch (Belgium)",dutch_Netherlands:"Dutch (Netherlands)",edo:"Edo",english:"English",english_Australia:"English (Australia)",english_Belize:"English (Belize)",english_Canada:"English (Canada)",english_Caribbean:"English (Caribbean)",english_Hong_Kong_SAR:"English (Hong Kong S.A.R.)",english_India:"English (India)",english_Indonesia:"English (Indonesia)",english_Ireland:"English (Ireland)",english_Jamaica:"English (Jamaica)",english_Malaysia:"English (Malaysia)",english_New_Zealand:"English (New Zealand)",english_Philippines:"English (Philippines)",english_Singapore:"English (Singapore)",english_South_Africa:"English (South Africa)",english_Trinidad_and_Tobago:"English (Trinidad and Tobago)",english_UK:"English (U.K.)",english_US:"English (U.S.)",english_Zimbabwe:"English (Zimbabwe)",estonian:"Estonian",faroese:"Faroese",filipino:"Filipino",finnish:"Finnish",french:"French",french_Belgium:"French (Belgium)",french_Cameroon:"French (Cameroon)",french_Canada:"French (Canada)",french_Congo_DRC:"French (Congo (DRC))",french_Cote_dIvoire:"French (C\u00f4te d'Ivoire)",french_France:"French (France)",french_Haiti:"French (Haiti)",french_Luxembourg:"French (Luxembourg)",french_Mali:"French (Mali)",french_Monaco:"French (Monaco)",french_Morocco:"French (Morocco)",french_Reunion:"French (Reunion)",french_Senegal:"French (Senegal)",french_Switzerland:"French (Switzerland)",french_West_Indies:"French (West Indies)",frisian:"Western Frisian",fulfulde:"Fulfulde",galician:"Galician",georgian:"Georgian",german:"German",german_Austria:"German (Austria)",german_Germany:"German (Germany)",german_Liechtenstein:"German (Liechtenstein)",german_Luxembourg:"German (Luxembourg)",german_Switzerland:"German (Switzerland)",greek:"Greek",greenlandic:"Greenlandic",guarani:"Guarani",gujarati:"Gujarati",hausa:"Hausa",hawaiian:"Hawaiian",hebrew:"Hebrew",hindi:"Hindi",hungarian:"Hungarian",ibibio:"Ibibio",ibibio_Nigeria:"Ibibio (Nigeria)",icelandic:"Icelandic",igbo:"Igbo",indonesian:"Indonesian",inuktitut_Latin:"Inuktitut (Latin)",inuktitut_Syllabics:"Inuktitut (Syllabics)",invariant_Language:"Invariant Language",irish:"Irish",irish_Ireland:"Irish (Ireland)",isiXhosa:"isiXhosa",isiZulu:"isiZulu",italian:"Italian",italian_Italy:"Italian (Italy)",italian_Switzerland:"Italian (Switzerland)",japanese:"Japanese",kannada:"Kannada",kanuri:"Kanuri",kashmiri:"Kashmiri",kashmiri_Arabic:"Kashmiri (Arabic)",kazakh:"Kazakh",khmer:"Khmer",kiche:"K\u02bciche\u02bc",kinyarwanda:"Kinyarwanda",kiswahili:"Kiswahili",konkani:"Konkani",korean:"Korean",kyrgyz:"Kyrgyz",lao:"Lao",latin:"Latin",latvian:"Latvian",lithuanian:"Lithuanian",lower_Sorbian:"Lower Sorbian",luxembourgish:"Luxembourgish",macedonian:"Macedonian",malay:"Malay",malay_Brunei_Darussalam:"Malay (Brunei Darussalam)",malay_Malaysia:"Malay (Malaysia)",malayalam:"Malayalam",maltese:"Maltese",manipuri:"Manipuri",maori:"Maori",mapudungun:"Mapudungun",marathi:"Marathi",mohawk:"Mohawk",mongolian:"Mongolian",mongolian_Cyrillic:"Mongolian (Cyrillic)",mongolian_Traditional_Mongolian_China:"Mongolian (Traditional Mongolian, China)",nepali:"Nepali",nepali_India:"Nepali (India)",norwegian:"Norwegian",norwegian_Bokmal:"Norwegian (Bokm\u00e5l)",norwegian_Nynorsk:"Norwegian (Nynorsk)",occitan:"Occitan",odia:"Odia",oromo:"Oromo",papiamentu:"Papiamento",pashto:"Pashto",persian:"Persian",polish:"Polish",portuguese:"Portuguese",portuguese_Brazil:"Portuguese (Brazil)",portuguese_Portugal:"Portuguese (Portugal)",punjabi:"Punjabi",punjabi_Pakistan:"Punjabi (Pakistan)",quechua_Bolivia:"Quechua (Bolivia)",quechua_Ecuador:"Quechua (Ecuador)",quechua_Peru:"Quechua (Peru)",romanian:"Romanian",romanian_Moldova:"Romanian (Moldova)",romansh:"Romansh",russian:"Russian",russian_Moldova:"Russian (Moldova)",sakha:"Sakha",sami_Inari_Finland:"Sami, Inari (Finland)",sami_Lule_Norway:"Sami, Lule (Norway)",sami_Lule_Sweden:"Sami, Lule (Sweden)",sami_Northern_Finland:"Sami, Northern (Finland)",sami_Northern_Norway:"Sami, Northern (Norway)",sami_Northern_Sweden:"Sami, Northern (Sweden)",sami_Skolt_Finland:"Sami, Skolt (Finland)",sami_Southern_Norway:"Sami, Southern (Norway)",sami_Southern_Sweden:"Sami, Southern (Sweden)",sanskrit:"Sanskrit",scottish_Gaelic_United_Kingdom:"Scottish Gaelic (United Kingdom)",serbian:"Serbian",serbian_Cyrillic_Bosnia_and_Herzegovina:"Serbian (Cyrillic, Bosnia and Herzegovina)",serbian_Cyrillic_Montenegro:"Serbian (Cyrillic, Montenegro)",serbian_Cyrillic_Serbia_and_Montenegro_Former:"Serbian (Cyrillic, Serbia and Montenegro (Former))",serbian_Cyrillic_Serbia:"Serbian (Cyrillic, Serbia)",serbian_Latin_Bosnia_and_Herzegovina:"Serbian (Latin, Bosnia and Herzegovina)",serbian_Latin_Montenegro:"Serbian (Latin, Montenegro)",serbian_Latin_Serbia_and_Montenegro_Former:"Serbian (Latin, Serbia and Montenegro (Former))",serbian_Latin_Serbia:"Serbian (Latin, Serbia)",sesotho_sa_Leboa:"Sesotho sa Leboa",sesotho_South_Africa:"Sesotho (South Africa)",setswana:"Setswana",sindhi:"Sindhi",sindhi_Arabic:"Sindhi (Arabic)",sindhi_Devanagari:"Sindhi (Devanagari)",sinhala:"Sinhala",slovak:"Slovak",slovenian:"Slovenian",somali:"Somali",spanish:"Spanish",spanish_Argentina:"Spanish (Argentina)",spanish_Bolivia:"Spanish (Bolivia)",spanish_Chile:"Spanish (Chile)",spanish_Colombia:"Spanish (Colombia)",spanish_Costa_Rica:"Spanish (Costa Rica)",spanish_Dominican_Republic:"Spanish (Dominican Republic)",spanish_Ecuador:"Spanish (Ecuador)",spanish_El_Salvador:"Spanish (El Salvador)",spanish_Guatemala:"Spanish (Guatemala)",spanish_Honduras:"Spanish (Honduras)",spanish_International_Sort:"Spanish (International Sort)",spanish_Latin_America:"Spanish (Latin America)",spanish_Mexico:"Spanish (Mexico)",spanish_Nicaragua:"Spanish (Nicaragua)",spanish_Panama:"Spanish (Panama)",spanish_Paraguay:"Spanish (Paraguay)",spanish_Peru:"Spanish (Peru)",spanish_Puerto_Rico:"Spanish (Puerto Rico)",spanish_Spain_Traditional_Sort:"Spanish (Spain-Traditional Sort)",spanish_United_States:"Spanish (United States)",spanish_Uruguay:"Spanish (Uruguay)",spanish_Venezuela:"Spanish (Venezuela)",swahili:"Swahili",swedish:"Swedish",swedish_Finland:"Swedish (Finland)",swedish_Sweden:"Swedish (Sweden)",syriac:"Syriac",tajik:"Tajik",tamazight:"Central Atlas Tamazight",tamazight_Arabic_Morocco:"Central Atlas Tamazight (Arabic, Morocco)",tamazight_Latin_Algeria:"Central Atlas Tamazight (Latin, Algeria)",tamil:"Tamil",tatar:"Tatar",telugu:"Telugu",thai:"Thai",tibetan_China:"Tibetan (China)",tigrigna:"Tigrigna",tigrigna_Eritrea:"Tigrigna (Eritrea)",tigrigna_Ethiopia:"Tigrigna (Ethiopia)",turkish:"Turkish",turkmen:"Turkmen",ukrainian:"Ukrainian",upper_Sorbian:"Upper Sorbian",urdu:"Urdu",uyghur_China:"Uyghur (China)",uzbek:"Uzbek",uzbek_Cyrillic:"Uzbek (Cyrillic)",uzbek_Latin:"Uzbek (Latin)",valencian:"Valencian",venda:"Venda",vietnamese:"Vietnamese",welsh:"Welsh",wolof:"Wolof",xitsonga:"Xitsonga",yi_China:"Yi (China)",yiddish:"Yiddish",yoruba:"Yoruba"};CommonUIStrings={l_DefaultDialogTitle:"{webappfull}",l_UserInterfaceFontName:"'Segoe UI','Segoe UI Web',Arial,Verdana,sans-serif",l_UserInterfaceFontSize:"9pt",l_UserInterfaceSmallFontSize:"8pt",l_UserInterfaceFontWeightBold:"bold",l_UserInterfaceUpperCaseTextTransform:"uppercase",l_UserInterfaceLightFontName:"'Segoe UI Light','Segoe UI',Arial,Verdana,sans-serif",l_UserInterfaceSemiLightFontName:"'Segoe UI Semi Light','Segoe UI Light','Segoe UI',Arial,Verdana,sans-serif",l_HeaderLargeFontSize:"10pt",l_JewelMenuFontSize:"10pt",l_JewelSubMenuFontSize:"14pt",l_JewelSubmenuFileNameFontSize:"16pt",l_JewelSubMenuMainTitleFontSize:"30pt",l_JewelSubmenuMruButtonTitleFontSize:"11pt",l_JewelSubmenuFooterButtonFontSize:"9pt",l_UserInterfaceDialogTitleFontSize:"16pt",l_UserInterfaceDialogButtonFontSize:"12pt",l_UserInterfaceDialogTextFontSize:"11pt",l_UserInterfaceDialogTextLargeFontSize:"14pt",l_UserInterfaceTaskPaneTitleFontSize:"16pt",l_PolicyOverrideButton:"More Options",l_PolicyBusinessBarTitle:"POLICY TIP:",l_PolicyLabelAutomaticallyAppliedMessage:"Your organization automatically applied the sensitivity: {0}.",l_PolicyLabelRecommendationMessage:"Your organization recommends that you change the sensitivity to: {0}.",l_PolicyLabelRecommendationButton:"Change now",l_DialogOk:"OK",l_DialogCancel:"Cancel",l_DialogYes:"Yes",l_DialogNo:"No",l_DialogRetry:"Retry",l_DialogPermanentlyDelete:"Permanently Delete",l_DialogShareAndNotify:"Share and notify",l_DialogWidth:15,l_DialogClose:"Close",l_DialogError:"Error",l_DialogWarning:"Warning",l_DialogInfo:"Information",l_DialogQuestion:"Question",l_DialogDoNotShow:"Don't show this dialog again.",l_DialogLoading:"Loading...",l_DialogSessionInfo:"Session ID: {0}",l_DialogView:"View",l_DialogMove:"Move",l_DialogChange:"Change",l_NeedToSignIn:"This feature is available when you sign in.",l_RenameFileTooltip:"Rename File",l_SaveStatusTooltip:"We're automatically saving your changes.",L_PinRibbonTooltip:"Expand the Ribbon",L_UnpinRibbonTooltip:"Collapse the Ribbon",l_HelpTooltip:"Help",L_GroupApps:"Add-ins",L_ButtonMyApps:"My Add-ins",L_ButtonOfficeAddins:"Office Add-ins",L_ButtonUploadAddins:"Upload Add-ins",L_ButtonStore:"Store",l_SignoutLink:"Sign out",l_OICContinueInBrowser:"Continue in Browser",l_OICErrorMessage:"Sorry, but to open this {doctype}, your computer must be running a supported version of {richclientfull} and a browser that supports opening files directly from Office.",l_OICErrorMessageNoOffice:"Sorry, but to open this {doctype}, your computer must be running a supported version of {richclientfull}.",l_OICErrorHelpLink:"Troubleshoot",l_OICErrorIHaveOfficeButton:"I have Office",l_OICErrorNoOfficeDetected:"Sorry, we can't find {richclientfull} on your computer.",l_OICErrorMacOfficeOffer:"If you have an older version of Office or no Office at all, you can try {0}.",l_OICErrorMacOFficeLink:"Microsoft Office for Mac 2011",l_OICErrorNoOfficeDownloadButton:"Download My File",l_OICErrorFileDownloadOffer:"You can also download a copy of this {doctype}.",l_OICDialogTitle:"We're opening this in {richclientfull}...",l_OICDialog2ndTitle:"All done. You can close this file now.",l_OICDialogSectionTitle:"We opened this file in {richclientfull} on your computer.",l_OICBrowserDialogTitle:"We opened this file in {richclientfull} on your browser.",l_OICResumeEditing:"Resume editing here",l_OICDialogRetry:"Try launching {richclientfull} again",l_OICErrorC2ROneNoteOffer:"Download {richclientfull} for free at OneNote.com.",l_OICErrorC2ROffer:"If you have an older version of Office or no Office at all, you can try {officefull} for free.",l_OICErrorC2RInstallOneNoteButton:"Download and Install {richclientfull}",l_OICErrorC2RInstallButton:"Try {officeshort}",l_OICErrorPopupBlockerForSafari:"{richclientfull} failed to launch because the pop-up was blocked by Safari. Please go to Settings > Safari > Block Pop-ups and turn off the pop-up blocker.",l_OICLaunchDialogTitle:"Your content has been saved.",l_OICLaunchDialogTitleForView:"We are ready.",l_OICLaunchRichClient:"Launch {richclientfull}.",l_OICReturnToOnlineClient:"Return to {webappfull}.",l_OneDriveContactError:"Sorry, we ran into a problem contacting {onedrive}. Try again later.",l_RoamingAppsInstallTitle:"Want to use Office on Demand?",l_RoamingAppsInstallText:"Office on Demand is a fast and easy way to use the latest full-featured Office programs on any PC without installing them.",l_RoamingAppsInstallHelpLink:"Learn more",l_RoamingAppsInstallYesButton:"Yes, let's go!",l_RoamingAppsInstallNoButton:"No, thanks.",l_RoamingAppsDialogTitle:"Waiting for you...",l_RoamingAppsDialogText:"Your browser is asking you to install an add-on right now. Please allow the installation and we'll open your document automatically.",l_ConversionButton:"Convert",l_ConversionDialogTitle:"File Conversion",l_ConvertAndEditDialogTitle:"Converting your file for editing...",l_ConversionDialogLine1:"To edit this file in {webappshort} we need to convert it to the newest file format. Don't worry, we will create a backup of the original file.",l_ConversionDialogLine2:"To edit this file without converting it, open it in {richclientfull}.",l_ConversionDialogPdf:"{webappshort} will make a copy of your PDF and convert it to a Word document for you to edit.",l_ConversionProgressString:"Copying and converting {doctype}...",l_ConversionErrorMessage1:"Sorry, but we had trouble opening this {doctype}.  To edit this {doctype}, open it in {richclientfull}.",l_ConversionErrorMessage2:"Don't worry, no changes were made to your original file.",l_ConversionSucceded1:"Changes to the layout of the {doctype} could have occurred during conversion. To check the layout of this {doctype}, click View. To start editing right now, click Edit.",l_ConversionSucceded2:"Don't worry, no changes were made to your original file.",l_ConversionFileExists:"A converted version of this {doctype} already exists.",L_Diagnostics:"Diagnostics",L_DiagnosticsBuild:"Build",L_DiagnosticsDescription:"The following session details may be requested by technical support.",L_DiagnosticsSessionId:"Session ID",l_EmbedDialogTitle:"Document Embedding",l_EmbedCodeText:"This is the embed code for this {doctype}. To embed it yourself, copy this text and paste it in your site or blog",l_EmbedUrlText:"You can also just grab the embed URL if that's easier for you. Copy it below.",l_ErrorDialogRestartName:"Restart",l_ErrorDialogExitName:"Exit",l_ErrorDialogRefreshName:"Refresh",l_LearnMore:"Learn More",l_ErrorDialogMessage:"Sorry, we ran into a problem.",l_ErrorDialogFeedbackLinkText:"Give feedback to Microsoft",l_ErrorDialogFeedbackText:"Your feedback helps Microsoft improve {webappshort}.",L_HelpImproveOffice:"Help Improve Office",L_Disconnected:"Disconnected",L_Connected:"Connected",L_Reconnecting:"Reconnecting...",l_ModalCalloutContentWhenDisconnected:"The network is currently unavailable. We're trying to connect...",l_OfficeNameLong:"Microsoft Office 2016",l_OfficeNameShort:"Office 2016",l_OneDriveName:"OneDrive",l_RichClientNameLong_V:"Microsoft Visio",l_AppNameShort_V:"Visio",l_DocumentType_V:"diagram",l_RichClientNameLong_W:"Microsoft Word",l_AppNameShort_W:"Word",l_DocumentType_W:"document",l_DocumentTypeTitleCase_W:"Document",l_DocumentTypePlural_W:"documents",l_SubDocumentType_W:"document",l_BrandingString:"Online",l_DocumentType_Pdf:"PDF",l_DocumentTypePlural_Pdf:"PDFs",l_SubDocumentType_Pdf:"PDF",l_RichClientNameLong_ON:"Microsoft OneNote",l_AppNameShort_ON:"OneNote",l_DocumentType_ON:"notebook",l_DocumentTypeTitleCase_ON:"Notebook",l_DocumentTypePlural_ON:"notebooks",l_SubDocumentType_ON:"page",l_RichClientNameLong_PPT:"Microsoft PowerPoint",l_AppNameShort_PPT:"PowerPoint",l_DocumentType_PPT:"presentation",l_DocumentTypePlural_PPT:"presentations",l_SubDocumentType_PPT:"slide",l_AppTitle:"{webappfull}",l_AppTitlePreview:"{webappfull} Preview",l_SwitcherTooltip:"List of Microsoft Services",l_AppNameShort:"{webappshort}",l_NetworkProblemToast:"Can't Contact Server",l_NetworkRestoredToast:"Connection Restored",l_NetworkProblemDialogDescription:"Sorry, we're having trouble talking to the service and must close. Check your network connection and try again.",l_NetworkProblemInitialDialogDescription:"Sorry, we can't open this {doctype} because there was a problem talking to the service. Check your network connection and try again.",l_AuthenticationLostTitle:"Account Information Needed",l_AuthenticationLostMessage:"It looks like you've signed out. Your {doctype} will not be saved. Please click the sign in button and re-enter your username and password.",l_AuthenticationLostSigninInProgressMessage:"Please use the newly launched browser window to enter your username and password. If you don't see it, try clicking the sign in button again.",l_SignIn:"Sign in",l_VoicedLoadingText:"Loading",l_SignInToSaveDialogTitle:"Sign in to Save",l_SignInToSaveDialogMessage:"Don't lose your work! Sign in to save this {doctype} to your {onedrive}.",l_SignInToSaveDialogCancelButton:"Not now",l_SavingToOneDrive:"Saving to {onedrive}",l_ErrorSavingToOneDrive:"Sorry, there was a problem saving your {doctype} to {onedrive}. Please download the {doctype} and upload it to {onedrive} or copy your content and paste it into a new {doctype}.",l_WheresTheSaveButtonDialogTitle:"Where's the Save Button?",l_WheresTheSaveButtonDialogMessage:"In {webappshort}, there's no save button because your {doctype} is being saved automatically.",l_PrintDialogDocumentIsPrinting:"Your PDF is ready.",l_PrintDialogDocumentIsReadyToPrint:"Your PDF is ready to print.",l_PrintDialogHelpLink:"Learn more",l_PrintDialogLinkSuggestion:"Click here to view the PDF of your document.",l_PrintDialogOpenPDF:"Open PDF",l_DownLoadACopyDialogMessage:"Your {doctype} is ready.",l_DownLoadACopyDialogLinkSuggestion:"Click here to download your {doctype}.",l_PdfConvertFailureDialogMessage:"Sorry, {webappshort} ran into a problem opening this {doctype}.",l_PdfConvertFailureDialogLinkSuggestion:"Click here to download the document.",l_DirectPrintDialogDocumentIsPrinting:"Your document is ready to print.",l_DirectPrintDialogLinkSuggestion:"Click here to view your printable PDF.",l_DirectPrintDialogHeader:"Print your document from the preview window below.",l_DirectPrintDialogDownloadPDFHeader:"Didn't print correctly?",l_DirectPrintDialogDownloadPDFLink:"Open a printable PDF of your document.",l_DirectPrintDialogSuccessText:"Done printing.",l_DirectPrintPreparingPDF:"Preparing your PDF to print...",l_FontDropdownMenuSectionTheme:"Theme Fonts",l_FontDropdownMenuSectionMru:"Recently Used Fonts",l_FontDropdownMenuSectionAll:"All Fonts",l_LookupAltText:"Tell me what you want to do",l_LookupHotkeyText:"{0} (Alt+Q)",l_LookupNoResultsTitle:"No Results Found",L_OnlinePictureFromHost:"Pictures from {0}",l_OnlinePictureFromOneDrive:"Pictures from OneDrive",L_OnlinePictureFromBing:"Pictures from Bing",l_LookupNoResultsDescription:'Sorry, we didn\'t find any results for "{0}".',l_TellMeRecentlyUsedTitle:"Recently Used",l_TellMeTryQueryTitle:"Try",l_TellMeTryQueryAccessibleLabelFormat:"Try this query: {0}",l_TellMeTryCommandAccessibleLabelFormat:"Try command: {0}",l_TellMeRecentlyUsedAccessibleLabelFormat:"Recently Used command: {0}",l_TellMeClassifierCommandAccessibleLabelFormat:"Relevant command: {0}",l_FindInDocumentText:'Find "{0}" in Document',l_InsightsButtonText:'Smart Lookup on "{0}"',l_InsightsPaneNotification:"Insights Pane. Press Ctrl F6 to Leave.",l_HelpButtonTextWithQuotation:'"{0}"',l_HelpButtonTextNoPlaceholder:"Get Help",l_LookupLiveNotificationResultPluralFormText:"Found {0} results.",l_LookupLiveNotificationResultSingularFormText:"Found 1 result.",l_LookupFirstRunExperienceTitle:"Just start typing!",l_LookupFirstRunExperienceDescription:"You'll get commands and help for your task.",L_Insights:"Insights",L_InsightsMenu:"Smart Lookup",L_FontSize8:"8",L_FontSize9:"9",L_FontSize10:"10",L_FontSize11:"11",L_FontSize12:"12",L_FontSize14:"14",L_FontSize16:"16",L_FontSize18:"18",L_FontSize20:"20",L_FontSize24:"24",L_FontSize26:"26",L_FontSize28:"28",L_FontSize36:"36",L_FontSize48:"48",L_FontSize72:"72",l_AngsanaNew:"Angsana New",l_Arial:"Arial",l_ArialBlack:"Arial Black",l_Batang:"Batang",l_BookAntiqua:"Book Antiqua",l_BookmanOldStyle:"Bookman Old Style",l_BrowalliaNew:"Browallia New",l_Calibri:"Calibri",l_Cambria:"Cambria",l_Candara:"Candara",l_Century:"Century",l_CenturyGothic:"Century Gothic",l_CenturySchoolbook:"Century Schoolbook",l_ComicSansMS:"Comic Sans MS",l_Consolas:"Consolas",l_Constantia:"Constantia",l_Corbel:"Corbel",l_CordiaNew:"Cordia New",l_CourierNew:"Courier New",l_DilleniaUPC:"DilleniaUPC",l_DaunPenh:"DaunPenh",l_Dotum:"Dotum",l_FangSong:"FangSong",l_FranklinGothicBook:"Franklin Gothic Book",l_FranklinGothicMedium:"Franklin Gothic Medium",l_Garamond:"Garamond",l_Gautami:"Gautami",l_Georgia:"Georgia",l_GillSansMT:"Gill Sans MT",l_Gulim:"Gulim",l_GungSuh:"GungSuh",l_HGGothicE:"HGGothicE",l_HGGyoshotai:"HGGyoshotai",l_HGPMinchoE:"HGPMinchoE",l_HYGothic_Extra:"HYGothic-Extra",l_HYMyeongJo_Extra:"HYMyeongJo-Extra",l_IskoolaPota:"Iskoola Pota",l_JasmineUPC:"JasmineUPC",l_KaiTi:"KaiTi",l_Kalinga:"Kalinga",l_Kartika:"Kartika",l_Latha:"Latha",l_LiSu:"LiSu",l_LucidaSans:"Lucida Sans",l_LucidaSansUnicode:"Lucida Sans Unicode",l_MalgunGothic:"Malgun Gothic",l_Mangal:"Mangal",l_Meiryo:"Meiryo",l_MicrosoftJhengHei:"Microsoft JhengHei",l_MicrosoftYaHei:"Microsoft YaHei",l_MingLiU:"MingLiU",l_MingLiU_HKSCS:"MingLiU_HKSCS",l_MSGothic:"MS Gothic",l_MSMincho:"MS Mincho",l_MSPGothic:"MS PGothic",l_MSPMincho:"MS PMincho",l_Nyala:"Nyala",l_PMingLiU:"PMingLiU",l_PMingLiU_ExtB:"PMingLiU-ExtB",l_Raavi:"Raavi",l_Rockwell:"Rockwell",l_Shruti:"Shruti",l_Segoe:"Segoe",l_SegoeLight:"Segoe Light",l_SegoeUI:"Segoe UI",l_SegoeUILight:"Segoe UI Light",l_SimHei:"SimHei",l_SimSun:"SimSun",l_SimSun_ExtB:"SimSun-ExtB",l_STKaiti:"STKaiti",l_STXingkai:"STXingkai",l_STXinwei:"STXinwei",l_Sylfaen:"Sylfaen",l_Tahoma:"Tahoma",l_Times:"Times",l_TimesNewRoman:"Times New Roman",l_TrebuchetMS:"Trebuchet MS",l_Tunga:"Tunga",l_TWCenMT:"TW Cen MT",l_Verdana:"Verdana",l_Vrinda:"Vrinda",l_Embed:"Embed",l_Preview:"Preview",l_EmbedCode:"Embed Code",l_Dimensions:"Dimensions",l_Interaction:"Interaction",l_Expand:"Expand",l_Collapse:"Collapse",l_CopyText:"Copy this text and paste it in your site or blog",l_Close:"Close",l_NoFrames:"This is an embedded {0} {doctype}, powered by {1}.",l_Office:"Microsoft Office",l_WebAppName:"Office",l_CannotOpenFile:"Sorry, there was a problem and we can't open this {doctype}.  If this happens again, try opening the {doctype} in {richclientfull}.",l_OdfFileCompatWarningBusinessBar:"Some compatibility issues could occur if you edit this file.",l_OdfFileCompatWarningBusinessBarButton:"Details...",l_CentimeterUnitPlaceholder:"{0} cm",l_CharacterUnitPlaceholder:"{0} ch",l_DegreeUnitPlaceholder:"{0}\u00b0",l_InchUnitPlaceholder:'{0}"',l_LineUnitPlaceholder:"{0} line",l_PointUnitPlaceholder:"{0} pt",l_PixelsUnitPlaceholder:"{0} px",l_NewCommentError:"Please select something in the {doctype} to comment on, or select a comment to reply to.",l_NewCommentInvalidContent:"Sorry, but you can't comment on that type of content.",l_DeleteCommentConfirm:"Are you sure you want to delete this comment and all of its replies?",l_NavigateAway:"Some of your comments have not yet finished saving. Are you sure you want to discard those comments?",L_ActivityPaneTitle:"Catch up",L_OpenCommentPane:"Comments",l_CommentContent:"Comment Content",l_CommentReplyButton:"Reply",l_CommentDoneButton:"Mark as Done",l_CommentDeleteButton:"Delete",l_CommentCloseButton:"Close",l_CommentNewCommentButton:"New Comment",l_CommentSaveCommentButton:"Post",l_CommentCancelButton:"Cancel",l_CommentHintTooltip:"Click to see this comment",l_CommentLongDateFormat:"{0} - {1}",l_CommentPaneEmpty1:"No one has commented yet.",l_CommentPaneEmpty2:"If you'd like to be the first, select some text and click New Comment.",l_CommentPaneError:"Sorry, {webappshort} ran into a problem and comments can't be displayed.",l_CommentAuthorUnknown:"Unknown",l_CommentProgressTooltip:"Saving...",l_CommentFailTooltip:"Sorry, we couldn't save your changes. If you see unsaved comments, you can select them and copy them to the clipboard and try again later. Refreshing your browser will show you what is saved.",l_CommentLoading:"Loading comments...",l_CommentTabHelp:"Tab for comment actions",l_ClipboardAccessDeniedTitle:"Can't Access Clipboard",l_ClipboardAccessDenied:"Your browser doesn't allow access to the clipboard. Instead, use the keyboard shortcuts for cut, copy, and paste.",l_ClipboardExtensionInstallButtonText:"Install the extension",l_ClipboardExtensionDialogTitle:"Install the free Copy and Paste extension?",l_ClipboardExtensionDialogMessageForPC:"The Office Online Copy and Paste extension lets us access your clipboard so you can cut, copy, and paste multiple items. If you don't install it, you can still use these keyboard shortcuts: Cut = Ctrl + X",l_ClipboardExtensionDialogMessageForMac:"The Office Online Copy and Paste extension lets us access your clipboard so you can cut, copy, and paste multiple items. If you don't install it, you can still use these keyboard shortcuts: Cut = {0} + X",l_ClipboardExtensionSuggestion:"You can also try our Copy Paste app {0} if you don't want to use shortcut keys.",l_ClipboardExtensionLink:"here",l_CopyPasteImageDialogTitle:"Too many images",l_CopyPasteImageDialogMessage:"Sorry, you can only paste {0} images at a time.",l_ClipboardUseShortcutTitle:"Use shortcut keys",l_ClipboardUseShortcutMessage:"Your browser can't access the clipboard, so use these shortcuts:",l_ClipboardCut:"Cut = Ctrl + X",l_ClipboardCopy:"Copy = Ctrl + C",l_ClipboardPaste:"Paste = Ctrl + V",l_ClipboardPasteText:"Paste Text Only = Ctrl + Shift + V",l_ClipboardCut_Mac:"Cut = {0} + X",l_ClipboardCopy_Mac:"Copy = {0} + C",l_ClipboardPaste_Mac:"Paste = {0} + V",l_ClipboardPasteText_Mac:"Paste Text Only = {0} + Shift + V",l_ClipboardModifier:"Ctrl",l_ClipboardModifier_Mac:"\u2318",l_ClipboardCutShortcut:"+X",l_ClipboardCopyShortcut:"+C",l_ClipboardPasteShortcut:"+V",l_ClipboardPasteTextShortcut:"+Shift+V",l_AccCheckerPaneTitle:"Accessibility Checker",l_AccCheckerOutOfSyncNotificationMessageBody:"The results are no longer current. Click Recheck to refresh the list of issues.",l_AccCheckerCheckingNow:"Checking Now ...",l_AccCheckerReCheckButton:"Recheck",l_AccCheckerLastTimeChecked:"Last checked: {0} ",l_AccCheckerServiceUnavailable:"Temporarily unavailable",l_accCheckerResultInstruction:"To make this document more accessible for people with disabilities, select and fix the issues in the Inspection Results box.",l_accCheckerAdditionalInfoTitle:"Additional Information",l_AccCheckerAdditionalInfoContent:"The Accessibility Checker may have identified some issues that can't be fixed in the browser. To remedy those issues open your file in the Windows or Mac version of the app.",l_AccCheckerExternalHelpLinkText:"Read more about making documents accessible",l_AccCheckerPartialResultNotification:"There are more results than the Accessibility Checker can display here. After fixing these issues, recheck your document to see more results.",l_AccCheckerCheckCompleteNotification:"Accessibility check is complete.",l_AccCheckerContentNotFoundDialogTitle:"Content Not Found",l_AccCheckerContentNotFoundDialogBody:"This content has been changed or deleted since the Accessibility Checker was last run. We'll recheck your document for accessibility issues.",l_AccCheckerContentNotFoundDialogActionButton:"Recheck",l_AccCheckerCategoryError:"Errors",l_AccCheckerCategoryWarning:"Warnings",l_AccCheckerCategoryTip:"Tips",l_AccCheckerCategoryIntelligentService:"Intelligent Services",l_AccHelpShortcutAnnouncement:"Press Alt Shift A for accessibility help.",l_AccHelpDialogMoreHelpLinkText:"More Office accessibility help",l_AccHelpDialogShortcutHeaderText:"Shortcut",l_AccHelpDialogCommandsHeaderText:"Commands",l_AccHelpDialogAppViewerTitle:"{webappshort} Reading View Accessibility",l_AccHelpDialogCtrlKey:"Ctrl",l_AccHelpDialogCommandKey:"Command",l_AccHelpDialogWindowsKey:"Windows",l_AccHelpDialogAccHelpCommand:"Get accessibility help",l_AccHelpDialogAccHelpShortcut:"Alt+Shift+A",l_AccHelpDialogLandmarkRegionsCommand:"Move among landmark regions",l_AccHelpDialogLandmarkRegionsShortcut:"{0}+F6 or {0}+Shift+F6",l_AccHelpDialogTellMeCommand:"Go to Tell Me box to run any command",l_AccHelpDialogTellMeShortcut:"Press Alt+Q to jump to the Tell Me box, then type a command",l_AccHelpDialogAccessKeysCommand:"Display or hide KeyTips",l_AccHelpDialogAccessKeysShortcut:"Alt+{0}",l_AccHelpDialogMoveInEditingAreaCommand:"Move within the {doctype} region",l_AccHelpDialogMoveInEditingAreaShortcut:"Please follow the help for your browser or PDF viewer",l_AccHelpDialogOpenDialogMenuCommand:"Open dialog menu for an accessible moving option",l_AccHelpDialogOpenDialogMenuShortcut:"Press Ctrl+Alt+Space when a dialog is open",l_AlternativeTextDialogTitle:"Alternative Text",l_AlternativeTextDialogLabel:"Type the alternative text for this picture.",l_AlternativeTextTitleCaption:"Title",l_AlternativeTextDescriptionCaption:"Description",l_SessionExpiredMessage:"Sorry, your session expired. Please refresh the page to continue.",l_SessionExpiringMessage:"Sorry, your session will expire at {0}. You can refresh the page to continue.",l_SessionExpirationRefreshButton:"Refresh",l_SessionExpiringSaveAndRefreshButton:"Save and Refresh",l_UserReportLinkText:"Report this error",l_ConfigError:"There's a configuration problem preventing us from getting your document. If possible, try opening this document in {richclientfull}.",l_HostIframeTitle:"{webappshort}",l_RenameFileInvalidNameTitle:"That File Name Won't Work",l_RenameFileInvalidName:'Please use a different name. Valid file names cannot contain any of the following characters:\\/:*?"<>|.',l_RenameFileNameTooLong:"The name you entered is too long. Please try a shorter name.",l_RenameFileRenameDisabledTitle:"Can't Rename Yet",l_RenameFileRenameDisabled:"To rename this file we need you to...",l_RenameFileRenameDisabledSignIn:"Sign in.",l_RenameFileRenameDisabledPermission:"Get permission to rename (usually this comes with permission to delete or move a file).",l_RenameFileRenameDisabledCoauth:"Wait until you're the only person working on this document.",l_RenameFileRenameDisabledPermissionFull:"To rename this file we need you to get permission to rename (usually this comes with permission to delete or move a file).",l_RenameFileRenameDisabledCoauthFull:"To rename this file we need you to wait until you're the only person working on this document.",l_RenameFileRenameNotEveryoneSupportsRename:"You can't rename the file at this time. Please try again later.",l_RenameFileRenameReadOnlyRecommended:"This file is currently in read-only mode. Press 'Edit Anyway' to begin editing and to rename the file.",l_RenameFileGenericErrorTitle:"We Couldn't Rename the File",l_RenameFileGenericError:"We're sorry, but we couldn't rename the file. Please try again in a few minutes, or refresh the page and try again.",l_ToCurrentFolder:"Create a copy of this file in the same online folder.",l_SaveAsToHostOverwrite:"Replace existing file",l_InvalidFileNameTitle:"That File Name Won't Work",l_InvalidFileNameText:'Please use a different name. Valid file names cannot contain any of the following characters:\\/:*?"<>|#{{}}%~&.',l_InvalidFileNameAllowPercentOctothorpe:'Please use a different name. Valid file names cannot contain any of the following characters:\\/:*?"<>|.',l_InvalidFileNameDisallowPercentOctothorpe:'Please use a different name. Valid file names cannot contain any of the following characters:\\/:*?"<>|#%.',l_EmptyNameTitle:"Oops, no name",l_EmptyNameText:"Please enter a name.",l_GeneralFailTitle:"Sorry, we can't save the copy",l_InvalidPermissionText:"You don't have permission to save here, or you don't have permission to replace the existing file.",l_OverwriteTargetText:"The name {0} is already taken. Try another name for this copy.",l_LockTargetText:"A {doctype} with the same name is in use. Try another name for this copy.",l_FailToSaveFile:"Please try again in a little while.",L_SaveACopyOnline:"Save a copy online.",l_SaveToOneDrive:"Save to {onedrive}",l_DestinationFolder:"Destination folder: '{0}'",l_SaveACopyFileName:"Enter a name for this copy:",l_SaveButtonLabel:"Save",l_RetryButtonLabel:"Try Again",l_SaveACopyError:"We couldn't SaveAs your file. Please try again.",L_SaveAsButtonDescription:"Save a copy to {onedrive}.",l_NoSavePermissionDialogTitle:"Sorry, we can't save here",l_NoSavePermissionDialogMessage:"You don't have permission to save files in this folder.",l_SaveFailedDialogTitle:"Sorry, we couldn't save the copy",l_FileNameLabel:"Name:",l_NewFileLocationLabel:"Location:",l_CurrentOnlineFolder:"Current online folder",l_SaveToAnotherFolder:"Save to another folder",l_SaveAsFileTooLargeTitle:"The file is too large to save a copy",l_SaveAsFileTooLargeMessage:"We can't save a copy of this file because it exceeds the {0} MB file size limit. To save a copy of this file, open it in {richclientfull}.",l_ScreenReader_SaveToAnotherFolderButton:"Save location:{0}. Click to save to another folder.",l_ScreenReader_CurrentFileLocation:"{0}, folder name: {1}",l_RenameDialogTitle:"Rename",l_RenameDialogLabel:"Enter a name for this file:",L_RenameButtonDescription:"Rename this file.",L_RenameButtonTitle:"Rename",l_ImageUploadFailedTitle:"Insert Picture",l_ImageUploadingTitle:"Insert Picture",l_ImageUploadButtonText:"Insert",l_ImageUploadDialogText:"File name:",l_ImageUploadNoFileSpecified:"Specify a file name.",l_ImageUploadUnsupportedFileType:"Sorry, we don't support that kind of file. We can only insert .jpg, .jpeg, .png, .gif, .bmp, .tif, and .tiff files.",l_ImageUploadWait:"Uploading...",l_EditorsToastArriving:"{0} is editing this {doctype}.",l_PeoplesWellFlyoutLabel:"Select someone's name to go where they are editing",l_PeoplesWellStateNumberOfOtherPeopleEditingHere:"{0} other people are here",l_PeoplesWellStateUserIsAlsoEditing:"{0} is also editing",l_PeoplesWellStateUserIsAlsoViewing:"{0} is also viewing",l_PeoplesWellStateUserIsInactive:"{0} is inactive",l_PeoplesWellStateYouAreAllByYourself:"It's just you here now",l_PeoplesWellUserStatusIsEditingOnline:"Editing online",l_PeoplesWellUserStatusIsViewingOnline:"Viewing online",l_PeoplesWellUserStatusIsEditingOffline:"Editing offline",l_PeoplesWellUserStatusIsViewingOffline:"Viewing offline",l_PeoplesWellUserStatusLocationUnknown:"Has this {doctype} open",l_PeoplesWellUserStatusIsInactive:"Inactive",l_SkypeName:"Skype",l_ChatFeatureDiscoveryBubbleShort:"Chat using {skype}",l_ChatFeatureDiscoveryBubbleLong:"Chat with others who are editing the document right now.",l_BubbleCloseButtonTooltip:"Close",l_ChatTooltip:"Chat",l_DocChatButtonLabel:"Chat",l_DocChatButtonTooltip:"Chat",l_DocChatNowButtonLabel:"Chat now",l_DocChatNowButtonTooltip:"Chat now",l_DocChatMeetNowButtonLabel:"Meet now",l_DocChatMeetNowButtonTooltip:"Meet now",l_DisabledChatTooltip:"Sign in to chat",l_GroupChat:"Group Chat",l_ChatIsNotAvailable:"Sorry, {skype} document chat isn't available right now.",L_SaveToCloudStorage:"Save to {onedrive}",l_SaveToCloudSignInDialog:"Sign in to save this {doctype} to your {onedrive}.",L_SaveACopy:"Save a Copy",L_SaveAs:"Save As",l_NewCreationLocationMessage:"Create a new document in {0}.",l_NewFileAPIConsentMessage:"This Add-In is about to create a new document in your default folder on your current cloud repository.",l_OpenWindowConsentMessage:"This Add-In is about to display a new window.",l_NewProvisioningStorageMessage:"We're setting up your {0} so you can start creating new documents. This might take a few minutes.{1}Please refresh the browser page to see if it's ready to use.",l_NewGenericErrorMessage:"Sorry, we can't get the list of available options right now. Please try again later.",l_NewTemplateErrorMessage:"We can't get the list of available templates right now.",l_NewMoreTemplates:"More on Office.com",l_Open:"Open",l_OpenMenuRecentDocuments:"Recent Documents",l_OpenMenuMoreOnHost:"More on {0}",l_OpenMenuEmptyMruMessage:"There are no recent documents.",l_OpenMenuServerErrorMessage:"We can't get the list of your recent documents right now.",l_PrivacyStatement:"View the Microsoft Privacy Statement",l_SendFileErrorReportMessage:"We'd like to prevent errors like this. You can help by sending us an error report. This will include a copy of your file, which we'll only use to fix the problem and to help improve {webappshort}.",l_SendFileErrorReportDefaultText:"(optional) For example: I was inserting a rectangle...",l_SendFileErrorReportTextCaption:"What were you trying to do when you saw this?",l_Send:"Send",l_NoThanks:"No Thanks",l_Download:"Download",L_DownloadACopy:"Download a Copy",L_DownloadAs:"Download As",l_DownloadAsKeytip:"W",l_DownloadAsPdfDialogLinkSuggestion:"Click here to download the PDF of your {doctype}.",L_MoreOptionsMenu:"More",l_UnsupportedBrowser:"The browser you're using isn't supported, so some features may not work as expected. For best results, switch to a supported browser.",l_UnsupportedBrowserCrashed:"You can't use {webappshort} because your browser isn't supported. Please switch to a supported browser.",l_FullPage:"Full Page",l_PageWidth:"Page Width",l_ZoomDialogTitle:"Zoom to",L_Zoom:"Zoom",L_ZoomTooltip:"Zoom Level. Click to open the Zoom dialog box.",l_SavingStatus:"Saving...",l_SavedStatus:"Saved",l_SavedToStatus:"Saved to {0}",l_ReadOnlyStatus:"Read-Only",l_ReadOnlyStatusTooltip:"You can only read this file.",l_ReviewModeStatus:"Review Mode",l_ReviewModeStatusTooltip:"You can only review this file.",l_EditAndReply:"Edit and Reply",l_ScreenReader_UnknowSlideTitlePrompt:"Slide Title Prompt is unknown",l_ScreenReader_UnknowSlideContentPrompt:"Slide Content Prompt is unknown",l_ScreenReader_UnknowSlideNotePrompt:"Slide Note Prompt is unknown",l_ScreenReader_UnknowSlideTitle:"Slide title is unknown",l_ScreenReader_UnknowSlideContent:"Slide content is unknown",l_ScreenReader_UnknowSlideNote:"Slide note is unknown",l_ScreenReader_NoSlideTitle:"There is no slide title",l_ScreenReader_NoSlideContent:"There is no slide content",l_ScreenReader_NoSlideNote:"There are no slide notes",l_ScreenReader_PatternWord_Slide:"Slide",l_ScreenReader_PatternWord_Title:"Title",l_ScreenReader_PatternWord_Content:"Content",l_ScreenReader_PatternWord_Notes:"Notes",l_FileUploadDialogText:"File name:",l_FileUploadNoFileSpecified:"Please choose a file.",l_AppHeader_Label:"Header",l_NewAddInLoadedContent:"{0} loaded successfully. Get started.",l_NewAddInLoadedTitle:"Get started with {0}",l_LoadingAddInsContent:"We're loading your add-ins. We'll let you know when they\u2019re ready.",l_LoadingAddInsTitle:"Loading Add-ins",l_ErrorLoadingAddInsContentOuterString:"One or more add-ins didn\u2019t load. Choose {0} to retry.",l_ErrorLoadingAddInsContentInnerString:"{0} > {1} > {2}",l_InsertionDialogRefresh:"Refresh",l_ErrorLoadingAddInsTitle:"Error loading add-ins",l_TellMeFindTitleWord:"Find in document",l_TellMeFindTitleExcel:"Find in worksheet",l_SkypeTooltip:"{skype}",l_NotificationAnswer:"Answer",l_NotificationAnswerWithIM:"Answer with IM",l_NotificationChatRequest:"Chat request",l_NotificationIgnore:"Ignore",l_NotificationIncomingCall:"Incoming call",l_NotificationIncomingVideo:"Incoming video",l_NotificationRespond:"Respond",l_ChatWithOthersHelpLink:"Learn more",l_ChatWithOthersMessage:"Use Skype to chat with everyone who is working on the document right now.",l_ChatWithOthersTitle:"Chat with others",l_TellMeAppsForOfficeFlyoutAnchorTitle:"Get Add-ins ({0} matches)",l_TellMeAppsForOfficeMenuSectionTitle:"Add-ins",l_TellMeAppsForOfficeInsertAppHint:"Insert {0} Add-in",l_ActivityGroupViewElementFontFamily:"'Segoe UI',Arial,Verdana,sans-serif",l_ActivityGroupViewTimeElementFontSize:"11pt",l_ActivityGroupViewActivityViewElementsFontSize:"11pt",l_ActivityGroupViewDescriptionElementFontSize:"12pt",l_InternalError:"Sorry, something went wrong.",l_InternalError_Directive:"Could you please try that again?",l_CrashDialogTitle:"Something went wrong",l_CrashDialogMessage:"Sorry, we ran into a problem. Please try refreshing the page.",l_AddinManifestInvalid_Message:"Your add-in manifest is not valid.",l_WildFireWordBizBarAndroidCallToAction:"Discover Word designed for Android.",l_WildFireWordBizBarHeadline:"Get the Word app",l_WildFireBizBarInstallButtonText:"Install",l_WildFireWordBizBarIPadCallToAction:"Discover Word designed for the iPad.",l_WildFireBizBarOpenAppButtonText:"Open",l_WildFireBizBarUseAppButtonText:"Use App",l_WildFirePPTBizBarAndroidCallToAction:"Discover PowerPoint designed for Android.",l_WildFirePPTBizBarHeadline:"Get the PowerPoint app",l_WildFirePPTBizBarIPadCallToAction:"Discover PowerPoint designed for the iPad.",l_WildFireExcelBizBarAndroidCallToAction:"Discover Excel designed for Android.",l_WildFireExcelBizBarHeadline:"Get the Excel app",l_WildFireExcelBizBarIPadCallToAction:"Discover Excel designed for the iPad.",l_Assign:"Manage Assignment",l_Ctrl:"Ctrl",l_Submit:"Turn In",l_TabHomeKeytip:"H",l_TabInsertKeytip:"N",l_TabWordDesignKeytip:"G",l_TabPageLayoutKeytip:"P",l_TabReferencesKeytip:"S",l_TabMailingsKeytip:"M",l_TabReviewKeytip:"R",l_TabViewKeytip:"W",l_TabDeveloperKeytip:"L",l_TabAddInsKeytip:"X",l_TabFormatPictureKeytip:"JP",l_TabDesignKeytip:"JT",l_TabLayoutKeytip:"JL",l_TabHelpKeytip:"E",l_InfoKeytip:"I",l_NewKeytip:"N",l_OpenKeytip:"O",l_SaveAsKeytip:"A",l_PrintKeytip:"P",l_ShareKeytip:"H",l_AboutKeytip:"D",l_HelpKeytip:"H",l_AccessibilityHelpKeytip:"A",l_ContactSupportKeytip:"C",l_TrainingKeytip:"S",l_WhatsNewKeytip:"W",l_ExitKeytip:"X",l_UndoKeytip:"Z",l_RedoKeytip:"O",l_PasteKeytip:"V",l_CopyKeytip:"C",l_CutKeytip:"X",l_FormatPainterKeytip:"FP",l_FontNameKeytip:"FF",l_FontSizeKeytip:"FS",l_GrowFontSizeKeytip:"FG",l_ShrinkFontSizeKeytip:"FK",l_ClearFormattingKeytip:"E",l_MenuFontColorKeytip:"FC",l_MenuHighlightColorKeytip:"I",l_BoldKeytip:"1",l_ItalicKeytip:"2",l_UnderlineKeytip:"3",l_StrikethroughKeytip:"4",l_SuperscriptKeytip:"6",l_SubscriptKeytip:"5",l_GroupParagraphKeytip:"PG",l_MenuBulletsKeytip:"U",l_MenuNumberingKeytip:"N",l_MenuMultilevelListKeytip:"M",l_DecreaseIndentKeytip:"AO",l_IncreaseIndentKeytip:"AI",l_TextDirLTRKeytip:"9",l_TextDirRTLKeytip:"0",l_AlignTextLeftKeytip:"AL",l_JustifyCenterKeytip:"AC",l_AlignTextRightKeytip:"AR",l_FullJustifyKeytip:"AJ",l_LineSpacingKeytip:"K",l_SpecialIndentTooltipKeytip:"SI",l_GroupStylesKeytip:"FY",l_MenuMoreStylesKeytip:"L",l_ApplyStylesCommandKeytip:"A",l_ClearFormattingStylesKeytip:"C",l_NextSpellingErrorKeytip:"S",l_FindKeytip:"FD",l_ReplaceKeytip:"R",l_EditInWordKeytip:"T",l_ProtectDocumentKeytip:"D",l_ProtectDocumentToolTip:"{webappshort} has temporarily disabled this feature because there is more than one person editing the file.",l_PreviousVersionsKeytip:"P",l_WheresTheSaveButtonKeytip:"W",l_RenameButtonTitleKeytip:"R",l_DownloadACopyKeytip:"C",l_DownloadAsPDFKeytip:"P",l_DownloadAsImagesKeytip:"I",l_DownloadAsODTKeytip:"T",l_PrintToPdfKeytip:"R",l_DirectPrintJewelButtonKeytip:"P",l_ShareWithPeopleKeytip:"S",l_EmbedKeytip:"E",l_ReplyWithChangesKeytip:"R",l_TryOfficeKeytip:"M",l_TryMacOfficeKeytip:"O",l_TermsOfUseKeytip:"T",l_PrivacyKeytip:"P",l_HelpButtonTitleKeytip:"H",l_GiveFeedbackKeytip:"K",l_ReportAbuseKeytip:"R",l_PasteTextOnlyKeytip:"T",l_NoHighlightKeytip:"N",l_BulletStyle1Keytip:"S",l_BulletStyle2Keytip:"H",l_BulletStyle3Keytip:"B",l_SpecialIndentNoneKeytip:"N",l_SpecialIndentFirstLineKeytip:"F",l_SpecialIndentHangingKeytip:"H",l_SetLanguageMenuKeytip:"L",l_TabDrawKeytip:"D",l_TabAudioKeytip:"JA",l_NoteTagsKeytip:"T",l_EditInOneNoteKeytip:"T",l_CopyNotebookKeytip:"C",l_AutomaticKeytip:"A",l_NoteTagRemoveKeytip:"G",l_HideSpellingErrorsKeytip:"H",l_HomeKeytip:"H",l_InsertKeytip:"N",l_DesignKeytip:"JT",l_TransitionTabKeytip:"K",l_TransitionMorphObjectsKeytip:"O",l_TransitionMorphWordsKeytip:"W",l_TransitionMorphCharactersKeytip:"C",l_TransitionCutNoneKeytip:"N",l_TransitionCutThroughBlackKeytip:"B",l_TransitionFadeSmoothlyKeytip:"S",l_TransitionFadeThroughBlackKeytip:"B",l_TransitionPushFromBottomKeytip:"B",l_TransitionPushFromLeftKeytip:"L",l_TransitionPushFromRightKeytip:"R",l_TransitionPushFromTopKeytip:"T",l_TransitionWipeFromRightKeytip:"R",l_TransitionWipeFromTopKeytip:"T",l_TransitionWipeFromLeftKeytip:"L",l_TransitionWipeFromBottomKeytip:"B",l_TransitionWipeFromTopRightKeytip:"I",l_TransitionWipeFromBottomRightKeytip:"G",l_TransitionWipeFromTopLeftKeytip:"E",l_TransitionWipeFromBottomLeftKeytip:"F",l_TransitionSplitVerticalOutKeytip:"E",l_TransitionSplitHorizontalInKeytip:"H",l_TransitionSplitHorizontalOutKeytip:"O",l_TransitionSplitVerticalInKeytip:"V",l_TransitionRandomBarsVerticalKeytip:"V",l_TransitionRandomBarsHorizontalKeytip:"H",l_TransitionShapeCircleKeytip:"C",l_TransitionShapeDiamondKeytip:"D",l_TransitionShapePlusKeytip:"P",l_TransitionShapeInKeytip:"I",l_TransitionShapeOutKeytip:"O",l_TransitionFlipRightKeytip:"R",l_TransitionFlipLeftKeytip:"L",l_TransitionCubeFromRightKeytip:"R",l_TransitionCubeFromBottomKeytip:"B",l_TransitionCubeFromLeftKeytip:"L",l_TransitionCubeFromTopKeytip:"T",l_AnimationTabKeytip:"A",l_AnimationAsOneObjectKeytip:"N",l_AnimationAllAtOnceKeytip:"A",l_AnimationOneByOneKeytip:"Y",l_AnimationFromBottomKeytip:"B",l_AnimationFromBottomLeftKeytip:"E",l_AnimationFromLeftKeytip:"L",l_AnimationFromTopLeftKeytip:"F",l_AnimationFromTopKeytip:"T",l_AnimationFromTopRightKeytip:"P",l_AnimationFromRightKeytip:"R",l_AnimationFromBottomRightKeytip:"I",l_AnimationHorizontalInKeytip:"H",l_AnimationHorizontalOutKeytip:"Z",l_AnimationVerticalInKeytip:"V",l_AnimationVerticalOutKeytip:"E",l_AnimationHorizontalKeytip:"Z",l_AnimationVerticalKeytip:"V",l_AnimationObjectCenterKeytip:"B",l_AnimationSlideCenterKeytip:"L",l_AnimationInKeytip:"I",l_AnimationInFromScreenCenterKeytip:"C",l_AnimationInSlightlyKeytip:"G",l_AnimationOutKeytip:"U",l_AnimationOutFromScreenBottomKeytip:"B",l_AnimationOutSlightlyKeytip:"S",l_AnimationAcrossKeytip:"C",l_AnimationUpKeytip:"U",l_AnimationDownKeytip:"D",l_AnimationLeftDownKeytip:"L",l_AnimationLeftUpKeytip:"E",l_AnimationRightDownKeytip:"R",l_AnimationRightUpKeytip:"I",l_AnimationClockWiseKeytip:"C",l_AnimationCounterClockWiseKeytip:"U",l_AnimationQuarterSpinKeytip:"Q",l_AnimationHalfSpinKeytip:"H",l_AnimationFullSpinKeytip:"F",l_AnimationTwoSpinKeytip:"T",l_AnimationBothKeytip:"B",l_AnimationTinyKeytip:"T",l_AnimationSmallerKeytip:"S",l_AnimationLargerKeytip:"L",l_AnimationHugeKeytip:"E",l_Animation25PerKeytip:"2",l_Animation50PerKeytip:"5",l_Animation75PerKeytip:"7",l_Animation100PerKeytip:"1",l_AnimationOutToScreenCenterKeytip:"C",l_AnimationInToScreenBottomKeytip:"B",l_SlideShowTabKeytip:"S",l_ReviewTabKeytip:"R",l_ViewKeytip:"W",l_DeveloperTabKeytip:"L",l_AddInsTabKeytip:"X",l_FormatKeytip:"JP",l_AboutOfficeKeytip:"D",l_DeleteKeytip:"DD",l_PPTDeleteKeytip:"D",l_SlideLayoutRibbonButtonKeytip:"L",l_DuplicateSlideKeytip:"P",l_DecreaseFontSizeKeytip:"FK",l_IncreaseFontSizeKeytip:"FG",l_FontColorKeytip:"FC",l_BulletListKeytip:"U",l_NumberedListKeytip:"N",l_AlignTextKeytip:"AT",l_JustifyLeftKeytip:"AL",l_JustifyRightKeytip:"AR",l_LeftToRightKeytip:"AF",l_RightToLeftKeytip:"AG",l_TextBoxKeytip:"X",l_ShapesKeytip:"SH",l_ApplyShapeStyleKeytip:"T",l_ApplyShapeFillKeytip:"SF",l_ApplyShapeOutlineKeytip:"SO",l_TableKeytip:"T",l_InsertTableDialogKeytip:"I",l_LocalImagesKeytip:"P",l_OnlineImagesKeytip:"C",l_OnlinePictureKeytip:"F",l_OneNoteOnlinePictureKeytip:"L",l_OnlinePictureFromHostKeytip:"G",l_OnlinePictureFromBingKeytip:"F",l_OnlinePictureFromM365Keytip:"M",l_SmartArtKeytip:"M",l_SmartArtRightToLeftKeytip:"R",l_ButtonOfficeAddinsKeytip:"A",l_OneNoteButtonOfficeAddinsKeytip:"I",l_PPTButtonOfficeAddinsKeytip:"AP",l_HyperlinkKeytip:"I",l_OneNoteHyperlinkKeytip:"H",l_InsertCommentKeytip:"L",l_InsertIconTitle:"Insert Icon",l_InsertIconKeytip:"Y1",l_SymbolSingleKeytip:"U",l_InsertMoreSymbolsKeytip:"M",l_EmojiSingleKeytip:"EM",l_InsertMoreEmojisKeytip:"M",l_OnlineVideoKeytip:"J",l_MoreThemesKeytip:"H",l_MoreVariantsKeytip:"V",l_SetSlideSizeKeytip:"S",l_FormatBackgroundKeytip:"F",l_MoreStylesKeytip:"S",l_TransitionEffectOptionsKeytip:"O",l_TransitionApplyAllKeytip:"L",l_TransitionDurationLabelKeytip:"E",l_EffectOptionsKeytip:"O",l_ReorderEarlierKeytip:"E",l_ReorderLaterKeytip:"L",l_AccCheckKeytip:"C",l_EditViewKeytip:"E",l_ReadKeytip:"R",l_NotesKeytip:"PN",l_ShowHideCommentsEditKeytip:"K",l_ZoomKeytip:"Q",l_ZoomTo100Keytip:"J",l_ZoomToFitKeytip:"F",l_BringForwardKeytip:"AF",l_PPTBringForwardKeytip:"F",l_SendBackwardKeytip:"AE",l_PPTSendBackwardKeytip:"B",l_RotateShapeKeytip:"AY",l_ShapeAltTextKeytip:"X",l_EditTextKeytip:"X",l_PromoteKeytip:"P",l_DemoteKeytip:"D",l_MoreLayoutsKeytip:"L",l_ChangeColorsKeytip:"C",l_ResetGraphicKeytip:"E",l_ChangePictureKeytip:"G",l_ResetPictureKeytip:"QR",l_PPTResetPictureKeytip:"Q",l_CropPictureKeytip:"VC",l_EditInPowerPointKeytip:"T",l_FileVersionKeytip:"P",l_DownloadCopyKeytip:"C",l_DownloadAsOdpKeytip:"D",l_TopKeytip:"T",l_MiddleKeytip:"M",l_BottomKeytip:"B",l_BringToFrontKeytip:"R",l_SendToBackKeytip:"K",l_GroupObjectsKeytip:"G",l_UngroupKeytip:"U",l_FlipVerticalKeytip:"V",l_FlipHorizontalKeytip:"H",l_SetSlideSize4x3Keytip:"S",l_SetSlideSize16x9Keytip:"W",l_CustomSlideSizeKeytip:"C",l_SolidFillKeytip:"S",l_FormatBackgroundPictureKeytip:"P",l_ApplyAllKeytip:"A",l_ShowHideCommentPaneEditKeytip:"P",l_ShowHideMarkupKeytip:"TM",l_TableStyleOptionFirstRowKeytip:"A",l_TableStyleOptionHeaderRowKeytip:"O",l_TableStyleOptionFirstColumnKeytip:"M",l_TableStyleOptionLastRowKeytip:"T",l_TableStyleOptionTotalRowKeytip:"J",l_TableStyleOptionLastColumnKeytip:"N",l_TableStyleOptionBandedRowKeytip:"R",l_TableStyleOptionBandedColumnKeytip:"U",l_MenuShadingColorKeytip:"H",l_OneNoteMenuShadingColorKeytip:"G",l_SelectKeytip:"K",l_PPTSelectKeytip:"Q",l_InsertAboveKeytip:"A",l_PPTMergeTableCellsKeytip:"M",l_PPTSplitTableCellsKeytip:"P",l_OneNoteInsertAboveKeytip:"V",l_PPTInsertAboveKeytip:"V",l_InsertBelowKeytip:"BE",l_OneNoteInsertBelowKeytip:"E",l_PPTInsertBelowKeytip:"E",l_InsertLeftKeytip:"L",l_InsertRightKeytip:"R",l_OneNoteInsertRightKeytip:"I",l_PPTInsertRightKeytip:"I",l_AnchorTopKeytip:"O",l_AnchorMiddleKeytip:"C",l_AnchorBottomKeytip:"B",l_SelectTableKeytip:"KT",l_OneNoteSelectTableKeytip:"S",l_PPTSelectTableKeytip:"T",l_SelectColumnKeytip:"KC",l_OneNoteSelectColumnKeytip:"M",l_PPTSelectColumnKeytip:"C",l_SelectRowKeytip:"KR",l_OneNoteSelectRowKeytip:"O",l_PPTSelectRowKeytip:"R",l_DeleteColumnKeytip:"DC",l_OneNoteDeleteColumnKeytip:"U",l_PPTDeleteColumnKeytip:"C",l_DeleteRowKeytip:"DR",l_OneNoteDeleteRowKeytip:"W",l_PPTDeleteRowKeytip:"R",l_DeleteTableKeytip:"DT",l_OneNoteDeleteTableKeytip:"D",l_PPTDeleteTableKeytip:"T",l_RecordKeytip:"A",l_StopKeytip:"S",l_PlayKeytip:"P",l_PauseKeytip:"U",l_Back15SecondsKeytip:"B",l_Forward15SecondsKeytip:"F",l_NewPageKeytip:"N",l_NewSectionKeytip:"S",l_PictureKeytip:"P",l_CameraKeytip:"W",l_ClipArtKeytip:"C",l_FilePrintoutKeytip:"O",l_FileAttachmentKeytip:"F",l_ButtonUploadAddinsKeytip:"L",l_RecordAudioKeytip:"A",l_AltTextKeytip:"E",l_GroupImageSizeKeytip:"O",l_GrowKeytip:"G",l_ShrinkKeytip:"R",l_PictureScaleTooltipKeytip:"S",l_CropKeytip:"V",l_SelectCellKeytip:"KL",l_OneNoteSelectCellKeytip:"C",l_HideBordersKeytip:"H",l_AlignLeftKeytip:"AL",l_AlignRightKeytip:"AR",l_ReadViewKeytip:"F",l_ShowAuthorsKeytip:"S",l_BrowseVersionsKeytip:"V",l_DeletedNotesKeytip:"D",l_PageColorKeytip:"PC",l_NoPageColorKeytip:"N",l_RibbonInsertPageBreakKeytip:"B",l_CommentKeytip:"L",l_BtnHeaderFooterKeytip:"H",l_PageNumbersKeytip:"NU",l_IncludePageCountKeytip:"I",l_RemovePageNumbersKeytip:"R",l_FootnoteKeytip:"RF",l_EndnoteKeytip:"RE",l_ShowFootnotesKeytip:"SF",l_ShowEndnotesKeytip:"SE",l_PageMarginsKeytip:"M",l_PageOrientationKeytip:"O",l_PageSizeKeytip:"SZ",l_SpinnerIndentAfterLtrKeytip:"IR",l_SpinnerIndentBeforeLtrKeytip:"IL",l_SpinnerSpacingAfterKeytip:"SA",l_SpinnerSpacingBeforeKeytip:"SB",l_PageCustomMarginsKeytip:"A",l_PageCustomSizesKeytip:"A",l_QuickStylesKeytip:"K",l_InsightsMenuKeytip:"L",l_NewCommentKeytip:"C1",l_DeleteCommentKeytip:"D",l_PreviousCommentKeytip:"V",l_NextCommentKeytip:"N",l_OpenCommentPaneKeytip:"K",l_ShowActivityKeytip:"AA",l_ResumeAssistantAsResumeKeytip:"R2",l_ResumeAssistantAsCVKeytip:"C2",l_ClearTableFormattingKeytip:"C",l_MenuTableThemeKeytip:"BC",l_JustifyTopLeftKeytip:"TL",l_JustifyTopCenterKeytip:"TC",l_JustifyTopRightKeytip:"TR",l_JustifyMiddleLeftKeytip:"CL",l_JustifyMiddleCenterKeytip:"CC",l_JustifyMiddleRightKeytip:"CR",l_JustifyBottomLeftKeytip:"BL",l_JustifyBottomCenterKeytip:"BC",l_JustifyBottomRightKeytip:"BR",l_TogglePageEndsKeytip:"ZE",l_NavigationPaneButtonTextKeytip:"K",l_EndnotesKeytip:"SE",l_ShowHideDesignerPaneKeytip:"D",l_ShowHideIdeasPaneKeytip:"E",l_ShowSmartLookupPaneKeytip:"SL",l_RemoveShapeFillKeytip:"N",l_RemoveShapeOutlineKeytip:"N",l_PictureWidthTooltipKeytip:"W",l_PictureHeightTooltipKeytip:"H",l_WrapTextKeytip:"TW",l_WrapTextInLineKeytip:"I",l_WrapTextSquareLeftKeytip:"SL",l_WrapTextSquareRightKeytip:"SR",l_WrapTextBehindTextKeytip:"D",l_WrapTextInFrontOfTextKeytip:"N",l_OpenAccessibilityCheckerPaneKeytip:"Q",l_LockAspectRatioKeytip:"X",l_LookupAltTextKeytip:"Q",l_MenuAlignmentKeytip:"P",l_JewelTextKeytip:"F",l_GroupPageLayoutParagraphKeytip:"PG",l_PPTApplyShapeOutlineDashStyleKeytip:"S",l_ApplyShapeOutlineEndStyleKeytip:"R",l_ApplyShapeOutlineWidthKeytip:"W",l_OpenInClientKeytip:"O",l_PPTDesignKeytip:"G",l_TabDrawingFormatKeytip:"JD",l_TabSmartArtDesignKeytip:"JS",l_DupSlideKeytip:"PS",l_HideSlideKeytip:"HS",l_PPTLeftToRightKeytip:"TL",l_PPTRightToLeftKeytip:"TR",l_PPTHomeFlipVerticalKeytip:"OV",l_PPTHomeFlipHorizontalKeytip:"OH",l_PPTFlipVerticalKeytip:"V",l_PPTFlipHorizontalKeytip:"H",l_PPTApplyShapeStyleKeytip:"SS",l_DuplicateKeytip:"PA",l_NewSlideKeytip:"SI",l_PPTNewSlideKeytip:"I",l_PPTOnlineVideoKeytip:"VO",l_PPTSolidFillKeytip:"F",l_PPTApplyAllKeytip:"L",l_PPTEditViewKeytip:"L",l_PPTReadKeytip:"D",l_SlideShowKeytip:"SS",l_PPTShowHideCommentsEditKeytip:"SP",l_PPTShowHideCommentsPaneKeytip:"P",l_PPTShowHideMarkupKeytip:"M",l_TableWidthKeytip:"TW",l_TableHeightKeytip:"TH",l_PPTMoreStylesKeytip:"A",l_PPTTransitionMoreStylesKeytip:"T",l_PPTAnimationMoreStylesKeytip:"S",l_PPTPictureToolMoreStylesKeytip:"K",l_PPTMoreSmartArtStylesKeytip:"S",l_PPTHyperlinkKeytip:"I",l_PPTInsertCommentKeytip:"L2",l_PPTShapeAltTextKeytip:"AT",l_PictureCropHeightKeytip:"VH",l_PictureCropWidthKeytip:"VW",l_PictureCropLeftKeytip:"VL",l_PictureCropTopKeytip:"VT",l_AddInKeytip:"Y",l_GeneralAddInMessageDialogTitle:"Message from Add-in",l_ShowDialogApiInlineDialogTitle:"Message from Add-in: {0}",L_TextForOfficeOnlineInGallatin:"Operated by 21Vianet in Accordance with Chinese Law",l_NotificationUITitle:"Notification",l_OnlinePictureFromHostGeneric:"Pictures from Host",l_HostGeneric:"Host",l_OnlinePictureFromHostUnsupportedFiles:"Sorry, we don't support {0} files. We can only insert .jpg, .jpeg, .png, .gif, .bmp, .tif and .tiff files.",l_ImmersiveReaderKeytip:"I",L_VideoInsertTitle:"Insert Video",L_PictureInsertTitle:"Insert Online Picture",l_RotateRight90Keytip:"R",l_RotateLeft90Keytip:"L",l_RotateMoreOptionsKeytip:"M",l_CommentDeepLinkingCommentNotExists:"This comment has been deleted.",l_EmailFieldHelpText:"Email address (optional)",l_CropMoreOptionsKeytip:"M",l_PPTSlideShowFromBeginningKeytip:"B",l_PPTSlideShowFromCurrentKeytip:"C",l_RequestConsentDialogTitle:"Permission needed",l_SpbWordCountKeytip:"W",l_WordCountMenuItemKeytip:"W",l_WordCountToggleKeytip:"C",l_EnterMathEducationModeKeytip:"M",l_EnterMathEducationSwitchKeytip:"T",l_CreateNewStyleCommandKeytip:"S",l_AutoCorrectOptionsKeytip:"A",l_GrammarSettingsKeytip:"R",l_GalleryRowAccessibleLabelFormat:"Row {0}",l_RibbonGroup:"Ribbon",l_SingleLineRibbon:"Single Line Ribbon",l_SingleLineRibbonKeyTip:"R",l_GoToClassicRibbonDialogMesage:"We'll need to refresh the page to bring back the Classic Ribbon. Your work will be saved.",l_ToggleRibbonUXDialogTitle:"Switch Ribbon",l_ToggleRibbonUXDialogTellUsWhy:"Tell us why you're switching to the Classic Ribbon.",l_GoToSingleLineRibbonDialogMessage:"We'll need to refresh the page to bring back the Single Line Ribbon. Your work will be saved.",l_CatchUpChangeNotificationMessage:"While you were away...",l_CatchUpChangeNotificationNew:"New!",l_CatchUpChangeNotificationText:"Changes were made.",l_CatchUpChangeNotificationTextOneName:"Changes were made by {0}.",l_CatchUpChangeNotificationTextTwoNames:"Changes were made by {0} and {1}.",l_CatchUpChangeNotificationTextThreeNames:"Changes were made by {0}, {1}, and {2}.",l_CatchUpChangeNotificationTextFourNames:"Changes were made by {0}, {1}, {2}, and {3}.",l_CatchUpChangeNotificationTextMoreNames:"Changes were made by {0}, {1}, {2}, and others.",l_CatchUpChangeNotificationButtonLabel:"Go to recent changes",l_WAC_NPS_PromptQuestion:"We have just two questions for you.",l_WAC_NPS_RatingQuestion:"Would you recommend {webappshort} to others, if asked?",l_WAC_NPS_RatingQuestion_Word:"How likely are you to recommend the web version of Word to others, if asked?",l_WAC_NPS_RatingQuestion_OneNote:"How likely are you to recommend the web version of OneNote to others, if asked?",l_WAC_NPS_RatingQuestion_PowerPoint:"How likely are you to recommend the web version of PowerPoint to others, if asked?",l_WAC_NPS_RatingQuestion_Excel:"How likely are you to recommend the web version of Excel to others, if asked?",l_WAC_NPS_RatingQuestion_Visio:"How likely are you to recommend the web version of Visio to others, if asked?",l_WAC_NPS_Rating_QuestionQuestion:"Please tell us more. Why did you choose that answer?",l_WAC_NPS_Rating_Values_1:"1 - Not at all likely",l_WAC_NPS_Rating_Values_2:"2",l_WAC_NPS_Rating_Values_3:"3",l_WAC_NPS_Rating_Values_4:"4",l_WAC_NPS_Rating_Values_5:"5 - Extremely likely",l_WAC_NPS_Title:"We'd love your feedback!",l_WAC_AtMentionFS_PromptTitle:"You were @mentioned in a comment for collaboration",l_WAC_AtMentionFS_PromptQuestion:"Click here to provide feedback.  We have just one question.",l_WAC_AtMentionFS_RatingQuestion:"Overall how do you feel while using @mention to collaborate?",l_WAC_GenericSurvey_SureLabel:"Sure",l_WAC_GenericSurvey_NoLabel:"Not now",l_WAC_GenericSurvey_RaitingValue_ExtremelyNegative:"Extremely negative",l_WAC_GenericSurvey_RaitingValue_SomewhatNegative:"Somewhat negative",l_WAC_GenericSurvey_RaitingValue_NeitherNegativeNorPositive:"Neither negative nor positive",l_WAC_GenericSurvey_RaitingValue_SomewhatPositive:"Somewhat positive",l_WAC_GenericSurvey_RaitingValue_ExtremelyPositive:"Extremely positive",l_WAC_GenericSurvey_WhyQuestion:"Tell us more about why you chose this rating?",l_OneNote_Search_FPS_Title:"We'd love your feedback about search!",l_OneNote_Search_FPS_PromptQuestion:"We have two questions for you.",l_OneNote_Search_FPS_RatingQuestion:"How satisfied are you with search?",l_OneNote_Search_FPS_WhyQuestion:"Please tell us why you chose that answer.",l_OneNote_Search_FPS_Rating_Values_1:"1 - Not satisfied",l_OneNote_Search_FPS_Rating_Values_2:"2",l_OneNote_Search_FPS_Rating_Values_3:"3",l_OneNote_Search_FPS_Rating_Values_4:"4",l_OneNote_Search_FPS_Rating_Values_5:"5 - Very satisfied",l_THSarabunPSK:"TH SarabunPSK",l_GrammarSettingsDialogTitle:"Editor Settings",l_GrammarSettingsDialogLanguages:"Languages:",l_ResetAll:"Reset All",l_AcronymsKeytip:"AC",l_ShareAndNotifyDialogTitle:"Share and Notify",l_ShareAndNotifyDialogText:"Some users you have mentioned may not have access to the document. Please share to let them edit and see your comment.",l_BookmarkCalloutLabel:"Click {0} to bookmark this {doctype}",l_BookmarkCalloutAriaLabel:"Press Control D to bookmark this {doctype}",l_InsertTableOfContentsKeytip:"I",l_UpdateTableOfContentsKeytip:"U",l_RemoveTableOfContentsKeytip:"RT",l_ToggleRibbonText:"Simplified Ribbon",l_FontsOnDemandTooltip:"{0}, select to download",l_OICDialogSectionGiveFeedback:"Tell us what you think of {webappshort}",l_ThirdPartyAddinDisabledTitle:"Office Add-ins are offline",l_ThirdPartyAddinDisabledMessage:"Office Add-ins have been disabled. To continue, download and open the file on your desktop, or try again later.",l_EnrichmentPaneTitle:"Data Selector",l_ThirdPartyNotices:"Third-Party Notices",l_ThirdPartyNoticesDescription:"Read the Third-Party Notices for {webappshort}.",l_ThirdPartyNoticesKeytip:"N",l_TrustCenter:"Privacy Settings",l_TrustCenterDescription:"Manage your privacy settings.",l_TrustCenterKeytip:"S",l_PrivacySettingsDialogTitle:"Privacy Settings",l_PrivacySettingsDialogHeader:"Your data, controlled by you",l_PrivacySettingsDialogSubHeader:"Office privacy settings give you control over your experience and data.",l_PrivacyDialogLearnMore:"Learn more",l_PrivacySettingsDialogMessage:"Some privacy options are managed by your organization's admin. There are optional connected experiences you can control because your admin has given you this option.",l_PrivacySettingsDialogAdminDisabled:"Your organization's admin manages your privacy settings and has decided to disable optional connected experiences.",l_PrivacySettingsDialogExperiencesTitle:"Optional connected experiences",l_PrivacySettingsDialogExperiencesMessage:"Office has helpful features that are powered by cloud-backed services. Your admin has given you the option to control some features including Smart Lookup, Insert Online Picture, and more. Most connected experiences are managed by your admin.",l_PrivacySettingsDialogCheckboxText:"Enable optional connected experiences",l_PrivacySettingsDialogWarning:"By turning this off, some experiences will no longer be available to you.",l_PrivacySettingsDialogMicrosoftPrivacyStatement:"Microsoft Privacy Statement",l_PrivacySettingsDialogMicrosoftLogoAltText:"Microsoft logo",l_PrivacyNoticeDialogTitle:"Your privacy option",l_PrivacyNoticeDialogMessageText:"Thanks for using Office! We\u2019ve made some updates to the privacy settings to give you more control.",l_PrivacyNoticeDialogMessageSubText:"Your organization\u2019s admin allows you to use several cloud-backed services. You get to decide whether you use these services.",l_PrivacyNoticeDialogSettingsLocation:"To adjust these privacy settings, go to:",l_PrivacyNoticeDialogSettingsLink:"Office on the web Privacy Settings",l_PrivacyNoticeDialogServicesAgreementText:"These optional cloud-backed services are provided to you under the Microsoft Services Agreement",l_PrivacyNoticeDialogServiesAgreementLink:"Microsoft Services Agreement",l_RefreshRequiredDialogTitle:"Refresh required",l_RefreshRequiredDialogText:"Refresh your browser tab to apply changes to your privacy settings. If you have Office for the web open in more than one tab you\u2019ll need to refresh each of those tabs to apply these changes.",l_RefreshRequiredDialogAnonymousText:"Since you\u2019re not signed in with a Microsoft account, we save your privacy settings in a browser cookie. If your browser prevents us from saving cookies, we will not be able to remember your settings for the next time you use Office on the Web.",l_RefreshRequiredDialogLinkText:"Why do I need to refresh?",l_RefreshRequiredDialogRefreshButton:"Refresh",l_RefreshRequiredDialogNotNowButton:"Not now",l_AnonymousBusBarPrivacyNotice:"Thanks for using Office! We\u2019ve made some updates to the privacy settings to give you more control. Your organization\u2019s admin allows you to use several cloud-backed services. You get to decide whether you use these services. To adjust these privacy settings, go to the Office on the web Privacy Settings. These optional cloud-backed services are provided to you under the Microsoft Services Agreement.",l_RoamedSettingsBusBarPrivacyNotice:"Your account\u2019s privacy settings are being applied. To adjust your settings, go to the Office on the web Privacy Settings. ",l_FreemiumUpsell:"Go Premium",l_PremiumBadge:"Premium",l_AttributionText:"{L_ThePhoto} by {L_PhotoAuthor} is licensed under {L_CCYYSA}.",l_ThePhoto:"This Photo",l_PhotoAuthor:"Unknown author",l_CCYYSA:"CC-YY-SA",l_TabGraphicsFormatKeytip:"JG",l_PPTApplyGraphicsStyleKeytip:"GS",l_ApplyGraphicsFillKeytip:"GF",l_ApplyGraphicsOutlineKeytip:"GO",l_StartGroupChat:"Start Group Chat",l_PeoplesWellStateUserIsJoining:"{0} is here",l_CheckSupportedBrowsers:"Check supported browsers",l_WaitForTranslation:"Translating, please wait...",l_WaitForLongTranslation:"This translation will take several seconds, please wait...",l_TranslationServiceUnavailable:"Sorry, the {doctype} can't be translated at this time because we're having trouble talking to the service. Please try again in a few minutes.",l_DocumentCannotBeTranslated:"Sorry, this {doctype} contains text that can't be translated.",l_DocumentCannotBeTranslatedOCX:"Sorry, this {doctype} can't be translated because it contains ActiveX controls.",l_GenericTranslationError:"Sorry, {webappshort} ran into a problem translating this {doctype}.",l_DocumentCannotBeTranslatedLength:"Sorry, this {doctype} is too long to be translated.",l_EnableCookiesDialogTitle:"Enable Third-Party Cookies",l_EnableCookiesDialogDescription:"To save your preferences we need to store a third-party cookie. Please enable third-party cookies for this page.",l_ReadingTimeToggleKeytip:"T",L_Sensitivity:"Sensitivity",L_SensitivityRibbonLabel:"Sensitivity",L_SensitivityKeytip:"SY",L_SensitivityTooltip:"Sensitivity",L_LearnMoreTooltip:"Learn how your organization uses these sensitivity labels.",l_SmartLookupPaneTitle:"Search",l_InstallingCustomFunctionsErrorStatusBarMsg:"Error installing functions",l_InstallingCustomFunctionsErrorCalloutMsg:"One or more add-ins failed to install or load custom functions.",l_SensitivityApplicationErrorBusinessBarMessage:"Please try again later.",l_SensitivityApplicationErrorBusinessBarTitle:"We couldn't apply your label at this time.",l_SensitivityQuickApplicationErrorMessage:"This document's sensitivity is currently updating. Please try again in a moment.",l_SensitivityCoauthApplicationErrorMessage:"You can't apply this label to a document while others are editing it.",l_SensitivityApplicationDialogErrorTitle:"Problem with Sensitivity",L_ZoomInTooltip:"Zoom In",L_ZoomOutTooltip:"Zoom Out",l_SensitivityJustificationTitle:"Justification Required",l_SensitivityJustificationMessage:"Your organization requires justification to change this label.",l_SensitivityJustificationNoLongerApplies:"Previous label no longer applies",l_SensitivityJustificationIncorrect:"Previous label was incorrect",l_SensitivityJustificationOther:"Other (explain)",l_SensitivityJustificationPlaceholder:"Explain why you're changing this label.",l_SensitivitySaveDocumentError:"Sorry, we don't yet support saving a copy of a file that's protected with a sensitivity label.",l_SensitivityDownloadDocumentError:"Sorry, we don't yet support downloading a file that's protected with a sensitivity label.",l_Excel_NSV_Prompt:"We'd love your feedback on Excel sheet views.",l_Excel_NSV_Overview_Question:"We noticed you created a sheet view. Please rate your experience using it.",l_Excel_Rating_1_Satisfied:"1 - Extremely dissatisfied",l_Excel_Rating_2_Satisfied:"2 - Somewhat dissatisfied",l_Excel_Rating_3_Satisfied:"3 - Neither satisfied nor dissatisfied",l_Excel_Rating_4_Satisfied:"4 - Somewhat satisfied",l_Excel_Rating_5_Satisfied:"5 - Extremely satisfied",l_Excel_NSV_Timed_Feedback_Freeform_Question:"Tell us more about your experience using sheet views.",l_Title_For_NSV_Floodgate_Prompt:"Tell us more about your experience using sheet views.",l_NSV_Didnt_Create_NSV_Survey_Question:"You recently sorted or filtered, and chose to show it to everyone in the file. Can you tell us why you did that?",l_NSV_Didnt_Create_NSV_Option_4:"I wanted everyone to see it.",l_NSV_Didnt_Create_NSV_Option_3:"I didn't want to create a sheet view.",l_NSV_Didnt_Create_NSV_Option_2:"Actually, I'm the only one in this file.",l_NSV_Didnt_Create_NSV_Option_1:"I don't know why I did that.",l_NSV_Freeform_Reason_Didnt_Create_SheetView:"Anything else you'd like to tell us about sorting, filtering, or sheet views?",l_NSV_Didnt_Create_SheetView_Prompt:"We'd love your feedback on sorting and filtering.",l_NSV_PromptQuestion:"We have just two questions.",l_WordGraphicsEditorDialogTitle:"Illustrations",l_TranslatorIntelligentSuggestionsDialogBoxTitle:"Translate document to: {0}?",l_TranslatorIntelligentSuggestionsDialogBoxMessage:"Create a translated copy of the document with Microsoft Translator service. You can set your preference for translation suggestions under",l_TranslatorIntelligentSuggestionsDialogBoxPrefPath:"Review > Translate > Translator Preferences",l_TranslatorIntelligentSuggestionsDialogBoxMessagePeriod:".",l_TranslatorIntelligentSuggestionsDialogBoxNeverFrom:"Never translate from: {0}",l_TranslatorIntelligentSuggestionsDialogBoxTranslate:"Translate",l_TranslatorIntelligentSuggestionsDialogBoxTranslateIconAltText:"Microsoft Translator Icon",l_AnonymousUserName:"Anonymous user",l_GuestUserName:"Guest user",l_CapitalizeEachWordKeytip:"C",l_LowerCaseKeytip:"L",l_SentenceCaseKeytip:"S",l_ToggleCaseKeytip:"T",l_UpperCaseKeytip:"U",l_PictureBordersKeytip:"PB",l_WAC_CatchUpFPS_Title:"Share your feedback on staying aware of changes from others",l_WAC_CatchUpFPS_Question:"We have two questions for you.",l_WAC_CatchUpFPS_YesLabel:"Sure",l_WAC_CatchUpFPS_NoLabel:"Not now",l_WAC_CatchUpFPS_RatingQuestion:"How do you feel about your overall awareness of changes made by others?",l_WAC_CatchUpFPS_RatingValue_1:"1 - Always uncertain about changes",l_WAC_CatchUpFPS_RatingValue_2:"2",l_WAC_CatchUpFPS_RatingValue_3:"3",l_WAC_CatchUpFPS_RatingValue_4:"4",l_WAC_CatchUpFPS_RatingValue_5:"5 - Always aware of changes",l_WAC_CatchUpFPS_WhyQuestion:"Can you describe and provide examples of why you chose that answer?",l_FindInDocumentResultsText:"{0} results",l_FindInDocumentResultText:"{0} result",l_IdeasKeytip:"SU",l_RemovedAuthorName:"Author",l_HelpButtonTitle:"Get Help on",l_TellMeCommandProviderTitle:"Actions",l_TellMeFindInDocProviderTitle:"Find in Document"};