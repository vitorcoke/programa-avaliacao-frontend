export type CompanyType  = {
    _id: string,
    name: string,
    cnpj: number,
    meetings?:string[],
    social_networks?: string[],
    certificates?: string[],
    score: number;
    qualification?: string;
}