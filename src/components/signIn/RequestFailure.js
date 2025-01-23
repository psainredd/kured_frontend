import OnHiatusCard from "../common/OnHiatusCard";

export default function RequestFailure() {
    return (
        <OnHiatusCard isSorry={true} 
                message={"Something went wrong. Please try again in sometime."}
                linkBackLink={"/signIn"}
                linkBackText={"Go back to SignIn Page"}
            />
    )
}