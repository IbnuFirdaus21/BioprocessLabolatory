// Home links point to in-page section anchors; Announcement is a separate route.
// "dropdown" type items open a submenu on hover (desktop) or tap (mobile).
// Dropdown items are external links by default (open in new tab);
// set "internal: true" on an item to navigate inside the site instead.
export const navLinks = [
  { label: "Beranda", href: "/", type: "route" },
  { label: "Announcement", href: "/announcement", type: "route" },
  {
    label: "Practical Needs",
    type: "dropdown",
    items: [
      { label: "Practical Schedules", href: "https://drive.google.com/drive/folders/1UnDNmwSa5_DTrNJletuIkxcraOje5uPL?usp=drive_link" },
      { label: "Guidebook", href: "https://drive.google.com/drive/folders/19fFd7a_8MiaS6ZM6zOEWvAxe5vbQrT3A?usp=drive_link" },
      { label: "Workbook", href: "https://drive.google.com/drive/folders/16C9j7YNM0x4o7MjDEDBnGmjAsc5Zss2c?usp=drive_link" },
      { label: "Safety Induction", href: "/safety-induction", internal: true },
    ],
  },
  { label: "Material", href: "/material", type: "anchor" },
  {
    label: "Scores and Point",
    type: "dropdown",
    items: [
      { label: "Points", href: "https://docs.google.com/spreadsheets/d/1fHMW_kGht1mgdR_I050OAbVVdUI76iJxLzeT4NQ2JIc/edit?gid=390280799#gid=390280799" },
      { label: "Scores", href: "https://docs.google.com/spreadsheets/d/1SgkO2D4y1iJPIvtJiGJtODyA-Quq4yyLQ_JXYGc4n70/edit?gid=390280799#gid=390280799" },
    ],
  },
];
