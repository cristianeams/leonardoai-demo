export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Colors = {
  __typename?: 'Colors';
  background: Scalars['String']['output'];
  primary: Scalars['String']['output'];
  secondary: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type Conference = {
  __typename?: 'Conference';
  allSpeakers?: Maybe<Array<Contact>>;
  attendees: Array<Contact>;
  bronzeSponsors?: Maybe<Array<Contact>>;
  endDate: Scalars['String']['output'];
  fullTalkSpeakers?: Maybe<Array<Contact>>;
  fullTalks: Array<Session>;
  goldSponsors?: Maybe<Array<Contact>>;
  id: Scalars['ID']['output'];
  keynoteSpeakers?: Maybe<Array<Contact>>;
  keynotes: Array<Session>;
  lightningTalkSpeakers?: Maybe<Array<Contact>>;
  lightningTalks: Array<Session>;
  locations?: Maybe<Array<Location>>;
  mcs?: Maybe<Array<Contact>>;
  name: Scalars['String']['output'];
  organizer: Contact;
  organizers: Array<Contact>;
  partners?: Maybe<Array<Contact>>;
  platformSponsors?: Maybe<Array<Contact>>;
  schedules: Array<Schedule>;
  series: Series;
  silverSponsors?: Maybe<Array<Contact>>;
  slogan: Scalars['String']['output'];
  speakers?: Maybe<Array<Contact>>;
  sponsors: Array<Contact>;
  startDate: Scalars['String']['output'];
  talks?: Maybe<Array<Session>>;
  websiteUrl: Scalars['String']['output'];
  workshopInstructors?: Maybe<Array<Contact>>;
  workshops?: Maybe<Array<Session>>;
  year: Scalars['String']['output'];
};

export type Contact = {
  __typename?: 'Contact';
  about: Scalars['String']['output'];
  aboutShort?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `location` instead */
  country: Country;
  firstName: Scalars['String']['output'];
  image: Image;
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  lastName: Scalars['String']['output'];
  location: Location;
  name: Scalars['String']['output'];
  noPhotography?: Maybe<Scalars['Boolean']['output']>;
  social: Social;
  tagline?: Maybe<Scalars['String']['output']>;
  talks?: Maybe<Array<Session>>;
  type: Array<ContactType>;
  workshops?: Maybe<Array<Session>>;
};

/** Type of the contact */
export enum ContactType {
  Attendee = 'ATTENDEE',
  BronzeSponsor = 'BRONZE_SPONSOR',
  GoldSponsor = 'GOLD_SPONSOR',
  Keynote = 'KEYNOTE',
  LightningTalk = 'LIGHTNING_TALK',
  Organizer = 'ORGANIZER',
  Partner = 'PARTNER',
  PlatformSponsor = 'PLATFORM_SPONSOR',
  Press = 'PRESS',
  SilverSponsor = 'SILVER_SPONSOR',
  Speaker = 'SPEAKER',
  Sponsor = 'SPONSOR',
  Talk = 'TALK',
  Workshop = 'WORKSHOP',
  WorkshopHost = 'WORKSHOP_HOST'
}

export type Country = {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Font = {
  __typename?: 'Font';
  family?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Array<Scalars['String']['output']>>;
  href?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};

export type Fonts = {
  __typename?: 'Fonts';
  primary: Scalars['String']['output'];
  secondary: Scalars['String']['output'];
  variants: Array<Font>;
};

export type Image = {
  __typename?: 'Image';
  style?: Maybe<Style>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type Interval = {
  __typename?: 'Interval';
  begin: Scalars['String']['output'];
  drawing?: Maybe<Scalars['String']['output']>;
  end: Scalars['String']['output'];
  location?: Maybe<Location>;
  mc?: Maybe<Contact>;
  sessions: Array<Session>;
  title?: Maybe<Scalars['String']['output']>;
  urls?: Maybe<SessionUrls>;
};

/** Level of the session */
export enum Level {
  Advanced = 'ADVANCED',
  Beginner = 'BEGINNER',
  Intermediate = 'INTERMEDIATE'
}

export type Location = {
  __typename?: 'Location';
  about?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  image?: Maybe<Image>;
  name?: Maybe<Scalars['String']['output']>;
  social?: Maybe<Social>;
};

export type Logos = {
  __typename?: 'Logos';
  black: WithWithoutText;
  colored: WithWithoutText;
  white: WithWithoutText;
};

export type Query = {
  __typename?: 'Query';
  /** @deprecated Use `conferences` instead */
  allConferences: Array<Conference>;
  allSeries: Array<Series>;
  conference: Conference;
  conferences: Array<Conference>;
  contact: Contact;
  interval: Interval;
  locations: Array<Location>;
  people: Array<Contact>;
  schedule: Schedule;
  series: Series;
  sponsors: Array<Contact>;
  theme: Theme;
  themes: Array<Theme>;
};


export type QueryConferenceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContactArgs = {
  conferenceId: Scalars['ID']['input'];
  contactName: Scalars['String']['input'];
};


export type QueryIntervalArgs = {
  conferenceId: Scalars['ID']['input'];
  intervalTitle: Scalars['String']['input'];
};


export type QueryScheduleArgs = {
  conferenceId: Scalars['ID']['input'];
  day: Scalars['String']['input'];
};


export type QuerySeriesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryThemeArgs = {
  conferenceId: Scalars['ID']['input'];
};

export type Schedule = {
  __typename?: 'Schedule';
  day: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  intervals: Array<Interval>;
  location?: Maybe<Location>;
};

export type Series = {
  __typename?: 'Series';
  conferences: Array<Conference>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Session = {
  __typename?: 'Session';
  begin?: Maybe<Scalars['String']['output']>;
  day?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['String']['output']>;
  hasTitle: Scalars['Boolean']['output'];
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  level: Level;
  location?: Maybe<Location>;
  parent: Interval;
  people?: Maybe<Array<Contact>>;
  sessions?: Maybe<Array<Session>>;
  /** @deprecated Use `people` instead */
  speakers: Array<Contact>;
  title: Scalars['String']['output'];
  type: SessionType;
  urls?: Maybe<SessionUrls>;
};

/** Type of the session */
export enum SessionType {
  Breakfast = 'BREAKFAST',
  CoffeeBreak = 'COFFEE_BREAK',
  Keynote = 'KEYNOTE',
  LightningTalk = 'LIGHTNING_TALK',
  Lunch = 'LUNCH',
  Organizational = 'ORGANIZATIONAL',
  Panel = 'PANEL',
  Party = 'PARTY',
  Talk = 'TALK',
  Workshop = 'WORKSHOP'
}

export type SessionUrls = {
  __typename?: 'SessionUrls';
  demo?: Maybe<Scalars['String']['output']>;
  drawing?: Maybe<Scalars['String']['output']>;
  slides?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Scalars['String']['output']>;
  web?: Maybe<Scalars['String']['output']>;
};

export type Social = {
  __typename?: 'Social';
  devto?: Maybe<Scalars['String']['output']>;
  dribble?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  googleMaps?: Maybe<Scalars['String']['output']>;
  homepage?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  mastodon?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  pinterest?: Maybe<Scalars['String']['output']>;
  tiktok?: Maybe<Scalars['String']['output']>;
  twitch?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  vimeo?: Maybe<Scalars['String']['output']>;
  vk?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type Style = {
  __typename?: 'Style';
  backgroundSize: Scalars['String']['output'];
};

export type Theme = {
  __typename?: 'Theme';
  colors: Colors;
  fonts: Fonts;
  id: Scalars['ID']['output'];
  logos: Logos;
  textures: Array<Image>;
};

export type WithWithoutText = {
  __typename?: 'WithWithoutText';
  withText: Image;
  withoutText: Image;
};
