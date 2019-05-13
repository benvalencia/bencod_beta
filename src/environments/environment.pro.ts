export const environment = {
    production: true,
    api: {
        url: 'https://api.workdeck.com',
        endpoints: {
            login: 'auth/login', // newbe
            google: 'auth/google', // newbe
            microsoft: 'auth/microsoft', // newbe
            forgotPassword: 'commands/forgot-password', // newbe
            resetPassword: 'auth/reset', // newbe
            freeTime: 'func/freeTime',
            hoursByProject: 'func/hoursByProject',
            goToHtml: 'core/goToHtml',
            user: {
                get: 'queries/me', // newbe
                list: 'queries/users', // newbe
            },
            dashboard: {
                list: 'core/dashboardItem/list',
                markNoticeAsRead: 'func/deleteNewItem',
                whoIsWhere: 'queries/who-is-where',
                departments: 'queries/departments', // newbe
            },
            travel: {
                list: 'core/travel/list'
            },
            project: {
                list: 'core/project/list'
            },
            projectSummary: {
                list: 'core/projectSummary/list'
            },
            activity: {
                list: 'core/chapterSummary/list',
            },
            event: {
                insert: 'core/event/insert',
                list: 'core/event/list',
                select: 'core/event/select',
                state: 'core/event/state',
                update: 'core/event/update',
                delete: 'core/event/delete'
            },
            leave: {
                delete: 'core/leaveRequest/delete',
                insert: 'core/leaveRequest/insert',
                list: 'core/leaveRequest/list',
                state: 'core/leaveRequest/state',
            },
            leaveType: {
                list: 'core/leaveType/list',
            },
            office: {
                select: 'core/office/select',
            },
            task: {
                insert: 'core/task/insert',
                list: 'core/task/list',
                update: 'core/task/update',
            },
            taskCheck: {
                insert: 'core/taskCheck/insert',
            },
            taskStage: {
                insert: 'core/taskStage/insert',
                list: 'core/taskStage/list',
            },
            staffCategory: {
                list: 'core/staffCategory/list'
            }
        }
    },
    calendar: {
        intervalDuration: 30,
        firstDayOfWeek: 1, // 0 = Sun, 1 = Mon, 2 = Tue, etc.
        colors: ['#1bb46a', '#23d905', '#ffca33', '#fe9e09', '#ff356a', '#cb006a', '#9654ff', '#6900d2', '#00c8cc', '#0763df', '#009aff', '#3a3c51'],
        defaultEventColor: '#009aff'
    },
    oauth: {
        environment: 'live',
        // tslint:disable-next-line:max-line-length
        microsoftUri: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=2f915955-092f-4cd1-bf90-f1928a44542c&response_type=code&redirect_uri=https://pre.sapenta.com/login/microsoft&scope=offline_access user.read files.read files.read.all sites.read.all',
        // tslint:disable-next-line:max-line-length
        googleUri: 'https://accounts.google.com/o/oauth2/auth?response_type=code&redirect_uri=https%3A%2F%2Fpre.sapenta.com%2Flogin%2Fgoogle&client_id=709090450449-8a0bq5radbg9tpj95p18rnpgeksh5uo5.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&access_type=offline&approval_prompt=force'
    },
    supportUrl: 'http://www.sapenta.com/support',
    newsUrl: 'http://www.sapenta.com/blog',
    loginSlideshow: {
        interval: 5000,
        images: [
            '/assets/images/login/001.jpg',
            '/assets/images/login/002.jpg',
            '/assets/images/login/003.jpg'
        ]
    },
    images: {
        general: {
            closeWhite: '/assets/images/general/close-white.svg',
            add: '/assets/images/general/add.svg',
            arrowDown: '/assets/images/general/arrow-down.svg',
            logo: '/assets/images/general/logo.svg',
            tick: '/assets/images/general/tick.svg'
        },
        fileUpload: {
            add: '/assets/images/file-upload/add.svg',
            remove: '/assets/images/file-upload/remove.svg',
        },
        calendar: {
            close: '/assets/images/calendar/close.svg',
            openDetails: '/assets/images/calendar/open-details.svg',
            task: '/assets/images/calendar/task.svg',
            taskDetails: '/assets/images/calendar/task-details.svg',
            taskMove: '/assets/images/calendar/task-move.svg',
            noTasks: '/assets/images/calendar/no-tasks.svg',
            trash: '/assets/images/general/trash.svg',
            arrows: {
                left: '/assets/images/calendar/left.svg',
                right: '/assets/images/calendar/right.svg'
            },
            teamSelected: '/assets/images/calendar/team-selected.svg',
            denied: '/assets/images/calendar/status-denied.svg',
            approved: '/assets/images/calendar/status-approved.svg',
            pending: '/assets/images/calendar/status-pending.svg',
            ownerHover: '/assets/images/calendar/owner-outline.svg',
            ownerSelect: '/assets/images/calendar/owner-fill.svg',
            invitationAccepted: '/assets/images/calendar/invitation-accepted.svg',
            invitationDenied: '/assets/images/calendar/invitation-denied.svg',
            removeGuest: '/assets/images/calendar/remove-guest.svg',
            flags: {
                green: '/assets/images/calendar/flags/flag_green.svg',
                yellow: '/assets/images/calendar/flags/flag_yellow.svg',
                red: '/assets/images/calendar/flags/flag_red.svg',
                solved: '/assets/images/calendar/flags/flag_solved.svg',
                greenSolved: '/assets/images/calendar/flags/flag_green_solved.svg',
                yellowSolved: '/assets/images/calendar/flags/flag_yellow_solved.svg',
                redSolved: '/assets/images/calendar/flags/flag_red_solved.svg',
                delete: '/assets/images/calendar/flags/delete.svg',
                edit: '/assets/images/calendar/flags/edit.svg',
                add: '/assets/images/general/add.svg',
                options: '/assets/images/general/options.svg',
            }
        },
        dashboard: {
            noticeBoard: {
                expense: '/assets/images/dashboard/new-expense.svg',
                travel: '/assets/images/dashboard/new-travel.svg',
                leave: '/assets/images/dashboard/new-leave.svg',
                purchase: '/assets/images/dashboard/new-purchase.svg',
                travelExpense: '/assets/images/dashboard/new-travel-expense.svg',
                task: '/assets/images/dashboard/new-task.svg',
                planner: '/assets/images/dashboard/new-planner.svg',
                comment: '/assets/images/dashboard/new-comment.svg',
                timesheet: '/assets/images/dashboard/new-timesheet.svg',
                empty: '/assets/images/dashboard/no-new.svg',
                close: '/assets/images/dashboard/close.svg'
            },
            pendingTasks: {
                expense: '/assets/images/dashboard/pending-expense.svg',
                travel: '/assets/images/dashboard/pending-travel.svg',
                leave: '/assets/images/dashboard/pending-leave.svg',
                purchase: '/assets/images/dashboard/pending-purchase.svg',
                travelExpense: '/assets/images/dashboard/pending-travel-expense.svg',
                task: '/assets/images/dashboard/pending-task.svg',
                planner: '/assets/images/dashboard/pending-planner.svg',
                comment: '/assets/images/dashboard/pending-comment.svg',
                timesheet: '/assets/images/dashboard/pending-timesheet.svg',
                empty: '/assets/images/dashboard/no-pending.svg',
                open: '/assets/images/dashboard/open.svg'
            },
            nextTrip: {
                inactive: {
                    flight: '/assets/images/dashboard/travel-flight.svg',
                    car: '/assets/images/dashboard/travel-car.svg',
                    hotel: '/assets/images/dashboard/travel-hotel.svg',
                    train: '/assets/images/dashboard/travel-train.svg',
                },
                active: {
                    flight: '/assets/images/dashboard/travel-flight-active.svg',
                    car: '/assets/images/dashboard/travel-car-active.svg',
                    hotel: '/assets/images/dashboard/travel-hotel-active.svg',
                    train: '/assets/images/dashboard/travel-train-active.svg',
                },
                noData: {
                    flight: '/assets/images/dashboard/no-data-flight.svg',
                    car: '/assets/images/dashboard/no-data-car.svg',
                    hotel: '/assets/images/dashboard/no-data-hotel.svg',
                    train: '/assets/images/dashboard/no-data-train.svg',
                },
                arrows: {
                    return: '/assets/images/dashboard/arrow-return-trip.svg',
                    oneWay: '/assets/images/dashboard/arrow-one-way.svg',
                    left: '/assets/images/dashboard/arrow-left.svg',
                    right: '/assets/images/dashboard/arrow-right.svg'
                },
                location: '/assets/images/dashboard/location.svg'
            },
            teamLeave: {
                empty: '/assets/images/dashboard/no-data-team-leave.svg'
            }
        },
        leave: {
            approve: '/assets/images/leave/approve.svg',
            trash: '/assets/images/general/trash.svg',
            deny: '/assets/images/leave/deny.svg',
            open: '/assets/images/general/arrow-right.svg',
        },
        languages: {
            en: '/assets/images/languages/en.png',
            es: '/assets/images/languages/es.png',
            ca: '/assets/images/languages/ca.png'
        }
    }
};
