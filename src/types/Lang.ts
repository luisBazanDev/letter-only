export enum Langs {
  ES = 1,
  EN = 2,
}

export interface Lang {
  warning: string;
  timeout: string;
  commands: {
    dont_permission: string;
    disabled: string;
    enabled: string;
    info: {
      title: string;
      description: string;
      img: string;
      creator: {
        title: string;
        value: string;
      };
      created: {
        title: string;
        value: string;
      };
      support: {
        title: string;
        value: string;
      };
      invite: {
        title: string;
        value: string;
      };
      source: {
        title: string;
        value: string;
      };
    };
    invite: {
      title: string;
      value: string;
    };
    ping: {
      title: string;
    };
    language: string;
    letter: {
      error: {
        p1: string;
        p2: string;
      };
      success: {
        p1: string;
        p2: string;
      };
    };
  };
}
