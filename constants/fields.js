const fields = [
  {
    InternalName: "Title",
    Title: "Title",
    TypeAsString: "Text",
  },
  {
    InternalName: "TicketNumber",
    Title: "Ticket Number",
    TypeAsString: "Text",
  },
  {
    InternalName: "Description",
    Title: "Description",
    TypeAsString: "Note",
  },
  {
    InternalName: "Priority",
    Title: "Priority",
    TypeAsString: "Choice",
  },
  {
    InternalName: "Status",
    Title: "Status",
    TypeAsString: "Choice",
  },
  {
    InternalName: "EffectedUser",
    Title: "Effected User",
    TypeAsString: "User",
    AllowMultipleValues: false,
    SelectionMode: 0,
  },
  {
    InternalName: "EffectedUserGroup",
    Title: "Effected User Group",
    TypeAsString: "UserMulti",
    AllowMultipleValues: true,
    SelectionMode: 1,
  },
  {
    InternalName: "ReportedBy",
    Title: "Reported By",
    TypeAsString: "User",
    AllowMultipleValues: false,
    SelectionMode: 0,
  },
  {
    InternalName: "ContactUsers",
    Title: "Contact Users",
    TypeAsString: "UserMulti",
    AllowMultipleValues: true,
    SelectionMode: 0,
  },
  {
    InternalName: "ContactUserGroups",
    Title: "Contact User Groups",
    TypeAsString: "UserMulti",
    AllowMultipleValues: true,
    SelectionMode: 1,
  },
  {
    InternalName: "DueDate",
    Title: "Due Date",
    TypeAsString: "DateTime",
  },
  {
    InternalName: "ContentType",
    Title: "Content Type",
    TypeAsString: "Computed",
  },
  {
    InternalName: "Attachments",
    Title: "Attachments",
    TypeAsString: "Attachments",
  },
];

module.exports = {fields};