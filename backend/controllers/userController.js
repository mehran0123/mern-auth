import asyncHandler from 'express-async-handler'

/**
 * @desc   Auth user/set token
 * 
 * route Post/api/users/auth
 * 
 * @access Public
 * 
 */
const authUser = asyncHandler( async (req,res) => {
res.status(200).json({message:"Auth User"})
});

/**
 * @desc   Register new user
 * 
 * route Post/api/users
 * 
 * @access Public
 * 
 */
const registerUser = asyncHandler( async (req,res) => {
    res.status(200).json({message:"Register New User"})
    });
    

 /**
 * @desc   Logout User
 * 
 * route Post/api/users/logout
 * 
 * @access Public
 * 
 */
const logoutUser = asyncHandler( async (req,res) => {
    res.status(200).json({message:"Logout User"})
    });

 /**
 * @desc   Get User Profile
 * 
 * route Get/api/users/profile
 * 
 * @access Private
 * 
 */
 const getUserProfile = asyncHandler( async (req,res) => {
    res.status(200).json({message:"Get User Profile"})
    });


 /**
 * @desc   Update User Profile
 * 
 * route  PUT /api/users/profile
 * 
 * @access Private
 * 
 */
 const updateUserProfile = asyncHandler( async (req,res) => {
    res.status(200).json({message:"Update User Profile"})
    });
    
    

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile

};