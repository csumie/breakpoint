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
