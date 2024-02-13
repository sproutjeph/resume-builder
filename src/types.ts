/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Product {
  id: number;
  product_name: string;
  product_category: string;
  product_description: string;
  product_price: number;
  product_stock: number;
  product_image: string;
}

export type INavLinkTypes = {
  text: string;
  id: string;
  isActive: boolean;
  path: string;
};

export interface IAccount {
  Icon: any;
  text: string;
  id?: number;
  active?: boolean;
}

export interface PageMeta {
  title: string;
  description: string;
  // cardImage: string;
}

export interface IUserLogin {
  userName: string;
  password: string;
}

export type IUserRegData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
};

export interface ReturnData {
  result: number;
  message: string;
  menuCat: MenuCat[];
  menuItems: MenuItem[];
  venuePromo: VenuePromo[];
  menuAltMods: MenuAltMod[];
  sources: Source[];
  order_types: OrderType[];
  menuClass: MenuClass[];
  table_section: TableSection[];
}

export interface MenuCat {
  menucat: number;
  menu_name: string;
  sortorder: number;
}

export interface MenuItem {
  itemid: number;
  item_name: string;
  menucatid: number;
  item_price: string;
  taxrate: string;
  item_mods: string;
  itemOptions_json?: ItemOptionsJson[];
  mod_prompt: number;
  active: string;
  printerid: string;
  backgroundcolor: string;
  hungritemid: string;
  item_class: string;
  ingredients_json?: IngredientsJson;
  multiPrice_json?: any[];
  barcodeid: any;
  description?: string;
  sortorder?: number | null;
}

export interface ItemOptionsJson {
  id: string;
  sku: string;
  name: string;
  options: Option[];
  required: number;
  optionType: number;
  displayOrder: number;
  eligibleQuantityMax: number;
  eligibleQuantityMin?: number;
}

export interface Option {
  id: string;
  sku: string;
  name: string;
  price?: number;
  description?: string;
  displayOrder: number;
  priceCurrency?: string;
  options?: Option2[];
  required?: number;
  optionType?: number;
  eligibleQuantityMax?: number;
  isSelected?: boolean;
}

export interface Option2 {
  id: string;
  sku: string;
  name: string;
  options: Option3[];
  required: number;
  optionType: number;
  displayOrder: number;
  eligibleQuantityMax: number;
}

export interface Option3 {
  id: string;
  sku: string;
  name: string;
  price: number;
  description: string;
  displayOrder: number;
  priceCurrency: string;
}

export interface IngredientsJson {
  plating: Plating[];
  ingredients: Ingredient[];
  instructions: Instruction[];
  featured_images: string[];
  prep_instructions: PrepInstruction[];
}

export interface Plating {
  text: string;
  image: string;
  sortOrder: number;
}

export interface Ingredient {
  qty: string;
  sku: string;
  name: string;
  unit: string;
  sortOrder: number;
}

export interface Instruction {
  text: string;
  image: string;
  sortOrder: number;
}

export interface PrepInstruction {
  text: string;
  image: string;
  sortOrder: number;
}

export interface VenuePromo {
  recid: number;
  promo_code: string;
  promo_name: string;
  promo_type: number;
  promo_value: string;
  promo_use_per_user: any;
  promo_created: any;
  promo_active: string;
  promo_start_date: any;
  promo_end_date: any;
  venueid: string;
  usefirst: any;
  useonce: any;
  minamount: any;
  itemid: any;
  background_color: any;
  displayButton: string;
  buttonText: string;
  receiptText: string;
  availableOnsite: number;
  availableOnline: number;
  includeTax: number;
  availableKiosk: number;
  catid: any;
  restrictions?: string;
}

export interface MenuAltMod {
  recid: number;
  mod_name: string;
  mod_printed_name: string;
  mod_printed_name_altlang?: string;
  mod_price: string;
  mod_type: string;
  mod_status: any;
  venueid: number;
  sortorder?: number;
  menucatid: any;
  printerid: any;
}

export interface Source {
  id: number;
  name: string;
  type: string;
}

export interface OrderType {
  id: number;
  name: string;
  status: boolean;
  promptFirst: boolean;
  required_customer_name: boolean;
}

export interface MenuClass {
  id: number;
  name: string;
  defaultprinterid: string;
  taxrate: string;
}

export interface TableSection {
  id: number;
  name: string;
}

export interface ICartItem extends MenuItem {
  qty?: number;
  addedModifiers?: Option[];
  specialRequest?: "";
}

//venue type
export type Root = VenueData[];

export interface VenueData {
  venuename: string;
  venueid: number;
  onlineSettings: OnlineSettings;
}

export interface OnlineSettings {
  phone: string;
  orderLogo: string;
  venueName: string;
  headerLogo: string;
  surveyText: string;
  footerLine1: string;
  footerLine2: string;
  footerLine3: string;
  headerLine1: string;
  headerLine2: string;
  headerLine3: string;
  headerLine6: string;
  sendFromEmail: string;
  receiptLogoUrl: string;
  confirmationEmail: string;
  prepTime?: 20;
}

export interface ItemOption {
  id: string;
  sku: string;
  name: string;
  price: number;
  description: string;
  priceCurrency: string;
}
export interface OrderItem {
  id: number;
  qty: number;
  hold: number;
  name: string;
  type: string;
  printed: number;
  completed: number;
  total_price: string;
  origin_price: string;
  itemOptions_json: ItemOption[];
}

export interface IOrderItem {
  venueid: number;
  orderid: string;
  userid: number;
  sourceid: number;
  customer_name_first: string;
  customer_name_last: string;
  table_info: string;
  order_type_id: number;
  order_type_name: string;
  subtotal: string;
  tax: string;
  orderItems_json?: OrderItem[];
  status: number;
  payment_status: number;
  timezone: string;
  payment_transactionid: number;
  payment_lastfour: number;
  buyer_phone: string;
  buyer_email: string;
  promo_code?: string;
}

export interface IPaymentInfo {
  venueid: number;
  card_num: string;
  exp_date: string;
  ccv2: number;
  zip: number;
  name_on_card: string;
  amount: string;
}

export interface IScheduledOrder extends ICartItem {
  scheduled_time: string;
  pickup_time: string;
}

export interface IPickUpTime {
  id: string;
  pickup_time: string;
  schedule_days: number[];
  isSelected: boolean;
}

export interface IVenueStyles {
  primaryColor: string;
  secondaryColor: string;
}
