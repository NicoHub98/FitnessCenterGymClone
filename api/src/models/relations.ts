import { Admin } from "./Admin";
import Elements from "./Element";
import ClassGroup from "./ClassGroup";
import Provider from "./Providers";
import Expense from "./Expense";
import Income from "./Income";

// RELACION USER VS PRODUCT
Admin.hasMany(Elements);
Elements.belongsTo(Admin);

// RELACION USER VS GROUP_CLASS
Admin.hasMany(ClassGroup);
ClassGroup.belongsTo(Admin);

// RELACION USER VS PROVIDER
Admin.hasMany(Provider);
Provider.belongsTo(Admin);

// RELACION USER VS EXPENSE
Admin.hasMany(Expense);
Expense.belongsTo(Admin);

// RELACION USER VS INCOME
Admin.hasMany(Income);
Income.belongsTo(Admin);

// RELACION PROVIDER VS PRODUCTS VS ADMIN
Provider.hasMany(Elements);
Elements.belongsTo(Provider);

export { Admin, Elements, Provider, ClassGroup, Expense, Income, };
