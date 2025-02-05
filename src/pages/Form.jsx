import 'bootstrap/dist/css/bootstrap.min.css'

export default function Form() {
    return (
        <>
            <form action="">
                <div className="justify-centent-center xs-12 md-8 lg-6">
                    <div className="form-header bg-primary">
                        Registration Form
                    </div>
                    <div className="form">
                        <div class="mb-3">
                            <label for="FirstName" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="FirstName" required/>
                        </div>
                        <div class="mb-3">
                            <label for="MiddleName" class="form-label" >Middle Name</label>
                            <input type="text" class="form-control" id="FirstName"/>
                        </div>
                        <div class="mb-3">
                            <label for="FirstName" class="form-label" placeholder="Jhon">First Name</label>
                            <input type="text" class="form-control" id="FirstName" placeholder="Jhon" required/>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}