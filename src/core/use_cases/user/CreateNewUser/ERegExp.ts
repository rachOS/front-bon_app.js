export const ERegExp = {
  basic: /\w/g,
  email:
    /([a-zA-Z]\w+)([@]\w{1})([a-z]\w+)([.])([a-z][^^&é"'(è_çà)=\-{|\][\]#\\]\w{0,3}\D$)/gm,
  password: /[a-zA-Z0-9]\w{8,32}\d/gi,
};
