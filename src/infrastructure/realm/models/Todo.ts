import {Realm} from '@realm/react';

export class Todo extends Realm.Object {
  content!: string;
  status!: 0 | 1;
  constructor(realm: Realm, content: string, status: number) {
    super(realm, {content, status});
  }

  static schema: Realm.ObjectSchema = {
    name: 'Todo',
    properties: {
      content: {type: 'string'},
      status: {type: 'int'},
    },
  };
}
