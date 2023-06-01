export default interface AlertRuleUpdateDto {
    priceThreshold: number;
    priceComparisonType: string;
    retailerCompanyIds: string[];
}