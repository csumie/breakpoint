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
