define("@ms/items-view/lib/private/models/error/ErrorStrings.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "DefaultTitle":"Something went wrong",
    "DefaultSubText":"Please try again or refresh the page.",
    "ItemNotFoundTitle":"This item might not exist or is no longer available",
    "ItemNotFoundSubText":"This item might have been deleted, expired, or you might not have permission to view it. Contact the owner of this item for more information.",
    "retryButtonLabel":"Retry",
    "offlineActionFailed":"Sorry, something went wrong. Make sure you have an internet connection and try again." 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/items-view/lib/private/models/items/ItemStrings.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "dateModifiedLabelFormat":"Modified {0}",
    "gridViewSubTitle":"edited by {0}",
    "fileTypeFolder":"Folder",
    "folderItemCount":"Folder has {0} items",
    "folderIsShared":"Folder is shared",
    "fileTypeNoExtension":"File",
    "itemCountFormat":"{0} items||{0} item||{0} items",
    "itemCountIntervals":"0||1||2-",
    "missingMetadataText":"This file is missing properties that are required by your organization.",
    "policyTipNotifyText":"This item conflicts with a policy in your organization.",
    "policyTipBlockText":"Access to this item is blocked. It conflicts with a policy in your organization.",
    "checkedOutOrLockedWarningTitle":"File is checked out or locked",
    "checkedOutOrLockedWarning":"You cannot edit the properties of this document while it is checked out or locked for editing by another user",
    "checkboxAriaLabel":"Checkbox for {0}",
    "sharedFolderTooltip":"This is a shared folder." 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/items-view/lib/private/components/keyboard/KeyboardMap.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "arrowsAria":"Arrow keys",
    "arrowsDesc":"Select the adjacent item",
    "selectAllPCKey":"ctrl + a",
    "selectAllMacKey":"⌘ + a",
    "selectAllMacAria":"Command a",
    "selectAllPCAria":"Control a",
    "selectAllDesc":"Select all items",
    "altUpKey":"alt + up",
    "altUpAria":"Alt up",
    "altUpDesc":"Navigate to the parent folder",
    "deselectAllPCKey":"ctrl + d",
    "deselectAllPCAria":"Control d",
    "deselectAllMacKey":"⌘ + d",
    "deselectAllMacAria":"Command d",
    "deselectAllDesc":"Deselect all selected items",
    "escKey":"esc",
    "escAria":"Escape",
    "escDesc":"Close the current popup or opened item",
    "spaceKey":"space",
    "spaceDesc":"Toggle selection for current item",
    "enterKey":"enter",
    "enterDesc":"Open or download the item",
    "renameKey":"F2",
    "renameDesc":"Rename the selected item",
    "deleteMacKey":"⌘ + delete",
    "deletePCKey":"delete",
    "deleteMacAria":"Command delete",
    "deleteDesc":"Delete the selected item(s)",
    "openContextualMenuKey":"shift + f10",
    "openContextualMenuDesc":"Open details menu",
    "toggleInfoKey":"i",
    "toggleInfoDesc":"Toggle details pane",
    "showKeymapKey":"?",
    "showKeymapAria":"Question mark",
    "showKeymapDesc":"Show keyboard shortcuts",
    "KeyboardMapTitle":"Keyboard shortcuts",
    "showSearchKey":"/",
    "showSearchDesc":"Search",
    "showSearchAria":"Forward slash",
    "showShareKey":"s",
    "showShareDesc":"Share the selected item(s)",
    "okButtonText":"OK",
    "showActionDetailsKey":"g",
    "showActionDetailsDesc":"Open action details panel",
    "getNPSSurveyFocusShortcut":"Focus on the NPS survey popup" 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/items-view/lib/private/components/columns/columns.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "Name":"Name",
    "Date":"Date",
    "ModifiedDate":"Modified",
    "AccessedDate":"Accessed",
    "ModifiedBy":"Modified by",
    "Sharing":"Sharing",
    "Rating":"Rating",
    "Likes":"Number of Likes",
    "FileSize":"File Size",
    "FileType":"File Type",
    "ItemIsARecord":"Item is a Record",
    "SavedDate":"Saved date" 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/items-view/lib/private/components/fields/FieldStrings.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "itemSignalNew":"This item is new",
    "itemSignalNewTooltip":"This item is new",
    "itemSignalMalwareDetected":"Malware Detected",
    "itemSignalMalwareDetectedTooltip":"Malware detected. Some commands aren't available",
    "itemSignalYouCheckedOut":"You checked out this item",
    "itemSignalYouCheckedOutTooltip":"You checked out this item",
    "itemSignalSomeoneCheckedOut":"Checked out by someone",
    "itemSignalSomeoneCheckedOutTooltip":"{0} checked out this item",
    "itemSignalBlocked":"Contains sensitive information",
    "itemSignalBlockedTooltip":"Contains sensitive information",
    "itemSignalWarning":"May contain sensitive information",
    "itemSignalWarningTooltip":"May contain sensitive information",
    "itemSignalMissingMetadata":"Missing metadata",
    "itemSignalMissingMetadataTooltip":"Missing metadata",
    "itemSignalNeedsPublishing":"Needs Publishing",
    "itemSignalNeedsPublishingTooltip":"Needs Publishing",
    "itemSignalIsRecord":"Editing this item is blocked by a policy in your organization",
    "itemSignalIsRecordTooltip":"Editing this item is blocked by a policy in your organization",
    "itemSignalTrending":"Popular item",
    "itemSignalIsTrendingTooltip":"This item is popular with your colleagues",
    "itemSignalReadOnly":"Read-only",
    "itemSignalReadOnlyTooltip":"You do not have permission to edit this item",
    "sharedColumnSharedFieldText":"Shared",
    "sharedColumnPrivateFieldText":"Private",
    "Yes":"Yes",
    "No":"No",
    "pathRendererAriaLabelSlash":"slash",
    "pathRendererLinkAriaLabel":"File path: {0}",
    "pathRendererLinkTitle":"Click this link to open the folder containing this item",
    "likesCountTitle":"Likes||Like||Likes",
    "likesCountTitleIntervals":"0||1||2-",
    "likesCountAriaLabel":"Likes||Like||Likes",
    "likesCountAriaLabelIntervals":"0||1||2-",
    "itemSignalIsFollowed":"You saved this file to read later." 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/items-view/lib/private/components/sharingCallout/ShareDialog.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "sharedialogErrorMessage":"Couldn't load the share experience. Please try again later." 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/items-view/lib/private/components/commands/Commands.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "Upload":"Upload",
    "Rename":"Rename",
    "DeleteItem":"Delete",
    "Download":"Download",
    "Open":"Open",
    "Share":"Share",
    "CopyLinkCommandText":"Copy link",
    "ManageAccess":"Manage access",
    "SaveForLater":"Save for later",
    "RemoveFromSaved":"Remove from saved",
    "Create":"New",
    "ViewList":"List",
    "ViewCompactList":"Compact List",
    "ViewGrid":"Tiles",
    "UploadFolder":"Folder",
    "UploadFile":"Files",
    "UploadCommandTooltip":"Upload files from your computer to this location",
    "ShareCommandTooltipV3":"Share the selected item with other people",
    "FollowCommandTooltip":"Save the selected item for later",
    "CopyLinkCommandTooltipV3":"Get a link that others can use to access the selected item",
    "ManageAccessCommandTooltipV3":"Launch panel to manage access for item",
    "ViewListCommandTooltip":"View items and details in a list",
    "ViewCompactListCommandTooltip":"View items and details in a compact list",
    "ViewGridCommandTooltip":"View items with tile previews",
    "OverflowCommandTooltip":"Other things you can do with the selected items",
    "CreateCommandAriaLabel":"Create a new folder or document in this location",
    "ShowActions":"Show actions",
    "ShowProgressCommandAriaLabel":"Shows the status of completed, failed, or in-progress operations",
    "CommandBarAriaLabel":"Command bar, use left and right arrow keys to navigate between menu items",
    "FileHoverCardShortcutHint":"Press C to open file hover card",
    "SwitchLayoutCommandLabel":"Switch view options",
    "SortCommandTooltip":"Sort all items by",
    "Sort":"Sort",
    "SortAcendingCommandTooltip":"Sort items in ascending order",
    "SortAscending":"Ascending",
    "SortDescendingCommandTooltip":"Sort items in descending order",
    "SortDescending":"Descending",
    "GrantAccess":"Grant Access",
    "GrantAccessCommandLabel":"Grant access to selected item." 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/items-view/lib/private/components/cache/DetailsList.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "ShowAll":"Show All" 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/items-view/lib/private/components/itemSetDetailsList/DetailsList.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "listTooltip":"List of folders, files or items, use up and down arrow keys to navigate, use the SPACE key to select within the list. When selected, press ENTER key to open or edit the item.",
    "toggleSelectAllAriaLabel":"Toggle selection for all items",
    "selectionColumnHeaderAriaLabel":"Select all",
    "ColumnHeaderOperationAriaLabel":"Column headers. Use its menus to perform column operations like sort and filter",
    "toggleAllGroupsButtonAriaLabel":"Expand or collapse all groups" 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/items-view/lib/private/components/cache/emptyFolder/EmptyFolder.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "emptyFolderTitle":"This folder is empty",
    "emptyFolderDefaultAltText":"Empty folder" 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/shared-react-item-activity/lib/components/AddCommentTextField/AddCommentTextField.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "cancelLabel":"Cancel",
    "sendLabel":"Send",
    "CommentAdded":"Comment added successfully." 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/shared-react-item-activity/lib/components/ItemActivities.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "createThisFile":"this file",
    "createArbitraryFile":"{0}",
    "youCreated":"You created {0}",
    "youCreatedInLocation":"You created {0} in {2}",
    "otherCreated":"{1} created {0}",
    "otherCreatedInLocation":"{1} created {0} in {2}",
    "youCreatedShort":"You created",
    "otherCreatedShort":"{1} created",
    "editThisFile":"this file",
    "editArbitraryFile":"{0}",
    "youEditedListForm":"You edited {0}||You and {2} edited {0}||You, {2}, and {3} edited {0}",
    "othersEditedListForm":"{1} edited {0}||{1} and {2} edited {0}||{1}, {2}, and {3} edited {0}",
    "editedListFormIntervals":"1||2||3",
    "youEditedCountForm":"You, {2}, {3}, and {4} edited {0}",
    "othersEditedCountForm":"{1}, {2}, {3}, and {4} edited {0}",
    "youEditedListFormShort":"You edited",
    "othersEditedListFormShort":"{1} edited",
    "editedListFormShortIntervals":"1",
    "youEditedCountFormShort":"You + {2} edited",
    "othersEditedCountFormShort":"{1} + {2} edited",
    "renameThisFile":"this file",
    "renameArbitraryFile":"{0}",
    "youRenamedFileToFile":"You renamed {1} to {2}",
    "otherRenamedFileToFile":"{0} renamed {1} to {2}",
    "youRenamedFile":"You renamed {0}",
    "otherRenamedFile":"{1} renamed {0}",
    "youRenamedFileToFileShort":"You renamed from {1}",
    "otherRenamedFileToFileShort":"{0} renamed from {1}",
    "youRenamedFileShort":"You renamed",
    "otherRenamedFileShort":"{1} renamed",
    "deleteThisFile":"this file",
    "deleteArbitraryFile":"{0}",
    "youDeleted":"You deleted {0}",
    "youDeletedFromFolder":"You deleted {0} from {2}",
    "otherDeleted":"{1} deleted {0}",
    "otherDeletedFromFolder":"{1} deleted {0} from {2}",
    "youDeletedShort":"You deleted",
    "youDeletedFromFolderShort":"You deleted from {2}",
    "otherDeletedShort":"{1} deleted",
    "otherDeletedFromFolderShort":"{1} deleted from {2}",
    "restoreThisFile":"This file",
    "restoreArbitraryFile":"{0}",
    "thisFileRestored":"{0} was restored",
    "arbitraryFileRestored":"{0} was restored",
    "thisFileRestoredShort":"Restored",
    "commentedThisFile":"this file",
    "commentedArbitraryFile":"{0}",
    "youCommentedListForm":"You commented in {0}||You and {2} commented in {0}||You, {2}, and {3} commented in {0}",
    "othersCommentedListForm":"{1} commented in {0}||{1} and {2} commented in {0}||{1}, {2}, and {3} commented in {0}",
    "commentedListFormIntervals":"1||2||3",
    "youCommentedCountForm":"You, {2}, {3}, and {4} commented in {0}",
    "othersCommentedCountForm":"{1}, {2}, {3}, and {4} commented in {0}",
    "youCommentedListFormShort":"You commented",
    "othersCommentedListFormShort":"{1} commented",
    "commentedListFormShortIntervals":"1",
    "youCommentedCountFormShort":"You + {2} commented",
    "othersCommentedCountFormShort":"{1} + {2} commented",
    "commentedOnThisFile":"this file",
    "commentedOnArbitraryFile":"{0}",
    "youCommentedOnFile":"You commented on {0}",
    "othersCommentedOnFile":"{1} commented on {0}",
    "youCommentedOnThisFile":"You commented {0}",
    "othersCommentedOnThisFile":"{1} commented {0}",
    "commentResponseToYou":"you",
    "commentResponseComment":"comment",
    "commentResponseToOther":"{0}",
    "commentResponseListFormIntervals":"1||2||3",
    "commentResponseListFormShortIntervals":"1-",
    "youRepliedToYouListForm":"You replied to a {0} by you||You and {3} replied to a {0} by you||You, {3} and {4} replied to a {0} by you",
    "youRepliedToYouCountForm":"You, {3}, {4} and {5} replied to a {0} by you",
    "youRepliedToOtherListForm":"You replied to a {0} by {1}||You and {3} replied to a {0} by {1}||You, {3} and {4} replied to a {0} by {1}",
    "youRepliedToOtherCountForm":"You, {3}, {4} and {5} replied to a {0} by {1}",
    "otherRepliedToYouListForm":"{2} replied to a {0} by you||{2} and {3} replied to a {0} by you||{2}, {3} and {4} replied to a {0} by you",
    "otherRepliedToYouCountForm":"{2}, {3}, {4} and {5} replied to a {0} by you",
    "otherRepliedToOtherListForm":"{2} replied to a {0} by {1}||{2} and {3} replied to a {0} by {1}||{2}, {3} and {4} replied to a {0} by {1}",
    "otherRepliedToOtherCountForm":"{2}, {3}, {4} and {5} replied to a {0} by {1}",
    "youRepliedToMissingAuthorListForm":"You replied to a {0}||You and {2} replied to a {0}||You, {2} and {3} replied to a {0}",
    "youRepliedToMissingAuthorCountForm":"You, {2}, {3} and {4} replied to a {0}",
    "otherRepliedToMissingAuthorListForm":"{1} replied to a {0}||{1} and {2} replied to a {0}||{1}, {2} and {3} replied to a {0}",
    "otherRepliedToMissingAuthorCountForm":"{1}, {2}, {3} and {4} replied to a {0}",
    "commentResponseToYouShort":"you",
    "commentResponseToOtherPersonShort":"{0}",
    "youRepliedToYouListFormShort":"You replied to yourself",
    "youRepliedToYouCountFormShort":"You + {2} replied to you",
    "youRepliedToOtherListFormShort":"You replied to {0}",
    "youRepliedToOtherCountFormShort":"You + {2} replied to {0}",
    "otherRepliedToYouListFormShort":"{1} replied to you",
    "otherRepliedToYouCountFormShort":"{1} + {2} replied to you",
    "otherRepliedToOtherListFormShort":"{1} replied to {0}",
    "otherRepliedToOtherCountFormShort":"{1} + {2} replied to {0}",
    "youRepliedToMissingAuthorListFormShort":"You replied to a {0}",
    "youRepliedToMissingAuthorCountFormShort":"You + {2} replied to a {0}",
    "otherRepliedToMissingAuthorListFormShort":"{1} replied to a {0}",
    "otherRepliedToMissingAuthorCountFormShort":"{1} + {2} replied to a {0}",
    "mentionYou":"you",
    "mentionArbitraryFile":"{0}",
    "mentionedThisFile":"this file",
    "youMentionedOthersListForm":"You mentioned {2} in {0}||You mentioned {2} and {3} in {0}||You mentioned {2}, {3}, and {4} in {0}",
    "othersMentionedOthersListForm":"{1} mentioned {2} in {0}||{1} mentioned {2} and {3} in {0}||{1} mentioned {2}, {3}, and {4} in {0}",
    "youMentionedYouAndOthersListForm":"You mentioned yourself in {0}||You mentioned yourself and {3} in {0}||You mentioned yourself, {3}, and {4} in {0}",
    "othersMentionedYouAndOthersListForm":"{1} mentioned you in {0}||{1} mentioned you and {3} in {0}||{1} mentioned you, {3}, and {4} in {0}",
    "mentionedListFormIntervals":"1||2||3",
    "youMentionedOthersCountForm":"You mentioned {2}, {3}, {4} and {5} in {0}",
    "othersMentionedOthersCountForm":"{1} mentioned {2}, {3}, {4}, and {5} in {0}",
    "youMentionedYouAndOthersCountForm":"You mentioned youself, {3}, {4}, and {5} in {0}",
    "othersMentionedYouAndOthersCountForm":"{1} mentioned you, {3}, {4}, and {5} in {0}",
    "youMentionedOthersListFormShort":"You mentioned {2}",
    "othersMentionedOthersListFormShort":"{1} mentioned {2}",
    "youMentionedYouListFormShort":"You mentioned yourself",
    "otherMentionedYouListFormShort":"{1} mentioned you",
    "mentionedListFormShortIntervals":"1",
    "youMentionedOthersCountFormShort":"You mentioned {2} + {3}",
    "othersMentionedOthersCountFormShort":"{1} mentioned {2} + {3}",
    "youMentionedYouAndOthersCountFormShort":"You mentioned you + {3}",
    "othersMentionedYouAndOthersCountFormShort":"{1} mentioned you + {3}",
    "shareThisFile":"this file",
    "shareArbitraryFile":"{0}",
    "youShared":"You shared {0}",
    "otherShared":"{1} shared {0}",
    "youSharedWithYouListForm":"You shared {0} with yourself||You shared {0} with yourself and {3}||You shared {0} with yourself, {3}, and {4}",
    "otherSharedWithYouListForm":"{1} shared {0} with you||{1} shared {0} with you and {3}||{1} shared {0} with you, {3}, and {4}",
    "youSharedWithOthersListForm":"You shared {0} with {2}||You shared {0} with {2} and {3}||You shared {0} with {2}, {3}, and {4}",
    "otherSharedWithOthersListForm":"{1} shared {0} with {2}||{1} shared {0} with {2} and {3}||{1} shared {0} with {2}, {3}, and {4}",
    "sharedWithOthersListFormIntervals":"1||2||3",
    "youSharedWithYouCountForm":"You shared {0} with yourself, {3}, {4}, and {5}",
    "otherSharedWithYouCountForm":"{1} shared {0} with you, {3}, {4}, and {5}",
    "youSharedWithOthersCountForm":"You shared {0} with {2}, {3}, {4}, and {5}",
    "otherSharedWithOthersCountForm":"{1} shared {0} with {2}, {3}, {4}, and {5}",
    "youSharedShort":"You shared",
    "otherSharedShort":"{1} shared {0}",
    "youSharedWithOthersListFormShort":"You shared with {2}",
    "otherSharedWithOthersListFormShort":"{1} shared with {2}",
    "youSharedWithYouListFormShort":"You shared with yourself",
    "otherSharedWithYouListFormShort":"{1} shared with you",
    "sharedWithOthersListFormShortIntervals":"1",
    "youSharedWithOthersCountFormShort":"You shared with {2} + {3}",
    "otherSharedWithOthersCountFormShort":"{1} shared with {2} + {3}",
    "youSharedWithYouCountFormShort":"You shared with yourself + {3}",
    "otherSharedWithYouCountFormShort":"{1} shared with you + {3}",
    "moveThisFile":"this file",
    "moveArbitraryFile":"{0}",
    "youMoved":"You moved {0}",
    "youMovedFromFolder":"You moved {0} from {2}",
    "youMovedFromFolderToFolder":"You moved {0} from {2} to {3}",
    "youMovedToFolder":"You moved {0} to {3}",
    "otherMoved":"{1} moved {0}",
    "otherMovedFromFolder":"{1} moved {0} from {2}",
    "otherMovedFromFolderToFolder":"{1} moved {0} from {2} to {3}",
    "otherMovedToFolder":"{1} moved {0} to {3}",
    "youMovedShort":"You moved",
    "otherMovedShort":"{1} moved",
    "versionThisFile":"this file",
    "versionArbitraryFile":"{0}",
    "youCreatedVersionThisFile":"You created {2} of this file",
    "youCreatedVersion":"You created {2} of {0}",
    "otherCreatedVersionThisFile":"{1} created {2} of this file",
    "otherCreatedVersion":"{1} created {2} of {0}",
    "youCreatedVersionShort":"You created {2}",
    "otherCreatedVersionShort":"{1} created {2}",
    "restoredVersionThisFile":"this file",
    "restoredVersionArbitraryFile":"{0}",
    "youRestoredVersion":"You reverted {1} to version {2}",
    "otherRestoredVersion":"{0} reverted {1} to version {2}",
    "youRestoredVersionShort":"You reverted {1} to version {2}",
    "otherRestoredVersionShort":"{0} reverted {1} to version {2}",
    "youRestoredDocumentLibrary":"You restored {1} to {2}",
    "youRestoredDocumentLibraryShort":"You restored {1} to {2}",
    "otherRestoredDocumentLibrary":"{0} restored {1} to {2}",
    "otherRestoredDocumentLibraryShort":"{0} restored {1} to {2}",
    "youReplied":"You replied {0}",
    "otherReplied":"{1} replied {0}",
    "replyPlaceholder":"Reply",
    "you":"you",
    "youUpperCase":"You",
    "someoneUpperCase":"Someone",
    "andOtherActorsCountForm":"{0} other||{0} others",
    "andOtherUsersCountFormAccusative":"{0} other||{0} others",
    "otherActorsCountFormIntervals":"1||2-",
    "andOtherActorsCountFormShort":"{0}",
    "andOtherUsersCountFormShortAccusative":"{0}",
    "otherActorsCountFormShortIntervals":"1-",
    "commentRepliesGetMore":"Load more",
    "activityMenuDialogConfirm":"Yes",
    "activityMenuDialogCancel":"Cancel",
    "deleteCommentDialogTitle":"Are you sure you want to delete this comment?",
    "activityMenuOptionDelete":"Delete",
    "activityCommentRepliesList":"List of replies. Use up and down keys to navigate.",
    "activityMenuAriaLabel":"Show actions." 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/items-view-addon-graph/lib/components/columns/Columns.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "lastAccessedColumnHeaderText":"Last accessed",
    "activityColumnHeaderText":"Activity",
    "dateSharedColumnHeaderText":"Date Shared",
    "sharedByColumnHeaderText":"Shared By" 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/items-view-addon-graph/lib/models/items/GraphItems.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "files":"Files",
    "recentTitle":"Recent",
    "recent":"Recent Files",
    "saved":"Saved for later",
    "sharedWithMe":"Shared with me",
    "sharedByMe":"Shared by me" 
  };
  e.strings = strings;
  e.default = strings;
});
define("@ms/items-view-addon-graph/lib/handlers/controls/GraphControl.resx",["exports"],function(e){
  Object.defineProperty(e, "__esModule", { value: true });
  var strings = {
    "savedForLaterEmptyStateTitle":"Items you save for later will show up here." 
  };
  e.strings = strings;
  e.default = strings;
});