const KEY='schet-expense-tracker-v1';
export const emptyState=()=>({version:1,expenses:[]});
export function load(storage=localStorage){const raw=storage.getItem(KEY);if(!raw)return emptyState();const state=JSON.parse(raw);if(state.version!==1||!Array.isArray(state.expenses)||state.expenses.some(x=>typeof x.id!=='string'||typeof x.date!=='string'||typeof x.category!=='string'||typeof x.note!=='string'||!Number.isSafeInteger(x.amount)||x.amount<=0))throw Error('Не удалось прочитать сохранённые расходы. Данные не перезаписаны.');return state;}
export function save(state,storage=localStorage){storage.setItem(KEY,JSON.stringify(state));}
