import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Guid } from './Guid';
import { BaseHttpService } from './base-http.service';
import { DownloadFileService, IDownloadResult } from './download-service';
import {
  mapCollection,
  mapSingle,
  mapIdentityCollection,
  mapIdentitySingle
} from './mappers';
import * as $models from './models';

@Injectable({
  providedIn: 'root'
})
export class ActivityService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Activity', http);
  }

  public getSearchActivitiesByActivityFilter(
    activityFilterStrictDTO: $models.IActivityFilterStrictDTO
  ): Observable<$models.SearchActivityProjectionDTO[]> {
    return this.post<$models.ISearchActivityProjectionDTO[]>(
      `getSearchActivitiesByActivityFilter`,
      activityFilterStrictDTO
    ).pipe(mapCollection($models.SearchActivityProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class CaseStudyService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/CaseStudy', http);
  }

  public updateCaseStudy(
    caseStudyUpdateModelStrictDto: $models.ICaseStudyUpdateModelStrictDto
  ): Observable<void> {
    return this.post<void>(`updateCaseStudy`, caseStudyUpdateModelStrictDto);
  }

  public createCaseStudy(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<void> {
    return this.post<void>(`createCaseStudy`, passportIdentityDTO);
  }

  public changeCaseStudyCreationMode(
    caseStudyCreationModeModelDto: $models.ICaseStudyCreationModeModelDto
  ): Observable<void> {
    return this.post<void>(
      `changeCaseStudyCreationMode`,
      caseStudyCreationModeModelDto
    );
  }

  public getCaseStudyOverview(
    caseStudyIdentityDTO: $models.ICaseStudyIdentityDTO
  ): Observable<$models.CaseStudyOverviewProjectionDTO> {
    return this.post<$models.ICaseStudyOverviewProjectionDTO>(
      `getCaseStudyOverview`,
      caseStudyIdentityDTO
    ).pipe(mapSingle($models.CaseStudyOverviewProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class CaseStudyAttachmentService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/CaseStudyAttachment', http);
  }

  public upload(): Observable<Guid> {
    return this.post<Guid>(`upload`);
  }

  public removeCaseStudyAttachment(
    caseStudyAttachmentIdentityDTO: $models.ICaseStudyAttachmentIdentityDTO
  ): Observable<void> {
    return this.post<void>(
      `removeCaseStudyAttachment`,
      caseStudyAttachmentIdentityDTO
    );
  }

  public getCaseStudyAttachmentViewsByCaseStudyAttachmentFilter(
    caseStudyAttachmentFilterStrictDTO: $models.ICaseStudyAttachmentFilterStrictDTO
  ): Observable<$models.CaseStudyAttachmentViewProjectionDTO[]> {
    return this.post<$models.ICaseStudyAttachmentViewProjectionDTO[]>(
      `getCaseStudyAttachmentViewsByCaseStudyAttachmentFilter`,
      caseStudyAttachmentFilterStrictDTO
    ).pipe(mapCollection($models.CaseStudyAttachmentViewProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class CustomerSatisfactionSurveyService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/CustomerSatisfactionSurvey', http);
  }

  public getCssModelRichDTOsByPassportId(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<$models.CssModelRichDTO[]> {
    return this.post<$models.ICssModelRichDTO[]>(
      `getCssModelRichDTOsByPassportId`,
      passportIdentityDTO
    ).pipe(mapCollection($models.CssModelRichDTO));
  }

  public getQuestionAreaRatesByPassportId(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<$models.QuestionAreaRateModelSimpleDTO[]> {
    return this.post<$models.IQuestionAreaRateModelSimpleDTO[]>(
      `getQuestionAreaRatesByPassportId`,
      passportIdentityDTO
    ).pipe(mapCollection($models.QuestionAreaRateModelSimpleDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Dashboard', http);
  }

  public getPassportStatuses(): Observable<
    $models.PassportStatusesDashboardModelSimpleDTO[]
  > {
    return this.post<$models.IPassportStatusesDashboardModelSimpleDTO[]>(
      `getPassportStatuses`
    ).pipe(mapCollection($models.PassportStatusesDashboardModelSimpleDTO));
  }

  public getProgramCoverage(): Observable<number> {
    return this.post<number>(`getProgramCoverage`);
  }

  public getHeadcountCoverage(): Observable<number> {
    return this.post<number>(`getHeadcountCoverage`);
  }

  public getSkillUsage(
    skip: number,
    take: number
  ): Observable<$models.SkillUsageModelSimpleDTO[]> {
    return this.post<$models.ISkillUsageModelSimpleDTO[]>(
      `getSkillUsage?skip=${encodeURIComponent(skip)}&take=${encodeURIComponent(
        take
      )}`
    ).pipe(mapCollection($models.SkillUsageModelSimpleDTO));
  }

  public getRagStatuses(
    ldsDashboardFilterModelStrictDTO: $models.ILdsDashboardFilterModelStrictDTO
  ): Observable<$models.PassportRagInfoModelRichDTO[]> {
    return this.post<$models.IPassportRagInfoModelRichDTO[]>(
      `getRagStatuses`,
      ldsDashboardFilterModelStrictDTO
    ).pipe(mapCollection($models.PassportRagInfoModelRichDTO));
  }

  public getRagTotalInfo(): Observable<
    $models.LdsDashboardTotalInfoModelRichDTO
  > {
    return this.post<$models.ILdsDashboardTotalInfoModelRichDTO>(
      `getRagTotalInfo`
    ).pipe(mapSingle($models.LdsDashboardTotalInfoModelRichDTO));
  }

  public getTasks(): Observable<$models.TaskDashboardModelRichDTO> {
    return this.post<$models.ITaskDashboardModelRichDTO>(`getTasks`).pipe(
      mapSingle($models.TaskDashboardModelRichDTO)
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeSearchService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/EmployeeSearch', http);
  }

  public search(
    query: string
  ): Observable<$models.SearchEmployeeProjectionDTO[]> {
    return this.get<$models.ISearchEmployeeProjectionDTO[]>(
      `search?query=${encodeURIComponent(query)}`
    ).pipe(mapCollection($models.SearchEmployeeProjectionDTO));
  }

  public searchTaskAssignees(
    taskIdentityDTO: $models.ITaskIdentityDTO,
    query: string
  ): Observable<$models.SearchEmployeeProjectionDTO[]> {
    return this.post<$models.ISearchEmployeeProjectionDTO[]>(
      `searchTaskAssignees?query=${encodeURIComponent(query)}`,
      taskIdentityDTO
    ).pipe(mapCollection($models.SearchEmployeeProjectionDTO));
  }

  public searchPassportManagers(
    passportIdentityDTO: $models.IPassportIdentityDTO,
    query: string
  ): Observable<$models.SearchEmployeeProjectionDTO[]> {
    return this.post<$models.ISearchEmployeeProjectionDTO[]>(
      `searchPassportManagers?query=${encodeURIComponent(query)}`,
      passportIdentityDTO
    ).pipe(mapCollection($models.SearchEmployeeProjectionDTO));
  }

  public searchDqmsContacts(
    query: string
  ): Observable<$models.SearchEmployeeProjectionDTO[]> {
    return this.post<$models.ISearchEmployeeProjectionDTO[]>(
      `searchDqmsContacts?query=${encodeURIComponent(query)}`
    ).pipe(mapCollection($models.SearchEmployeeProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class EngagementModelService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/EngagementModel', http);
  }

  public getSearchEngagementModels(): Observable<
    $models.SearchEngagementModelProjectionDTO[]
  > {
    return this.post<$models.ISearchEngagementModelProjectionDTO[]>(
      `getSearchEngagementModels`
    ).pipe(mapCollection($models.SearchEngagementModelProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class FinancialBusinessUnitService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/FinancialBusinessUnit', http);
  }

  public getSearchFbusByProgramFilter(
    financialBusinessUnitIdentityDTO: $models.IFinancialBusinessUnitIdentityDTO
  ): Observable<$models.SearchFbuProjectionDTO[]> {
    return this.post<$models.ISearchFbuProjectionDTO[]>(
      `getSearchFbusByProgramFilter`,
      financialBusinessUnitIdentityDTO
    ).pipe(mapCollection($models.SearchFbuProjectionDTO));
  }

  public getSearchFbusForPassportCreationByFbuFilter(
    fbuFilterStrictDTO: $models.IFbuFilterStrictDTO
  ): Observable<$models.SearchFbuProjectionDTO[]> {
    return this.post<$models.ISearchFbuProjectionDTO[]>(
      `getSearchFbusForPassportCreationByFbuFilter`,
      fbuFilterStrictDTO
    ).pipe(mapCollection($models.SearchFbuProjectionDTO));
  }

  public getSearchFbusByFbuFilter(
    fbuFilterStrictDTO: $models.IFbuFilterStrictDTO
  ): Observable<$models.SearchFbuProjectionDTO[]> {
    return this.post<$models.ISearchFbuProjectionDTO[]>(
      `getSearchFbusByFbuFilter`,
      fbuFilterStrictDTO
    ).pipe(mapCollection($models.SearchFbuProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class InternalPassportService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/InternalPassport', http);
  }

  public getInternalPassportOverview(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<$models.InternalPassportOverviewProjectionDTO> {
    return this.post<$models.IInternalPassportOverviewProjectionDTO>(
      `getInternalPassportOverview`,
      passportIdentityDTO
    ).pipe(mapSingle($models.InternalPassportOverviewProjectionDTO));
  }

  public updateInternalPassport(
    internalPassportUpdateModelStrictDto: $models.IInternalPassportUpdateModelStrictDto
  ): Observable<void> {
    return this.post<void>(
      `updateInternalPassport`,
      internalPassportUpdateModelStrictDto
    );
  }

  public updateSection(
    internalPassportSectionUpdateStrictDto: $models.IInternalPassportSectionUpdateStrictDto
  ): Observable<void> {
    return this.post<void>(
      `updateSection`,
      internalPassportSectionUpdateStrictDto
    );
  }

  public updateSectionItemStatuses(
    internalPassportSectionItemUpdateStrictDto: $models.IInternalPassportSectionItemUpdateStrictDto[]
  ): Observable<void> {
    return this.post<void>(
      `updateSectionItemStatuses`,
      internalPassportSectionItemUpdateStrictDto
    );
  }

  public changeManagementPlan(
    internalPassportIdentityDTO: $models.IInternalPassportIdentityDTO,
    type: $models.ManagementPlanType
  ): Observable<void> {
    return this.post<void>(
      `changeManagementPlan?type=${encodeURIComponent(type)}`,
      internalPassportIdentityDTO
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class LdsService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Lds', http);
  }

  public getRagReport(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<$models.RagSummaryModelRichDTO> {
    return this.post<$models.IRagSummaryModelRichDTO>(
      `getRagReport`,
      passportIdentityDTO
    ).pipe(mapSingle($models.RagSummaryModelRichDTO));
  }

  public getSearchTierReportsByTierReportFilter(
    passportFilterStrictDTO: $models.IPassportFilterStrictDTO
  ): Observable<$models.SearchTierReportProjectionDTO[]> {
    return this.post<$models.ISearchTierReportProjectionDTO[]>(
      `getSearchTierReportsByTierReportFilter`,
      passportFilterStrictDTO
    ).pipe(mapCollection($models.SearchTierReportProjectionDTO));
  }

  public getTierReportOverview(
    getTierReportModelStrictDTO: $models.IGetTierReportModelStrictDTO
  ): Observable<$models.TierReportOverviewProjectionDTO> {
    return this.post<$models.ITierReportOverviewProjectionDTO>(
      `getTierReportOverview`,
      getTierReportModelStrictDTO
    ).pipe(mapSingle($models.TierReportOverviewProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class MethodologyService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Methodology', http);
  }

  public getSearchMethodologiesByMethodologyFilter(
    methodologyFilterStrictDTO: $models.IMethodologyFilterStrictDTO
  ): Observable<$models.SearchMethodologyProjectionDTO[]> {
    return this.post<$models.ISearchMethodologyProjectionDTO[]>(
      `getSearchMethodologiesByMethodologyFilter`,
      methodologyFilterStrictDTO
    ).pipe(mapCollection($models.SearchMethodologyProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class PassportService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Passport', http);
  }

  public createPassport(
    passportCreateModelStrictDTO: $models.IPassportCreateModelStrictDTO
  ): Observable<$models.PassportIdentityDTO> {
    return this.post<$models.IPassportIdentityDTO>(
      `createPassport`,
      passportCreateModelStrictDTO
    ).pipe(mapIdentitySingle($models.PassportIdentityDTO));
  }

  public updatePassport(
    passportUpdateModelStrictDto: $models.IPassportUpdateModelStrictDto
  ): Observable<string[]> {
    return this.post<string[]>(`updatePassport`, passportUpdateModelStrictDto);
  }

  public updatePassportProgram(
    passportProgramUpdateModelStrictDTO: $models.IPassportProgramUpdateModelStrictDTO
  ): Observable<void> {
    return this.post<void>(
      `updatePassportProgram`,
      passportProgramUpdateModelStrictDTO
    );
  }

  public search(
    passportSearchModelStrictDTO: $models.IPassportSearchModelStrictDTO
  ): Observable<$models.PassportCardProjectionDTO[]> {
    return this.post<$models.IPassportCardProjectionDTO[]>(
      `search`,
      passportSearchModelStrictDTO
    ).pipe(mapCollection($models.PassportCardProjectionDTO));
  }

  public getFilterData(): Observable<$models.PassportFilterDataModelRichDTO> {
    return this.post<$models.IPassportFilterDataModelRichDTO>(
      `getFilterData`
    ).pipe(mapSingle($models.PassportFilterDataModelRichDTO));
  }

  public archive(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<void> {
    return this.post<void>(`archive`, passportIdentityDTO);
  }

  public canBeArchived(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<boolean> {
    return this.post<boolean>(`canBeArchived`, passportIdentityDTO);
  }

  public getPassportOverview(
    passportId: string
  ): Observable<$models.PassportOverviewProjectionDTO> {
    return this.post<$models.IPassportOverviewProjectionDTO>(
      `getPassportOverview?passportId=${encodeURIComponent(passportId)}`
    ).pipe(mapSingle($models.PassportOverviewProjectionDTO));
  }

  public getCaseStudiesSummary(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<$models.CaseStudiesSummaryProjectionDTO> {
    return this.post<$models.ICaseStudiesSummaryProjectionDTO>(
      `getCaseStudiesSummary`,
      passportIdentityDTO
    ).pipe(mapSingle($models.CaseStudiesSummaryProjectionDTO));
  }

  public getCustomerManagement(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<$models.CustomerManagementProjectionDTO> {
    return this.post<$models.ICustomerManagementProjectionDTO>(
      `getCustomerManagement`,
      passportIdentityDTO
    ).pipe(mapSingle($models.CustomerManagementProjectionDTO));
  }

  public getLdsProjectIdentity(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<$models.LdsProjectIdentityProjectionDTO> {
    return this.post<$models.ILdsProjectIdentityProjectionDTO>(
      `getLdsProjectIdentity`,
      passportIdentityDTO
    ).pipe(mapSingle($models.LdsProjectIdentityProjectionDTO));
  }

  public getLuxoftManagement(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<$models.LuxoftManagementProjectionDTO> {
    return this.post<$models.ILuxoftManagementProjectionDTO>(
      `getLuxoftManagement`,
      passportIdentityDTO
    ).pipe(mapSingle($models.LuxoftManagementProjectionDTO));
  }

  public getPassportSkills(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<$models.PassportSkillsProjectionDTO> {
    return this.post<$models.IPassportSkillsProjectionDTO>(
      `getPassportSkills`,
      passportIdentityDTO
    ).pipe(mapSingle($models.PassportSkillsProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class PermissionService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Permission', http);
  }

  public getStartupOperations(): Observable<
    $models.ProjectPassportSecurityOperationCode[]
  > {
    return this.post<$models.ProjectPassportSecurityOperationCode[]>(
      `getStartupOperations`
    );
  }

  public getPassportOperations(
    passportId: string
  ): Observable<$models.ProjectPassportSecurityOperationCode[]> {
    return this.post<$models.ProjectPassportSecurityOperationCode[]>(
      `getPassportOperations?passportId=${encodeURIComponent(passportId)}`
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Photo', http);
  }
}

@Injectable({
  providedIn: 'root'
})
export class PostmortemService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Postmortem', http);
  }

  public updatePostmortem(
    postmortemUpdateModelStrictDto: $models.IPostmortemUpdateModelStrictDto
  ): Observable<void> {
    return this.post<void>(`updatePostmortem`, postmortemUpdateModelStrictDto);
  }

  public getPostmortemOverview(
    postmortemIdentityDTO: $models.IPostmortemIdentityDTO
  ): Observable<$models.PostmortemOverviewProjectionDTO> {
    return this.post<$models.IPostmortemOverviewProjectionDTO>(
      `getPostmortemOverview`,
      postmortemIdentityDTO
    ).pipe(mapSingle($models.PostmortemOverviewProjectionDTO));
  }

  public getSearchPostmortemsByPassportFilter(
    passportFilterStrictDTO: $models.IPassportFilterStrictDTO
  ): Observable<$models.SearchPostmortemProjectionDTO[]> {
    return this.post<$models.ISearchPostmortemProjectionDTO[]>(
      `getSearchPostmortemsByPassportFilter`,
      passportFilterStrictDTO
    ).pipe(mapCollection($models.SearchPostmortemProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectCategorizationService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/ProjectCategorization', http);
  }

  public update(
    projectCategorizationStrictDTO: $models.IProjectCategorizationStrictDTO
  ): Observable<void> {
    return this.post<void>(`update`, projectCategorizationStrictDTO);
  }

  public getProjectCategorizationOverview(
    projectCategorizationIdentityDTO: $models.IProjectCategorizationIdentityDTO
  ): Observable<$models.ProjectCategorizationOverviewProjectionDTO> {
    return this.post<$models.IProjectCategorizationOverviewProjectionDTO>(
      `getProjectCategorizationOverview`,
      projectCategorizationIdentityDTO
    ).pipe(mapSingle($models.ProjectCategorizationOverviewProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectEnvironmentService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/ProjectEnvironment', http);
  }

  public link(
    passportIdentityDTO: $models.IPassportIdentityDTO,
    code: string
  ): Observable<void> {
    return this.post<void>(
      `link?code=${encodeURIComponent(code)}`,
      passportIdentityDTO
    );
  }

  public linkLegacy(
    projectEnvironmentUpdateModelStrictDTO: $models.IProjectEnvironmentUpdateModelStrictDTO
  ): Observable<void> {
    return this.post<void>(
      `linkLegacy`,
      projectEnvironmentUpdateModelStrictDTO
    );
  }

  public linkLegacyAfterCreation(
    projectEnvironmentUpdateModelStrictDTO: $models.IProjectEnvironmentUpdateModelStrictDTO
  ): Observable<void> {
    return this.post<void>(
      `linkLegacyAfterCreation`,
      projectEnvironmentUpdateModelStrictDTO
    );
  }

  public requestLegacy(
    projectEnvironmentRequestModelStrictDTO: $models.IProjectEnvironmentRequestModelStrictDTO
  ): Observable<string> {
    return this.post<string>(
      `requestLegacy`,
      projectEnvironmentRequestModelStrictDTO
    );
  }

  public requestNew(
    projectEnvironmentRequestModelStrictDTO: $models.IProjectEnvironmentRequestModelStrictDTO
  ): Observable<string> {
    return this.post<string>(
      `requestNew`,
      projectEnvironmentRequestModelStrictDTO
    );
  }

  public addApplications(
    projectEnvironmentExtendModelStrictDTO: $models.IProjectEnvironmentExtendModelStrictDTO
  ): Observable<string> {
    return this.post<string>(
      `addApplications`,
      projectEnvironmentExtendModelStrictDTO
    );
  }

  public unlink(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<void> {
    return this.post<void>(`unlink`, passportIdentityDTO);
  }

  public getAllEnvironments(): Observable<
    $models.ProjectEnvironmentDetailsDTO[]
  > {
    return this.get<$models.IProjectEnvironmentDetailsDTO[]>(
      `getAllEnvironments`
    ).pipe(mapCollection($models.ProjectEnvironmentDetailsDTO));
  }

  public getProjectEnvironmentOverview(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<$models.ProjectEnvironmentOverviewProjectionDTO> {
    return this.post<$models.IProjectEnvironmentOverviewProjectionDTO>(
      `getProjectEnvironmentOverview`,
      passportIdentityDTO
    ).pipe(mapSingle($models.ProjectEnvironmentOverviewProjectionDTO));
  }

  public isEnvironmentExist(code: string): Observable<boolean> {
    return this.post<boolean>(
      `isEnvironmentExist?code=${encodeURIComponent(code)}`
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectMilestoneService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/ProjectMilestone', http);
  }

  public createProjectMilestone(
    milestoneCreateModelStrictDTO: $models.IMilestoneCreateModelStrictDTO
  ): Observable<void> {
    return this.post<void>(
      `createProjectMilestone`,
      milestoneCreateModelStrictDTO
    );
  }

  public updateProjectMilestone(
    projectMilestoneStrictDTO: $models.IProjectMilestoneStrictDTO
  ): Observable<void> {
    return this.post<void>(`updateProjectMilestone`, projectMilestoneStrictDTO);
  }

  public deleteMilestone(
    projectMilestoneIdentityDTO: $models.IProjectMilestoneIdentityDTO
  ): Observable<void> {
    return this.post<void>(`deleteMilestone`, projectMilestoneIdentityDTO);
  }

  public getMilestoneOverviewsByMilestonesFilter(
    milestonesFilterModelStrictDTO: $models.IMilestonesFilterModelStrictDTO
  ): Observable<$models.MilestoneOverviewProjectionDTO[]> {
    return this.post<$models.IMilestoneOverviewProjectionDTO[]>(
      `getMilestoneOverviewsByMilestonesFilter`,
      milestonesFilterModelStrictDTO
    ).pipe(mapCollection($models.MilestoneOverviewProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class QualityApproachService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/QualityApproach', http);
  }

  public getSearchQualityApproachsByQualityApproachFilter(
    qualityApproachFilterStrictDTO: $models.IQualityApproachFilterStrictDTO
  ): Observable<$models.SearchQualityApproachProjectionDTO[]> {
    return this.post<$models.ISearchQualityApproachProjectionDTO[]>(
      `getSearchQualityApproachsByQualityApproachFilter`,
      qualityApproachFilterStrictDTO
    ).pipe(mapCollection($models.SearchQualityApproachProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class ReportsService extends DownloadFileService {
  constructor(http: HttpClient) {
    super('/api/v1/Reports', http);
  }

  public downloadPostmortemReport(
    postmortemIdentityDTO: $models.IPostmortemIdentityDTO,
    saveAs?: string
  ): Promise<IDownloadResult> {
    return this.downloadFile(
      `downloadPostmortemReport`,
      `post`,
      postmortemIdentityDTO,
      saveAs
    );
  }

  public downloadPassportSearchReport(
    passportSearchReportModelStrictDTO: $models.IPassportSearchReportModelStrictDTO,
    saveAs?: string
  ): Promise<IDownloadResult> {
    return this.downloadFile(
      `downloadPassportSearchReport`,
      `post`,
      passportSearchReportModelStrictDTO,
      saveAs
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class SeProjectService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/SeProject', http);
  }

  public getLinkedSeProjects(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<$models.LinkedSeProjectModelSimpleDTO[]> {
    return this.post<$models.ILinkedSeProjectModelSimpleDTO[]>(
      `getLinkedSeProjects`,
      passportIdentityDTO
    ).pipe(mapCollection($models.LinkedSeProjectModelSimpleDTO));
  }

  public getSearchSeProjectsBySeProjectFilter(
    seProjectFilterStrictDTO: $models.ISeProjectFilterStrictDTO
  ): Observable<$models.SearchSeProjectProjectionDTO[]> {
    return this.post<$models.ISearchSeProjectProjectionDTO[]>(
      `getSearchSeProjectsBySeProjectFilter`,
      seProjectFilterStrictDTO
    ).pipe(mapCollection($models.SearchSeProjectProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class SkillService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Skill', http);
  }

  public getSearchSkillsBySkillFilter(
    skillFilterStrictDTO: $models.ISkillFilterStrictDTO
  ): Observable<$models.SearchSkillProjectionDTO[]> {
    return this.post<$models.ISearchSkillProjectionDTO[]>(
      `getSearchSkillsBySkillFilter`,
      skillFilterStrictDTO
    ).pipe(mapCollection($models.SearchSkillProjectionDTO));
  }
}

@Injectable({
  providedIn: 'root'
})
export class StartupService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Startup', http);
  }

  public getStartupInfo(): Observable<$models.InitDto> {
    return this.get<$models.IInitDto>(`getStartupInfo`).pipe(
      mapSingle($models.InitDto)
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class StatisticsService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Statistics', http);
  }

  public trackEvent(
    statisticsDataDto: $models.IStatisticsDataDto
  ): Observable<void> {
    return this.post<void>(`trackEvent`, statisticsDataDto);
  }
}

@Injectable({
  providedIn: 'root'
})
export class TasksService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Tasks', http);
  }

  public reassign(
    taskUpdateModelStrictDto: $models.ITaskUpdateModelStrictDto
  ): Observable<void> {
    return this.post<void>(`reassign`, taskUpdateModelStrictDto);
  }

  public getTasks(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<$models.TaskModel[]> {
    return this.post<$models.ITaskModel[]>(
      `getTasks`,
      passportIdentityDTO
    ).pipe(mapCollection($models.TaskModel));
  }

  public executeTask(
    taskExecuteModelStrictDTO: $models.ITaskExecuteModelStrictDTO
  ): Observable<void> {
    return this.post<void>(`executeTask`, taskExecuteModelStrictDTO);
  }
}

@Injectable({
  providedIn: 'root'
})
export class TeamService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('/api/v1/Team', http);
  }

  public getTeamInfo(
    passportIdentityDTO: $models.IPassportIdentityDTO
  ): Observable<$models.TeamModelRichDTO> {
    return this.post<$models.ITeamModelRichDTO>(
      `getTeamInfo`,
      passportIdentityDTO
    ).pipe(mapSingle($models.TeamModelRichDTO));
  }

  public getEmployeesByLocation(
    passportLocationDTO: $models.IPassportLocationDTO
  ): Observable<$models.EmployeeByLocationModel[]> {
    return this.post<$models.IEmployeeByLocationModel[]>(
      `getEmployeesByLocation`,
      passportLocationDTO
    ).pipe(mapCollection($models.EmployeeByLocationModel));
  }

  public getEmployeesByRole(
    passportRoleDTO: $models.IPassportRoleDTO
  ): Observable<$models.EmployeeByRoleModelRichDTO[]> {
    return this.post<$models.IEmployeeByRoleModelRichDTO[]>(
      `getEmployeesByRole`,
      passportRoleDTO
    ).pipe(mapCollection($models.EmployeeByRoleModelRichDTO));
  }
}
